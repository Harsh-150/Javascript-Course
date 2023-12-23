addOne(4);//no error
function addOne(num){
    return num+1
}
addOne(5);//no error


addTwo(5);//gives error
const addTwo = function(num){
    return num+2
}
addTwo(7);//no error