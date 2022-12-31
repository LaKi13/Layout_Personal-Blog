// slider mini: right-block ==============================================================
let sliderMini = document.querySelectorAll(".slider-mini");
let arrowSlider = 0;
document.querySelector(".btn-left").onclick = () => {
    arrowSlider += 300;
    if (arrowSlider === 300) arrowSlider = -600;
    sliderMini[0].style.transform = "translate3d(" + arrowSlider + "px, 0px, 0px)";
    sliderMini[1].style.transform = "translate3d(" + arrowSlider + "px, 0px, 0px)";
    sliderMini[2].style.transform = "translate3d(" + arrowSlider + "px, 0px, 0px)";
}

document.querySelector(".btn-right").onclick = () => {
    arrowSlider -= 300;
    if (arrowSlider === -900) arrowSlider = 0;
    sliderMini[0].style.transform = "translate3d(" + arrowSlider + "px, 0px, 0px)";
    sliderMini[1].style.transform = "translate3d(" + arrowSlider + "px, 0px, 0px)";
    sliderMini[2].style.transform = "translate3d(" + arrowSlider + "px, 0px, 0px)";
}





// смена позиции блоков при изменении экрана

// общие переменные
const aside = document.querySelector("aside");
const asideCategories = document.querySelector(".aside-categories");
const asideLastPost = document.querySelector(".aside-last_post");
const asideBottom = document.querySelector(".aside-bottom");
let asideSocialIcons = document.querySelectorAll(".aside-social_icons a"); // social icons collection
const asideBannerMini = document.querySelector(".aside-banner_mini");

// функция home_page
function homePage() {
    const block2 = document.querySelector(".block_2");
    const block7 = document.querySelector(".block_7");

    smartAdaptive(block2, block7);
}

// вызов функции при загрузке страницы
window.onload = () => {
    homePage();
}

// вызов функции при изменении экрана
window.onresize = () => {
    homePage();
}

// функция: смена позиции блоков при изменении экрана
function smartAdaptive(a, b) {
    if (window.screen.width <= 1080) {
        a.before(asideCategories);
        a.after(asideLastPost);
        b.after(asideBottom);

        // text icon
        asideSocialIcons[0].innerHTML = `<span class="icon-span">twitter</span>`;
        asideSocialIcons[1].innerHTML = `<span class="icon-span">facebook</span>`;
        asideSocialIcons[2].innerHTML = `<span class="icon-span">planet</span>`;
        asideSocialIcons[3].innerHTML = `<span class="icon-span">pinterest</span>`;
        asideSocialIcons[4].innerHTML = `<span class="icon-span">linkedin</span>`;
    } else {
        asideBannerMini.before(asideCategories);
        asideBannerMini.after(asideLastPost);
        aside.appendChild(asideBottom);

        // text icon none
        asideSocialIcons[0].textContent = "";
        asideSocialIcons[1].textContent = "";
        asideSocialIcons[2].textContent = "";
        asideSocialIcons[3].textContent = "";
        asideSocialIcons[4].textContent = "";
    }
}