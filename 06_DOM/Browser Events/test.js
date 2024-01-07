/*
The change in state of an object is known as event
events are fired to notify code of "interesting changes" that may affect code execution

mouse events(click, double click, etc.)
keyboard events(keypress, keyup, keydown)
form events(submit, etc)
print event and many more
*/

let heading = document.getElementById('heading')

document.addEventListener('click', function(){
    heading.textContent = 'heading is clicked'
    console.log('i have clicked on the document')
});

let links = document.getElementById("search")
links.addEventListener('click', function(event){
    event.preventDefault();
    console.log("click to nhi hua")
})

let myDiv = document.createElement('div')

for(let i=1; i<=100; i++){
    let newElement = document.createElement('p')
    newElement.textContent = 'This is new para ' + i;

    newElement.addEventListener('click', function(event){
        console.log('I have clicked on para ' + i)
    })
    myDiv.appendChild(newElement)
}

document.body.appendChild(myDiv)

let div = document.querySelector('div')
div.onmouseover = () => {
    console.log("you are inside div")
}

let btn1 = document.querySelector('#btn1')

btn1.onclick = (evt) => {
    console.log(evt)
    console.log(evt.type)
    console.log(evt.target)
    console.log(evt.clientX, evt.clientY)
}

let div = document.querySelector('div')
div.onmouseover = (evt) => {
    console.log(evt)
    console.log(evt.type)
    console.log(evt.target)
    console.log(evt.clientX, evt.clientY)
}


let btn2 = document.querySelector("#btn2")

btn2.addEventListener("click", ()=>{
    console.log("button was clicked - Handler 1")
})

btn2.addEventListener("click", ()=>{
    console.log("button was clicked - Handler 2")
})

const Handler3 = ()=>{
    console.log("button was clicked - Handler 3")
}

btn2.addEventListener("click", Handler3)

btn2.addEventListener("click", ()=>{
    console.log("button was clicked - Handler 4")
})

btn2.removeEventListener("click",Handler3)