// const jsuser = {
//     name: "harsh",
//     "full name": "Harsh Gupta",
//     age: 18,
//     location: "New Delhi",
//     mail: "hg214981@gmail.com",
//     isLoggedIn: false,
//     lastActiveDays: ["Monday","Friday"],
// }

// jsuser.greeting = function(){
//     console.log("Hello JS user");
// }

// jsuser.greeting2 = function(){
//     console.log(`Hello ${this["full name"]}`);
// }

// console.log(jsuser.greeting());
// console.log(jsuser.greeting2());



// const newuser = new Object()
// const newuser2 = {}

// console.log(newuser);
// console.log(newuser2);

// newuser.id = "123asd"
// newuser.name = "Harsh"
// newuser.isActive = true

// const regularuser = {
//     email: "harshhg213@gmail.com",
//     fullname: {
//         username: {
//             firstname: "Harsh",
//             lastname: "Gupta"
//         }
//     }
// }
// console.log(regularuser);
// console.log(regularuser.email);
// console.log(regularuser.fullname);

// console.log(Object.keys(regularuser));
// console.log(Object.keys(regularuser.fullname));
// console.log(Object.keys(regularuser.fullname.username));

// console.log(Object.values(regularuser.fullname.username));

// console.log(Object.entries(regularuser.fullname))

// const obj1 = { 1: "a", 2: "b"}
// const obj2 = { 3: "a", 4: "b"}
// const obj5 = { 5: "t", 7: "u"}

// const obj3 = {obj1, obj2};
// console.log(obj3);

// const obj4 = Object.assign(obj1, obj2);
// console.log(obj4);

// const obj6 = {...obj1, ...obj2, ...obj5};
// console.log(obj6);



// Destructuring in Object

const course = {
    coursename: "JS tutorials",
    coursefee: "nil",
    courseinstructor: "Hitesh choudhary",
}
console.log(course.courseinstructor);

const{courseinstructor} = course;
console.log(courseinstructor);

const {coursefee: fee} = course
console.log(fee)

// Destructuring in an object
const person = {
    age: 19,
    Name: "Harsh",
    city: "New Delhi"
}

const {age, Name, hobby} = person
console.log(age)
console.log(Name)
console.log(hobby)
// the name of the variables should match with the keys of the objects