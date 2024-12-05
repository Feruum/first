console.log("somebody")
let display = document.querySelector('.display');
let buttons = Array.from(document.querySelectorAll('.buttons'));

buttons.map((button) => {
  button.addEventListener('click', (e) => {
    let buttonText = e.target.innerText;

    switch(buttonText) {
      case 'AC':
        display.innerText = "0";
        break;

      case '=':
        try {
          display.innerText = math.evaluate(display.innerText) || "0";
        } catch {
          display.innerText = 'error';
        }
        break;

      case '%':
        try {
          let result = math.evaluate(display.innerText) / 100;
          display.innerText = result;
        } catch {
          display.innerText = 'error';
        }
        break;

      case '+/-':
        display,innerText = "-";
        break;

      default:
        if(display.innerText === '0' && buttonText !== '.') {
          display.innerText = buttonText;
        } else {
          display.innerText += buttonText;
        }
    }
  });
});
