
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const submit = document.querySelector(".submit");
const sec1 = document.querySelector("#section-1");
const sec2 = document.querySelector("#section-2");
const span = document.querySelector(".number4");

let number1;
let number2;
let number3;
let number4;
let number5;


button1.addEventListener("click",(e) => {
number1 = e.target;
number1.style.backgroundColor = "black";
number2.style.backgroundColor = "rgb(37, 47, 56)";
number3.style.backgroundColor = "rgb(37, 47, 56)";
number4.style.backgroundColor = "rgb(37, 47, 56)";
number5.style.backgroundColor = "rgb(37, 47, 56)";

submit.addEventListener ("click",() => {
    sec2.style.display = " block" ;
    sec1.style.display = "none";
    span.innerHTML = number1.innerHTML ;
   
});
});
button2.addEventListener("click",(e) => {
number2 = e.target;
number2.style.backgroundColor = "black";
number1.style.backgroundColor = "rgb(37, 47, 56)";
number3.style.backgroundColor = "rgb(37, 47, 56)";
number4.style.backgroundColor = "rgb(37, 47, 56)";
number5.style.backgroundColor = "rgb(37, 47, 56)";

submit.addEventListener ("click",() => {
    sec2.style.display = " block" ;
    sec1.style.display = "none";
    span.innerHTML = number2.innerHTML ;
   
});
});
button3.addEventListener("click",(e) => {
number3 = e.target;
number3.style.backgroundColor = "black";
number2.style.backgroundColor = "rgb(37, 47, 56)";
number1.style.backgroundColor = "rgb(37, 47, 56)";
number4.style.backgroundColor = "rgb(37, 47, 56)";
number5.style.backgroundColor = "rgb(37, 47, 56)";

submit.addEventListener ("click",() => {
    sec2.style.display = " block" ;
    sec1.style.display = "none";
    span.innerHTML = number3.innerHTML ;
   
});
});
button4.addEventListener("click",(e) => {
number4 = e.target;
number4.style.backgroundColor = "black";
number2.style.backgroundColor = "rgb(37, 47, 56)";
number3.style.backgroundColor = "rgb(37, 47, 56)";
number1.style.backgroundColor = "rgb(37, 47, 56)";
number5.style.backgroundColor = "rgb(37, 47, 56)";

submit.addEventListener ("click",() => {
    sec2.style.display = " block" ;
    sec1.style.display = "none";
    span.innerHTML = number4.innerHTML ;
   
});
});
button5.addEventListener("click",(e) => {
    number5 = e.target;
    number5.style.backgroundColor = "black";
    number2.style.backgroundColor = "rgb(37, 47, 56)";
    number3.style.backgroundColor = "rgb(37, 47, 56)";
    number4.style.backgroundColor = "rgb(37, 47, 56)";
    number1.style.backgroundColor = "rgb(37, 47, 56)";
    
    
    submit.addEventListener ("click",() => {
        sec2.style.display = " block" ;
        sec1.style.display = "none";
        span.innerHTML = number5.innerHTML ;
       
    });
    });