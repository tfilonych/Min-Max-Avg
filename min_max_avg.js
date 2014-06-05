var counter = 0;
var arrayOfDigits = [];

function addNumber() {
	counter++;
	var newNumDiv = document.createElement('div');
	newNumDiv.setAttribute('class', 'newNum');
	newNumDiv.setAttribute('id', 'block' + counter);
	var numberInputField = document.getElementById("someNumber");
	var inputFieldText = numberInputField.value;
	var digitTextNode = document.createTextNode(inputFieldText);
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
		
	var maxNumberDiv = document.getElementById("maxNum");
	var textNodeOfmaxNumberDiv = maxNumberDiv.firstChild;
	textNodeOfmaxNumberDiv.nodeValue = max;
		
		if (min>arrayOfDigits[i]) {
			min = arrayOfDigits[i];
		}
		
	var minNumberDiv = document.getElementById("minNum");
	var textNodeOfminNumberDiv = minNumberDiv.firstChild;
	textNodeOfminNumberDiv.nodeValue = min;
	
	sum = sum + arrayOfDigits[i];
	average = sum / arrayOfDigits.length;
	
		if (average%1 !== 0) {
			average = average.toFixed(1);	
		}
		
	var avgNumberDiv = document.getElementById("avg");
	var textNodeOfAvgNumberDiv = avgNumberDiv.firstChild;
	textNodeOfAvgNumberDiv.nodeValue = average;
	
	}	

	someNumber.value = "";
}

function pressEnter(evt) {
	var charCode = (typeof evt.which === "number") ? evt.which : evt.keyCode;
	
	if (charCode == 13) {
		addNumber();
	} 
}
