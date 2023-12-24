const userEmail = "hg214981@gmail.com"

if(userEmail){
    console.log("Got the mail")
}
else{
    console.log("Did not get the mail")
}

// falsy values
// false, 0, -0, BigInt, "", 0n, null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}


// Nullish coalescing operator (??) : undefined, null
/*
The nullish coalescing (??) operator is a logical operator that 
returns its right-hand side operand when its left-hand side operand is null or undefined, 
and otherwise returns its left-hand side operand.
*/
let val1 
val1 = 5 ?? 10
console.log(val1)

let val2 
val2 = 5 ?? 10 ?? 80
console.log(val2)


// Ternary Operator
// condition ? true : false