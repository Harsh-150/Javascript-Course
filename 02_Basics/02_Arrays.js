// slice and splice
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya", "Guava", "Grapes"];

const newfruit1 = fruits.slice(2, 5);

console.log("A---->",fruits); // no change in initial array
console.log(newfruit1);

const newfruit2 = fruits.splice(2, 5);

console.log("B---->",fruits); // initial array is manipulated
console.log(newfruit1);

let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13]

console.log(nums.slice(2))
console.log(nums.slice(2,5))
console.log(nums.slice(5,-1))
console.log(nums.slice(-6,-3))
console.log(nums.slice(2,-2))


let removed = nums.splice(2,5)
console.log(removed)
console.log(nums)
