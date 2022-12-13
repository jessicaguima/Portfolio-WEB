const menu = document.querySelector('.menu')
const botaoMenuOpen = document.querySelector('.botao-menu-open')
const botaoMenuClose = document.querySelector('.botao-menu-close')

botaoMenuOpen.addEventListener('click',function(){
    menu.classList.add('menu-open')
})

botaoMenuClose.addEventListener('click',function(){
    menu.classList.remove('menu-open')
})