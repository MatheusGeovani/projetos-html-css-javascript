const transactionsUl = document.querySelector("#transactions")
let totalDisplay = document.querySelector("#balance")
let despesasDisplay = document.querySelector("#money-minus")
let receitasDisplay = document.querySelector("#money-plus")
const form = document.querySelector("#form")
const inputTransactionName = document.querySelector("#text")
const inputTransactionAmount = document.querySelector("#amount")

const localStorageTransactions = JSON.parse(localStorage.getItem("transactions"))
let transactions = localStorage.getItem("transactions") !== null ? localStorageTransactions : []

const removeTransection = ((ID) => {
    transactions = transactions.filter(transaction => transaction.id !== ID)
    updateLocalStorage()
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
    const transactionsAmounts = transactions.map((transaction) => {
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

    transactions.forEach(addTransactionintoDom)
    updateBalanceValues()
}
init()

const updateLocalStorage = () => {
    localStorage.setItem("transactions", JSON.stringify(transactions))
}

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

    transactions.push(transaction) // adicionando a transação do usuario do dummyTransaction
    init()
    updateLocalStorage()

    inputTransactionName.value = ""
    inputTransactionAmount.value = ""
})