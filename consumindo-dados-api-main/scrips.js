const cep = document.querySelector("#cep")
const logradouro = document.querySelector("#endereco")
const complemento = document.querySelector("#complemento")
const bairro = document.querySelector("#bairro")
const localidade = document.querySelector("#cidade")
const uf = document.querySelector("#estado")

async function buscaEndereco(cep) {

    try {
        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCepConvertida = await consultaCep.json()

        if (consultaCepConvertida.erro) {
            throw Error("CEP não existe!")
        }

        logradouro.value = consultaCepConvertida.logradouro
        bairro.value = consultaCepConvertida.bairro
        complemento.value = consultaCepConvertida.complemento
        localidade.value = consultaCepConvertida.localidade
        uf.value = consultaCepConvertida.uf

        console.log(consultaCepConvertida)
        return consultaCepConvertida


    } catch (erro) {
        console.log(erro)
    }
}

cep.addEventListener("focusout", () => buscaEndereco(cep.value))
