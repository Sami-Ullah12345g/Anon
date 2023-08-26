const menuBtn = document.querySelector('.menu-icon');
const menubar = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn')
const body = document.querySelector('.body');

menuBtn.addEventListener('click' , ()=>{
    menubar.classList.toggle('show-menu');
    body.classList.toggle('overlay-2');
})


closeBtn.addEventListener('click' , ()=>{
    if(menubar.classList.contains('show-menu')){
        menubar.classList.remove('show-menu');
    }
})

closeBtn.addEventListener('click' , ()=>{
    if(body.classList.contains('overlay-2')){
        body.classList.remove('overlay-2');
    }
})


const filterbtn = document.querySelector('.filter-icon');
const sidebar = document.querySelector('.sidebar');
const closesidebar = document.querySelector('.close-sidebar-btn')


closesidebar.addEventListener('click' , ()=>{
    if(sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar');
    }
})


closesidebar.addEventListener('click' , ()=>{
    if(body.classList.contains('overlay')){
        body.classList.remove('overlay');
    }
})



filterbtn.addEventListener('click' , ()=>{
    sidebar.classList.toggle('show-sidebar');
    body.classList.toggle('overlay');
})



document.onclick = function(e){
    if(!filterbtn.contains(e.target) && !sidebar.contains(e.target)){
        sidebar.classList.remove('show-sidebar');
        body.classList.remove('overlay');
    }

    if(!menuBtn.contains(e.target) && !menubar.contains(e.target)){
        menubar.classList.remove('show-menu');
        body.classList.remove('overlay-2');
    }
}

const myModal = new bootstrap.Modal('#exampleModal');

window.addEventListener('DOMContentLoaded' , ()=>{
    myModal.show();
})