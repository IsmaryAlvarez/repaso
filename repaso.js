/*
calcular el sueldo semanal de un traabajador con base en las horas que trabaja
Ej: Carol gana 10000 por hora y trabaja 20 horas a la semana
*/

function salaryWeek(hours, payment){
	var salary= hours * payment;
	return salary;
}

/*
Calcular la cantidad de digitos de un número, por ej: 1986
*/
function numberOfDigits(number){
	var counter = 0;
	var digits=number.toString();
	for (var i=0; i< digits.length; i++){
		counter++;
	}
	return counter;
}

//Confirmar si una palabra es palindrome

"alexandra".split("");
"alexandra".split("").reverse().join("")

//Palindrome

function palindrome(word) {
	var long=word.length;
	for(var i=0; i<long; i++){
		if(word[i] !== word[long - 1 - i]){
			return false;
		}
	}
	return true;
}