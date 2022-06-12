let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let body = document.querySelectorAll('.body');
let toggleDark = document.getElementById('toggleDark');
let contactBtn= document.getElementById('contact-btn');
let messageContainer = document.querySelector('.send-message1 ');
let btnTop = document.querySelector('.backToTop');
let navbar = document.querySelectorAll('.navbar')


menu.addEventListener('click' , () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active')
    document.body.classList.toggle('active')
    header.classList.remove('header-mode')
    menu.classList.toggle('menu-btn');
  

})
navbar.forEach(item => {
    item.addEventListener('click' , () =>{
        if(window.innerWidth < 991){
            menu.classList.remove('fa-times');
        header.classList.remove('active')
        document.body.classList.remove('active')
        }
        
    })
})

window.onscroll = () =>{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        btnTop.style.display = 'block'
    }else{
        btnTop.style.display = 'none'
    }
}

btnTop.addEventListener('click' , () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})



window.addEventListener('scroll' , () =>{
    var reveal = document.querySelectorAll('.reveal')
    for(var i = 0 ; i < reveal.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveal[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if(revealTop < windowHeight - revealPoint){
            reveal[i].classList.add('active')
        }else{
            reveal[i].classList.remove('active')
        }
    }
})

body.forEach(item = (event) => {
    event.addEventListener('click' , () =>{
        header.classList.remove('active')
        menu.classList.remove('fa-times');
        header.classList.toggle('header-mode')
        document.body.classList.remove('active')
        menu.classList.remove('menu-btn');
       
    })
})

toggleDark.addEventListener('click' , () => {
    document.body.classList.toggle('body-mode')
    header.classList.toggle('header-mode-whitemode')
    toggleDark.classList.toggle('fa-sun');   
})

contactBtn.addEventListener('click' , () => {
    messageContainer.innerHTML = "Message Sent!!"
    

})