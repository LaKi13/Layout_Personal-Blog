// PUTTING LIKES
const likes = document.querySelectorAll(".likes");
for (let item of likes) {
    item.onclick = () => {
        item.classList.toggle("like-active");
        if (item.classList.contains("like-active")) {
            item.lastChild.textContent = " 1";
        } else {
            item.lastChild.textContent = " 0";
        }

    }
}