const add = function(a, b) {
    return a + b
}

const subtract = function(a, b) {
    return a-b
}

const multiply = function(a, b) {
    return a*b
}

const divide = function(a, b) {
    return a / b
}

const operate = function(operator, inputOne, inputTwo) {
    inputOne = Number(inputOne);
    inputTwo = Number(inputTwo);
    return operator(inputOne, inputTwo)        
}
    

let display = document.getElementById('display')
let pastNumbers = document.getElementById('pastNumbers')
let currentNumbers = document.getElementById('currentNumbers')

let buttonOne = document.getElementById('1')
let buttonTwo = document.getElementById('2')
let buttonThree = document.getElementById('3')
let buttonFour = document.getElementById('4')
let buttonFive = document.getElementById('5')
let buttonSix = document.getElementById('6')
let buttonSeven = document.getElementById('7')
let buttonEight = document.getElementById('8')
let buttonNine = document.getElementById('9')
let buttonZero = document.getElementById('0')
let buttonClear = document.getElementById('clear')
let buttonDecimal = document.getElementById('decimal')

buttonDecimal.addEventListener("click", () => {
    if (inputs.includes(".") == true && (display.innerText.includes("\u00A0") != true) || inputsTwo.includes(".") == true) {

    } else if ((display.innerText.slice(-1) != "\u00A0") && (display.innerText.includes("\u00A0") != true)) {
        currentNumbers.innerText += ".";
        inputs += ".";
        } else {
        currentNumbers.innerText += ".";
        inputsTwo += ".";
        pastNumbers.innerText = currentNumbers.innerText
        }
    }) 

buttonOne.addEventListener("click", () => {
    if ((display.innerText.slice(-1) != "\u00A0") && (display.innerText.includes("\u00A0") != true) ) {
    currentNumbers.innerText += 1;
    inputs += 1;
    } else {
    currentNumbers.innerText += 1;
    inputsTwo += 1;
    pastNumbers.innerText = currentNumbers.innerText
    }
})
buttonTwo.addEventListener("click", () => {
    if ((display.innerText.slice(-1) != "\u00A0")  && (display.innerText.includes("\u00A0") != true) ){
    currentNumbers.innerText += 2;
    inputs += 2;
    } else {
    currentNumbers.innerText += 2;
    inputsTwo += 2;
    pastNumbers.innerText = currentNumbers.innerText
    }
})

