let person = {}
console.log(person, "--Created an empty object")

person = {name: "John", age: 30, city: "New York"}                                              
console.log(person, "--Added properties to the object",)

delete person.age
console.log(person, "--Removed age propery") 

person.job = "Engineer"
console.log(person, "--Added new property Job")

person.city = "San Francisco"
console.log(person, "--Updated city property")                  

console.log(person, "***Final Result***")