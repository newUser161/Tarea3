export interface Categoria {
    id:number;
    nombre:String;    
    color:String;
}

export let listaCategorias:Array<Categoria> = [
    {
        id:1,
        nombre: "Entretenimiento",
        color: "verde"
    },
    {
        id:2,
        nombre: "Mundo",
        color: "azul"
    },
    {
        id:3,
        nombre: "Deporte",
        color: "rojoOscuro"
    },
    {
        id:4,
        nombre: "Economia",
        color: "violeta"
    },
    {
        id:5,
        nombre: "Salud",
        color: "azulOscuro"
    },
    {
        id:6,
        nombre: "Tecnologia",
        color: "rojo"
    },
    {
        id:7,
        nombre: "Otros",
        color: "gris"
    },
];
