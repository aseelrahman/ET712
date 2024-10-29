// select the element
let squarediv = document.querySelector(".square");
// add an event
squarediv.onClick  = function(){
    squarediv.style.backgroundcolor = "magenta"
}

// select the element
let btnanimal = document.querySelector(".btnanimal")
let animalsdiv = document.querySelector(".animalsdiv")

// list of animals
let animals = ['fish','dog','turtle','cat','spider']
// add event
btnanimal.onClick = function(){
    animalsdiv.innerHTML = animals[Math.floor(Math.random()*4)]
}

// MOUSE EVENT
// select the element
let numberdiv = document.querySelector(".numberdiv")
numberdiv.onmouseout = function(){
    numberdiv.textContent = Math.ceil(Math.random()*99)
}
// function to randomly pick a number
function pickcolor(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    return `rgb(${red},${green},${blue})`
}
// add a click event
numberdiv.onclick = function(){
    numberdiv.style.backgroundcolor = pickcolor()
}
// Exercise
// set counter
let counter = 0;
// select the element
let circle = document.querySelector(".circle")
circle.onmouseout = function(){
    circle.textContent = counter++
}

// add an event
let reset = document.querySelector(".reset")
reset.onClick  = function(){
    counter = 0
}