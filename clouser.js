//
//closure = A function defined inside of another function , the inner function has access
//to the variables and scope of the outer function .Allow for private variables 
//and state maintenance .Used frequently in JS frameworks ,react ,angular

function outer(){
    let count=0;

    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}

const counter =outer();
counter();
counter();
counter();
counter();
counter();


function createCounter(){
    let count=0;
    return {
        increment:function(){
            count++;
            console.log(count);
        },
        decrement:function(){
            count--;
            console.log(count);
        }

    };
}

const counter1 = createCounter();
counter1.increment();
counter1.increment();
counter1.decrement();


function createGame(){
let score =0;

function increaseScore(points){
    score +=points;
    console.log(`+${points}pts`);
}
function decreaseScore(points){
    score -=points;
    console.log(`-${points}pts`);
}

function getScore(){
    return score;
}
    return {increaseScore,decreaseScore,getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`the final score is ${game.getScore()}`);
