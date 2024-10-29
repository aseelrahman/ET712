function showColor(color) {
    document.getElementById("color-name").innerText = "This is " + color + "!";
}

function countItems() {
    let items = document.querySelectorAll(".count-box span").length;
    document.getElementById("count-result").innerText = "There are " + items + " items!";
}

function showShape(shape) {
    document.getElementById("shape-name").innerText = "This is a " + shape + "!";
}

function playSound(animal) {
    // This function could use audio files in a real application
    alert("This is a " + animal + " sound!");
}
