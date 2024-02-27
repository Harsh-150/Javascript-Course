// Immediately Invoked Function Expressions
//()()

(function hello(){
    // named IIFE
    console.log(`DB connected`)
})(); //semicolon is necessary

((name)=>{
    console.log(`DB connected 2 ${name}`);
})('Aakriti');


(function(){
    console.log("Hello Aakriti")
})();