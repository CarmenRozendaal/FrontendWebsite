// JavaScript Document
var navbar = document.querySelector(".navbar")
var ham = document.querySelector(".ham")

// toggles hamburger menu wanneer erop geklikt wordt
function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
}

ham.addEventListener("click", toggleHamburger)
