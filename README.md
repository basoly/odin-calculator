# odin-calculator
The Odin Project: Foundations Final Project

Decomposition:

1. Create functions for all basic math operators (add, subtract, multiply, divide)
    - [ ] function has two arguments.
    - [ ] create function for addition
    - [ ] create function for subtraction
    - [ ] create function for multiply
    - [ ] create function for division

2. Calculator operation: number, operator, another number. 
    Create three variables for each of the parts of a calculator operation.
    Create a variable for the first number, the operator, and 2nd number.
    Use these variables to update display later.

    - [ ] create variable to hold number 1
    - [ ] create variable to hold operator 
    - [ ] create variable to hold number 2
    - [ ] create variable to hold display value

3. Create new function 'operate' that takes operator and 2 numbers and
    then calls one of the above functions on the numbers.
    
    - [ ] create operate function that takes three arguments (num1, operator, num2)
    - [ ] the function body contains a callback to one of the operator functions 
        depending on the value contained in operator. (switch statement?)
    - [ ] function returns result that updates 'display' variable.

4. Create a basic HTML calculator with buttons for each digit,
    each of the above functions, and an "Equals" key.
    There should be a display for the calculator.
    Add a 'clear' button.
    - [ ] creater large container (flex-dir row)
    - [ ] create FIVE children of box 2 (dir column)
        - auto-right margin for first child of box 2. (clear button)
    - [ ] create 2 children of container 3 (3rd child of large container)
    - [ ] create 2 children of 1st child of cont. 3 (dir. col)
    - [ ] create 9 children of 1st child of cont. 4
    - [ ] create 2 column children of 2nd child of 4
    - [ ] create 3 row children of 2nd child of container 3

    - [ ] apply styles for each button and display box.
    - [ ] create event handlers for clicking of the buttons

5. Create the functions that populate display when you click number buttons.
    You should be storing the 'display value' in a variable somewhere for use
    in the next step.
    - [ ] click event handlers should include function that changes the 'display' variable.


6. Make the calculator work. You'll need to store the first number and second number
    that are input into the calculator, utilize the operator that the user
    selects, and then operate() on the two numbers when user presses '=' key.
    Update display with solution to the operation.
    - [ ] when button is clicked, the event handler fires a function that appends the
        number of the button (button id) to the display variable.
    - [ ] the display variable only shows the first or second number. make typing of new 
        number clear the display variable.
    - [ ] the equals button fires the operate function and updates the display variable
        with the result.

7. Other specs: 
    Calculator should not evaluate more than a single pair of numbers at a time.
    e.g. 12 + 7 - 2 should evaluate 12+7 first and then 19 - 2 when - is pressed.
    Round answers with long decimals to avoid display overflow.
    Pressing clear should wipe out any existing data.
    Pressing = before entering all numbers or an operator should not cause problems
    Division by zero should return an error and not be evaluated.
