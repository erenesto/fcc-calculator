// grab all buttons
var buttons = document.querySelectorAll('.calc span');
var operators = ['+', '-', '*', '/'];
var decimals = false;


// add click event all the buttons

for (var i = 0; i < buttons.length; i++) {
	buttons[i].onclick = function(e) {
		var input = document.querySelector('.input');
		var inputValue = input.innerHTML;
		var buttonValue = this.innerHTML;

		//if element's attribute data-text(placeholder) is equal 0 then remove
		if (input.getAttribute("data-text") === "0") { 
			input.setAttribute("data-text", "");
		} 

		//if button value C , then clear input and add data-text again
		if (buttonValue === "C") {
			input.innerHTML = "";
			input.setAttribute("data-text", "0");
			decimals = false;
		} else if (buttonValue === "=") {
			var equation = inputValue;

			if (equation) {
				input.innerHTML = eval(equation);
			}

			decimals = false;

		} else if (operators.indexOf(buttonValue) > -1) {
			var lastChar = inputValue[inputValue.length - 1];

			if (inputValue !== "" && operators.indexOf(lastChar) === -1) {
				input.innerHTML += buttonValue;
			} else if (inputValue === "" && buttonValue === "-") {
				input.innerHTML += buttonValue;
			}

			if (operators.indexOf(lastChar) > -1 && inputValue.length > 1) {
				input.innerHTML = inputValue.replace(/.$/, buttonValue);
			} 

			decimals = false;

		} else if (buttonValue === ".") {
			if (!decimals) {
				input.innerHTML += buttonValue;
				decimals = true;
			}
		} else {
			// add button value to input
			input.innerHTML += buttonValue;
		}

		e.preventDefault();
	};
}
