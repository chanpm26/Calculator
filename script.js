//functions 

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
    let total = operator(inputOne, inputTwo)    
    return total.toFixed(2)    
}

//display

let display = document.getElementById('display')
let pastNumbers = document.getElementById('pastNumbers')
let currentNumbers = document.getElementById('currentNumbers')

// number buttons

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
let buttonDecimal = document.getElementById('decimal')

let inputs = ""
let inputsTwo = ""

buttonDecimal.addEventListener("click", () => {
    if (inputs.includes(".") == true && (currentNumbers.innerText.includes("\u00A0") != true) || inputsTwo.includes(".") == true) {
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
    if (equal.includes("called") == true) {
        pastNumbers.innerText = currentNumbers.innerText;
        currentNumbers.innerText = ""
        currentNumbers.innerText += 1;
        inputs = "";
        inputs += 1;
        equal = "";
    } else if ((display.innerText.slice(-1) != "\u00A0") && (display.innerText.includes("\u00A0") != true) ) {
        currentNumbers.innerText += 1;
        pastNumbers.innerText = currentNumbers.innerText;
        inputs += 1;
    } else {
        currentNumbers.innerText += 1;
        pastNumbers.innerText = currentNumbers.innerText
        inputsTwo += 1;
    }
})

buttonTwo.addEventListener("click", () => {
    if (equal.includes("called") == true) {
        pastNumbers.innerText = currentNumbers.innerText;
        currentNumbers.innerText = ""
        currentNumbers.innerText += 2;
        inputs = "";
        inputs += 2;
        equal = "";
    } else if ((display.innerText.slice(-1) != "\u00A0") && (display.innerText.includes("\u00A0") != true) ) {
        currentNumbers.innerText += 2;
        pastNumbers.innerText = currentNumbers.innerText;
        inputs += 2;
    } else {
        currentNumbers.innerText += 2;
        pastNumbers.innerText = currentNumbers.innerText;
        inputsTwo += 2;
    }
})

buttonThree.addEventListener("click", () => {
    if (equal.includes("called") == true) {
        pastNumbers.innerText = currentNumbers.innerText;
        currentNumbers.innerText = ""
        currentNumbers.innerText += 3;
        inputs = "";
        inputs += 3;
        equal = "";
    } else if ((display.innerText.slice(-1) != "\u00A0") && (display.innerText.includes("\u00A0") != true) ) {
        currentNumbers.innerText += 3;
        pastNumbers.innerText = currentNumbers.innerText;
        inputs += 3;
    } else {
        currentNumbers.innerText += 3;
        pastNumbers.innerText = currentNumbers.innerText;
        inputsTwo += 3;
    }
})

buttonFour.addEventListener("click", () => {
    if (equal.includes("called") == true) {
        pastNumbers.innerText = currentNumbers.innerText;
        currentNumbers.innerText = ""
        currentNumbers.innerText += 4;
        inputs = "";
        inputs += 4;
        equal = "";
    } else if ((display.innerText.slice(-1) != "\u00A0") && (display.innerText.includes("\u00A0") != true) ) {
        currentNumbers.innerText += 4;
        pastNumbers.innerText = currentNumbers.innerText;
        inputs += 4;
    } else {
        currentNumbers.innerText += 4;
        pastNumbers.innerText = currentNumbers.innerText;
        inputsTwo += 4;
    }
})

buttonFive.addEventListener("click", () => {
    if (equal.includes("called") == true) {
        pastNumbers.innerText = currentNumbers.innerText;
        currentNumbers.innerText = ""
        currentNumbers.innerText += 5;
        inputs = "";
        inputs += 5;
        equal = "";
    } else if ((display.innerText.slice(-1) != "\u00A0") && (display.innerText.includes("\u00A0") != true) ) {
        currentNumbers.innerText += 5;
        pastNumbers.innerText = currentNumbers.innerText;
        inputs += 5;
    } else {
        currentNumbers.innerText += 5;
        pastNumbers.innerText = currentNumbers.innerText;
        inputsTwo += 5;
    }
})

buttonSix.addEventListener("click", () => {
    if (equal.includes("called") == true) {
        pastNumbers.innerText = currentNumbers.innerText;
        currentNumbers.innerText = ""
        currentNumbers.innerText += 6;
        inputs = "";
        inputs += 6;
        equal = "";
    } else if ((display.innerText.slice(-1) != "\u00A0") && (display.innerText.includes("\u00A0") != true) ) {
        currentNumbers.innerText += 6;
        pastNumbers.innerText = currentNumbers.innerText;
        inputs += 6;
    } else {
        currentNumbers.innerText += 6;
        pastNumbers.innerText = currentNumbers.innerText;
        inputsTwo += 6;
    }
})

buttonSeven.addEventListener("click", () => {
    if (equal.includes("called") == true) {
        pastNumbers.innerText = currentNumbers.innerText;
        currentNumbers.innerText = ""
        currentNumbers.innerText += 7;
        inputs = "";
        inputs += 7;
        equal = "";
    } else if ((display.innerText.slice(-1) != "\u00A0") && (display.innerText.includes("\u00A0") != true) ) {
        currentNumbers.innerText += 7;
        pastNumbers.innerText = currentNumbers.innerText;
        inputs += 7;
    } else {
        currentNumbers.innerText += 7;
        pastNumbers.innerText = currentNumbers.innerText;
        inputsTwo += 7;
    }
})

buttonEight.addEventListener("click", () => {
    if (equal.includes("called") == true) {
        pastNumbers.innerText = currentNumbers.innerText;
        currentNumbers.innerText = ""
        currentNumbers.innerText += 8;
        inputs = "";
        inputs += 8;
        equal = "";
    } else if ((display.innerText.slice(-1) != "\u00A0") && (display.innerText.includes("\u00A0") != true) ) {
        currentNumbers.innerText += 8;
        pastNumbers.innerText = currentNumbers.innerText;
        inputs += 8;
    } else {
        currentNumbers.innerText += 8;
        pastNumbers.innerText = currentNumbers.innerText;
        inputsTwo += 8;
    }
})

buttonNine.addEventListener("click", () => {
    if (equal.includes("called") == true) {
        pastNumbers.innerText = currentNumbers.innerText;
        currentNumbers.innerText = ""
        currentNumbers.innerText += 9;
        inputs = "";
        inputs += 9;
        equal = "";
    } else if ((display.innerText.slice(-1) != "\u00A0") && (display.innerText.includes("\u00A0") != true) ) {
        currentNumbers.innerText += 9;
        pastNumbers.innerText = currentNumbers.innerText;
        inputs += 9;
    } else {
        currentNumbers.innerText += 9;
        pastNumbers.innerText = currentNumbers.innerText;
        inputsTwo += 9;
    }
})

buttonZero.addEventListener("click", () => {
    if ((display.innerText.slice(-2) == "/\u00A0") && (display.innerText.includes("\u00A0") != true)) {
        alert("Error! Cannot divide by 0")
    } else if (equal.includes("called") == true) {
        pastNumbers.innerText = currentNumbers.innerText;
        currentNumbers.innerText = ""
        currentNumbers.innerText += 0;
        inputs = "";
        inputs += 0;
        equal = "";
    } else if (display.innerText.slice(-1) != "\u00A0" && (display.innerText.includes("\u00A0") != true)){
        currentNumbers.innerText += 0;
        pastNumbers.innerText = currentNumbers.innerText;
        inputs += 0;
    } else {
        currentNumbers.innerText += 0;
        pastNumbers.innerText = currentNumbers.innerText;
        inputsTwo += 0;
    }
})


// operator buttons

let addButton = document.getElementById('add')
let subtractButton = document.getElementById('subtract')
let multiplyButton = document.getElementById('multiply')
let divideButton = document.getElementById('divide')
let equalButton = document.getElementById('equal') 
let buttonDelete = document.getElementById('backspace')
let buttonClear = document.getElementById('clear')

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
        equal = "";
        }
}})

