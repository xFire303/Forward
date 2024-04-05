// hamburger menu
const containerNav = document.querySelector('.linkContainer');
const linkNav = document.querySelectorAll(".link");
const hamburger = document.getElementById('hamburger');

//show menu
hamburger.addEventListener('click',()=>{
    containerNav.classList.toggle('showMenu');
})
//chiude il menu ogni volta che clicco un link
linkNav.forEach((link)=>{
    link.addEventListener("click",()=>{
        containerNav.classList.toggle("showMenu");
    })
})