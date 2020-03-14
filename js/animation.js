const items = document.querySelector(".item");
const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const img1 = document.querySelector(".img1");

const descrip = document.querySelector(".descrip-combo");
items.addEventListener("mouseover", (e) => {

    if (items.classList.contains("item1")) {
        descrip.style.display = "block"
        descript.style.position = "absolute"
        descript.style.right = "20px"
        img1.style.width = "20%"

    }
    if (items.classList.contains("item2")) {

    }
    if (items.classList.contains("item3")) {

    }
});