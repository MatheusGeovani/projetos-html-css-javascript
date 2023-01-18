const transactionsUl = document.querySelector("#transactions")
let totalDisplay = document.querySelector("#balance")
let despesasDisplay = document.querySelector("#money-minus")
let receitasDisplay = document.querySelector("#money-plus")
const form = document.querySelector("#form")
const inputTransactionName = document.querySelector("#text")
const inputTransactionAmount = document.querySelector("#amount")

let dummyTransacrions = [
    { id: 1, name: "Bolo de brigadeiro", amount: -20 },
    { id: 2, name: "Salário", amount: 300 },
    { id: 3, name: "Torta de frango", amount: -10 },
    { id: 4, name: "Violão", amount: 150 }
]

const localStorageTransactions = localStorage.getItem("transactions")

const removeTransection = ((ID) => {
    dummyTransacrions = dummyTransacrions.filter(transaction => transaction.id !== ID)
    init()
}) 

const addTransactionintoDom = transaction => {
    const operator = transaction.amount < 0 ? "-" : "+"
    const CSSClass = transaction.amount < 0 ? "minus" : "plus"
    const amountAbs = Math.abs(transaction.amount)
    const li = document.createElement("li")

    li.classList.add(CSSClass)
    li.innerHTML = `
    ${transaction.name} <span>${operator} R$ ${amountAbs}
    </span>
    <button class="delete-btn" onClick="removeTransection(${transaction.id})">
    x
    </button>
    `
    transactionsUl.append(li)
}

const updateBalanceValues = () => {
    const transactionsAmounts = dummyTransacrions.map((transaction) => {
        return transaction.amount
        
    })
    
    const total = transactionsAmounts.reduce((acumulator, transaction) => acumulator + transaction,0).toFixed(2)
    const despesas = Math.abs(transactionsAmounts.filter((value) => value < 0).reduce((acumulator, transaction) => acumulator + transaction, 0)).toFixed(2)
    const receitas = transactionsAmounts.filter((value) => value > 0).reduce((acumulator, transaction) => acumulator + transaction, 0).toFixed(2)
    
    totalDisplay.textContent = `R$ ${total}`
    despesasDisplay.textContent = `R$ ${despesas}`
    receitasDisplay.textContent = `R$ ${receitas}`

}


const init = () => {
    transactionsUl.innerHTML = ""

    dummyTransacrions.forEach(addTransactionintoDom)
    updateBalanceValues()
}
init()

const generateID = () => Math.round(Math.random() * 1000)

form.addEventListener("submit", event => {
    event.preventDefault()
    const transactionName = inputTransactionName.value.trim()
    const transactionAmount = inputTransactionAmount.value.trim()

    if (inputTransactionName.value.trim() === "" || inputTransactionAmount.value.trim() === "") {
        alert("Porfavor, preencha o Nome e o Valor da transação")
        return
    }

    const transaction = { id: generateID(), name: transactionName, amount: Number(transactionAmount)     }

    dummyTransacrions.push(transaction) // adicionando a transação do usuario do dummyTransaction
    init()

    inputTransactionName.value = ""
    inputTransactionAmount.value = ""
})