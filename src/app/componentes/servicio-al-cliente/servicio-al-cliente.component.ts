import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-servicio-al-cliente',
  templateUrl: './servicio-al-cliente.component.html',
  styleUrls: ['./servicio-al-cliente.component.scss']

})
export class ServicioAlClienteComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(30)]],
    telefono: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)]],
    correo: ['', [Validators.required, Validators.email]],
    dirigidoA: ['', Validators.required],
    mensaje: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(200)]]
  });


  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoEsValido (field: string) {
    return !this.miFormulario.get(field).valid 
    && this.miFormulario.get(field).touched;
  }
  

  guardar(){
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);

  }


}
