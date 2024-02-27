let name = "Harsh"
let age = 19
let isLoggedIn = false
let state = null
let temp

// null -> stand alone value(empty value)
// undefined -> 
// symbol -> unique

// object

console.log(typeof null) // object
console.log(typeof undefined) // undefined

/*
  var
    1. used to define a variable
    2. has function scope but no block scope
    3. it is hoisted
*/
function f1(){
    var i = 3
    console.log(i)
}
    f1()
   // console.log(i)

{
    var k = 10
    console.log(k)
}
console.log(k)

/*
   let
    1. not hoisting 
    2. also has block scope
*/
{
    let girl = "Aakriti"
}
//console.log(girl)

/*
  const
    1. scope is exactly same as let
    2. const variables are final, cannot be re-assigned a value
*/
const country = "India"
country = "USA"
console.log(country)