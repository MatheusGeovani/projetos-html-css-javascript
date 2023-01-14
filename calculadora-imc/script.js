const nome = document.getElementById("nome")
const altura = document.getElementById("altura")
const peso = document.getElementById("peso")
const button = document.querySelector(".button")
const resultado = document.querySelector(".resultado")


button.addEventListener("click", function () {
    const alturaValue = altura.value
    const pesoValue = peso.value
    const nomeValue = nome.value
    let resultadoIMC = pesoValue / (alturaValue * alturaValue)

    if (nomeValue === "") {
        alert("Porfavor informe seu nome")
    }
    else if (alturaValue === "") {
        alert("Porfavor informe sua altura!")
    }
    else if (pesoValue === "") {
        alert("Porfavor informe seu peso!")
    }
    else {
        if (resultadoIMC < 18.6) {
            resultado.style.color = "#fff"
            resultado.style.fontSize = "30px"
            resultado.innerHTML = resultadoIMC.toFixed(1) + " MAGREZA"
        } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
            resultado.style.color = "#fff"
            resultado.style.fontSize = "30px"
            resultado.innerHTML = resultadoIMC.toFixed(1) + " NORMAL"
        } else if (resultadoIMC >= 25.0 && resultadoIMC <= 29.9) {
            resultado.style.color = "#fff"
            resultado.style.fontSize = "30px"
            resultado.innerHTML = resultadoIMC.toFixed(1) + " SOBREPESO"
        } else if (resultadoIMC >= 30.0 && resultadoIMC <= 39.9) {
            resultado.style.color = "#fff"
            resultado.style.fontSize = "30px"
            resultado.innerHTML = resultadoIMC.toFixed(1) + " OBESIDADE"
        } else {
            resultado.style.color = "#fff"
            resultado.style.fontSize = "30px"
            resultado.innerHTML = resultadoIMC.toFixed(1) + " OBESIDADE GRAVE"
        }
        nome = ""
        altura = ""
        peso = ""
    }
});