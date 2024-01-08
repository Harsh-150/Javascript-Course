// adding 100 paras

// Method 1
const t1 = performance.now();
for(let i=1; i<=100; i++){
    let newElement = document.createElement('p')
    newElement.textContent = 'This is para ' + i

    document.body.appendChild(newElement)
}
const t2 = performance.now()
console.log("this took " + (t2-t1) + " ms")


// Method 2 - optimising a bit
const t3 = performance.now()
let myDiv = document.createElement('div')

for(let i=1; i<=100; i++){
    let newElement = document.createElement('p')
    newElement.textContent = 'This is para ' + i

    myDiv.appendChild(newElement)
}
document.body.appendChild(myDiv)
const t4 = performance.now()
console.log("this took " + (t4-t3) + " ms")

/*
Reflow
    Reflow happens when a browser recalculates the position and geometry of certain parts of a webpage, 
    such as after an update on an interactive site. This tends to be followed by repainting, 
    which is when the browser redraws the webpage to show the resulting visual updates.

Repaint
    Repaint happens when a browser redraws a web page to show the visual updates resulting from a UI change, 
    such as after an update on an interactive site. This usually follows reflowing, 
    which is when the browser recalculates the position and geometry of certain parts of a web page.

    Best performance - minimum reflow and repaint
*/

// Best Method
const t5 = performance.now()
let fragment = document.createDocumentFragment()
for(let i=1; i<=100; i++){
    let newElement = document.createElement('p')
    newElement.textContent = 'This is para ' + i

    fragment.appendChild(newElement)
}
document.body.appendChild(fragment) // 1 reflow and 1 repaint
const t6 = performance.now()
console.log("this took " + (t6-t5) + " ms")