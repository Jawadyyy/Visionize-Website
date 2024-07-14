
var savedname = localStorage.getItem("name");
if (savedname) {
    document.getElementById("nameDisplay").innerText = savedname;
} else {
    window.location.href = "login.html";
}