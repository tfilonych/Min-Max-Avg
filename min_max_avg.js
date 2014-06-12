var counter = 0;
var arrayOfDigits = [];

function addNumber() {
	var numberInputField = document.getElementById("someNumber");
	var inputFieldText = numberInputField.value;
	var digitTextNode = document.createTextNode(inputFieldText);
	var errorMessageDiv = document.getElementById("errorMessage");
	errorMessageDiv.innerHTML = "";
	
	try {
		if (isNaN(inputFieldText)) 
			throw "Not a number";
		if (inputFieldText < 100)
			throw "should be more than 100";
		if (inputFieldText > 1000)
			throw "should be less than 1000";
	} catch(err) {
        	errorMessageDiv.innerHTML = "Error: " + err + ".";
        	numberInputField.value = "";
        	return;
   	 } 		
   	 	
   	counter++;
	var newNumDiv = document.createElement('div');
	newNumDiv.setAttribute('class', 'newNum');
	newNumDiv.setAttribute('id', 'block' + counter);
	newNumDiv.appendChild(digitTextNode);
	var wrapper = document.getElementById("wrap");
	wrapper.appendChild(newNumDiv);
	var digit = parseInt(inputFieldText);
	arrayOfDigits.push(digit);
	
	var max = arrayOfDigits[0];
	var min = arrayOfDigits[0];
	var average;
	var sum = 0;
	
	for (i=0; i<arrayOfDigits.length; i++) {
				
		if (max<arrayOfDigits[i]) {
			max=arrayOfDigits[i];
		}
		
		if (min>arrayOfDigits[i]) {
			min = arrayOfDigits[i];
		}
		
		sum = sum + arrayOfDigits[i];
	}	
	
	average = sum / arrayOfDigits.length;
		
	if (average%1 !== 0) {
		average = average.toFixed(2);	
	}
		
	var maxNumberDiv = document.getElementById("maxNum");
	var textNodeOfmaxNumberDiv = maxNumberDiv.firstChild;
	textNodeOfmaxNumberDiv.nodeValue = max;
	
	var minNumberDiv = document.getElementById("minNum");
	var textNodeOfminNumberDiv = minNumberDiv.firstChild;
	textNodeOfminNumberDiv.nodeValue = min;
	
	var avgNumberDiv = document.getElementById("avg");
	var textNodeOfAvgNumberDiv = avgNumberDiv.firstChild;
	textNodeOfAvgNumberDiv.nodeValue = average;
	
	numberInputField.value = "";
		
}

function pressEnter(evt) {
	var charCode = (typeof evt.which === "number") ? evt.which : evt.keyCode;
	
	if (charCode == 13) {
		addNumber();
	} 
}
