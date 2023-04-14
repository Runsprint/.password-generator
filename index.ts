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
let medium = document.getElementById("medium")as HTMLInputElement;//textcontent
let input_up = document.getElementById("input_up")as HTMLInputElement;

let slidervalue: number = 10;
function change( event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const thumbPosition: number = (parseInt(inputElement.value) - parseInt(inputElement.min)) / (parseInt(inputElement.max) - parseInt(inputElement.min)) * 100;
    const gradient: string = `linear-gradient(to right, #A4FFAF  0%, #A4FFAF ${thumbPosition}%, #18171F ${thumbPosition}%, rgba(24, 23, 31, 1))`;
    inputElement.style.backgroundImage = gradient;
    const slidervalue = parseInt(inputElement.value);
    ten.textContent = slidervalue.toString();
  };
  rangeInput.addEventListener("input", change);

  button.addEventListener("click", ()=>{debugger  
    const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');//length4
    
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

})