var savedname = localStorage.getItem("name")

if (savedname) {
    document.getElementById("nameDisplay").innerText = savedname;
} else {
    window.location.href = "login.html";
}


function displayImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("profileImage").src = e.target.result;
            localStorage.setItem("profileImage", e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
