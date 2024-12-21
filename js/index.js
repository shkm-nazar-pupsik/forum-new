let image = document.querySelector('img')
let list = document.querySelector('ul')
let nav = document.querySelector('nav')
let header = document.querySelector('header')
let btn= document.querySelector('.burger-button')
btn.addEventListener('click', addMenu)
header.style.alignItems = 'center';
function addMenu(){
    if (list.classList.contains('active')){
        list.classList.remove('active')
        image.src = 'img/menu.jpg'
        nav.style.height = 'auto'
        header.style.alignItems = 'center'
        btn.classList.remove('rotate')
    }
    else{
        list.classList.add('active')
        image.src = 'img/x.jpg'
        nav.style.height = '30vh'
        header.style.alignItems = 'flex-start'
        btn.classList.add('rotate')
    }
}
cookiesAgr = document.querySelector('aside')
cookiesButton = document.querySelector('.button')
let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    cookiesButton.addEventListener('click', cookiesFun)
function cookiesFun(){
    overlay.classList.remove('overlay')
    cookiesAgr.classList.add('cookies-agreement-closed')
}
// Додаємо слухач для кнопки перемикання теми
const themeButton = document.querySelector(".header-button");
const themeText = document.querySelector(".theme");
const hero = document.querySelector('.hero')

// Встановлюємо слухач подій
themeButton.addEventListener("click", () => {
  // Перемикаємо клас темної теми на body
  document.body.classList.toggle("dark-theme");
  hero.classList.toggle('dark-theme')

  // Змінюємо текст кнопки
  if (themeText.textContent.trim() === "dark☾") {
    themeText.textContent = "light☼";
  } else {
    themeText.textContent = "dark☾";
  }
});