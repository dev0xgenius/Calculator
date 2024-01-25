let userInput = "";
let lastInput = "";

let display = document.getElementById("output");
let calcObj = document.getElementById('calculator');
let calcBtns = calcObj.querySelectorAll("input[type='button']");

for (let btn of calcBtns){
    btn.addEventListener("click", function() {
        if (btn.getAttribute('class') == 'extra-action') {
            if (this.value == '=') {
                let result = calculate(userInput);
                if (result != undefined) {
                    updateDisplay(result);
                } 
            } else if (this.value == 'x') {
                userInput = userInput.toString();
                userInput = userInput.slice(0, userInput.length - 1); //remove last input
                updateDisplay(userInput);
            }
        } else {
            if (validInput([lastInput, this.value])){
                userInput += this.value;
                lastInput = this.value;
                updateDisplay(userInput);
            }    
        }
    });
}

function calculate(input) {
    try {
        return eval(input);
    } catch(e) {
        alert("Invalid Operation: simple arithmetic operations only");
        console.log(e);
    }
}

function validInput(inputs) {
    let operators = ['+', '-', '*', '/'];
    [lastInput, currentInput] = inputs;
    
    if (operators.includes(lastInput) && operators.includes(currentInput))
        return false;
    return true;
}

function updateDisplay(value) {
    userInput = value;
    display.innerHTML = userInput; 
}