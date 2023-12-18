// Primitive and Non-Primitive Data Types

/*primitive:
    7 types:
        string, number, boolean, null, undefined, symbol, BigInt
*/
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);


const bigNumber = 123456789098765432n;// bigInt 


/* non-primitive(reference type):
    array, objects, functions
*/
const avatars = ["Ram", "Krishna", "Vaman"];

let obj = {
    name: "Harsh",
    age: 19,
};

const func = function(){
    console.log("Hello World")
}

console.log(typeof null);

/*
Stack memeory is used in primitive data types
heap memory is used in non-primitive data types
*/