const ligada = document.getElementById("ligada")
const desligada = document.getElementById("desligada")
let lampada = document.getElementById("lampada")

function LampadaLigada() {
    if (!estaQuebrada()) {
        lampada.src = "img/ligada.jpg"
    }
}
function LampadaDesligada() {
    if (!estaQuebrada()) {
        lampada.src = "img/desligada.jpg"
    }
}
function LampadaQuebrada() {
    lampada.src = "img/quebrada.jpg"
}
function estaQuebrada() {
    return lampada.src.indexOf("quebrada") > -1
}

ligada.addEventListener("click", LampadaLigada)
desligada.addEventListener("click", LampadaDesligada)
lampada.addEventListener("mouseover", LampadaLigada)
lampada.addEventListener("mouseleave", LampadaDesligada)
lampada.addEventListener("dblclick", LampadaQuebrada)


