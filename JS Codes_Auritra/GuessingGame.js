
let guessNumber= function(num){
    let max= 5
    let min =1
    let generateRandomNum = Math.floor(Math.random()*(max-min+1)) + min
    return num===generateRandomNum
}
console.log(guessNumber(3))
