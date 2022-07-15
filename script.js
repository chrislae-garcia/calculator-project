const divDisplay = document.querySelector('.display');

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (a % b == 0) return a / b;
  return parseFloat((a / b).toFixed(2));
}

function operate(operator, a, b) {

  switch (operator) {
    case '+':
      result = addition(a, b);
      break;
    case '-':
      result = subtraction(a, b);
      break;
    case 'x':
      result = multiplication(a, b);
      break;
    case '÷':
      result = division(a, b);
      break;
  }

  divDisplay.textContent = result.toString();
  numberStorage.pop();
  numberStorage[0] = result;
  screenText = '';

  if (selectedButton == '=') {
    screenText = result;
    lastOperator = ''
    return;
  }

  lastOperator = operator;
}

let screenText = '';
let hasDecimal = false;
const validInput = ['0', '1', '2', '3', '4', '5', 
                    '6', '7', '8', '9', '.'];

const operators = ['+', '-', 'x', '÷'];

function setOnScreen(selectedButton) {

  if (screenText == '') divDisplay.textContent = '';

  if (selectedButton == '.' && hasDecimal){
    return;
  } else if (selectedButton == '.' && !hasDecimal) {
    hasDecimal = true;
    screenText += selectedButton;
  } else {
    screenText += selectedButton;
  }
  divDisplay.textContent = screenText.toString();  
}



const numberStorage = [];
let lastOperator = '';

function storeNumbers(operator, number) {
  
  if (!number || !operator) return;

  if (!numberStorage[0]) {
    numberStorage[0] = number;
    lastOperator = operator;  
    screenText = '';
  } else if (!numberStorage[1]) {
    numberStorage[1] = number;
  }

  if (numberStorage.length == 2) {

    firstNumber = parseFloat(numberStorage[0]);
    secondNumber = parseFloat(numberStorage[1]);

    operate(lastOperator, firstNumber, secondNumber);
    
  }
}

function setButtonEvents(e) {
  if (e.target.localName != 'button') return;
  selectedButton = e.target.textContent;

  switch (true) {
    case validInput.includes(selectedButton):
      console.log('Digits and Decimal');
      setOnScreen(selectedButton);
      break;
    case selectedButton == 'C':
      console.log('Clear');
      break;
    case selectedButton == 'CA':
      console.log('Clear All');
      break;
    case selectedButton == '%':
      console.log('Percentage');
      break;
    case operators.includes(selectedButton):
      console.log(`Operator ${selectedButton}`);
      storeNumbers(selectedButton, screenText);
      break;
    case selectedButton == '=':
      storeNumbers(lastOperator, screenText);
      break;
    default:
      console.log('nope');
  }

}

window.addEventListener('click', setButtonEvents);