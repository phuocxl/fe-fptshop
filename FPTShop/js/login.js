
const login = document.querySelector(".js-login")
const modal = document.querySelector(".js-modal")
const close = document.querySelector(".modal-login-header-close")
const modaLogin = document.querySelector(".modal-login")

function showLogin() {
    modal.classList.add("open-login")
}

function closeLogin() {
    modal.classList.remove("open-login")
}

login.addEventListener("click",showLogin)
close.addEventListener("click", closeLogin)
modal.addEventListener("click", closeLogin)
modaLogin.addEventListener("click", function(e) {
    e.stopPropagation()
})