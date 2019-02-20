//Annonymous function 
function Addition(val) {
    return function (another_val) {
        if (typeof another_val !== 'undefined') {
            val = val + another_val;
            return arguments.callee;
        } else {
            return val;
        }
    }
}
console.log("Addition is:",Addition(4)(5)(6)(8)());