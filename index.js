<<<<<<< HEAD
=======

//Aqui estamos con nuestro codigo js y bueno este fragmento de 
//codigo establece la base para manipular la interfaz de la calculadora
//preparamos nuestras variables que van a ser esenciales para
//para el funcionamiento de nuestra calculadora DISPLAY que sera
//nuestra pantalla que muestre el resultado CURRENTIMPUT rastrea 
//nuestro numero o entrada actual y PREVIOUSINPUT se utiliza para rastrear 
//el numero anterior OPERATOR rastrea el operador que se va a utilizar
//en la operacion ya sea +,%..etc
//
>>>>>>> 52b0cb27... Project finished
document.addEventListener('DOMContentLoaded', function () {
    // Variables
    let display = document.querySelector('.display');
    let currentInput = '0';
    let previousInput = '';
    let operator = '';

<<<<<<< HEAD

    const MAX_DISPLAY_DIGITS = 12; 
  

=======
  //esta const se utiliza para representar el número máximo de dígitos que se permiten
  //en la pantalla de nuestra calculadora
    const MAX_DISPLAY_DIGITS = 12; 
  
    // Funciones para manejar los eventos de los botones
    //esta función handleNumberClick se utiliza para manejar los clics en los
    // botones numéricos de la calculadora. Se asegura de que los números se 
    //manejen correctamente según las condiciones establecidas.
>>>>>>> 52b0cb27... Project finished
    function handleNumberClick(number) {
      if (currentInput === '0' || currentInput === '-0') {
        currentInput = number;
      } else if (currentInput.length < MAX_DISPLAY_DIGITS) {
        currentInput += number;
      }
      updateDisplay();

    }
  
<<<<<<< HEAD

=======
//esta función handleOperatorClick se utiliza para manejar los clics en
// botones de operadores en una calculadora. Realiza cálculos si ya hay 
//un operador almacenado, actualiza las variables de estado (operator, previousInput,
// y currentInput).
>>>>>>> 52b0cb27... Project finished
    function handleOperatorClick(operatorClicked) {
      if (operator !== '') {
        calculate();
      }
      operator = operatorClicked;
      previousInput = currentInput;
      currentInput = '0';
      updateDisplay();
    }

<<<<<<< HEAD

=======
  //la función handleEqualClick 
  //estar diseñada para realizar el cálculo y luego restablecer 
  //el estado del operador en la calculadora después de hacer clic
  //en el botón de igual (=). 
>>>>>>> 52b0cb27... Project finished
    function handleEqualClick() {
      calculate();
      operator = '';
    }

<<<<<<< HEAD
  
=======
  //la función handleClearClick se utiliza para reiniciar
  // el estado de la calculadora, estableciendo la entrada actual 
  //a '0', borrando la entrada previa y restableciendo el operador.
>>>>>>> 52b0cb27... Project finished
    function handleClearClick() {
      currentInput = '0';
      previousInput = '';
      operator = '';
      updateDisplay();
    }

<<<<<<< HEAD

=======
  //la función handleDeleteClick se utiliza para simular 
  //el comportamiento del botón de retroceso o eliminación de mi 
  //calculadora. Elimina el último dígito de la entrada actual (currentInput) y, 
  //si la entrada se convierte en una cadena vacía, la establece de nuevo en '0'.
>>>>>>> 52b0cb27... Project finished
    function handleDeleteClick() {
      currentInput = currentInput.slice(0, -1);
      if (currentInput === '') {
        currentInput = '0';
      }
      updateDisplay();
    }

<<<<<<< HEAD

=======
  //la función handleDecimalClick se utiliza para agregar un punto decimal
  // a la entrada actual (currentInput) si no hay ya uno presente.
>>>>>>> 52b0cb27... Project finished
    function handleDecimalClick() {
      if (!currentInput.includes('.')) {
        currentInput += '.';
      }
      updateDisplay();
    }

<<<<<<< HEAD
  
=======
  //la función handlePercentageClick toma el número actual en currentInput,
  // lo convierte a un porcentaje (dividiendo por 100), y luego actualiza la
  // visualización en la interfaz de la calculadora. 
>>>>>>> 52b0cb27... Project finished
    function handlePercentageClick() {
      currentInput = (parseFloat(currentInput) / 100).toString();
      updateDisplay();
    }

<<<<<<< HEAD
 
=======
  //a función handleNegationClick cambia el signo del número actual en 
  //currentInput multiplicándolo por -1 y luego actualiza la visualización 
  //en la interfaz de la calculadora.
>>>>>>> 52b0cb27... Project finished
    function handleNegationClick() {
      currentInput = (parseFloat(currentInput) * -1).toString();
      updateDisplay();
    }

<<<<<<< HEAD

=======
  //la función calculate realiza la operación matemática correspondiente 
  //según el operador actual y actualiza las variables currentInput y previousInput
  // en consecuencia. Luego, llama a updateDisplay() para reflejar el resultado en la 
  //interfaz de la calculadora y muestra el resultado en la consola.
>>>>>>> 52b0cb27... Project finished
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

<<<<<<< HEAD
 
    function updateDisplay() {
=======
  //la función updateDisplay se encarga de dos cosas principales:
  // limitar la longitud del número en el display según MAX_DISPLAY_DIGITS
  // y actualizar el contenido del display con el valor actualizado de currentInput. 
    function updateDisplay() {
      // Limita la longitud del número en el display
>>>>>>> 52b0cb27... Project finished
      if (currentInput.length > MAX_DISPLAY_DIGITS) {
        currentInput = currentInput.slice(0, MAX_DISPLAY_DIGITS);
      }
      display.textContent = currentInput;
    }

<<<<<<< HEAD

=======
  // A qui tenemos nuestro querido boton este código crea un interruptor 
  //en la interfaz de la calculadora que, al hacer clic en él, alterna entre 
  //los estilos de modo light y dark aplicando o eliminando la clase 'dark-mode'
  // del elemento body del documento.
    // Interruptor Light/Dark
>>>>>>> 52b0cb27... Project finished
    const toggleSwitch = document.createElement('div');
    toggleSwitch.id = 'toggle-switch';
    toggleSwitch.classList.add('toggle-switch');
    document.querySelector('.calculator-container').appendChild(toggleSwitch);
    toggleSwitch.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
    });
  
<<<<<<< HEAD

=======
    //este bloque de código asigna event listeners a todos los
    // botones con la clase '.btn' en la calculadora. Cuando se hace 
    //clic en un botón, se determina el tipo de botón (número, operador, etc.) 
    //y se llama a la función correspondiente para manejar la entrada del usuario 
    //en la calculadora.
    // Event listeners para los botones
>>>>>>> 52b0cb27... Project finished
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
   
<<<<<<< HEAD
=======
//Y CON ESTO TENDRIAMOS UNA CALCULADORA BASICA FUNCIONANDO SIN EVAL.
>>>>>>> 52b0cb27... Project finished
