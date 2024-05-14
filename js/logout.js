function Logout()
{
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    window.location.href="profile.html";
}