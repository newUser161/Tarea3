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
    telefono: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(9), Validators.maxLength(9)]],
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

  // VALIDACIONES EXTRA
  
  // validar si se ingresan o no 3 palabras en el campo Nombre
  validarNombre(){
    let nombre = this.miFormulario.get('nombre').value;
    let palabras = nombre.split(' ');
    if(palabras.length < 3){
      return true;
    }
    return false;
  }

    // funcion para mostrar cuantos caracteres quedan para ingresar en el campo Mensaje
    restanteMensaje(){
      return 200 - this.miFormulario.get('mensaje').value.length;
    } 
  

  guardar(){
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    alert('Mensaje enviado correctamente');
    this.miFormulario.reset();
  }


}
