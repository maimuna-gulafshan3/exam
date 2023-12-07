// accessing the elements
let input = document.querySelector('.input')
let button = document.querySelectorAll('button')
let string = " ";
// making a array of buttons
let arr=Array.from('button')
// running a loop on the buttons
button.forEach(button=>{
    // adding event listeners on each button
    button.addEventListener('click',(e)=>{
        let value = e.target.innerHTML;
        // checking condition for the button =
        if(value == '='){
            string = eval(string);
            input.value = string;
        }
        // checking condition for the button AC
        else if(value == 'AC'){
            string = '';
            input.value = string;
        }
        // checking condition for the button DEL
        else if(value == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            // code for other buttons
            string+= value;
            input.value = string;
        }
    })
})