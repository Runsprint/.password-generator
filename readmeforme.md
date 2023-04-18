In designe :
   i used "input[type = "range"]" method , for this slider and still standartly
   also : input[type="range"]::-webkit-slider-thumb method and gave thisval solid border.

   I used input type checkbox, which have min and max value and steps. Up have div , whichone styled : position absolute and "input[type="checkbox"]:checked + .input_up" where is background pic and background color. that means when checked happaned something, but in real its cheched jus input type chechbox.

   for typescript: I used this video, whichone I'll used in next project too.
    npm start < its compilation function from terminal (ts into js)>

    1)the firs function is for slidervalues function, wen it move, value is changing and background changing too.
    2)as HTMLSpanElement, .toString(), parseInt(string into integer);

    after I have addeventlistener on utton and after is major code. += this is a for concatenation. when someone cklick one input, there is uppercases or lowercases or numbers or symbols and result will took this value what this input have in ts code and afetr next click add next value and if we clicked every input, where will be sum of values.
    after we understand what is slidervalues value and math processes on it. I used this function for understand random number from Result :
    "
     function getRandomCharacter(str: string): string {
          const randomIndex = Math.floor(Math.random() * result.length);
          return str.charAt(randomIndex);
        } "

        for divs colors changing, we imagine scores system and they dividing 5 and get whole numbers and if this number (nashti) = 1,2,3,4 (t was max) i wrote code which color should be background color.
        function : score = Math.ceil(score /5); we have Math.,floor too and Its amrgvalebs numbers + for exlample : if I have 3,7 it daamrgvalebs 4 and math.ceil daamrgvalebs 3mde and its good because whe need lower nombers cuz if it will daamrgvalebs +,, maybe after this number % 5 and we dont need it.

        for copy function, I find this code in ts :
        function copy<T>(item: T): T {
        return JSON.parse(JSON.stringify(item));
      } 
      and used setTimeout function too when I wand display nnone or flex "copied" 
      


      :root{
    --red:#ffffff its variable in css
}  this is a variabe in css if I wanna use same thing multi time, I can ake this variable and after call.
