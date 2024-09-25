"use strict";



// code document selector
const $ = (selector) => document.querySelector(selector);

const processEntry = () => {
	const income = parseInt($("#income").value);
	if (isNaN(income) || income <= 0) {
		alert("Please enter a valid numerical amount!");
	}
	else {
		calculateTax(income);
	};
	$("#income").focus();
};

const calculateTax = (income) => {
	let taxAmount;
	if (income > 0 && income <= 9875) {
		taxAmount = (income * 0.1);
	}
	else if (income > 9875 && income <= 40125) {
		taxAmount = (income - 9875) * 0.12 + 987.50;
	}
	else if (income > 40125 && income <= 85525) {
 		taxAmount = (income - 40125) * 0.22 + 4617.50;
	}
	else if (income > 85525 && income <= 163300) {
		taxAmount = (income - 85525) * 0.24 + 14605.50;
	}
	else if (income > 163300 && income <= 207350) {
		taxAmount = (income - 163300) * 0.32 + 33271.50;
	}
	else if (income > 207350 && income <= 518400) {
		taxAmount = (income - 207350) * 0.35 + 47367.50;
	}
	else {
		taxAmount = (income - 518400) * 0.37 + 156235;
	};

	$("#tax").value = parseFloat(taxAmount).toFixed(2)

};


// DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);
	$("#income").focus();
});