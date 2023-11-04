let fruits = []
console.log(fruits, "--Created an empty array",)

fruits = ["apple", "banana", "orange"]
console.log(fruits, "--Added elements")

fruits.splice(0,1)
console.log(fruits, "--Removed 1st element from an array")

fruits.push("grape")
console.log(fruits, "--Added grape in the end of the array")

fruits[1] = "pear"
console.log(fruits, "--Updated 2nd fruit to pear")

console.log(fruits, "***Final Result***")