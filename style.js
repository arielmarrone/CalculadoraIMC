function IMC() {
	var altura=document.getElementById('altura').value;
	var peso=document.getElementById('peso').value;
	var result = (peso/(altura*altura));
	

	document.getElementById("result").innerHTML="Tu IMC es: " + result;
}