// Выпадающее меню
const dropdownLink = document.querySelector(".dropdown-link");
const dropMain = document.querySelector(".drop-main");

if (dropdownLink) {
    dropdownLink.addEventListener("click", function () {
        dropdownLink.classList.toggle("_active");
        dropMain.classList.toggle("_active");
    });
}


// Поле поиска и кнопка поиска ==================================================
const form = document.getElementById("form");
form.classList.add("form-active");
const inputSearch = document.getElementsByTagName("input");
const container = document.querySelector(".container");

form.addEventListener("click", function () {
    form.classList.remove("form-active");
    inputSearch[1].style.display = "block";
    inputSearch[0].classList.toggle("search-field");
    inputSearch[1].classList.toggle("search-button");
});

inputSearch[0].addEventListener("click", function () {
    inputSearch[0].classList.remove("search-field");
    inputSearch[1].classList.remove("search-button");
});