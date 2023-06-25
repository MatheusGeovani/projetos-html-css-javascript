const button = document.querySelector(".button")
const resultado = document.querySelector("#resultado")
const inputCep = document.querySelector("#cep-input")
const cep = inputCep.value

function handKeyPress(event) {
    if (event.key  === "Enter") {
        consultarCEP(event)
        inputCep.value = ""
    }
}

function consultarCEP(evento) {
    evento.preventDefault()

    const inputCep = document.querySelector("#cep-input")
    const cep = inputCep.value

    fetch(`https://viacep.com.br/ws/${cep}/json/`)

        .then(response => response.json())
        .then(data => {
            if (data.error) {
                throw Error("CEP não existe")
            }
            resultado.innerHTML = `<p><strong>Bairro</strong>: ${data.bairro}</p>
        <p><strong>Cep</strong>: ${data.cep}</p>
        <p><strong>DDD</strong>: ${data.ddd}</p>
        <p><strong>Localidade</strong>: ${data.localidade}</p>
        <p><strong>Logradouro</strong>: ${data.logradouro}</p>
        <p><strong>UF</strong>: ${data.uf}</p>`
        })
        .catch(error => {
            resultado.innerHTML = `<p>CEP não existe</p>`
        })
}

button.addEventListener("click", evento => consultarCEP(evento))
inputCep.addEventListener("keypress", event => handKeyPress(event))

