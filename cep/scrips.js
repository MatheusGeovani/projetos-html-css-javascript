const button = document.querySelector(".button")
const resultado = document.querySelector("#resultado")
const inputCep = document.querySelector("#cep-input")
const cep = inputCep.value

function handKeyPress(event) {
    if(event.key && event.key === "Enter"){
        consultarCEP(event)
    }
}

function consultarCEP(evento) {
    evento.preventDefault()

    const inputCep = document.querySelector("#cep-input")
    const cep = inputCep.value

    fetch(`https://viacep.com.br/ws/${cep}/json/`)

        .then(response => response.json())
        .then(data => {
            resultado.innerHTML = `<p><strong>Bairro</strong>: ${data.bairro}</p>
        <p><strong>Cep</strong>: ${data.cep}</p>
        <p><strong>DDD</strong>: ${data.ddd}</p>
        <p><strong>Localidade</strong>: ${data.localidade}</p>
        <p><strong>Logradouro</strong>: ${data.logradouro}</p>
        <p><strong>UF</strong>: ${data.uf}</p>`
        })
        .catch(error => {
            if(typeof cep === "string"){
                alert("Digite apenas números para o CEP")
            }
            resultado.innerHTML = `<p>Não encontrado CEP informado</p>`
        })
}

button.addEventListener("click", evento => consultarCEP(evento))
inputCep.addEventListener("keypress", event => handKeyPress(event))