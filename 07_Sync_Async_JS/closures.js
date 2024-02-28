function hello(){
    let name = "Aakriti"
    console.log(name)
}
hello()


function outerFn(){
    let outerVar = "I am from outer function"
    function innerFn(){
        console.log(outerVar)
    }

    return innerFn
}

let fn = outerFn()
fn()


function customerCount(){
    let count = 0
    return function(){
        count++
        console.log("New customer count is:",count)
    }
}

let counter = customerCount()
counter()
counter()
counter()