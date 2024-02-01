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

const resumeHeading = document.querySelector(".tab-titles");
const resumeTabs = document.querySelectorAll(".tab-content");

resumeHeading.onclick = (event) => {
  event.preventDefault();
  const clickedItemId = event.target.dataset.id;
  if (clickedItemId) {
    resumeHeading.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");

    resumeTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    const correspondingTab = document.getElementById(clickedItemId);
    correspondingTab.classList.add("active");
  }
};