
console.log(`Hello`);

const front = document.querySelector(".front");
const frontHeading = document.querySelector(".front-heading");
const frontBtn = document.querySelector(".front-btn");

frontBtn.addEventListener("click", ()=>{
    front.style.transition = "height 0.5s";
    front.classList.add("front-height");
    frontBtn.classList.add("front-btn-remove");
    frontHeading.classList.add("front-heading-remove");
});

const respNav = document.querySelector(".resp-nav");
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

respNav.addEventListener("click", ()=>{
    navigation.classList.toggle("navbar");
});

