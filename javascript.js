const navlist = document.getElementById("navlist");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", ()=>{
     
    navlist.classList.toggle("navlist_active")
})

var typed = new Typed(".typing",{
    strings: ["Student","Programmer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})