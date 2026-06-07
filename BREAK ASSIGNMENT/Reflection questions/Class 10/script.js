let currentValue = '0';
let previousValue = '';
let operator = '';
let shouldResetDisplay = false;

function updateDisplay() {
    document.getElementById('display').value = currentValue;
}

function appendNumber(num) {
    if (shouldResetDisplay) {
        currentValue = num;
        shouldResetDisplay = false;
    } else {
        if (currentValue === '0' && num !== '.') {
            currentValue = num;
        } else if (num === '.' && currentValue.includes('.')) {
            return;
        } else {
            currentValue += num;
        }
    }
    updateDisplay();
}

function appendOperator(op) {
    if (op === '√') {
        currentValue = Math.sqrt(parseFloat(currentValue)).toString();
        shouldResetDisplay = true;
        updateDisplay();
    } else {
        if (operator && !shouldResetDisplay) {
            calculate();
        }
        previousValue = currentValue;
        operator = op;
        shouldResetDisplay = true;
    }
}

function calculate() {
    if (!operator || !previousValue) return;

    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    result = calculate_operation(operator, prev, current);

    if (result === null) {
        currentValue = 'Error';
    } else {
        currentValue = result.toString();
    }
    operator = '';
    previousValue = '';
    shouldResetDisplay = true;
    updateDisplay();
}

function calculate_operation(op, a, b) {
    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': 
            if (b === 0) {
                alert('Cannot divide by zero!');
                return null;
            }
            return a / b;
        default: return null;
    }
}

function clearDisplay() {
    currentValue = '0';
    previousValue = '';
    operator = '';
    shouldResetDisplay = false;
    updateDisplay();
}

function deleteLast() {
    if (currentValue.length > 1) {
        currentValue = currentValue.slice(0, -1);
    } else {
        currentValue = '0';
    }
    updateDisplay();
}

const add = (firstNumber, secondNumber) => firstNumber + secondNumber;

const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;

const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

const divide = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    throw new Error("Oops! You cannot divide by zero. The universe will explode!");
  }
  return firstNumber / secondNumber;
};

const squareRoot = (targetNumber) => {
  if (targetNumber < 0) {
    throw new Error("Yikes! You cannot find the square root of a negative number!");
  }
  return Math.sqrt(targetNumber);
};

const validateEmail = (text) => {
  if (text.includes("@") && text.includes(".")) {
    return { valid: true, error: null };
  }
  return { valid: false, error: "That does not look like a real email address!" };
};

const validatePhone = (phoneNumber) => {
  if (phoneNumber.length === 10) {
    return { valid: true, error: null };
  }
  return { valid: false, error: "A phone number must have exactly 10 digits!" };
};