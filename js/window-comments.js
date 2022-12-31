// WINDOW COMMENTS ======================================================================
// объявление переменных
const bodyHidden = document.querySelector("body");
const commentsCard = document.querySelectorAll(".comments-card");
const windowComments = document.querySelectorAll(".window-comments");
const windowCommentsFile = document.querySelectorAll(".window-comments_file");
const textArea = document.querySelectorAll(".window-comments_text");
const sendSubmit = document.querySelectorAll(".window-comments_submit");
const windowCommentsBlock = document.querySelectorAll(".window-comments_block");
const closeWindow = document.querySelectorAll(".close-window");

for (let i = 0; i < commentsCard.length; i++) {
    //open comments window
    commentsCard[i].onclick = () => {
        commentsCard[i].classList.add("icon-comment_active");
        windowComments[i].style.display = "block";
        bodyHidden.classList.add("body-scroll_hidden");
    }

    let count = 0; // счётчик колличества комментариев

    // attach file
    windowCommentsFile[i].onchange = function () {
        for (let item of this.files) {
            const wrapImgFile = document.createElement("div");
            wrapImgFile.classList.add("wrap-img_file");

            const imgFile = document.createElement("img");
            imgFile.classList.add("img-file");
            imgFile.src = window.URL.createObjectURL(item);
            wrapImgFile.prepend(imgFile);
            windowCommentsBlock[i].prepend(wrapImgFile);
            window.URL.revokeObjectURL(item);

            // identify device
            if (navigator.userAgent.match("iPhone") || navigator.userAgent.match("Android") ||
                navigator.userAgent.match("iPad") || navigator.userAgent.match("RIM")) {
                imgFile.style.opacity = "1";
            }

            commentPlus();

            // создание кнопки для удаления картинки
            const deleteImgBtn = document.createElement("button");
            deleteImgBtn.classList.add("delete-img_btn");
            wrapImgFile.after(deleteImgBtn);
            //delete img and button
            deleteImgBtn.onclick = () => {
                wrapImgFile.remove();
                deleteImgBtn.remove();

                commentMinus();
            }

            // увеличение (уменьшение) картинки при клике
            wrapImgFile.onclick = () => {
                if (wrapImgFile.style.width === "" || wrapImgFile.style.width === "50%") {
                    wrapImgFile.style.width = "100%";
                    wrapImgFile.style.background = "url('./images/zoom-minus.png') no-repeat 50%";
                    deleteImgBtn.style.display = "none";
                } else {
                    wrapImgFile.style.width = "50%";
                    wrapImgFile.style.background = "url('./images/zoom-plus.png') no-repeat 50%";
                    deleteImgBtn.style.display = "block";
                }
            }
        }
    }

    // click send button
    sendSubmit[i].onclick = () => {
        if (textArea[i].value == "") {
            textArea[i].setAttribute("placeholder", "Please enter your comment.");
        } else {
            textArea[i].setAttribute("placeholder", "Write a message...");
            textArea[i].style.height = "36px";

            // create element p
            const commentsBlockActive = document.createElement("p");
            commentsBlockActive.classList.add("comments-block_active");
            commentsBlockActive.innerText = textArea[i].value;
            // add element after click
            windowCommentsBlock[i].prepend(commentsBlockActive);

            // create element btn delete
            const deleteCommentBtn = document.createElement("button");
            deleteCommentBtn.classList.add("delete-comment_btn");
            // add button after p element
            commentsBlockActive.after(deleteCommentBtn);

            commentPlus();

            //delete element and button
            deleteCommentBtn.onclick = () => {
                commentsBlockActive.remove();
                deleteCommentBtn.remove();

                commentMinus();
            }

            if (textArea[i].value != "") {
                textArea[i].value = "";
            }
        }
    }

    // функция увеличения числа комментариев
    function commentPlus() {
        commentsCard[i].firstChild.textContent = ++count;
        if (count > 1) {
            commentsCard[i].lastChild.textContent = " COMMENTS";
        }
    }

    // функция уменьшения числа комментариев
    function commentMinus() {
        commentsCard[i].firstChild.textContent = --count;
        if (count < 2) {
            commentsCard[i].lastChild.textContent = " COMMENT";
        }
        count < 1 ? commentsCard[i].firstChild.textContent = "NO" : "NO";
    }

    // ограничение высоты поля textarea
    textArea[i].oninput = () => {
        if (textArea[i].scrollTop > 0 && textArea[i].scrollHeight < 108) {
            textArea[i].style.height = textArea[i].scrollHeight + "px";
        }
    }

    // click close button
    closeWindow[i].onclick = () => {
        windowComments[i].style.display = "none";
        bodyHidden.classList.remove("body-scroll_hidden");
        commentsCard[i].classList.remove("icon-comment_active");
    }
}