const marvel_heros = ["thor", "Ironman", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);
console.log(marvel_heros);

console.log(marvel_heros[3][1]);

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
let arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

let arr4 = [...arr1, ...arr2];
console.log(arr4);


const another_arr = [1,2,3,[4,5,6],7,[6,7,[8,9]]];
const real_another_arr = another_arr.flat(Infinity);
console.log(real_another_arr); 

console.log(Array.isArray("Hitesh"));

console.log(Array.from("Hitesh"));

console.log(Array.from({name: "hitesh"}));//empty array


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));


// Destructuring in arrays
const nums = [1,2,3,4]

const [a,b,c,d] = [1,2,3]

console.log(a)
console.log(b)
console.log(c)
console.log(d)

const [p,q,r] = [1,2,[3,4,5,6,7]]
console.log(p)
console.log(q)
console.log(r)