const btnMenu = document.getElementById("btn-menu");
const btnClose = document.getElementById("btn-close");
const navMenu = document.querySelector("header nav");

btnMenu.addEventListener("click",()=>{
  // console.log("click");
  navMenu.classList.add("nav-visible");
});

btnClose.addEventListener("click", ()=>{
  navMenu.classList.remove("nav-visible");

});
