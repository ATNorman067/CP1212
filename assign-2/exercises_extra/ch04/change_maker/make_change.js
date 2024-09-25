"use strict";

// code document selector
const $ = (selector) => document.querySelector(selector);

// handle click event and process input data (convert to integer, check validity, and alert or call function)
const processEntry = () => {
    const amount = parseInt($("#cents").value);
    if (isNaN(amount) || amount < 0 || amount > 99) {
        alert("Please enter a valid number between 0 and 99!");
    }
    else {
        makeChange(amount);
    };
};

// calculate and display respective amounts
const makeChange = (amount) => {
    const quarters = parseInt(amount / 25);
    amount = amount % 25;
    // display # of quarters
    $("#quarters").value = quarters;

    const dimes = parseInt(amount / 10);
    amount = amount % 10;
    // display # of dimes
    $("#dimes").value = dimes;

    const nickels = parseInt(amount / 5);
    amount = amount % 5;
    // display # of nickels
    $("#nickels").value = nickels;

    const pennies = parseInt(amount);
    $("#pennies").value = pennies;
    // display # of pennies
};

// DOMContentLoaded event handler to attach processEntry() to the button
document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntry);
});