const prompt = require("prompt-sync")();
let str = prompt("Please Enter a String: ")
let count = vowels(str)
console.log(count)

function vowels(str){
    const vowels = 'aeiouAEIOU';
    return str.split('').reduce((acc, char) => {
        if (vowels.includes(char)) {
            acc++;
          }
          return acc;
        }, 0);
}