/*
Task List / Logic for the project

Pseudo code
*User enters the first number: User can pause and keep continuing to enter the number, this process only stops
when the user enters operators (+  -  *  /  =  CLEAR). If = is entered currently entered number is shown, if user enters CLEAR then the Array and display is cleared. Currently entered number is shown on display in real time and saved to calculationArray[1]

* User enters a operator (+  -  *  /) then first entered number is saved to an calculationArray[1] and program keeps listening to the entered operator, If the user enters few operators only the last entered operator is saved in calculationArray[3], then programs moves to listen to the second number. First Number and operator is shown on display in real time

*User enters the Second number: User can pause and keep continuing to enter the number, this process only stops
when the user enters operators (+  -  *  /  =  CLEAR). If = is entered Second number is saved to calculationArray[2] 
based on saved operator on array[3] required arithmetic function is called and array[1] and array[2]is passed to relevant arithmetic function, if user enters CLEAR then the Array and display is cleared. Currently entered calculation is shown on display in real time and saved to oncalculationArray[4]. Whole oncalculationArray is shown on the display


*/
// Section to add the required variable for the calculator
let number1;
let number2;
let operatorType;
let result;
const calculationArray=[];


// *User enters the first number: User can pause and keep continuing to enter the number, this process only stops
// when the user enters operators (+  -  *  /  =  CLEAR). If = is entered currently entered number is shown, if user enters CLEAR then the Array and display is cleared. Currently entered number is shown on display in real time and saved to calculationArray[1]
function buttonCapture(){
    //Add Click Event listeners to all the buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
    
      button.addEventListener('click', () => {
    
        displayUpdate();
        console.log(Number(button.id));
        operate(calculationArray[0],"/",calculationArray[2]);
    
    
      });
    
    
      function displayUpdate ()
      {
        const calculatorDisplay=document.querySelector('#displayOutput');
        calculationArray[0]=Number(button.id);
        calculationArray[1]=Number(button.id);
        calculationArray[2]=Number(button.id);
        calculatorDisplay.textContent=calculationArray; // This code will show array in displayout
    
    
        // number1=Number(calculationArray[0]);
        // operatorType=Number(calculationArray[1]);
        // number2=Number(calculationArray[2]);
        
    
        console.log("Number Entered is: "+operatorType+"Type is "+ typeof(operatorType));
        // operate(number1,operatorType,number2);
    
        // Testing area
        // console.log(operate);
    
      }
    
    });
    }
    

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


buttonCapture();
