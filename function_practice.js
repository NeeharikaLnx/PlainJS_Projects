function add(a,b){
    return a+b;
}

console.log(add(2,4));


const multiple =(a,b) =>a*b;
console.log(multiple(2,3));


const greet =function(name){
    return `hello ${name}`;
};

setTimeout(function(){
    console.log('this is an anonymous function');
} ,1000);


function fetchData(callback){
    setTimeout(()=>{
        console.log('Data Fetched');
        callback('Here is your data');
    },2000);
}

fetchData(function(data){
    console.log('callback recived' ,data);
});

const fruits = [
    { name: "apple", color: "red", price: 1.2, quantity: 10 },
    { name: "banana", color: "yellow", price: 0.5, quantity: 20 },
    { name: "orange", color: "orange", price: 0.8, quantity: 15 },
    { name: "kiwi", color: "green", price: 1.5, quantity: 8 }
  ];
console.log("---Fruit List---");
function list1(element){
    console.log(element);
}

fruits.forEach(list1);


//map()

const fruitcolor =fruits.map(color1);

function color1(element){
     return (element.color)
}
console.log(fruitcolor);

const fruitprice = fruits.map(function(element){
    return element.price;
}) ;

console.log(fruitprice);

const fruitqt =fruits.map(function qt(element){
        return element.quantity;
});

console.log(fruitqt);


const fruitlist12=fruits.map((element)=>{return element});
console.log(fruitlist12);
