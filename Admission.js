document.getElementById("admissionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let course = document.getElementById("course").value;
    if (name === "" || email === "" || phone === "" || course === "") {
        alert("Please fill all fields!");
        return;
    }
    if (phone.length !== 10 || isNaN(phone)) {
        alert("Enter valid 10-digit phone number!");
        return;
    }
    document.getElementById("successMsg").style.display = "block";
    document.getElementById("admissionForm").reset();
});