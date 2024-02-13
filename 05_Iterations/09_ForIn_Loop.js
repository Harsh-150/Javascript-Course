// for-in loop allows to loop through properties of an object

var colors = {
    first: 'blue',
    second: 'red',
    third: 'white'
};

for(var color in colors){
    console.log(color,'->',colors[color])
}

var colorsArr = ['red','blue','green','pink'];
for(var color in colorsArr){
    console.log(color,'->',colorsArr[color])
}