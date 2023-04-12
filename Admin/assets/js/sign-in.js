const APILogin = "http://localhost:8080/api/auth/signin"
const formSignInAd = document.querySelector(".form-sign-in-ad")


formSignInAd.addEventListener("submit", e => {
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
            localStorage.removeItem("roles")
            alert("Tài khoản hoặc mật khẩu không chính xác")
        }
         else {
            localStorage.setItem("iduser",formData.id)
            localStorage.setItem("nameuser",formData.name)
            localStorage.setItem("token",formData.token)
            localStorage.setItem("roles",formData.roles)
        }
    })
    .then(checkLogin)
    .catch(erro => {
        console.log(erro)
    })
})

function checkLogin() {
    const roleLocal = localStorage.getItem("roles")
    if(!roleLocal.includes("ROLE_ADMIN")) {
        alert("tài khoản hoặc mật khẩu không chính xác")
    } else {
        window.location="http://127.0.0.1:5500/Admin/pages/dashboard.html";

    }
}

