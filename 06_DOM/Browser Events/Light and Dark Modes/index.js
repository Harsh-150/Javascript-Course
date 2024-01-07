let modeBtn = document.querySelector("#mode")
let body = document.querySelector("body")

let currMode = "light"; // change to dark

modeBtn.addEventListener("click", ()=>{
    if(currMode === "light"){
        currMode = "dark"
       // document.querySelector("body").style.backgroundColor = "black" - method 1
       body.classList.add("dark")
       body.classList.remove("light")
    }
    else{
        currMode = "light"
       // document.querySelector("body").style.backgroundColor = "white" - method 1
       body.classList.add("light")
       body.classList.remove("dark")
    }

    console.log(currMode)
})