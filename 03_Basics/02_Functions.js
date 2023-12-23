const user = {
    username: "harsh",
    price: 199,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}.`);
}
handleObject(user);

handleObject(
    {
        username: "akriti",
        price: 100000,
    }
)


const myarray = [200, 300, 400, 500]

function ArrayValue(getarray){
    return getarray[2];
}
console.log(ArrayValue(myarray))