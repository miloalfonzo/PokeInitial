function play() {
    var audio = document.getElementById("audio");
    audio.volume = 0.1;
    audio.play();
}

var eleccion = prompt('Profesor Oak: Es hora de elegir a tu compañero. Elige entre el 1, 2 y 3');

var imagenes = ["/img/charman.png", "/img/bulba.png", "/img/squirtle.png", "/img/pika.png"];


const buttonSwitch = document.querySelector("#switch");

buttonSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    buttonSwitch.classList.toggle("active");
    document.getElementById("img1").style.cursor = "pointer";
    switch(eleccion){
        case "1":
             document.getElementById("img1").src = imagenes[1];
        break;
        case "2":
            document.getElementById("img1").src = imagenes[0];
        break;
        case "3":
            document.getElementById("img1").src = imagenes[2];
        break;
        case "4":
            document.getElementById("img1").src = imagenes[3];
            break;
        default:
            window.location.reload(false);           
    }  
    
    if (document.body.className == "body"){
    document.getElementById("img1").src = "/img/pokeball.png" ;
} 
})

var whichOne = document.querySelector("#img1");

whichOne.addEventListener("click", () => {
    switch(eleccion){
        case "1":
            var audio = document.getElementById("bulba");
            audio.volume = 0.1;
            audio.play();
            alert("¡Es un Bulbasaur!");
        break;
        case "2":
            var audio = document.getElementById("charman");
            audio.volume = 0.1;
            audio.play();
            alert("¡Es un Charmander!");
        break;
        case "3":
            var audio = document.getElementById("squirtle");
            audio.volume = 0.1;
            audio.play();
            alert("¡Es un Squirtle!");
        break;
        case "4":
            var audio = document.getElementById("pika");
            audio.volume = 0.1;
            audio.play();
            alert("INCREIBLE, ¡Es un Pikachu!");
        break;
    }
})
