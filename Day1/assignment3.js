let cars = []
console.log("Created an empty array",cars)
cars = [{make: "Toyota", model: "Camry", year: 2018},
        {make: "Toyota", model: "Camry", year: 2018},
        {make: "Toyota", model: "Camry", year: 2018}]
console.log("After adding objects to cars array",cars)

cars.splice(0,1)
console.log("After removing 1st object",cars)

cars.push({make: "Honda", model: "Civic", year: 2020})
console.log("After adding new car object",cars)

cars[1].model = "Accord"
console.log("Updated model property of 2nd object", cars)
console.log("***Final Result***",cars)
