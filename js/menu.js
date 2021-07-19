let menu = document.getElementById('menu');
let nav = document.getElementById('nav-menu');
let menuB = document.getElementById('menu-b');
let menuC = document.getElementById('menu-c');
let menuA = document.getElementById('menu-a');
let wrap = document.getElementById('wrapper')

menu.onclick = function(){
    nav.classList.toggle("top-0")
    menuB.classList.toggle("menu-bef")
    menuC.classList.toggle("menu-cen")
    menuA.classList.toggle("menu-aft")
    wrap.classList.toggle("din")
};