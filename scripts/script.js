// JavaScript Document

// var kruisAnimatie = document.querySelector("nav");

// function AnimatieTonen() {
//   kruisAnimatie.classList.toggle("kruis");
// }

// kruisAnimatie.addEventListener("click",AnimatieTonen);


var navbar = document.querySelector("nav")
var ham = document.querySelector("#hamburgermenu")

// toggles hamburger menu wanneer erop geklikt wordt
function toggleHamburger(){
  navbar.classList.toggle("showNav")
}
 
ham.addEventListener("click", toggleHamburger)