const btn1 = document.querySelector('.circel1')
const btn2 = document.querySelector('.circel2')
const btn3 = document.querySelector('.circel3')
const btn4 = document.querySelector('.circel4')
const btn5 = document.querySelector('.circel5')

const div1 = document.querySelector('.info-1')
const div2 = document.querySelector('.info-2')
const div3 = document.querySelector('.info-3')
const div4 = document.querySelector('.info-4')
const div5 = document.querySelector('.info-5')

btn1.addEventListener('click', myFunction1);
   
function myFunction1(){
    div1.classList.toggle('info-1-1')
    btn1.classList.toggle('c1')
    
}

btn2.addEventListener('click', myFunction2);
   
function myFunction2(){
    div2.classList.toggle('info-2-2')
    btn2.classList.toggle('c1')
}

btn3.addEventListener('click', myFunction3);
   
function myFunction3(){
    div3.classList.toggle('info-3-3')
    btn3.classList.toggle('c1')
}

btn4.addEventListener('click', myFunction4);
   
function myFunction4(){
    div4.classList.toggle('info-4-4')
    btn4.classList.toggle('c1')
}

btn5.addEventListener('click', myFunction5);
   
function myFunction5(){
    div5.classList.toggle('info-5-5')
    btn5.classList.toggle('c1')
}