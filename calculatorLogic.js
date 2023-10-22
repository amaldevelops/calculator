/*
Task List / Logic for the project
[] Add number to the const calculationArray[] so inputted
first number can be assigned to calculationArray[1]
selected operator should be saved up in calculationArray[3]
calculationArray[2] which is the second number to be calculated
calculated result should be stored oncalculationArray[4]

[] A function should check that All three values of the calculationArray[1][2][3] is not null, if even one is null should wait for user input and based on the calculationArray[3] Operator saved call up the required calculation function

[] After running the required calculation function related to the calculations i.e addition, subtraction, etc Store the result in the oncalculationArray[4] and call up the display function to show the output in the calculator, set oncalculationArray[1][2][2] to Null


*/
// Section to add the required variable for the calculator
let number1;
let number2;
let operatorType;
let result;
const calculationArray=[];


// Function to: Add Numbers
let addNumbers=(number1,number2)=>
{
    result=number1+number2;
    console.log(result);
    // return displayUpdate(result);  
    // calculatorDisplay.textContent=operate; // This code will show array in displayout
//   displayUpdate(result);


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

function buttonCapture(){
//Add Click Event listeners to all the buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

  button.addEventListener('click', () => {

    displayUpdate();

  });


  function displayUpdate ()
  {
    const calculatorDisplay=document.querySelector('#displayOutput');
    calculationArray[0]=Number(button.id);
    calculationArray[1]=Number(button.id);
    calculationArray[2]=Number(button.id);
    calculatorDisplay.textContent=calculationArray; // This code will show array in displayout


    number1=Number(calculationArray[0]);
    operatorType=Number(calculationArray[1]);
    number2=Number(calculationArray[2]);
    

    console.log("Number Entered is: "+operatorType+"Type is "+ typeof(operatorType));
    // operate(number1,operatorType,number2);

    // Testing area
    // console.log(operate);
    operate(calculationArray[0],"+",calculationArray[2]);

  }

});
}

buttonCapture();
