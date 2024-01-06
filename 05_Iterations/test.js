// Number Guessing Game

const minNum = 1
const maxNum = 100
const ans = Math.floor(Math.random()*(maxNum-minNum+1)) + minNum

let attempts = 0
let guess 
let running = true

while(running){
    guess = window.prompt(`Enter a number from ${minNum} to ${maxNum}`)
    guess = Number(guess)

    if(isNaN(guess)){
        window.alert("please enter a valid number")
    }
    else if(guess<minNum || guess>maxNum){
        window.alert("please enter a number in the given range")
    }
    else{
        attempts++
        if(guess<ans){
            window.alert(`Too low! Try again`)
        }
        else if(guess>ans){
            window.alert(`Too high! Try agsin`)
        }
        else{
            window.alert(`Correct. The answer is ${ans}. You took ${attempts} attempts`)
            running = false
        }
    }
}