function play() {
    var audio = document.getElementById("audio");
    audio.volume = 0.1;
    audio.play();
}

var eleccion = prompt('Profesor Oak: Es hora de elegir a tu compañero. Elige entre el 1, 2 y 3');

var imagenes = ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png", "https://vignette.wikia.nocookie.net/es.pokemon/images/4/43/Bulbasaur.png/revision/latest?cb=20170120032346", "https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c32a.png", "https://vignette.wikia.nocookie.net/es.pokemon/images/7/77/Pikachu.png/revision/latest?cb=20150621181250"];


const buttonSwitch = document.querySelector("#switch");

buttonSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    buttonSwitch.classList.toggle("active");
    switch(eleccion){
        case "1":
             document.getElementById("img1").src = imagenes[0];
        break;
        case "2":
            document.getElementById("img1").src = imagenes[1];
        break;
        case "3":
            document.getElementById("img1").src = imagenes[2];
        break;
        case "25":
            document.getElementById("img1").src = imagenes[3];
        break;
        default:
            window.location.reload(false);           
    }  
    
    if (document.body.className == "body"){
    document.getElementById("img1").src = "https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c31f.png" ;
} 
})

var whichOne = document.querySelector("#img1");

whichOne.addEventListener("click", () => {
    switch(eleccion){
        case "1":
            alert("¡Es un Charmander!");
        break;
        case "2":
            alert("¡Es un Bulbasaur!");
        break;
        case "3":
            alert("¡Es un Squirtle!")
        break;
        case "25":
            alert("INCREIBLE, ¡Es un Pikachu!")
    }
})
