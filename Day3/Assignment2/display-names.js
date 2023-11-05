const names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera","Rajiv", "Ananya" ];
let nxt
let i =0
function nextName(){
    console.log(i)
    document.getElementById("nxt").innerText = names[i]
    i= (i+1)%names.length
    return i
}

function previousName(){
    i--
    if(i<0){
        i=names.length-1
    }
    console.log(i)
    // names.reverse()
    document.getElementById("nxt").innerText = names[i]
}