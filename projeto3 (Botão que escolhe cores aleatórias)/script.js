const colors = ['Green', 'Blue', 'Purple', 'White', 'Aquamarine', 'Blueviolet', 'Brown']
const btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor]
    document.getElementById('colorName').innerHTML = document.body.style.background
    document.getElementById('colorName').style.color = document.body.style.background
})

function getRandomColor(){
    return Math.floor(Math.random() * colors.length) 
}