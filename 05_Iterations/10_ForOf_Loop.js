// for-of statement creates a loop iterating over iterable objects.
// including: built-in string, array, array-like objects like nodelist and map

var scores = [12,2,35,66,32,34342,23,354]

for(var score of scores){
    console.log(score)
}

let colors = ['red','blue','green','white','black']
for(var [index, color] of colors.entries()){
    console.log(index, '->', color)
}


var str = 'poiuytrewasdfghjkmnbvcx'

for(var c of str){
    console.log(c)
}