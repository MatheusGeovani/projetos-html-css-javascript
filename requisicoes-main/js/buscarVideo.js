import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";


const button = document.querySelector("[button]")

async function buscarVideo(evento) {
    evento.preventDefault()
    const pesquisar = document.querySelector("[pesquisar-video]").value
    const busca = await conectaApi.buscarVideo(pesquisar)
    const lista = document.querySelector("[data-lista]")
    

    while(lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }
    
    busca.forEach(elemento => lista.appendChild(constroiCard(
        elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))


}

button.addEventListener("click", evento => buscarVideo(evento))