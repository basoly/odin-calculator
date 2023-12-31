# odin-calculator
The Odin Project: Foundations Final Project

Decomposition:

1. Create functions for all basic math operators (add, subtract, multiply, divide)
    - [X] function has two arguments.
    - [X] create function for addition
    - [X] create function for subtraction
    - [X] create function for multiply
    - [X] create function for division

2. Calculator operation: number, operator, another number. 
    Create three variables for each of the parts of a calculator operation.
    Create a variable for the first number, the operator, and 2nd number.
    Use these variables to update display later.

    - [X] create variable to hold number 1
    - [X] create variable to hold operator 
    - [X] create variable to hold number 2
    - [X] create variable to hold display value

3. Create new function 'operate' that takes operator and 2 numbers and
    then calls one of the above functions on the numbers.
    
    - [X] create operate function that takes three arguments (num1, operator, num2)
    - [X] the function body contains callbacks to the operator functions depending on the value contained in operator. (switch statement?)
    - [X] function returns result which is used to update 'display' variable

4. Create a basic HTML calculator with buttons for each digit,
    each of the above functions, and an "Equals" key.
    There should be a display for the calculator.
    Add a 'clear' button.
    - [X] create large container (flex-dir row)
    - [X] create three children boxes of large container
    - [X] create FIVE children of box 2 (dir column)
        - auto-right margin for first child of box 2. (clear button)
    - [X] create 2 children of container 3 (3rd child of large container)
    - [X] create 2 children of 1st child of cont. 3 (dir. col)
    - [X] create 9 children of 1st child of cont. 4
    - [X] create 2 column children of 2nd child of 4
    - [X] create 3 row children of 2nd child of container 3

    - [X] apply styles for each button and display box.
        - [X] Add borders to everything for easy visualization.
    

5. Create the functions that populate display when you click number buttons. You should be storing the 'display value' in a variable somewhere for use in the next step.

    - [X] create event handlers for clicking of the buttons
    - [X] click event handlers should include function that changes the 'display' variable.

6. Make the calculator work. You'll need to store the first number and second number
    that are input into the calculator, utilize the operator that the user
    selects, and then operate() on the two numbers when user presses '=' key.
    Update display with solution to the operation.
    - [X] when button is clicked, the event handler fires a function that appends the
        number of the button (button id) to the display variable.
    - [X] the display variable only shows the first or second number. make typing of new 
        number clear the display variable.
    - [X] the equals button fires the operate function and updates the display variable
        with the result.

7. Other specs: 
   - [X] Calculator should not evaluate more than a single pair of numbers at a time.
    e.g. 12 + 7 - 2 should evaluate 12+7 first and then 19 - 2 when - is pressed.
   - [X] Round answers with long decimals to avoid display overflow.
   - [X] Pressing clear should wipe out any existing data.
   - [X] Pressing = before entering all numbers or 
         an operator should not cause problems
   - [X] Division by zero should return an error and not be evaluated.
