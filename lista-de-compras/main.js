let listaDeItens = []

const form = document.getElementById('form-itens');
const itensInput = document.getElementById("receber-item")
const ulItens = document.getElementById("lista-de-itens")

form.addEventListener("submit", function (evento) {
    
    evento.preventDefault()
    salvarItem()
    mostrarItem()
    itensInput.value = ""
})

function salvarItem() {
    const comprasItem = itensInput.value
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase()) // verificação com letra maiusculo e letra minuscula
    if (checarDuplicado) {
        alert("Já existe o item na lista")
        itensInput.value = ""
        return elemento.valor = ""

    } else {
        listaDeItens.push({
            valor: comprasItem
        })
    }
    console.log(listaDeItens)
}

function mostrarItem() {
    listaDeItens.forEach((elemento, index) => {
        ulItens.innerHTML += `
    <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
        <div>
            <input type="checkbox" class="is-clickable" />
            <input type="text" class="is-size-5" value="${elemento.valor}"></input>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>
        `
    })
}

