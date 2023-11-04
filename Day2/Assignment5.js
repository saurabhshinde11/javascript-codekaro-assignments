const prompt = require("prompt-sync")();
let number = prompt("Please Enter a Number:")
displayPrime(number)

function primeNumbers(number){
    if(number<= 1)
    return false

    for(let i=2; i*i<= number; i++){
        if( number%i == 0 )
            return false
    }
    return true
}

function displayPrime(number){
    for(let i = 2; i<= number; i++){
        if(primeNumbers(i))
        console.log(i)
    }
}