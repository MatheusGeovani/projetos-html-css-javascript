"use strict"
const cadastrarCliente = document.querySelector("#cadastrarCliente")
const modal = document.querySelector("#modal")
const modalClose = document.querySelector("#modalClose")
const btnSalvar = document.querySelector("#save")
const btnCancelar = document.querySelector("#cancel")
const form = document.querySelector(".modal-field")
const tbody = document.querySelector("tbody")
const tabClient = document.querySelector("#tabClient")

const openModal = () => modal.classList.add('active')
const closeModal = () => modal.classList.remove('active')


// FUNCTION
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_Client')) ?? [] // ?? se for null, vazio
const setLocalStorage = (dbClient) => localStorage.setItem("db_Client", JSON.stringify(dbClient))

const fillFields = (client) => {
    document.getElementById("nome").value = client.nome
    document.getElementById("email").value = client.email
    document.getElementById("celular").value = client.celular
    document.getElementById("cidade").value = client.cidade
}

const editClient = (index) => {
    const client = getLocalStorage()[index]
    fillFields(client)
    openModal()
}

const editDelete = (event) =>{
    if(event.target.type == "button"){
        const [action, index] = event.target.id.split('-')
        if(action == 'edit'){
            editClient(index)
        }else{
            
        }
    }
    
}
const isValidFields = () => {
    const formValue = form.value
    if (formValue == "") {
        console.log("Preencha os campos!")
    }
}
const clearFields = () => {
    nome.value = ""
    email.value = ""
    celular.value = ""
    cidade.value = ""
}
const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
    <td>${client.nome}</td>
    <td>${client.email}</td>
    <td>${client.celular}</td>
    <td>${client.cidade}</td>
    <td>
        <button type="button" class="button green" id="edit-${index}">Editar</button>
        <button type="button" class="button red" id="Delete-${index}">Excluir</button>
    </td>
    `
    document.querySelector("#tabClient>tbody").appendChild(newRow)
}
const clearTable = () => {
    const rows = document.querySelectorAll("#tabClient>tbody tr")
    rows.forEach(row => row.parentNode.removeChild(row))
}
const updateTable = () => {
    const dbClient = getLocalStorage()
    clearTable()
    dbClient.forEach(createRow)
}
updateTable()

//INTERAÇÃO COM LAYOUT
function salveClient() {
    const client = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        celular: document.getElementById("celular").value,
        cidade: document.getElementById("cidade").value
    }
    createClient(client)
    clearFields()
    updateTable()
    closeModal()
}


//CRUD - create - read - update - delete
// UPDATE
const updateClient = (index, client) => {
    const dbClient = getLocalStorage()
    dbClient[index] = client
    setLocalStorage(dbClient)
}
// READ
const readClient = () => getLocalStorage()
// CREATE
const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
}
// DELETE
const deleteClient = (index) => {
    const dbClient = getLocalStorage()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}

// EVENTOS
cadastrarCliente.addEventListener("click", openModal)
modalClose.addEventListener("click", closeModal)
btnSalvar.addEventListener("click", salveClient)
document.querySelector("#tabClient>tbody").addEventListener("click", editDelete)
document.querySelector(".button>red").addEventListener("click", btnDelete)

