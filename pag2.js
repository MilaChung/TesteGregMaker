let entrada1 = document.getElementById("arquivo1");
entrada1.addEventListener("change", tocar1);

let entrada2 = document.getElementById("arquivo2");
entrada2.addEventListener("change", tocar2);

let img1 = document.getElementById("img1");
img1.addEventListener("touchstart", tocouTecla1);

let img2 = document.getElementById("img2");
img2.addEventListener("touchstart", tocouTecla2);
  
function draw(){
    if(keyIsDown(UP_ARROW)){
        document.getElementById("audio1").play();
    }
    if(keyIsDown(DOWN_ARROW)){
        document.getElementById("audio2").play();
    }
}

function tocar1(evento) {
    let musicas = evento.target.files;
    
    let url = URL.createObjectURL(musicas[0]);
    document.getElementById("audio1").src = url;
}

function audio1(){
    document.getElementById("audio1").play();
}

function tocar2(evento) {
    let musicas = evento.target.files;
    
    let url = URL.createObjectURL(musicas[0]);
    document.getElementById("audio2").src = url;
}

function audio2(){
    document.getElementById("audio2").play();
}

function tocouTecla1(){
    console.log("tocou tecla1");
    document.getElementById("audio1").play();
}

function tocouTecla2(){
    console.log("tocou tecla2");
    document.getElementById("audio2").play();
}

function voltar() {
    window.location = "index.html";
}