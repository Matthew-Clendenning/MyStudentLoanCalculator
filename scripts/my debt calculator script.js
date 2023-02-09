var p, r, t;
var perMonth, totalInterest, principalPlusInterest, graduation, outputText;

function validate() {
	
	// get the input
	p = document.forms["input-form"]["Loan Amount"].value;
	r = document.forms["input-form"]["Loan interest"].value;
	t = document.forms["input-form"]["Length of loan"].value;
	g = document.forms["input-form"]["graduation"].value;
	
	// validate p, r, t and g
	if (p <= 0 || r <= 0 || t <= 0) {
		outputText = "Enter a number greater than zero.";
	} else if (isNaN(p)) {
		outputText = "Please enter a number."
	} else if (isNaN(r)) {
		outputText = "Please enter a number."
	} else if (isNaN(t)) {
		outputText = "Please enter a number."
	} else if (isNaN(g)) {
		outputText = "Please enter a number."
	} else {
		outputText = "";
		// calculate the result using p[r/12] / [1 - (1 + r/12)^ -12(t)
		var i = p * ((r/100)/12);
		var j = 1 - (1 + (r/100)/12)**(-12*t);
		var total = i / j;
		//  calculate loan term - time till graduation
		var k = (total * 12*t) / (g*12 + 6);
		
		// total amount to save in 4 years 4293.54
		// total amount to pay after graduation 5247.96
		
		perMonth = "$"+Math.round(total * 100) / 100;
		principalPlusInterest = "$"+Math.round((total * 12*t) * 100) / 100;
		totalInterest = "$"+Math.round((total * 12*t - p) * 100) / 100;
		graduation = "$"+Math.round(k * 100) / 100;
	}
	
	// output the result (or errors)
	document.getElementById("output_text").innerHTML = outputText;
	document.getElementById("per-month").innerHTML = perMonth;
	document.getElementById("principal-interest-total").innerHTML = principalPlusInterest;
	document.getElementById("total-interest-amount").innerHTML = totalInterest;
	document.getElementById("amount-till-graduation").innerHTML = graduation;
	if (g == 0) {
		document.getElementById("amount-till-graduation").style.display = "none";
	} else {
		document.getElementById("amount-till-graduation").style.display = "block";
	}
}
