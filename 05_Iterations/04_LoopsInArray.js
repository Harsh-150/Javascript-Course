const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Java',
    swift: 'Swift',
}

// for in loop
for(const key in myObject){
    console.log(key)
}
for(const key in myObject){
    console.log(`${key} is a shortcut for ${myObject[key]}`)
}


const programming = ["js", "cpp", "go", "py", "c", "java"]
for(const key in programming){
    console.log(`${key} is key and ${programming[key]} is value`)
}


// const map = new Map()
// map.set('India', 'Asia');
// map.set('Congo', 'Africa')
// map.set('Canada', 'North America')
// map.set('France', 'Europe')

// for(const key in map){
//     console.log(key) // gives no result
// }