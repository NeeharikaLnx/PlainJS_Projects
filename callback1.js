sum(displayPage,1,2);


function sum(callback ,x,y){
    let result=x+y;
    callback(result);
}


function displayConsole(result){
    console.log(result);
}

function displayPage(result){
   document.getElementById("h").textContent=result;
}