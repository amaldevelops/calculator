// Function to: Add Numbers
let number1=35;
let number2=10;
let operatorType;
let result;

let addNumbers=(number1,number2)=>
{
    result=number1+number2;
    console.log(result);

}


// Function to: subtract Numbers


let subtract=(number1,number2)=>
{
    result=number1-number2;
    console.log(result);

}


// Function to: multiply Numbers

let multiply=(number1,number2)=>
{
    result=number1*number2;
    console.log(result);
}


// Function to: divide Numbers

// function divide(number1,number2)
// {
    
// }

let divide =(number1,number2) =>
{
    result=number1/number2;
    console.log(result);

}




// Operator Function to call up each operator
function operate(number1,operatorType,number2,)
{
if (operatorType==="+")
{
    console.log("Plus operator")
    addNumbers(number1,number2);
}

else if(operatorType==="-")
{
    console.log("Minus Operator");
    subtract(number1,number2);
}

else if (operatorType==="*")
{
    console.log("Multiplication");
    multiply(number1,number2);

}

else if (operatorType==="/")
{
console.log("Division")
divide(number1,number2);

}

}

operate(10,"*",10);

//Add Click Event listeners to all the buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

  button.addEventListener('click', () => {
    console.log(button.id);
  });
});