// object literals

const mySym = Symbol("key1");

const jsuser = {
    name: "harsh",
    "full name": "Harsh Gupta",
    age: 18,
    location: "New Delhi",
    mail: "hg214981@gmail.com",
    isLoggedIn: false,
    lastActiveDays: ["Monday","Friday"],
    [mySym]: "mykey1",
}

console.log(jsuser.mail);
console.log(jsuser["isLoggedIn"]);
console.log(jsuser["full name"]);
console.log(typeof jsuser[mySym]);
console.log(jsuser[mySym]);

jsuser.mail = "kjhgf@oiuy.com";
console.log(jsuser);
Object.freeze(jsuser)
jsuser.mail = "qwerty@asdf.com"; // it will not change
console.log(jsuser);
