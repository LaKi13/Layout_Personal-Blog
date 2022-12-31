// slider swiper: left-block_posts =================================================
var swiper = new Swiper(".posts-slider", {
    navigation: {
        nextEl: ".posts-btn_next",
        prevEl: ".posts-btn_prev",
    },
    allowTouchMove: false,
});




// Плавный переход по нажатию (prev, next) к началу поста
const postSlide = document.getElementsByClassName("post-slide");
const block1 = document.querySelector(".block_1");
const postsBtnPrev = document.querySelector(".posts-btn_prev");
const postsBtnNext = document.querySelector(".posts-btn_next");
const notificationPrev = document.querySelector(".notification-prev");
const notificationNext = document.querySelector(".notification-next");
let countPosts = 1;

// функция плавного перехода к началу поста
function scrollTop() {
    block1.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// функция всплывающего уведомления над кнопкой
function notificationBtn(btnPosts) {
    btnPosts.style.opacity = ".9";
    let notification = setInterval(() => {
        btnPosts.style.opacity = "0";
    }, 5000);

    setTimeout(() => {
        clearInterval(notification);
    }, 5000);
}

postsBtnNext.onclick = () => {
    if (countPosts === postSlide.length) {
        notificationBtn(notificationNext);
    } else {
        countPosts++;
        scrollTop();
    }
}

postsBtnPrev.onclick = () => {
    if (countPosts === 1) {
        notificationBtn(notificationPrev);
    } else {
        countPosts--;
        scrollTop();
    }
}




// rating stars ====================================================================
const cliDetailPage = document.querySelectorAll(".cli-detail_page");
const averageMark = document.querySelectorAll(".average-mark");
let averageProcent = document.querySelectorAll(".average-procent");

function starsPlace() {
    for (let i = 0; i < cliDetailPage.length; i++) {
        if (!cliDetailPage[i].classList.contains("post-slide_active")) {
            cliDetailPage[i].classList.add("post-slide_active");

            const averageMarkStars = averageMark[i].children[1].children;
            const starsArray = Array.prototype.slice.call(averageMarkStars);
            let numb = 3;

            starsArray.forEach(item => {
                item.onmouseenter = () => {
                    averageProcent[i].textContent = item.dataset.itemStar;
                    item.parentNode.dataset.itemStars = item.dataset.itemStar;
                }

                item.onmouseleave = () => {
                    averageProcent[i].textContent = numb;
                    item.parentNode.dataset.itemStars = numb;
                }

                item.onclick = () => {
                    const { itemStar } = item.dataset;
                    numb = itemStar;
                    averageProcent[i].textContent = itemStar;

                    for (let k = 0; k < starsArray.length; k++) {
                        let c = starsArray[k];
                        c.classList.add("act");

                        let b = setInterval(() => {
                            c.classList.remove("act");
                        }, 5000);
                        setTimeout(() => {
                            clearInterval(b);
                        }, 5000);
                    }

                    // request
                }
            });
        }
    }
}

starsPlace();




// slider swiper: recomended-posts_slider =============================================
var swiper = new Swiper(".recomended-posts_slider", {
    navigation: {
        nextEl: ".recomended-btn_next",
        prevEl: ".recomended-btn_prev",
    },
    // slidesPerView: 3,
    breakpoints: {
        1500: {
            slidesPerView: 3
        },
        1170: {
            slidesPerView: 2
        },
        1070: {
            slidesPerView: 1
        }
    }
});




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

// функция detail-page
function detailPage() {
    const wrapperSwiperSlider = document.querySelector(".wrapper-swiper_slider");
    const topPost = document.querySelector(".top-post");

    smartAdaptive(topPost, wrapperSwiperSlider);
}

// вызов функции при загрузке страницы
window.onload = () => {
    detailPage();
}

// вызов функции при изменении экрана
window.onresize = () => {
    detailPage();
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