const navbar = document.getElementById("nav");
const navbtn = document.getElementById("nav-btn");
const closebtn = document.getElementById("slidebar-close");
const slidebar = document.getElementById("slidebar");
const navlinks = document.getElementById("nav-links");
const date = document.querySelector("#date");

// add fixed class to navbar
window.addEventListener("scroll" , function(){
    if(window.scrollY > 80){
        navbar.classList.add("nav-fixed");
    }else {
        navbar.classList.remove("nav-fixed");
    }
})

// show sidebar
navbtn.addEventListener("click",function(){
    slidebar.classList.add("show-sidebar");
})

// close sidebar
closebtn.addEventListener("click",function(){
    slidebar.classList.remove("show-sidebar");
})

// set year
date.innerHTML = new Date().getFullYear();