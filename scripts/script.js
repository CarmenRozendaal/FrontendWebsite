// JavaScript Document
var navbar = document.querySelector("nav")
var ham = document.querySelector("#ham")

// toggles hamburger menu wanneer erop geklikt wordt
function toggleHamburger(){
  navbar.classList.toggle("showNav")
}

ham.addEventListener("click", toggleHamburger)
