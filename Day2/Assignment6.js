const prompt = require("prompt-sync")();
let num1 = parseFloat(prompt("Please Enter 1st Number: "))
let num2 = parseFloat(prompt("Please Enter 2nd Number: "))
let operator = prompt("Please Enter a Operator + - * /: ")
calculator(num1,num2,operator)

function calculator(num1, num2, operator){
    switch(operator){
        case "+":
            console.log("Result= ", num1+num2)
            break
        case "-":
            console.log("Result= ", num1-num2 )
            break
        case "*":
            console.log("Result= ", parseInt(num1*num2))
            break
        case "/":
            console.log("Result= ", parseInt(num1/num2))
            break;
        default:
            console.log("Invalid operator!");
            break;
    }
}