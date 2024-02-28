function operation(operatorFn, a, b){
    return operatorFn(a,b)
}
function add(a,b){
    return a+b
}
console.log(operation(add,1,9))


function getGreetMethod(){
    return function(){
        console.log("Hello World")
    }
}
let greet = getGreetMethod()
console.log(typeof greet)
greet()

// For Each
players = ["Sachin", "Dhoni", "Virat", "Sehwag"]
players.forEach((player)=>console.log(player))

// map - creation of new transformed array
arr = [1,2,3,4,5,6,7]
cube = arr.map(num => num**3)
console.log(arr)
console.log(cube)

// filter
arr1 = [1,2,3,4,5,6,7,8,9,10]
let even_arr = arr1.filter((num)=>num%2==0)
console.log(even_arr)

//reduce
arr2 = [1,2,3,4,5,6,7,8,9,10]
let sum = arr2.reduce((curr,next)=>curr+next)
console.log(sum)