 const img = document.querySelector("img")
 const red = document.getElementById("vermelho")
 const yellow = document.getElementById("amarelo")
 const green = document.getElementById("verde")
 const automatic = document.getElementById("automatico")
 let stopped

 function vermelho () {
     img.src = "img/1.png"
 }
 function amarelo () {
     img.src = "img/2.png"
 }
 function verde () {
     img.src = "img/3.png"
 }
 function automatico(){
     let i = 1
     stopped = setInterval(function(){
     img.src = `img/${i}.png`
     i++
     if(i > 3){
         i = 1
     }
 }, 1000)
 }

 red.addEventListener("click",vermelho)
 yellow.addEventListener("click",amarelo)
 green.addEventListener("click",verde)
 automatic.addEventListener("click",automatico)

