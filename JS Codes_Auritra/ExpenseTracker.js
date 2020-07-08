let myAccount ={
    name : 'Arijit',
    income: 0,
    expense:0
}

let getSummary = function(account){
    accountBalance =account.income-account.expense
    console.log(`Account for ${account.name} has $ ${accountBalance}. $ ${account.income} in income and $ ${account.expense} in expense.`)
}

let addIncome = function(account,amount){
    account.income = account.income + amount
    
}
let addExpense = function(account,amount){
    account.expense = account.expense + amount

}

let resetAccount = function(account){
    account.income = 0
    account.expense = 0
}

getSummary(myAccount)
addIncome(myAccount,1000)
addExpense(myAccount,200)
addExpense(myAccount,500)
getSummary(myAccount)
resetAccount(myAccount)
getSummary(myAccount)