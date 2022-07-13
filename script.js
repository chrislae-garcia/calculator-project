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
      return addition(a, b);
    case '-':
      return subtraction(a, b);
    case 'x':
      return multiplication(a, b);
    case '/':
      return division(a, b);
  }
}

let screenText = "";
const validInput = ['0', '1', '2', '3', '4', '5', 
                    '6', '7', '8', '9', '.'];

const operators = ['+', '-', 'x', '÷'];

function setOnScreen(selectedButton) {
  console.log(screenText);

  screenText += selectedButton;
  divDisplay.textContent = screenText.toString();

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
      break;
    default:
      console.log('nope');
  }

}

window.addEventListener('click', setButtonEvents);