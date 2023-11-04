const prompt = require("prompt-sync")();
let number = prompt("Please type a Number: ")
numberSystem(number)


function numberSystem(number){
    if(number>0)
    console.log("Given number is a Positive Number!")

    else if(number==0)
    console.log("Given number is Zero!")

    else
    console.log("It is a Negative Number!")
}