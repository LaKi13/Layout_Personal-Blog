// Основной слайдер swiper =========================================================
var swiper = new Swiper(".slider-mane", {
    direction: "vertical",
    pagination: {
        el: ".mane-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.mane-btn_next',
        prevEl: '.mane-btn_prev',
    },
    /*
    autoplay: {
        delay: 3000,
    },
    */
    allowTouchMove: false,
});



// regular expression for input type=text & input type=email ==============================
const inputName = document.querySelector(".input-name");
const inputEmail = document.querySelector(".input-email");
const formSignButton = document.querySelector(".form-sign_button");

formSignButton.onclick = function (e) {
    // inputName validation on push the button
    if (inputName.value === "" || !inputName.value.match(/^[a-zA-Z]{1,50}$/)) {
        e.preventDefault();
        inputName.style.border = "1px solid red";
    } else {
        e.stopPropagation();
        inputName.style.border = "1px solid #f3f3f3";
    }

    // inputEmail validation on push the button
    if (inputEmail.value === "" || !inputEmail.value.match(/^[a-zA-Z0-9\-_]{1,20}@[a-z]{3,10}\.[a-z]{1,5}$/)) {
        e.preventDefault();
        inputEmail.style.border = "1px solid red";
    } else {
        e.stopPropagation();
        inputEmail.style.border = "1px solid #f3f3f3";
    }
}

// inputName validation on input
inputName.oninput = () => {
    if (!inputName.value.match(/^[a-zA-Z]{1,50}$/)) {
        inputName.style.border = "1px solid red";
    } else {
        inputName.style.border = "1px solid #f3f3f3";
    }
}

document.onclick = function (e) {
    if (e.target !== inputName && e.target !== inputEmail && e.target !== formSignButton) {
        inputName.style.border = "1px solid #f3f3f3";
        inputEmail.style.border = "1px solid #f3f3f3";
    }
}