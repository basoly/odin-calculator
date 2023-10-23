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