buttonThree.addEventListener("click", () => {
    if ((display.innerText.slice(-1) != "\u00A0")  && (display.innerText.includes("\u00A0") != true)) {
        currentNumbers.innerText += 3; 
        inputs += 3;
    } else {
        currentNumbers.innerText += 3; 
        inputsTwo += 3;
        pastNumbers.innerText = currentNumbers.innerText
    }
})
buttonFour.addEventListener("click", () => {
    if ((display.innerText.slice(-1) != "\u00A0")  && (display.innerText.includes("\u00A0") != true) ) {
        currentNumbers.innerText += 4; 
    inputs += 4;
    } else {
        currentNumbers.innerText += 4; 
    inputsTwo += 4;
    pastNumbers.innerText = currentNumbers.innerText
    }
})
buttonFive.addEventListener("click", () => {
    if ((display.innerText.slice(-1) != "\u00A0")  && (display.innerText.includes("\u00A0") != true)) {
        currentNumbers.innerText += 5; 
    inputs += 5;
    } else {
        currentNumbers.innerText += 5; 
    inputsTwo += 5;
    pastNumbers.innerText = currentNumbers.innerText
    }
})
buttonSix.addEventListener("click", () => {
    if ((display.innerText.slice(-1) != "\u00A0")  && (display.innerText.includes("\u00A0") != true)) {
        currentNumbers.innerText += 6; 
    inputs += 6;
    } else {
        currentNumbers.innerText += 6; 
        inputsTwo += 6;
        pastNumbers.innerText = currentNumbers.innerText
    }
})
buttonSeven.addEventListener("click", () => {
    if ((display.innerText.slice(-1) != "\u00A0")  && (display.innerText.includes("\u00A0") != true)) {
        currentNumbers.innerText += 7;
    inputs += 7;
    } else {
        currentNumbers.innerText += 7; 
        inputsTwo += 7;
        pastNumbers.innerText = currentNumbers.innerText
    }
})
buttonEight.addEventListener("click", () => {
    if ((display.innerText.slice(-1) != "\u00A0")  && (display.innerText.includes("\u00A0") != true)) {
        currentNumbers.innerText += 8; 
    inputs += 8;
    } else {
        currentNumbers.innerText += 8; 
        inputsTwo += 8;
        pastNumbers.innerText = currentNumbers.innerText
    }
})
buttonNine.addEventListener("click", () => {
    if ((display.innerText.slice(-1) != "\u00A0") && (display.innerText.includes("\u00A0") != true)) {
        currentNumbers.innerText += 9; 
        inputs += 9;
    } else {
        currentNumbers.innerText += 9; 
        inputsTwo += 9;
        pastNumbers.innerText = currentNumbers.innerText
    }
})
buttonZero.addEventListener("click", () => {
    if ((display.innerText.slice(-2) == "/\u00A0") && (display.innerText.includes("\u00A0") != true)) {
        alert("Error! Cannot divide by 0")
    } else if (display.innerText.slice(-1) != "\u00A0"){
        currentNumbers.innerText += 0;
        inputs += 0;
    } else {
        currentNumbers.innerText += 0;
        inputsTwo += 0;
        pastNumbers.innerText = currentNumbers.innerText
    }
    console.log(inputs)
})
buttonClear.addEventListener("click", () => {
    currentNumbers.innerText = "";
    pastNumbers.innerText = "";
    inputs = "";
    inputsTwo = "";
    console.log(inputs)
})

let inputs = ""
let inputsTwo = ""

let addButton = document.getElementById('add')
let subtractButton = document.getElementById('subtract')
let multiplyButton = document.getElementById('multiply')
let divideButton = document.getElementById('divide')

addButton.addEventListener("click", () => {
    pastNumbers.innerText = currentNumbers.innerText;
    if (inputs == "") {
        alert("Click a number first!")
    } else if (display.innerText.includes("+") === true ) {
        let total = operate(add, inputs, inputsTwo);
        currentNumbers.innerText = total + " +" + "\u00A0";
        inputs = total;
        inputsTwo = "";
    } else if (display.innerText.includes("-") === true ) {
        let total = operate(subtract, inputs, inputsTwo);
        currentNumbers.innerText = total + " +" + "\u00A0";
        inputs = total;
        inputsTwo = "";
    } else if (display.innerText.includes("*") === true) {
        let total = operate(multiply, inputs, inputsTwo);
        currentNumbers.innerText = total + " +" + "\u00A0";
        inputs = total;
        inputsTwo = "";
    } else if (display.innerText.includes("/") === true) {
        let total = operate(divide, inputs, inputsTwo);
        currentNumbers.innerText = total + " +" + "\u00A0";
        inputs = total;
        inputsTwo = "";
    } else {
     if (display.innerText.slice(-1) != "\u00A0"){
        currentNumbers.innerText += " +" + "\u00A0";
        }
}})

subtractButton.addEventListener("click", () => {
    pastNumbers.innerText = currentNumbers.innerText;
    if (inputs == "") {
        alert("Click a number first!")
    } else if (display.innerText.includes("+") === true ) {
        let total = operate(add, inputs, inputsTwo);
        currentNumbers.innerText = total + " -" + "\u00A0";
        inputs = total;
        inputsTwo = "";
    } else if (display.innerText.includes("-") === true ) {
        let total = operate(subtract, inputs, inputsTwo);
        currentNumbers.innerText = total + " -" + "\u00A0";
        inputs = total;
        inputsTwo = "";
    } else if (display.innerText.includes("*") === true) {
        let total = operate(multiply, inputs, inputsTwo);
        currentNumbers.innerText = total + " -" + "\u00A0";
        inputs = total;
        inputsTwo = "";
    } else if (display.innerText.includes("/") === true) {
        let total = operate(divide, inputs, inputsTwo);
        currentNumbers.innerText = total + " -" + "\u00A0";
        inputs = total;
        inputsTwo = "";
    } else {
    if (display.innerText.slice(-1) != "\u00A0"){
        currentNumbers.innerText += " -" + "\u00A0";
}
}})

