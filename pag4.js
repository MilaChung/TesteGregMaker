function voltar() {
    window.location = "index.html";
}

let microfone, gravador, arquivoAudio;

function setup() {
  createCanvas(400, 50);
  background(200);
  fill(0);
  text('Ative o microfone e clique com o mouse para começar a gravar', 20, 20);

  // create an audio in
  microfone = new p5.AudioIn();

  // users must manually enable their browser microphone for recording to work properly!
  microfone.start();

  // create a sound recorder
  gravador = new p5.SoundRecorder();

  // connect the mic to the recorder
  gravador.setInput(microfone);

  // create an empty sound file that we will use to playback the recording
  arquivoAudio = new p5.SoundFile();
}

function gravar(){
    if(microfone.enabled){
        gravador.record(arquivoAudio);
        background(255, 0, 0);
        text('Gravando!', 20, 20);
    }
}

function parar(){
    gravador.stop();
    background(0, 255, 0);
    text('Parou a gravação', 20, 20);
}

function tocar(){
    arquivoAudio.play();
    background(0, 255, 0);
    text('Tocando gravação', 20, 20);
}

function salvar(){
    saveSound(arquivoAudio, 'mySound.wav'); 
}
