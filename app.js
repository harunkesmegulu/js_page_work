let circles = document.querySelector(".circles");
let submit = document.querySelector("#x");
let span = document.getElementsByTagName("span");
let sec1 = document.querySelector(".sec1");
// let sec2 = document.classList.contains(“sec2”);
sec1.addEventListener("click",(e) => {
  if(e.target.classList.contains("one")){
    e.target.style.backgroundColor=`rgb(127,136,150)`;
    e.target.style.color="white";
    sec1.style.visibility = "hidden";
    sec2.style.visibility = "visible";
    console.log("2 clicked");
    var x = 1;
  }
  else if(e.target.classList.contains("two")){
    e.target.style.backgroundColor=`rgb(127,136,150)`;
    e.target.style.color="white";
    console.log("2 clicked");
    var x = 2;
    }
    else if(e.target.classList.contains("three")){
        e.target.style.backgroundColor=`rgb(127,136,150)`;
        e.target.style.color="white";
        console.log("3 clicked");
        var x = 2;
    }
    else if(e.target.classList.contains("four")){
        e.target.style.backgroundColor=`rgb(127,136,150)`;
        e.target.style.color="white";
        console.log("4 clicked");
        var x = 2;
    }
    else if(e.target.classList.contains("five")){
        e.target.style.backgroundColor=`rgb(127,136,150)`;
        e.target.style.color="white";
        console.log("5 clicked");
        var x = 2;
    }
   else{
    console.log("other element clicked");
   }
})
// const
// submit.addEventListener(“click”,()=>{
//   sec1.style.visibility = “hidden”;
//   sec2.style.visibility = “visible”
//   span.innerText = e.target.innerText
//   })