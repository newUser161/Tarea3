export interface Noticia {
    id:number;
    idCategoria:number;
    titulo:string;
    autor:string;
    fecha:string;
    imagen:string;
    resumen:string;
    contenido:string;
}

export let listaNoticias:Array<Noticia> = [
    {
        id:1,
        idCategoria:1,
        titulo:"Noticia 1",
        autor: "Autor 1",
        fecha: Date().toString(),
        imagen: "https://picsum.photos/440/220?random=1",
        resumen: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.",
        contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam."
    },
    {
        id:2,
        idCategoria:2,
        titulo:"Noticia 2",
        autor: "Autor 2",
        fecha: Date().toString(),
        imagen: "https://picsum.photos/440/220?random=2",
        resumen: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.",
        contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam."
    },
    {
        id:3,
        idCategoria:3,
        titulo:"Noticia 3",
        autor: "Autor 3",
        fecha: Date().toString(),
        imagen: "https://picsum.photos/440/220?random=3",
        resumen: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.",
        contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam."
    },
    {
        id:4,
        idCategoria:4,
        titulo:"Noticia 4",
        autor: "Autor 4",
        fecha: Date().toString(),
        imagen: "https://picsum.photos/320/320?random=4",
        resumen: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa.",
        contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam."
    },
    {
        id:5,
        idCategoria:5,
        titulo:"Noticia 5",
        autor: "Autor 5",
        fecha: Date().toString(),
        imagen: "https://picsum.photos/320/320?random=5",
        resumen: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa.",
        contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam."
    },
    {
        id:6,
        idCategoria:6,
        titulo:"Noticia 6",
        autor: "Autor 6",
        fecha: Date().toString(),
        imagen: "https://picsum.photos/320/320?random=6",
        resumen: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa.",
        contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam."
    },
    {
        id:7,
        idCategoria:7,
        titulo:"Noticia 7",
        autor: "Autor 7",
        fecha: Date().toString(),
        imagen: "https://picsum.photos/320/320?random=7",
        resumen: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa.",
        contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam."
    },
    {
        id:8,
        idCategoria:7,
        titulo:"Noticia 8",
        autor: "Autor 8",
        fecha: Date().toString(),
        imagen: "https://picsum.photos/320/320?random=8",
        resumen: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa.",
        contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam."
    },
    {
        id:9,
        idCategoria:7,
        titulo:"Noticia 9",
        autor: "Autor 9",
        fecha: Date().toString(),
        imagen: "https://picsum.photos/320/320?random=9",
        resumen: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa.",
        contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam."
    },
    {
        id:10,
        idCategoria:7,
        titulo:"Noticia 10",
        autor: "Autor 10",
        fecha: Date().toString(),
        imagen: "https://picsum.photos/320/320?random=10",
        resumen: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa.",
        contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque quae repudiandae, facere a cupiditate deserunt molestias ipsa assumenda labore esse unde corrupti saepe, molestiae quasi sapiente praesentium accusamus numquam."
    },

];
