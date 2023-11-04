const prompt = require("prompt-sync")();
let str = prompt("Please Enter a String: ")
let result = checkPalindrome(str)
console.log(result)

function checkPalindrome(str){
    let len = str.length
    for(let i=0; i<len/2; i++){
        if(str[i] != str[len-1-i]){
            return("Given String is Not a Palindrome!!")
        }
        return("Given String is a Palindrome")
    }          
}
