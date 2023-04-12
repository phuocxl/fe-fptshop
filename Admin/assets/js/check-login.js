const rolesLocal = localStorage.getItem("roles")
if(rolesLocal == null) {
    window.location="http://127.0.0.1:5500/Admin/pages/sign-in.html";
} else if(!rolesLocal.includes("ROLE_ADMIN")) {
    window.location="http://127.0.0.1:5500/Admin/pages/sign-in.html";
}