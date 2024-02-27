{}  // ----->  scope
 let a = 10
 if(true){
    let a = 20
    let b = 30

    console.log("inside function: ", a);
 }
 console.log("outside function: ",a);



 function one(){
    const username = "harsh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
   // console.log(website)  ->  error

    two()
 }
 one()



 if(true){
    const username = "harsh"
    if(username === "harsh"){
        const website = "youtube"
        console.log(username + website);
    }
 }
// console.log(username)  ->  outside scope 

{
   var x = 20
   console.log(x)
}
   console.log(x) // var is not block scoped

{
   const y = 190
   console.log(y)
}
   console.log(y) // let and const are block scoped