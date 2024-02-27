const name = "harsh";
const age = 19;

console.log(name + age);// bad practice

console.log(`my name is ${name} and i am ${age}.`);

const getname = new String('harsh gupta');
console.log(getname[0]);
console.log(getname[1]);
console.log(getname[2]);
console.log(getname[4]);
console.log(getname[6]);
console.log(getname[7]);

console.log(getname.length);
console.log(getname.toUpperCase());
console.log(getname.charAt(5));
console.log(getname.indexOf('h'));

const newString = getname.substring(1,5);//1 is inclusive and 5 is not inclusive
console.log(newString);

const newString2 = "    qwerxc  poiuyt   ";
console.table([newString2, newString2.trim()]);


const url = "https://harsh.com/harsh%20gupta";
console.log(url.replace('%20','-'));
console.log(url.includes('harsh'));
console.log(url.includes('ayush'));

let str = "asdfghjkl"
str[5] = 'z'
console.log(str) // strings are immutable


let firstName = "Aakriti"
let lastName = "Dadhich"
let fullName = firstName.concat(lastName)
console.log(fullName)

let myName = "HarshGupta"
console.log(myName)
console.log(myName.slice(2))
console.log(myName.slice(2,5))
console.log(myName.slice(-5))
console.log(myName.slice(-5,-1))