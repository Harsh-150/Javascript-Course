let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let CreatedDate = new Date(2023,0,23);// months start from 0 in js
console.log(CreatedDate.toDateString());

let CreatedDate2 = new Date("2023-01-19");
console.log(CreatedDate2.toLocaleDateString());


let timeStamp = Date.now();
console.log(timeStamp);
console.log(CreatedDate.getTime());