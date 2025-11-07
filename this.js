//this == reference to the object where this is used
//the object depends on the immediate contect person.name =this.name
// We cannot use arrow functions with the this keyword

const person1={
    name:"spongebob",
    favfood:"hamburger",
    sayHello:()=>{
        console.log(`Hi I a, ${this.name}`)
    },//it doesnot work because this is poinint to window function here and not sayHello.

    eat :function(){
        console.log(`${this.name} is eating${this.favfood}`)
    }
}


const person2={
    name:"Patrick",
    favfood:"pizza",
    sayHello :function(){
        console.log(`Hi I am, ${this.name}`)
    },

    eat :function(){
        console.log(`${this.name} is eating${this.favFood}`)
    }
}


person1.eat();
person1.sayHello();



// constructor : special method for defining the properties and methods of objects
// to construct the objects 

function Car (make , model , year , color){
   this.make = make,
   this.model=model,
   this.color =color,
   this.year=year
}


const car1 =new Car("Ford" , "Mustang",2024,"red");

console.log(car1.make);
console.log(car1.model);
console.log(car1.color);
console.log(car1.year);

