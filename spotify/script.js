const songName = document.querySelector("#songName");
const bandName = document.querySelector("#bandName");
const music = document.querySelector("#music");
const img = document.querySelector("#img");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const currentProgress = document.querySelector("#current-progress");
const progressContainer = document.querySelector("#progress-container");
const shuffle = document.querySelector(".shuffle");
const repeat = document.querySelector(".repeat");
let musicTime = document.querySelector("#music-time");
let totalTime = document.querySelector("#total-time");

let shuffleOn = false;
let repeatOn = false;


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

function initializeSong() {
    img.src = `img/${playList[index].file}.png`
    music.src = `music/${playList[index].file}.mp3`
    songName.innerText = `${playList[index].songName}`
    bandName.innerText = `${playList[index].artist}`
}

initializeSong();

shuffle.addEventListener("click", function () {
    index = Math.floor(Math.random() * 5);
    initializeSong();
    music.play();

})

previous.addEventListener("click", function () {
    if (index == 0) {
        index = playList.length - 1;
    }
    else {
        index -= 1
    }
    initializeSong();
    music.play();
})

play.addEventListener("click", function () {
    music.play();
    pause.classList.toggle('ativo')
    play.classList.toggle('ativo')
})

pause.addEventListener("click", function () {
    music.pause();
    pause.classList.toggle('ativo')
    play.classList.toggle('ativo')
})


next.addEventListener("click", function () {
    audio[0] += 1;
    music = audio;
    music.play();
})

function nextMusic() {
    if (index === playList.length - 1) {
        index = 0;
    } else {
        index += 1;
    }
    initializeSong();
    music.play();
}

repeat.addEventListener("click", function () {
    if(repeatOn === false){
        repeatOn = true;
        repeat.classList.add('button-active')
    }else{
        repeat = false
        repeat.classList.remove('button-active')
    }

})

music.addEventListener("ended", function nextOrRepeat() {
    if(repeatOn === false){
        nextMusic();
    } else{
        music.play();
    }
})

music.addEventListener("timeupdate", function updateProgressBarra() {
    music.currentTime
    music.duration
    const barWidth = (music.currentTime / music.duration) * 100; // calculo para saber o quanto ja se escutou da music
    currentProgress.style.setProperty('--progress', ` ${barWidth}%`);

})

function toHHMMSS(originalNumber){
    let hours = Math.floor(originalNumber / 3600)
    let min = Math.floor((originalNumber - hours * 3600) / 60)
    let secs = Math.floor(originalNumber - hours * 3600 - min * 60)
    
    return `${hours.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

function updateCurrentTime (){   
    musicTime.innerHTML = toHHMMSS(music.currentTime)
}

function upadateTotalTime (){
    totalTime.innerHTML = toHHMMSS(music.duration)
}

progressContainer.addEventListener("click", function jumpTo(event) {
    const width = progressContainer.clientWidth; // informa o tamanho de um elemento
    const clickPosition = event.offsetX; // informa  onde foi a posição do clique na horizonatal, dando valor dessa posição em pixels
    const jumpToTime = (clickPosition / width) * music.duration;
    music.currentTime = jumpToTime;
})


next.addEventListener("click", nextMusic);
music.addEventListener("loademetadata", upadateTotalTime)
music.addEventListener("timeupdate", upadateTotalTime)
music.addEventListener("timeupdate", updateCurrentTime)
