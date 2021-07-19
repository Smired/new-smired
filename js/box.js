setTimeout(window.onload = function(){
    let preloader = document.getElementById('preloader');
    preloader.style.display = "none";
}, 2000)

let btnbox1 = document.getElementById('box--1')
let btnbox2 = document.getElementById('box--2')
let btnbox3 = document.getElementById('box--3')

let box1 = document.getElementById('box-1')
let box2 = document.getElementById('box-2')
let box3 = document.getElementById('box-3')

btnbox1.onclick = function(){
    box1.classList.toggle("op1")
}