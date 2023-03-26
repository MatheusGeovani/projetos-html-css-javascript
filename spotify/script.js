const songName = document.querySelector("#songName");
const bandName = document.querySelector("#bandName");
const music = document.querySelector("#music");
const img = document.querySelector("#img");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const currentProgress = document.querySelector("#current-progress");


const Vem_Me_Buscar = {
    songName: 'Vem Me Buscar',
    artist: 'Jefferson e Suellen',
    file: 'Vem_Me_Buscar'
}
const vitoriosoEs = {
    songName: 'Vitorioso Es',
    artist: 'Emi Sousa e André Aquino',
    file: 'Vitorioso_Es'
}
const furiosoOceano = {
    songName: 'Furioso Oceano',
    artist: 'Jhonas Serra',
    file: 'Furioso_Oceano'
}
const podeMorarAqui = {
    songName: 'Pode Morar Aqui',
    artist: 'Theo Rubia',
    file: 'Pode_Morar_Aqui',
}
const rujaoLeao = {
    songName: 'Ruja o Leao',
    artist: 'Talita Catanzaro',
    file: 'Ruja_o_Leao',
}

let playList = [Vem_Me_Buscar, vitoriosoEs, furiosoOceano, podeMorarAqui, rujaoLeao];
let index = 2;

function initializeSong(){
    img.src = `img/${playList[index].file}.png`
    music.src = `music/${playList[index].file}.mp3`
    songName.innerText = `${playList[index].songName}`
    bandName.innerText = `${playList[index].artist}`
}

initializeSong();

previous.addEventListener("click", function (){
    if(index == 0){
        index = playList.length - 1;
    }
    else{
        index -= 1
    }
    initializeSong();
    music.play();
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

next.addEventListener("click", function (){
    if(index === playList.length - 1){
        index = 0;
    }else{
        index += 1;
    }
    initializeSong();
    music.play();
})

music.addEventListener("timeupdate", function updateProgressBarra(){
    music.currentTime
    music.duration
    const barWidth = (music.currentTime / music.duration) * 100; // calculo para saber o quanto ja se escutou da music
    currentProgress.style.setProperty('--progress',` ${barWidth}%`)


})
