"use strict";
let password = document.getElementById("password"); //textcontent
let copied = document.getElementById("copied"); //none
let icon = document.getElementById("icon");
const ten = document.querySelector('#ten');
const rangeInput = document.querySelector('#rangeInput');
let uppercase = document.getElementById("Uppercase"); //input
let lowercase = document.getElementById("Lowercase");
let numbers = document.getElementById("numbers");
let synbols = document.getElementById("Synbols");
let color_div = document.getElementById("color_div"); //array and for each
let button = document.getElementById("butt");
let slidervalue = 10;
rangeInput.addEventListener('input', (event) => {
    const inputElement = event.target;
    const thumbPosition = (parseInt(inputElement.value) - parseInt(inputElement.min)) / (parseInt(inputElement.max) - parseInt(inputElement.min)) * 100;
    const gradient = `linear-gradient(to right, #A4FFAF  0%, #A4FFAF ${thumbPosition}%, #18171F ${thumbPosition}%, rgba(24, 23, 31, 1))`;
    inputElement.style.backgroundImage = gradient;
    const slidervalue = parseInt(inputElement.value);
    ten.textContent = slidervalue.toString();
});
console.log("hi");
