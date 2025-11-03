const myText=document.getElementById("myText");

const mysubmit = document.getElementById("mysubmit");
const resultElement = document.getElementById("resultElement");

let age;

mysubmit.onclick=function(){
    age =myText.value;
    age= Number(age);
    if(age >=100){
        resultElement.textContent ='You are too old';
    }
   else if(age ==0){
        resultElement.textContent ='You cannot enter';
    }
    else if(age >=18){
        resultElement.textContent ='You can enter site';
    }
    else if(age <0){
        resultElement.textContent ='You cannot be less than 0';
    }
    else{
        resultElement.textContent="You must be 18+ to enter this site";
    }


};