// Declaration method 1 for array
const arr = [1,2,3,4,"harsh",true];

// Declaration method 2 for array
const arr2 = new Array(1,2,3,4,5,6,7,8);

// arrray methods
arr.push(6);
console.log(arr);

arr2.pop();
console.log(arr2);

arr.unshift(101);//element added at start
console.log(arr);
arr.shift();//removes first element
console.log(arr);

console.log(typeof arr.includes(89));
console.log(arr.includes(89));

console.log(arr.indexOf(true));
console.log(arr.includes(789));

const newarr = arr.join();
console.log(typeof newarr);
console.log(arr);
console.log(newarr);

chr_arr = ['a','d','e','2','t','9','0']
console.log(chr_arr.join())
console.log(chr_arr.join(''))
console.log(chr_arr.join('%'))
console.log(chr_arr.toString())

let nums = [1,2,3,4,5,6,7,8]
nums.sort((a,b)=>b-a)// for decreasing
// nums.sort((a,b)=>a-b) - for increasing
console.log(nums)