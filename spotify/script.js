const songName = document.querySelector("#songName");
const bandName = document.querySelector("#bandName");
let music = document.querySelector("#music");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const back = document.querySelector(".back");
const next = document.querySelector(".next");
let audio = ['Furioso Oceano.mp3','Pode Morar Aqui.mp3','Ruja o Leao.mp3','Vem Me Buscar.mp3','Vitorioso Es.mp3'];

songName.innerHTML = 'Vem Me Buscar';


back.addEventListener("click", function (){

})

play.addEventListener("click", function (){
    music.play();
    pause.classList.toggle('ativo')
    play.classList.toggle('ativo')
})

pause.addEventListener("click", function (){
    music.pause();
    pause.classList.toggle('ativo')
    play.classList.toggle('ativo')
})



next.addEventListener("click", function (){
    audio[0] += 1;
    music = audio;
    music.play()
})

