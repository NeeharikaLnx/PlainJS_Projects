//.filter()= creates a new array by filtering out elements



let numbers=[1,2,3,4,5,6,7];

let evenNums=numbers.filter(isEven);
let oddNums =numbers.filter(isOdd);


console.log(evenNums);
console.log(oddNums);

function isEven(element){
    return element%2 ===0;
}

function isOdd(element){
    return element%2!=0;
}


const age=[16,17,18,19,20,60];

const adults = age.filter(isAdult);
const child = age.filter(isChild);
console.log(adults);
console.log(child);

function isAdult(element){
    return element >=18;
}
function isChild(element){
    return element <18;
}



//.reduce () = reduce the elements of an array to a single value

const prices =[5,30,10,25,15,20];

const total =prices.reduce(sum);
console.log(`${total.toFixed(2)}`);

function sum(accumulator ,element){
    return accumulator+element;
}


// grades

const grades =[75,50,90,80,65,95];

const maximum = grades.reduce(getMax);
console.log(maximum);

const minimum = grades.reduce(getMin);
console.log(minimum);

function getMax(acc ,element){
  return Math.max(acc,element);
}

function getMin(acc ,element){
    return Math.min(acc,element);
}

