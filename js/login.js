var savedname = localStorage.getItem("name");
var savedpass = localStorage.getItem("pass");

function validateForm() {
    var enteredName = document.getElementById("name").value;
    var enteredPassword = document.getElementById("password").value;

    if (enteredName.trim() === "" || enteredPassword.trim() === "") {
        alert("Please fill in all fields");
    } else {
        if (enteredName === savedname && enteredPassword === savedpass) {
            alert("Login successful!");
            redirectToHomePage();
        } else {
            alert("Invalid username or password");
        }
    }
}

function redirectToHomePage() {
    window.location.href = "index.html";
}

function saveUsername(username) {
    localStorage.setItem("username", username);
}