/*Utilizando la api de Pokemons https://pokeapi.co/ y usando sólo async/await:*/
/*Obtener un Pokemon de manera aleatoria (fetch)*/
/*Tras obtener dicho Pokémon*/
/*Obten su imágen correspondiente*/
/*Obtener nombre del Pokémon*/
/*Dibujar nombre e imágen del Pokémon en el DOM*/
//primero  Creamos los elementos del html

const boton=document.createElement("button")
document.body.appendChild(boton)
boton.addEventListener("click",playPokemon)
boton.textContent="Buscar"
const nombre=document.createElement("h3")
document.body.appendChild(nombre)

//Declaramos variables
const urlPokemon= ("https://pokeapi.co/api/v2/pokemon/")
let fotoPokemon;
let nombrePokemon;
const imagen= document.getElementById("imagenPok");
//Obtenemos el JSON del pokemon
async function getPokemon(){
    let numpokemon= Math.floor(Math.random()* (899-1)) //Hacer  random la imagen y el nombre!! 
    let response= await fetch (`https://pokeapi.co/api/v2/pokemon/${numpokemon}`)
    .then(res=>res.json()) 
    .then(response => { 
        console.log("response.sprites.back_default")//.sprites va directamente al lugar del Json donde estan las imagenes
        nombrePokemon=response.name;// para acceder a cualquier elemento del Jason .loquesea
        console.log(nombrePokemon)
        fotoPokemon=response.sprites.back_default;
    })
    .catch(error=>console.log(error));
}
// Imprime el nombre del pokemon en el HTML
async function getNamePokemon(){
    nombre.innerText=await nombrePokemon;
}
//Pone la imagen obtenida arriba a la imagen del html creada vacia
async function getFotoPokemon(){
        imagen.src=await fotoPokemon;
        console.log(fotoPokemon)
}
//Funcion que llama a las dos funciones creadas 
async function playPokemon(){
    await getPokemon()
    await getFotoPokemon()
    await getNamePokemon()
}


/*OJO!! Te tocará estudiar cómo funciona la API de Pokémon para encontrar la imágen. Puede que /*tengas que hacer más de un fetch!! (depende de la ruta de consulta que uses)*/