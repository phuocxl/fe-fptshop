
const login = document.querySelector(".js-login")
const modal = document.querySelector(".js-modal")
const show = document.querySelector(".modal-login")
const showO = document.querySelector(".modal-cart")
const modalOrder = document.querySelector(".modal-cart")
const close = document.querySelector(".modal-login-header-close")
const modaLogin = document.querySelector(".modal-login")
const btnOrder = document.querySelector(".right-btn-full")
const showLogout = document.querySelector(".modal-logout")

function showLogin() {
    const idLocal = (localStorage.getItem("iduser"))
    if(idLocal != null) {
        modal.classList.add("open-login")
        showLogout.classList.add("open-login")
        show.classList.remove("open-login")
        showO.classList.remove("open-login")

    } else {
        modal.classList.add("open-login")
        show.classList.add("open-login")


    }
}

function closeLogin() {
    showLogout.classList.remove("open-login")
    modal.classList.remove("open-login")
    show.classList.remove("open-login")
    showO.classList.remove("open-login")
}

function showOrder() {
    const checkLoginID = localStorage.getItem("iduser")
    if(checkLoginID == null) {
        modal.classList.add("open-login")
        show.classList.add("open-login")
    } else if(checkLoginID) {
        modal.classList.add("open-login")
        showO.classList.add("open-login")

    }
}




// btnOrder.addEventListener("click",showOrder)
login.addEventListener("click",showLogin)
close.addEventListener("click", closeLogin)
modal.addEventListener("click", closeLogin)

modaLogin.addEventListener("click", function(e) {
    e.stopPropagation()
})

modalOrder.addEventListener("click", function(e) {
    e.stopPropagation()
})
