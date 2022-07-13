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
function setOnScreen(selectedButton) {
  screenText+=selectedButton;
  console.log(divDisplay);
  divDisplay.textContent = screenText.toString();
}

window.addEventListener('click', (e) => {
  if(e.target.localName != 'button') return;
  selectedButton = e.target.textContent;
  setOnScreen(selectedButton);
});