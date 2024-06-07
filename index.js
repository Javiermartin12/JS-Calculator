document.addEventListener('DOMContentLoaded', function () {
    // Variables
    let display = document.querySelector('.display');
    let currentInput = '0';
    let previousInput = '';
    let operator = '';


    const MAX_DISPLAY_DIGITS = 12; 
  
    function handleNumberClick(number) {
      if (currentInput === '0' || currentInput === '-0') {
        currentInput = number;
      } else if (currentInput.length < MAX_DISPLAY_DIGITS) {
        currentInput += number;
      }
      updateDisplay();

    }
  
    function handleOperatorClick(operatorClicked) {
      if (operator !== '') {
        calculate();
      }
      operator = operatorClicked;
      previousInput = currentInput;
      currentInput = '0';
      updateDisplay();
    }


    function handleEqualClick() {
      calculate();
      operator = '';
    }

    function handleClearClick() {
      currentInput = '0';
      previousInput = '';
      operator = '';
      updateDisplay();
    }


    function handleDeleteClick() {
      currentInput = currentInput.slice(0, -1);
      if (currentInput === '') {
        currentInput = '0';
      }
      updateDisplay();
    }

    function handleDecimalClick() {
      if (!currentInput.includes('.')) {
        currentInput += '.';
      }
      updateDisplay();
    }


    function handlePercentageClick() {
      currentInput = (parseFloat(currentInput) / 100).toString();
      updateDisplay();
    }

    function handleNegationClick() {
      currentInput = (parseFloat(currentInput) * -1).toString();
      updateDisplay();
    }

    function calculate() {
      const prev = parseFloat(previousInput);
      const current = parseFloat(currentInput);
  
      switch (operator) {
        case '+':
          currentInput = (prev + current).toString();
          break;
        case '-':
          currentInput = (prev - current).toString();
          break;
        case '*':
          currentInput = (prev * current).toString();
          break;
        case '/':
          currentInput = (prev / current).toString();
          break;
        default:
          break;
      }
  
      previousInput = '';
      updateDisplay();
      console.log('Resultado:', currentInput);
    }

 

    function updateDisplay() {
      // Limita la longitud del número en el display
      if (currentInput.length > MAX_DISPLAY_DIGITS) {
        currentInput = currentInput.slice(0, MAX_DISPLAY_DIGITS);
      }
      display.textContent = currentInput;
    }


    const toggleSwitch = document.createElement('div');
    toggleSwitch.id = 'toggle-switch';
    toggleSwitch.classList.add('toggle-switch');
    document.querySelector('.calculator-container').appendChild(toggleSwitch);
    toggleSwitch.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
    });
  

    document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('click', function () {
        const buttonText = this.textContent;
        if (/\d/.test(buttonText)) {
          handleNumberClick(buttonText);
        } else if (buttonText === '=') {
          handleEqualClick();
        } else if (buttonText === 'C') {
          handleClearClick();
        } else if (buttonText === '←') {
          handleDeleteClick();
        } else if (buttonText === '.') {
          handleDecimalClick();
        } else if (buttonText === '%') {
          handlePercentageClick();
        } else if (buttonText === '∓') {
          handleNegationClick();
        } else {
          handleOperatorClick(buttonText);
        }
      });
    });
  });
   