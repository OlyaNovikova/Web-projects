console.log('Вёрстка валидная +10 \nВёрстка семантическая +20 \nВёрстка соответствует макету +48 \nТребования к css +12 \nИнтерактивность, реализуемая через css +20');

const burger = document.querySelector('.burger-menu') //берем бургер
const nav = document.querySelector('.nav') //берем блок навигацию
const menuOverlay = document.querySelector('.overlay') //берем оверлей
const closeBurger = document.querySelector('.nav-close') //берем крестик из открытого меню

const menuList = document.querySelectorAll('.nav__link') //берем коллекцию ссылок

let openMenu = () => { //открывается меню
    nav.classList.add('open')
    menuOverlay.classList.add('overlay-active')
}

let closeMenu = () => { //закрываем меню
    nav.classList.remove('open')
    menuOverlay.classList.remove('overlay-active')
}

menuList.forEach((link) => link.addEventListener('click', closeMenu)); //для коллекции можно использовать методы массивов

burger.addEventListener('click', openMenu) //регистрируем клик по полоскам бургера
closeBurger.addEventListener('click', closeMenu) //регистрируем клик по крестику
menuOverlay.addEventListener('click', closeMenu) //клик за область меню