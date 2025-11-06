//object = A collection of related properties and /or methods can represent real world
//objects  ={key:vale , function()}



const person1 ={
  firstName :"Spongebob",
  lastName :"Squarepants",
  age:30,
  isEmployed :true,
  sayHello:function(){console.log("Hi I am spongebob")},
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

person1.sayHello();

const person2 ={
    firstName :"Patrick",
    lastName :"Star",
    age:42,
    isEmployed :false,
    sayHello:function(){console.log("Hi I am patrick")},
  }

  console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person2.sayHello();
