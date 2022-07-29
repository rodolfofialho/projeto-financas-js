const transactionUl = document.querySelector('#transactions')
const incomeDisplay = document.querySelector('#money-plus')
const expaseDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')

const transacoes = [
    { id: 1, name: 'Bolo de Laranja', amount: -20 },
    { id: 2, name: 'Salário', amount: 500 },
    { id: 3, name: 'Torta de Pessego', amount: -20 },
    { id: 4, name: 'Vilão', amount: 220 },
]

const adicionarTransacao = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'
    const cssClass = transaction.amount < 0 ? 'minus' : 'plus'
    const valorOperator = Math.abs(transaction.amount)
    const li = document.createElement('li')

    li.classList.add(cssClass)
    li.innerHTML = `
        ${transaction.name} <span>${operator} R$ ${valorOperator}</span> <button class="delete-btn">x</button>
    `
    transactionUl.append(li)

}

const upDateBalanceValues = () => {
    const transctionsAmounts = transacoes.map(transaction => transaction.amount)
    const total = transctionsAmounts.reduce((acumulador, transaction) => acumulador + transaction, 0).toFixed(2)
    const income = transctionsAmounts.filter(value => value > 0).reduce((acumulador, value) => acumulador + value, 0).toFixed(2)
    const expase = Math.abs(transctionsAmounts.filter(value => value < 0).reduce((acumulador, value) => acumulador + value, 0).toFixed(2))

    balanceDisplay.textContent = `R$ ${total}`
    incomeDisplay.textContent = `R$ ${income}`
    expaseDisplay.textContent = `R$ ${expase}`

}


const init = () => {
    transacoes.forEach(adicionarTransacao)
    upDateBalanceValues()
}

init()