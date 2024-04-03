gatos = [
    {
        name: "Chucky",
        age: 1,
        genre: "F",
        sterilization: "Si",
        nro_Chip: 1222222222222,
        img: "./assets/img/gato1_adopcion.jpeg"
    },
    {
        name: "Cookie",
        age: 1,
        genre: "F",
        sterilization: "Si",
        nro_Chip: 1222222222222,
        img: "./assets/img/gato2_adopcion.png"
    },
    {
        name: "Pelon",
        age: 2,
        genre: "M",
        sterilization: "Si",
        nro_Chip: 1222222222222,
        img: "./assets/img/gato3_adopcion.jpg"        
    }       
]

perros = [
    {
        name: "Lolo",
        age: 0,
        genre: "M",
        sterilization: "Si",
        nro_Chip: 1222222222222,
        img: "./assets/img/perro1_adopcion.jpg"        
    },
    {
        name: "Picila",
        age: 1,
        genre: "F",
        sterilization: "Si",
        nro_Chip: 1222222222222,
        img: "./assets/img/perro2_adopcion.jpeg"           
    },
    {
        name: "Pelos",
        age: 1,
        genre: "M",
        sterilization: "Si",
        nro_Chip: 1222222222222,
        img: "./assets/img/perro3_adopcion.jpg"           
    }       
]
function load_info_cat(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get('name');
    const gato_info = gatos.find((gato) => gato.name == name);
    document.getElementById("name").innerHTML = "Nombre: " +  gato_info.name;
    document.getElementById("img").src = gato_info.img;
    document.getElementById("age").innerHTML = "Edad: " + gato_info.age;
    document.getElementById("genre").innerHTML = "Genero: " + gato_info.genre;
    document.getElementById("sterilization").innerHTML = "Tiene estirilizacion?: " + gato_info.sterilization;
    document.getElementById("nro_chip").innerHTML = "Nro Chip: " + gato_info.nro_Chip;
    document.getElementById("name_inicio").innerHTML = "Inicio-Gato-Info " + gato_info.name;        
}

function load_info_dog(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get('name');
    const perros_info = perros.find((perro) => perro.name == name);
    document.getElementById("name").innerHTML = "Nombre: " + perros_info.name;
    document.getElementById("img").src = perros_info.img;
    document.getElementById("age").innerHTML = "Edad: " +  perros_info.age;
    document.getElementById("genre").innerHTML = "Genero: " +  perros_info.genre;
    document.getElementById("sterilization").innerHTML = "Tiene estirilizacion?: " +  perros_info.sterilization;
    document.getElementById("nro_chip").innerHTML = "Nro Chip: " + perros_info.nro_Chip;
    document.getElementById("name_inicio").innerHTML = "Inicio-Perro-Info " +perros_info.name;
        
}