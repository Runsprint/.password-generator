let password = document.getElementById("password")as HTMLInputElement; //textcontent
let copied = document.getElementById("copied")as HTMLInputElement; //none
let icon = document.getElementById("icon")as HTMLInputElement;
let ten = document.getElementById("ten")as HTMLSpanElement;
let rangeInput = document.getElementById("range")as HTMLInputElement;
let uppercase = document.getElementById("Uppercase")as HTMLInputElement;//input
let lowercase = document.getElementById("Lowercase")as HTMLInputElement;
let numbers = document.getElementById("numbers")as HTMLInputElement;
let synbols = document.getElementById("Synbols")as HTMLInputElement;
let color_div = document.getElementById("color_div")as HTMLInputElement;//array and for each
let button = document.getElementById("butt")as HTMLInputElement;
let slidervalue: number = 10;
console.log(rangeInput)
rangeInput.addEventListener('input', (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    const thumbPosition: number = (parseInt(inputElement.value) - parseInt(inputElement.min)) / (parseInt(inputElement.max) - parseInt(inputElement.min)) * 100;
    const gradient: string = `linear-gradient(to right, #A4FFAF  0%, #A4FFAF ${thumbPosition}%, #18171F ${thumbPosition}%, rgba(24, 23, 31, 1))`;
    inputElement.style.backgroundImage = gradient;
    const slidervalue = parseInt(inputElement.value);
    ten.textContent = slidervalue.toString();
  });
  console.log("hi");