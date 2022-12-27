const menu = document.querySelector('.fa-solid');
const  list = document.querySelector('.list');
const close = document.querySelector('.material-symbols-outlined');

function scrolltop() {
    let a = window.document;
    a = location.href = '#home';
}



menu.addEventListener('click', ()=>{

list.classList.add('active');
menu.classList.remove('fa-solid');
close.classList.add('close btn')




});

close.addEventListener('click', ()=>{

    list.classList.remove('active')
    menu.classList.add('fa-solid');
    
    
    });