const checkbox=document.getElementById("checkbox");

const visaBtn=document.getElementById("visaBtn");

const mastercardBtn=document.getElementById("mastercardBtn");

const paypalBtn =document.getElementById("paypalBtn");

const MySubmit =document.getElementById("MySubmit");
const subResult =document.getElementById("subResult");
const payResult =document.getElementById("payResult");


MySubmit.onclick= function(){
    if(checkbox.checked){
         subResult.textContent='You are subscribed';
    }
    else{
        subResult.textContent="You are not subscribed";


    }

    if(visaBtn.checked){
        payResult.textContent="You are paying with visa";
    }
    else if(mastercardBtn.checked){
        payResult.textContent="You are paying with master card";
    }
    else if(paypalBtn.checked){
        payResult.textContent="You are paying with paypal";
    }

    else{
        payResult.textContent="You must select a payment type";
    }
}


