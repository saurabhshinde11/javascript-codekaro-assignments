const prompt = require("prompt-sync")();
let number = prompt("Please type a positive number: ")
factorial(number)

function factorial(number){
    if(number>0){
        for(let i=number-1; i>1; i--){
            number = i*number
        }
        console.log("Factorial =",number) 
    }
    else(number<=0)
    console.log("Please enter a positive number!")
}