subtractButton.addEventListener("click", () => {
    pastNumbers.innerText = currentNumbers.innerText;
    if (inputs == "") {
        alert("Click a number first!")
    } else if (display.innerText.slice(-1) == "\u00A0"){
        currentNumbers.innerText += "-";
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
        equal = "";
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
        equal = "";
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
        equal = "";
        currentNumbers.innerText += " /" + "\u00A0";
    }
}})

equalButton.addEventListener("click", () => {
    pastNumbers.innerText = currentNumbers.innerText;
    if (display.innerText.includes("\u00A0") === false || inputsTwo == "" || inputsTwo == ".") {
    } else if (display.innerText.includes("+") === true ) {
        let total = operate(add, inputs, inputsTwo)
        currentNumbers.innerText = total;
        inputs = total;
        inputsTwo = "";
        equal = "called";
    } else if (display.innerText.includes("-") === true ) {
        let total = operate(subtract, inputs, inputsTwo)
        currentNumbers.innerText = total;
        inputs = total;
        inputsTwo = "";
        equal = "called";
    } else if (display.innerText.includes("*") === true) {
        let total = operate(multiply, inputs, inputsTwo)
        currentNumbers.innerText = total;
        inputs = total;
        inputsTwo = "";
        equal = "called";
    } else if (display.innerText.includes("/") === true) {
        let total = operate(divide, inputs, inputsTwo)
        currentNumbers.innerText = total;
        inputs = total;
        inputsTwo = "";
        equal = "called";
    }
}) 

let equal = ""

buttonClear.addEventListener("click", () => {
    currentNumbers.innerText = "";
    pastNumbers.innerText = "";
    inputs = "";
    inputsTwo = "";
    equal = "";
})

buttonDelete.addEventListener("click", () => {
    currentNumbers.innerText = currentNumbers.innerText.slice(0, -1);
    pastNumbers.innerText = pastNumbers.innerText.slice(0, -1);
    if(inputsTwo == "") {
        inputs = inputs.slice(0, -1)
    } else if (inputsTwo != "") {
        inputsTwo = inputsTwo.slice(0, -1)
    }
})

document.addEventListener('keydown', function(key) {
    if (key.key.match(/\d/) || key.key.match()) {
    currentNumbers.innerText += `${key.key}`;
    inputs += `${key.key}`;
    pastNumbers.innerText = currentNumbers.innerText;
    }
})