// slice and splice
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya", "Guava", "Grapes"];

const newfruit1 = fruits.slice(2, 5);

console.log("A---->",fruits); // no change in initial array
console.log(newfruit1);

const newfruit2 = fruits.splice(2, 5);

console.log("B---->",fruits); // initial array is manipulated
console.log(newfruit1);