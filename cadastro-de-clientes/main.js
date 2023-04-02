"use strict"
const cadastrarCliente = document.querySelector("#cadastrarCliente")
const modal = document.querySelector("#modal")
const modalClose = document.querySelector("#modalClose")
const btnSalvar = document.querySelector("#salvar")


const openModal = () => modal.classList.add('active')
const closeModal = () => modal.classList.remove('active')

const tempClient = {
    nome: "ana",
    email: "matheusgeovani@hotmail.com",
    celular: "44999466331",
    cidade: "Maringá"
}

// FUNCTION
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_Client')) ?? [] // ?? se for null, vazio
const setLocalStorage = (dbClient) => localStorage.setItem("db_Client", JSON.stringify(dbClient))

//INTERAÇÃO COM LAYOUT
function salveClient(){
    if(isValidFields()){
        console.log("cadastrando cliente..")
    }
}

function isValidFields(){
    
}

//CRUD - create - read - update - delete
// UPDATE
const updateClient = (index,client) => {
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


