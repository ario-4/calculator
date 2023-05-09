/*  const numberButtons = document.querySelectorAll('[data-number]');
const pperationButton = document.querySelectorAll('[data-oeration]');
const equalsButton = document.querySelectorAll('[date-equals]');
const deleteButton = document.querySelectorAll('[date-delete]');
const allClearButton = document.querySelectorAll('[date-all-clear]');
const previousOperandTextElement =document.querySelectorAll('[date-previous-operand]');
const currentOperandTextElement =document.querySelectorAll('[date-current-operand]');  */




var start = document.querySelector('#part2');
start.innerHTML= [0]
var taghsim = '/'
 var sultado;


function  chenge(enviar){
 if(start.innerHTML[0] == 0){
   start.innerHTML = ''
 }
 start.innerHTML += Number (enviar)
 sultado += Number (enviar);
 console.log(sultado)
 } 
 
 
 function taghsim1(){
  sultado += taghsim
  console.log(sultado)
}
 




 
