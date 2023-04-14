"use strict";
let password = document.getElementById("password"); //textcontent
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
    debugger;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]'); //length4
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', () => {
            // input_up.style.display= "flex"
            let result = '';
            switch (checkbox.id) {
                case 'uppercase':
                    result = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    break;
                case 'lowercase':
                    result = 'abcdefghijklmnopqrstuvwxyz';
                    break;
                case 'numbers':
                    result = '0123456789';
                    break;
                case 'symbols':
                    result = ' ! " #, $, %, &, , *, +, ,, - . /.';
                default:
                    console.log('Invalid checkbox');
                    return;
            }
        });
    });
});
