const prompt = require("prompt-sync")();
console.log("Please Enter Two Numbers!!")
let firstNum = prompt("Enter 1st Number: ")
let secondNum = prompt("Enter 2nd Number:")
compare(firstNum, secondNum)

function compare(firstNum, secondNum){
    if(firstNum>secondNum)
    console.log("Larger Number is ", firstNum)

    else if(secondNum> firstNum)
    console.log("Larger Number is ", secondNum)

    else
    console.log("Its a Match,Both Numbers are Same!!")
}