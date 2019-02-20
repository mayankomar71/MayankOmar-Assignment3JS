//Defined array of objects containing Type of tax and their Percentage 
var arr = [{
        "Type": "Food",
        "Percentage": 8,
    },
    {
        "Type": "Electronics",
        "Percentage": 5,
    },
    {
        "Type": "Textile",
        "Percentage": 10,
    },
    {
        "Type": "Household",
        "Percentage": 20,
    },
    {
        "Type": "Cosmetics",
        "Percentage": 9,
    },
    {
        "Type": "None",
        "Percentage": 0,
    }
]
/*Created a function that  takes two input, type and total amount and will 
calculate tax based on type and percentage which will be found using an array of objects. 
and return an object which contains 5 values(Type,Total_amount,Percentage_Deduction,Amount_deducted)
*/
function CalTax(types, amount = 0) {
    var percent = 0;
    var net_amount;
    var Types = "None";
    let Deduction_amt;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].Type == types) {
            percent = arr[i].Percentage;
            Types = arr[i].Type;
        }



    }
    Deduction_amt = (amount * percent) / 100;
    net_amount = amount - Deduction_amt;
    var obj = {
        "Type": Types,
        "Total_amount": amount,
        "Percentage_Deduction": percent,
        "Amount_deducted": Deduction_amt,
        "Net_amount": net_amount
    };
    return obj;


}
//Calling the function
console.log(CalTax("Electronics", 15000));
console.log("\n");
console.log(CalTax("Cosmetics", 15000));
console.log("\n");
//Calling the function without any arguments
console.log(CalTax());
console.log("\n");