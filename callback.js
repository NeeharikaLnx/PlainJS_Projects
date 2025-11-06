

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