
let next = document.querySelector(".next")
let prve = document.querySelector(".prev")

next.addEventListener("click", changeImageNext)
prve.addEventListener("click",changeImagePrev)
let index = 1
function changeImageNext() {
    let imgs = ["./assets/img/slide3.webp","./assets/img/slide5.webp","./assets/img/slide4.webp","./assets/img/slide1.webp","./assets/img/slide5.webp"]
    document.querySelector(".silde-img").src = imgs[index]
    index++
    if(index ==5) {
        index = 0
    }
}

setInterval(changeImageNext,3000)

function changeImagePrev() {
    let imgs = ["./assets/img/slide3.webp","./assets/img/slide5.webp","./assets/img/slide4.webp","./assets/img/slide1.webp","./assets/img/slide5.webp"]
    document.querySelector(".silde-img").src = imgs[index]
    index--
    if(index ==-1) {
        index = 4
    }
}

