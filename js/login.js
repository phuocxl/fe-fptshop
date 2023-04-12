const APILogin = "http://localhost:8080/api/auth/signin"
const formLogin = document.querySelector(".modal-login")
const fullname = document.querySelector(".header-login")
const nameLocal = localStorage.getItem("nameuser")
if(nameLocal) {
    fullname.innerText = nameLocal
}



formLogin.addEventListener("submit", e => {
    e.preventDefault()
    
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value
    
    const formData = {
        userName: username,
        password: password
    }
    
    fetch(APILogin, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(formData => {
        if(formData.status == 202) {
            alert("Tài khoản hoặc mật khẩu không chính xác")
        } else {
            fullname.innerText = formData.name
            localStorage.setItem("iduser",formData.idUser)
            localStorage.setItem("nameuser",formData.name)
            localStorage.setItem("token",formData.token)
            localStorage.setItem("roles",formData.roles)
            const modal = document.querySelector(".js-modal")
            const show = document.querySelector(".modal-login")
            modal.classList.remove("open-login")
            show.classList.remove("open-login")
        }
    })
    .catch(erro => {
        console.log(erro)
    })
})


