const max=100;
const min=1;
const answer = Math.floor(Math.random()*max)+min ;
let guess;
let attempts=0;
let running=true;

while(running){
    guess = prompt("Enter a number");
   
    guess =Number(guess);

    if(isNaN(guess) || guess <1 || guess >100){
        alert("Please enter a valid number between 1 and 100");
        attempts++;
    }
    
    else if(guess==answer){
        alert(`you guessed correct number ${answer} in ${attempts} attempts `);
        running=false;

    }
    else if(guess <answer){
        alert('too low try again');
        attempts++;
    }

    else{
        alert('too high try again');
        attempts++;
    }

}