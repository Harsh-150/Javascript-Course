//["", "", ""] --> strings in array
//[{},{},{}] --> objects in array

const arr = [1,2,3,4,5,6]

// for-of loop
for(const num of arr){
    console.log(num)
}

const greeting = "Hello, Good morning"
for(const greet of greeting){
    console.log(`Each char in ${greet}`)
}


// Maps

const map = new Map()
map.set('India', 'Asia');
map.set('Congo', 'Africa')
map.set('Canada', 'North America')

console.log(map)

for(const key of map){
    console.log(key)
}

for(const [key,value] of map){
    console.log(key, ' -> ', value)
}


// const myObject = {
//     'game1': 'NFS',
//     'game2': 'BGMI',
// }

// for(const [key,value] of myObject){
//     console.log(key, ' -> ', value);
// }

// objects are not iterable