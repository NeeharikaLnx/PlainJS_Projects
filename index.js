let count =0;
const inc_btn=document.getElementById("inc_btn");
const dec_btn=document.getElementById("dec_btn");
const reset=document.getElementById("reset_btn");
const l1=document.getElementById("l1")


inc_btn.onclick =function(){
    count++;
    l1.textContent=count;
};

dec_btn.onclick = function(){
    count--;
    l1.textContent=count;
};
reset.onclick =function(){
    count=0;
    l1.textContent=count;
};