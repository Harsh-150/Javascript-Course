const user = {
    username: "Harsh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()

user.username = "Aakriti"
user.welcomeMessage()

console.log(this) // empty object


function fun(){
    let username = "Harsh"
    console.log(this)
    console.log(this.username) // ---> undefined
}
fun()
// this is not used with function

 const fun2 = function(){
    let username = "Harsh"
    console.log(this)
    console.log(this.username) // ---> undefined
}
fun2()

// ARROW FUNCTION
const func = () => {
    let username = "Harsh"
    console.log(this) // ---> gives empty object
}
func()

const addTwoNumbers = (a,b) => {
    return a+b
}

const addTwoNumbers2 = (a,b) => a+b

const addTwoNumbers3 = (a,b) => (a+b)

// returning an object
const returnObject = (a,b) => ({username: "Aakriti"})


