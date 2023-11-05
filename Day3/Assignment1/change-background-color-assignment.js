let bgColor
function getRandomColor(){
    let x = Math.floor(Math.random() * 256)
    const y = Math.floor(Math.random() * 256)
    const z = Math.floor(Math.random() * 256)
    bgColor = "rgb(" + x + "," + y + "," + z + ")"
    console.log(bgColor)
    return bgColor
}

function changeBackgroundColor(){
    let body = document.getElementById('body')
    body.style.background = getRandomColor()
}