"use strict";
let password = document.getElementById("password");
let copied = document.getElementById("copied");
let icon = document.getElementById("icon");
let ten = document.getElementById("ten");
let rangeInput = document.getElementById("range");
let uppercase = document.getElementById("Uppercase");
let lowercase = document.getElementById("Lowercase");
let numbers = document.getElementById("numbers");
let synbols = document.getElementById("Synbols");
let color_div1 = document.getElementById("color_div1");
let color_div2 = document.getElementById("color_div2");
let color_div3 = document.getElementById("color_div3");
let color_div4 = document.getElementById("color_div4");
let button = document.getElementById("butt");
let medium = document.getElementById("medium");
let input_up = document.getElementById("input_up");
let slidervalue = 10;
function change(event) {
    const inputElement = event.target;
    const thumbPosition = (parseInt(inputElement.value) - parseInt(inputElement.min)) / (parseInt(inputElement.max) - parseInt(inputElement.min)) * 100;
    const gradient = `linear-gradient(to right, #A4FFAF  0%, #A4FFAF ${thumbPosition}%, #18171F ${thumbPosition}%, rgba(24, 23, 31, 1))`;
    inputElement.style.backgroundImage = gradient;
    const slidervalue = parseInt(inputElement.value);
    ten.textContent = slidervalue.toString();
}
;
//for update new valueo of input
rangeInput.addEventListener("input", change);
button.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let result = '';
    let score = 0;
    if (uppercase.checked) {
        result += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        score += 3;
    }
    ;
    if (lowercase.checked) {
        result += "abcdefghijklmnopqrstuvwxyz";
        score += 5;
    }
    if (numbers.checked) {
        result += "0123456789";
        score += 4;
    }
    if (synbols.checked) {
        result += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        score += 4;
    }
    const myString = ten.textContent;
    const myNumber = Number(myString);
    let output = "";
    for (let i = 0; i < myNumber; i++) {
        const caracters = getRandomCharacter(result);
        output += caracters;
    }
    function getRandomCharacter(str) {
        const randomIndex = Math.floor(Math.random() * result.length);
        return str.charAt(randomIndex);
    }
    password.textContent = output;
    score = Math.ceil(score / 5);
    if (score === 1) {
        color_div1.style.background = "#F64A4A";
        color_div2.style.background = "#18171F";
        color_div3.style.background = "#18171F";
        color_div4.style.background = "#18171F";
        medium.textContent = "TOO WEAK!";
    }
    if (score === 2) {
        color_div1.style.background = "#FB7C58";
        color_div2.style.background = "#FB7C58";
        color_div3.style.background = "#18171F";
        color_div4.style.background = "#18171F";
        medium.textContent = "WEAK";
    }
    if (score === 3) {
        color_div1.style.background = "#F8CD65";
        color_div2.style.background = "#F8CD65";
        color_div3.style.background = "#F8CD65";
        color_div4.style.background = "#18171F";
        medium.textContent = "MEDIUM";
    }
    if (score === 4) {
        color_div1.style.background = "#A4FFAF";
        color_div2.style.background = "#A4FFAF";
        color_div3.style.background = "#A4FFAF";
        color_div4.style.background = "#A4FFAF";
        medium.textContent = "STRONG";
    }
    if (score === 0) {
        color_div1.style.background = "#18171F";
        color_div2.style.background = "#18171F";
        color_div3.style.background = "#18171F";
        color_div4.style.background = "#18171F";
        medium.style.display = "none";
        copied.style.display = "none";
    }
});
icon.addEventListener("click", () => {
    if (password) { //for textcontent. without it Icant connect textcontent
        let newPassword = password.textContent;
        if (newPassword) {
            navigator.clipboard.writeText(newPassword) // major code how to copy
                .then(() => {
                alert(newPassword);
                copied.style.display = "flex";
            })
                .catch((error) => {
                console.error(error);
                copied.style.display = "none";
            });
        }
        else {
            console.error("Element has no text content");
            copied.style.display = "none";
        }
    }
    else {
        console.error("Element not found");
        copied.style.display = "none";
    }
});
