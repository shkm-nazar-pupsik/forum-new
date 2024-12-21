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
commentForm = document.querySelector('.comment-form')
commentList = document.querySelector('.comment-list')
submitButton = document.querySelector('.submit-button')
commentField = document.querySelector('.comment-field')
commentForm.addEventListener('submit', form)
function form(e){
    e.preventDefault()
    let inputValue = e.target.elements.commentField.value
    let list = document.createElement('li')
    list.classList.add('user-comment')
    list.textContent = inputValue
    commentList.append(list)
    commentField.value = ''
}
let heart = document.querySelector('.heart')
let likeNumber = document.querySelector('.likes-number')
function onclick(){
    heart.classList.toggle('added')
    if (heart.classList.contains('added')){
        likeNumber.textContent = '29'
    }
    else{
        likeNumber.textContent = '28'
    }
}
heart.addEventListener('click', onclick)
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
// let headerButton = document.querySelector('.header-button') 
// let main = document.querySelector('main')
// let tagP = document.querySelector('.forum-text')
// let tagH = document.querySelectorAll('.forum-text-title')
// function burgerButtonClick(){
//     main.classList.add('main-dark');
//     tagP.classList.add('dark-text');
//     tagH.classList.add('dark-textt');
//     headerButton.textContent = 'white ☼'
// }
// headerButton.addEventListener('click', burgerButtonClick)

const themeButton = document.querySelector(".header-button");
const themeText = document.querySelector(".theme");
const mainElement = document.querySelector("main");

themeButton.addEventListener("click", () => {
  // Перемикаємо клас dark-theme на main
  mainElement.classList.toggle("dark-theme");

  // Змінюємо текст кнопки
  if (themeText.textContent.trim() === "dark☾") {
    themeText.textContent = "light☼";
  } else {
    themeText.textContent = "dark☾";
  }
});