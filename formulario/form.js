const form = document.getElementById("form")
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const senhaConfirm = document.getElementById("confirmar-senha")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const senhaValue = senha.value.trim()
    const senhaConfirmValue = senhaConfirm.value.trim()

    if (nomeValue === "") {
        // mostrar o erro 
        // adicionar a classe error
        errorValidation(nome, "Preencha esse campo")

    } else {
        // adicionar a classe de sucesso
        sucessValidation(nome)
    }
    if (emailValue === "") {
        errorValidation(email, "Preencha esse campo")
    } else {
        sucessValidation(email)
    }
    if (senhaValue === ""){
        errorValidation(senha, "Preencha esse campo")
    } else if (senhaValue.length < 8){
        errorValidation(senha, "A senha deve ter no minimo 8 caracteres")
    }else {
        sucessValidation(senha)
    }
    if (senhaConfirmValue === "" ) {
        errorValidation(senhaConfirm, "Preencha esse campo")
    } else if (senhaConfirmValue != senhaValue) {
        errorValidation(senhaConfirm, "Senha incorreta")
    } else {
        sucessValidation(senhaConfirm) 
    }
}

function errorValidation(input, message) {
    const formulario = input.parentElement;
    const small = formulario.querySelector("small")

    small.innerText = message
    formulario.className = "formulario error"
}

function sucessValidation(input) {
    const formulario = input.parentElement

    formulario.className = "formulario sucess"
}

