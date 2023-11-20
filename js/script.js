// script do menu responsivo 

const menuHamburguer = document.querySelector(".menu-hamburguer");
const nav = document.querySelector(".nav");

menuHamburguer.addEventListener("click", () => {
    nav.classList.toggle("menu-ativo");
});