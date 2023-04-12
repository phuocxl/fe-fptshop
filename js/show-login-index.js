
const login = document.querySelector(".js-login")
const modal = document.querySelector(".js-modal")
const show = document.querySelector(".modal-login")
const close = document.querySelector(".modal-login-header-close")
const modaLogin = document.querySelector(".modal-login")
const showLogout = document.querySelector(".modal-logout")

function showLogin() {
    const idLocal = JSON.parse(localStorage.getItem("iduser"))
    if(idLocal != null) {
        modal.classList.add("open-login")
        showLogout.classList.add("open-login")
        show.classList.remove("open-login")

    } else {
        modal.classList.add("open-login")
        show.classList.add("open-login")


    }
}

function closeLogin() {
    showLogout.classList.remove("open-login")
    modal.classList.remove("open-login")
    show.classList.remove("open-login")
}


login.addEventListener("click",showLogin)
close.addEventListener("click", closeLogin)
modal.addEventListener("click", closeLogin)

modaLogin.addEventListener("click", function(e) {
    e.stopPropagation()
})
