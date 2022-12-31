// regular expression for form input type
const userName = document.querySelector(".form-contact_name");
const userEmail = document.querySelector(".form-contact_email");
const userWebsite = document.querySelector(".form-contact_url");
const formButton = document.querySelector(".form-contact_submit");

formButton.onclick = function (e) {
    if (userName.value === "" || !userName.value.match(/^[a-zA-Z]{1,20}$|^[a-zA-Z]{1,20}\s[a-zA-Z]{1,20}$|^[a-zA-Z]{1,20}\s[a-zA-Z]{1,20}\s[a-zA-Z]{1,20}$/)) {
        e.preventDefault();
        userName.style.border = "1px solid red";
    } else {
        e.stopPropagation();
        userName.style.border = "1px solid #f3f3f3";
    }

    if (userEmail.value === "" || !userEmail.value.match(/^[a-zA-Z0-9\-_]{1,20}@[a-z]{3,10}\.[a-z]{1,5}$/)) {
        e.preventDefault();
        userEmail.style.border = "1px solid red";
    } else {
        e.stopPropagation();
        userEmail.style.border = "1px solid #f3f3f3";
    }

    if (userWebsite.value === "" || !userWebsite.value.match(/^http[s]?:\/\/[a-zA-Z(0-9)?]{1,20}[\.\-_]?[a-zA-Z(0-9)?]{1,20}\.[a-z]{1,5}$/)) {
        e.preventDefault();
        userWebsite.style.border = "1px solid red";
    } else {
        e.stopPropagation();
        userWebsite.style.border = "1px solid #f3f3f3";
    }
}

document.onclick = function (e) {
    if (e.target !== userName && e.target !== userEmail && e.target !== userWebsite && e.target !== formButton) {
        userName.style.border = "1px solid #f3f3f3";
        userEmail.style.border = "1px solid #f3f3f3";
        userWebsite.style.border = "1px solid #f3f3f3";
    }
}




// смена позиции блоков при изменении экрана

// общие переменные
const aside = document.querySelector("aside");
const wrapperAsidePost = document.querySelector(".wrapper-aside_post");

// функция about-me
function contactUsPage() {
    const section = document.querySelector("section");
    smartAdaptive(section);
}

// вызов функции при загрузке страницы
window.onload = () => {
    contactUsPage();
}

// вызов функции при изменении экрана
window.onresize = () => {
    contactUsPage();
}

// функция: смена позиции блоков при изменении экрана
function smartAdaptive(a) {
    if (window.screen.width <= 1211) {
        a.after(wrapperAsidePost);
    } else {
        aside.appendChild(wrapperAsidePost);
    }
}