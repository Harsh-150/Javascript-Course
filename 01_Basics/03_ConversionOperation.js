let score = 33;
console.log(typeof score);

score = '33';
console.log(typeof score);

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);

let ans = '33abs';
let valueOfNumber = Number(ans);
console.log(valueOfNumber);
console.log(typeof valueOfNumber);


// '33' -> 33
// '33asd' -> NaN
// 'null' -> 0
// 'true' -> 1
// 'false' -> 0
// 'undefined' -> NaN

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// 1 -> true, 0 -> false
// ""-> false
// "hitesh" -> true


let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);