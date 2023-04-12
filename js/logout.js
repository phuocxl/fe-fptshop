const formLogout = document.querySelector(".modal-logout")


formLogout.addEventListener("submit", e => {
    e.preventDefault()
    localStorage.removeItem("iduser")
    localStorage.removeItem("nameuser")
    localStorage.removeItem("token")
    localStorage.removeItem("roles")
    location.reload()
})