multiplyButton.addEventListener("click", () => {
    pastNumbers.innerText = currentNumbers.innerText;
    if (inputs == "") {
        alert("Click a number first!")
    } else if (display.innerText.includes("+") === true ) {
        let total = operate(add, inputs, inputsTwo);
        currentNumbers.innerText = total + " *" + "\u00A0";
        inputs = total;
        inputsTwo = "";
    } else if (display.innerText.includes("-") === true ) {
        let total = operate(subtract, inputs, inputsTwo);
        currentNumbers.innerText = total + " *" + "\u00A0";
        inputs = total;
        inputsTwo = "";
    } else if (display.innerText.includes("*") === true) {
        let total = operate(multiply, inputs, inputsTwo);
        currentNumbers.innerText = total + " *" + "\u00A0";
        inputs = total;
        inputsTwo = "";
    } else if (display.innerText.includes("/") === true) {
        let total = operate(divide, inputs, inputsTwo);
        currentNumbers.innerText = total + " *" + "\u00A0";
        inputs = total;
        inputsTwo = "";
    } else {
    if (display.innerText.slice(-1) != "\u00A0"){
        currentNumbers.innerText += " *" + "\u00A0";
}
}})

divideButton.addEventListener("click", () => {
    pastNumbers.innerText = currentNumbers.innerText;
    if (inputs == "") {
        alert("Click a number first!")
    } else if (display.innerText.includes("+") === true ) {
        let total = operate(add, inputs, inputsTwo);
        currentNumbers.innerText = total + " /" + "\u00A0";
        inputs = total;
        inputsTwo = "";
    } else if (display.innerText.includes("-") === true ) {
        let total = operate(subtract, inputs, inputsTwo);
        currentNumbers.innerText = total + " /" + "\u00A0";
        inputs = total;
        inputsTwo = "";
    } else if (display.innerText.includes("*") === true) {
        let total = operate(multiply, inputs, inputsTwo);
        currentNumbers.innerText = total + " /" + "\u00A0";
        inputs = total;
        inputsTwo = "";
    } else if (display.innerText.includes("/") === true) {
        let total = operate(divide, inputs, inputsTwo);
        currentNumbers.innerText = total + " /" + "\u00A0";
        inputs = total;
        inputsTwo = "";
    } else {
    if (display.innerText.slice(-1) != "\u00A0"){ 
        currentNumbers.innerText += " /" + "\u00A0";
}
}})

let equalButton = document.getElementById('equal') 
equalButton.addEventListener("click", () => {
    if (display.innerText.includes("\u00A0") === false || inputsTwo == "") {
    } else if (display.innerText.includes("+") === true ) {
        let total = operate(add, inputs, inputsTwo)
        currentNumbers.innerText = total.toFixed(2);
        inputs = total;
        inputsTwo = "";
    } else if (display.innerText.includes("-") === true ) {
        let total = operate(subtract, inputs, inputsTwo)
        currentNumbers.innerText = total.toFixed(2);
        inputs = total;
        inputsTwo = "";
    } else if (display.innerText.includes("*") === true) {
        let total = operate(multiply, inputs, inputsTwo)
        currentNumbers.innerText = total.toFixed(2);
        inputs = total;
        inputsTwo = "";
    } else if (display.innerText.includes("/") === true) {
        let total = operate(divide, inputs, inputsTwo)
        currentNumbers.innerText = total.toFixed(2);
        inputs = total;
        inputsTwo = "";
}
}) 