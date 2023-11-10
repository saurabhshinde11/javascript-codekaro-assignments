let height
let weight

function bmiResult(){
    height = document.getElementById("height").value/100
    weight = document.getElementById("weight").value
    let bmi= weight/(height * height)
    console.log(bmi)
   
    document.getElementById("result").innerText = "Your BMI is "+ bmi.toFixed(1)
  
    if(bmi<18.5)
    document.getElementById("status").innerText = "Underweight😰"

    else if(bmi>18.4 & bmi<25)
    document.getElementById("status").innerText = "Normal💪"

    else if(bmi>24.9 & bmi<30)
    document.getElementById("status").innerText = "OverWeight😰"

    else if(bmi>29.9 & bmi<35 )
    document.getElementById("status").innerText = "Obesity🫨"

    else if(bmi>34)
    document.getElementById("status").innerText = "Severe Obesity🫃"

    else{
        document.getElementById("status").innerText = "Please Enter height & weight!!"
        document.getElementById("result").innerText = "🤦‍♀️"
    }
    
}


