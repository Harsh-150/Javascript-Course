/*
.checked - property that determines the checked state of an HTML checkbox or radio button element
*/
const myCheck = document.getElementById("mycheck")
const visaBtn = document.getElementById("visabtn")
const masterBtn = document.getElementById("masterbtn")
const paypalBtn = document.getElementById("paybtn")

const mySubmit = document.getElementById("mysubmit")

const subResult = document.getElementById("subResult")
const paymentresult = document.getElementById("paymentResult")

mySubmit.onclick = function(){
    if(myCheck.checked){
        subResult.textContent = `You are subscribed`
    }
    else{
        subResult.textContent = `You are not subscribed`
    }
    
    if(visaBtn.checked){
        paymentresult.textContent = `You are paying with Visa`
    }

    else if(masterBtn.checked){
        paymentresult.textContent = `You are paying with mastercard`
    }

    else if(paypalBtn.checked){
        paymentresult.textContent = `You are paying with Paypal`
    }

    else{
        paymentresult.textContent = `You must select a payment method`
    }

    
}