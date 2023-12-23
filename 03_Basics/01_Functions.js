function sayName(){
    console.log("HARSH");
}
sayName();


function add(num1, num2)/*parameters*/{
    console.log(num1 + num2);//arguments
}
add(2,3);
console.log(add(2,3));
// add(3,"1");
// add("2","45");
const result = add(7,10);
console.log(result);


function add2Numbers(a,b){
    let ans = a+b;
    return ans;
}
add2Numbers(5,3);
console.log(add2Numbers(5,3));



function loggedInUser(username){
    return `${username} just logged in.`;
}
console.log(loggedInUser("harsh"));
console.log(loggedInUser());


function loggedInUser2(username){
    if(username===undefined){
        return `Please enter a username`
    }
    else{
        return `${username} just logged in.`
    }
}
console.log(loggedInUser("harsh"));
console.log(loggedInUser());


function loggedInUser3(username = "sam")/*default value*/{
    if(!username){
        return `Please enter a username`
    }
    return `${username} just logged in.`
}
console.log(loggedInUser3("harsh gupta"))



function CalculateCartPrice(...num1)/*rest operator*/{
    return num1
}
console.log(CalculateCartPrice(200,230,500,1000))


function CalculateCartPrice2(val1, val2, ...num1)/*rest operator*/{
    return num1
}
console.log(CalculateCartPrice2(200,230,500,1000))