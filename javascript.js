
const toggleBtn = document.querySelector('.hamburger')
const toggleBtnIcon = document.querySelector('.hamburger i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

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


//Scroll Reveal

const sr = ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".about-intro, .section-title, .contact_data, .left, .title, .logo", {
  origin: "left",
});
sr.reveal(
  ".tab-titles,.about-text,.row,.portfolio-wrapper,.contact,.contact-form, .row2",
  {
    origin: "bottom",
  }
);
sr.reveal(".right, .fa-brands, .row1, .navlist", {
  origin: "top",
});
