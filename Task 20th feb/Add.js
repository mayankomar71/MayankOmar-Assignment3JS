//Defining the function that calculates sum of 'n' number of arguments
function CalSum()
{
let addition=0;
for(let i=0;i<arguments.length;i++)
{
    addition+=Number(arguments[i]);
 
}
return addition;
}
//Calling the function with different number of Arguments
console.log("Addition is" ,CalSum(1,2,43));
