const buttons = document.querySelector(".main-button");
const submit = document.querySelector(".submit");
const sec1 = document.querySelector("#section-1");
const sec2 = document.querySelector("#section-2");
const span = document.querySelector(".number4");
let number;
buttons.addEventListener("click" ,(e) => {
number = e.target.innerHTML
// e.target.style.backgraounColor = “grey”;
//    console.log(number);
console.log(number);
submit.addEventListener("click",() => {
    sec2.style.display = " block" ;
    sec1.style.display = "none";
    span.innerHTML = number ;
    console.log( "You selected:" ,`${e}`)
});
});