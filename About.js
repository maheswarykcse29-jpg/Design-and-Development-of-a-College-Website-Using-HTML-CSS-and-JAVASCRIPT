document.getElementById("btn").addEventListener("click", function() {
    alert("Welcome to About Page of our College!");
});
document.getElementById("heading").onclick = function() {
    this.style.color = "green";
};
document.getElementById("principal").ondblclick = function() {
    this.innerHTML = "Updated Principal Name";
};
document.getElementById("visionText").onmouseover = function() {
    this.style.backgroundColor = "lightyellow";
};
document.getElementById("visionText").onmouseout = function() {
    this.style.backgroundColor = "";
};