const menu = document.querySelector(".menu")
const nav = document.querySelector(".nav")
const navbar = document.querySelector(".navbar")
const burger = document.querySelector(".burger")
const clsbtn = document.querySelector(".clsbtn")
const headertext = document.querySelector(".headertext")
const containerright = document.querySelector(".containerright")
const nav__contact = document.querySelector(".nav__contact")
const icon_background = document.querySelector(".icon_background")
const link = document.querySelector(".link")


menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    nav.classList.toggle("active");
    navbar.classList.toggle("active");
    burger.classList.toggle("active");
    clsbtn.classList.toggle("active");
    headertext.classList.toggle("active");
    containerright.classList.toggle("active");
    nav__contact.classList.toggle("active");
    icon_background.classList.toggle("active");
    link.classList.toggle("active");
})