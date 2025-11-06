

function greet(cb){
    console.log("Before callback");
    cb();
    console.log("After callback");
}

function hello(){
    console.log("hello");
}

greet(hello);

//Anonymous Function

function greet1(callback){
    console.log("Before");
    callback();
    console.log("After");
}

greet1(function(){
   console.log("Hi there")
});


//Arrow Function

function greet3(callback){
    console.log("using arrow function");
    callback();
    console.log("after callback");
}

greet3(()=>console.log("Hello world"));


//Callbacks with parameters

function greet4(name,callback){
    console.log("Hello " + name);
    callback();
}

greet4("Neeha",function(){
    console.log("Good bye");
});


//Call Back inside built in Javascript function

setTimeout(function (){
    console.log("This runs after 2 seconds");
},2000);