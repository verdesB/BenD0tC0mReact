
const menuEvent = () => {const button = document.querySelector('.menu');
const menuList = document.querySelector('.header__list')
button.addEventListener('click', (e) => {
    menuList.classList.toggle('show');
    menuList.classList.toggle('closed')
});}

export default menuEvent
