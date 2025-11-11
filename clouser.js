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
