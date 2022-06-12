let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let body = document.querySelectorAll('.body');
let toggleDark = document.getElementById('toggleDark')


menu.addEventListener('click' , () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active')
    document.body.classList.toggle('active')
    header.classList.remove('header-mode')
    menu.classList.toggle('menu-btn');
  

})
window.onscroll = () => {
    if(window.innerWidth < 991){
        menu.classList.remove('fa-times');
    header.classList.remove('active')
    document.body.classList.remove('active')
   
    }
}
body.forEach(item = (event) => {
    event.addEventListener('click' , () =>{
        header.classList.remove('active')
        menu.classList.remove('fa-times');
        header.classList.toggle('header-mode')
        document.body.classList.remove('active')
        menu.classList.toggle('menu-btn');
       
    })
})

toggleDark.addEventListener('click' , () => {
    document.body.classList.toggle('body-mode')
    header.classList.toggle('header-mode-whitemode')
    toggleDark.classList.toggle('fa-sun');
 
    
    
})