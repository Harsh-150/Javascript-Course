function greet(name, callback){
    const greeting = "Hello " + name
    callback(greeting)
}
function displayGreeting(message){
    console.log(message)
}
greet("Aakriti",displayGreeting)


