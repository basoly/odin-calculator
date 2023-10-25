// Create functions for all basic math operators (add, subtract, multiply, divide)
let add = (num1, num2) => {
    let sum = num1 + num2;
    return sum
}

let subtract = (num1, num2) => {
    let difference = num1 - num2;
    return difference
}

let multiply = (num1, num2) => {
    let product = num1 * num2;
    return product
}

let divide = (num1, num2) => {
    if (num2 == 0) {
        alert('Error: Division by Zero prohibited.')
        return 'ERROR'
    } else {
        quotient = num1 / num2;
        return quotient
    }
}

// Create three variables for each of the parts of a calculator operation.
let num1 = 0;
let num2 = 0;
let display;
let operator;

let operate = (num1,num2,operator) => {

    switch(operator) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'division':
            result = divide(num1, num2)
            break;
        
    }

    return result

}

// click equal button -> display = operate(num1, num2, operator)

let operatorClicked;
let displayVar;
// let displayElem;
let numberClicked;
let equalsClicked;

let displayBox = document.querySelector('#display');
let displayText = displayBox.textContent;
let result;


// creating event handlers for buttons 0-9
for (let i = 0; i<10; i++) {
    btn = document.querySelector(`#btn${i}`)
    btn.addEventListener('click', (event) => {
        let target = event.target;
        let btnID = target.textContent; // contains button number
        if (operatorClicked) {
            displayVar = null;
            displayText = '';
            numberClicked = true;
            displayText = displayText + btnID;
            displayBox.textContent = displayText;
            operatorClicked = false;
            equalsClicked = false; // to enable = double click
        } else {
            displayText = '';
            displayText = displayText + btnID;
            displayBox.textContent = displayText;
            numberClicked = true;
            equalsClicked = false; // to enable = dbl clk
            
        }
    })

}


btn = document.querySelector('#decimal')
btn.addEventListener('click', (event) => {
    let target = event.target;
    let btnID = '.';
    if (operatorClicked) {
        displayVar = null;
        displayText = '';
        numberClicked = true;
        displayText = displayText + btnID;
        displayBox.textContent = displayText;
        operatorClicked = false;
    } else {
        displayText = displayText + btnID;
        displayBox.textContent = displayText;
        numberClicked = true;
    }
})

btn = document.querySelector('#equals')
btn.addEventListener('click', (event) => {
    let target = event.target;
    let btnID = '=';
    // if equals clicked (for multiple clicks)
    if (!(equalsClicked)) {
        num2 = Number(displayText);
        console.log(`number 1: ${num1}, number 2: ${num2}, operator: ${operator}`)
        result = operate(num1, num2, operator);
        console.log(result);
        displayBox.textContent = result;
        operatorClicked = false;
        num1 = result;
        num2 = false;
        equalsClicked = true;
        numberClicked = false;
    }
})

divOperator = document.querySelector('#division')
multiplyOperator = document.querySelector('#multiply')
subtractOperator = document.querySelector('#subtract')
addOperator = document.querySelector('#add')

operatorArray = [divOperator, multiplyOperator, subtractOperator, addOperator];

operatorArray.forEach(selector => {
    selector.addEventListener('click', (event) => {
        if (!(numberClicked)) {
            num2 = Number(displayText);
            operator = event.target.id;
            console.log(`number 1: ${num1}, 
            number 2: ${num2}, 
            operator: ${operator}`)
            result = operate(num1, num2, operator);
            console.log(result);
            displayBox.textContent = result;
            num1 = result;
            num2 = false;
            operatorClicked = true;
            numberClicked = false;
        } else if (!operatorClicked && numberClicked) {
            num2 = Number(displayText);
            operator = event.target.id;
            console.log(`number 1: ${num1}, 
            number 2: ${num2}, 
            operator: ${operator}`)
            result = operate(num1, num2, operator);
            console.log(result);

            displayBox.textContent = result;
            num1 = result;            num2 = false;
            operatorClicked = true;
            numberClicked = false;
        } else {
            num1 = Number(displayText);
            operator = event.target.id
            operatorClicked = true;
            numberClicked = false;
        }  
        })
    });

clear = document.querySelector('#clear')

clear.addEventListener('click', (event) => {
    let target = event.target;
    displayText = '';
    displayBox.textContent = '';
    num1 = null;
    num2 = null;
    operator = null;
    operatorClicked = false;
    numberClicked = false;    
    equalsClicked = false;
})

negationElem = document.querySelector('#plus-minus');

negationElem.addEventListener('click', (event) => {
    let target = event.target;
    originalNumber = Number(displayBox.textContent);
    negated = originalNumber * -1;
    displayBox.textContent = `${negated}`;
    displayText = displayBox.textContent
})

percentElem = document.querySelector('#percent');

percentElem.addEventListener('click', (event) => {
    let target = event.target;
    originalNumber = Number(displayBox.textContent);
    percent = originalNumber /100;
    displayBox.textContent = `${percent}`;
    displayText = displayBox.textContent
})
