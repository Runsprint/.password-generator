"use strict";
const password = document.getElementById("password"); //textcontent
let copied = document.getElementById("copied"); //none
let icon = document.getElementById("icon");
let ten = document.getElementById("ten");
let rangeInput = document.getElementById("range");
let uppercase = document.getElementById("Uppercase"); //input
let lowercase = document.getElementById("Lowercase");
let numbers = document.getElementById("numbers");
let synbols = document.getElementById("Synbols");
let color_div = document.getElementById("color_div"); //array and for each
let button = document.getElementById("butt");
let medium = document.getElementById("medium"); //textcontent
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
rangeInput.addEventListener("input", change);
button.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]'); //length4
    let result = '';
    let score = 0;
    if (uppercase.checked) {
        result += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        score += 2;
    }
    ;
    if (lowercase.checked) {
        result += "abcdefghijklmnopqrstuvwxyz";
        score += 4;
    }
    if (numbers.checked) {
        result += "0123456789";
        score += 6;
    }
    if (synbols.checked) {
        result += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        score += 8;
    }
    score = Math.ceil(score / 5);
    console.log(score);
    debugger;
    if (score === 1) {
        console.log("hello");
    }
    const myString = ten.textContent;
    const myNumber = Number(myString);
    let output = "";
    console.log(myNumber);
    for (let i = 0; i < myNumber; i++) {
        const caracters = getRandomCharacter(result);
        output += caracters; //concatenation
    }
    function getRandomCharacter(str) {
        const randomIndex = Math.floor(Math.random() * result.length);
        return str.charAt(randomIndex);
    }
});
