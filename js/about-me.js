// смена позиции блоков при изменении экрана

// общие переменные
const aside = document.querySelector("aside");
const wrapperAsidePost = document.querySelector(".wrapper-aside_post");
const asideCategories = document.querySelector(".aside-categories");

// функция about-me
function aboutMePage() {
    const block1 = document.querySelector(".block_1");
    smartAdaptive(block1, asideCategories);
}

// вызов функции при загрузке страницы
window.onload = () => {
    aboutMePage();
}

// вызов функции при изменении экрана
window.onresize = () => {
    aboutMePage();
}

// функция: смена позиции блоков при изменении экрана
function smartAdaptive(a, b) {
    if (window.screen.width <= 1080) {
        a.after(asideCategories);
        b.after(wrapperAsidePost);
    } else {
        wrapperAsidePost.before(asideCategories);
        aside.appendChild(wrapperAsidePost);
    }
}