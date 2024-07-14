
function Formvalidation() {
    var usern = document.getElementById("usern").value;
    var password = document.getElementById("password").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;

    if (usern.trim() === "" || password.trim() === "" || fname.trim() === "" || lname.trim() === "") {
        alert("Please fill in all fields");
    }
    else {
        LoginPageRedirection();
        savename(usern);
        savepass(password);
    }
}
function LoginPageRedirection() {
    window.location.href = "login.html";
}

function savename(name) {
    var savedUsername = localStorage.getItem("name");
    localStorage.setItem("name", name);
}

function savepass(pass) {
    localStorage.setItem("pass", pass);
}