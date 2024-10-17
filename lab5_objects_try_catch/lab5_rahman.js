/*
Aseel Rahman
Sep 17, Javascript Object
*/

console.log("Aseel Rahman")
console.log("\n ----- Example 1: defining an object -----\n")
// create an object name 'car'
const car ={
    type: "Fiat",
    model: 500,
    color: "white",
}
console.log(`The model of the car is ${car.model}`)

console.log("\n ----- Example 2: use of 'this' keyword in an object -----\n")
//Create an object named 'person'
const person = {
    firstname: "John",
    lastname: "Doe",
    id: 1234,

    //defining methods
    fullname : function(){
        // return this.firstname + " " + this.lastname
        return `${this.firstname} ${this.lastname}`
    }
}
// accessing method 'fullname'
console.log(person.fullname())

console.log("\n ----- Example 3: object constructor using function -----\n")
function course(title, instructor, code, session, students){
    this.title = title,
    this.instructor = instructor,
    this.code = code,
    this.session = session,
    this.students = students
}
// set up values to the object
let course1 = new course("javaScript programming", "Wu", "ET712", "H1", 12)

// accessing properties
console.log(`The course ${course1.title} has ${course1.students} students.`)

console.log("\n ----- Example 4: methods -----\n")
const myMath = {
    //defining methods
    square : function(num){
        return num*num
    },
    double : function(num){
        return num*2
    }
}

// accessing methods
let n = 3
let number1 = myMath.double(n)
let number2 = myMath.square(n)

//Print result
console.log(`The double of number ${n} is ${number1}`)
console.log(`The square root of ${n} is ${number2}`)


// --------------------------- Lab 5 exercise -------------------------------

console.log("\n ----- Exercise: Lab-5 -----\n")

const mycalculator = {
    message : "Calculator for area and volume",
    side : 2, 

    area_square : function(){
        return `Area of Square: ${this.side * this.side}`
    },

    volume_cube : function(){
        return `Volume of cube: ${this.side * this.side * this.side}`
    }
}

console.log(mycalculator.message)
console.log(mycalculator.area_square())
console.log(mycalculator.volume_cube())

/*
Sep 19, 2024
try-catch
*/

console.log("\n----- Example 1: try-catch-----")
// define a function to display a messafge in upper-case
function yell(message){
    console.log(message.toUpperCase().repeat(3))
}

try{
    // call the function
    yell("Good morning")
    yell(1234)
}

catch(e){
    console.log(`ERROR! ${e}`)
}

finally{
    console.log("end of calling finction yell")
}

// after example
console.log("\n----- lines after example 1 -----")

console.log("\n ---- Exercise -----")
// Define a JavaScript function named 'divideNumbers' that takes two parameters, 'a' and 'b'.
// The function should attemt to divide 'a' and 'b' and return the result.
// If the division is undefined, return a message that says 'Error performoing the division'.
// Use try-catch

function divideNumbers(a, b){
    // return a/b
    try{
        let c = a/b
        console.log(c)
    }
    catch(e){
        console.log(`Error performing the division.${e}`)
    }
    finally{
        console.log("end of divideNumbers function")
    }
}

divideNumbers(4,2)