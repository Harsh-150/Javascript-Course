let str1 = "hello ";
let str2 = "harsh";
console.table([typeof(str1+str2), str1+str2]);

console.table([typeof("1"+2), "1"+2]);

console.table([typeof("1"+2+2), "1"+2+2]);

console.table([typeof("1"+"2"), "1"+"2"]);

console.table([typeof(1+"5"), 1+"5"]);

console.table([typeof(1+3+"5"), 1+3+"5"]);

let num1, num2, num3
num1 = num2 = num3 = 2+2 // bad practice

// Comparison Operations
console.table([(2>1), (3==2), (5!=8)]);

console.table([("2">1), (2>"10"), (null>0), (null==0), (null<0)]);
console.log(null>=0); // true

console.log(undefined == 0); // false

console.log(3==='3'); // false