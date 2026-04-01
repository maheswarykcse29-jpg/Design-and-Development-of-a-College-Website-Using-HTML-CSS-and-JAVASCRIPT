function highlight(element) {
    element.style.color = "blue";
}
document.getElementById("toggleBtn").addEventListener("click", function() {
    let details = document.querySelectorAll(".dept");

    details.forEach(function(p) {
        if (p.style.display === "none") {
            p.style.display = "block";
        } else {
            p.style.display = "none";
        }
    });
});
document.getElementById("mainHeading").onmouseover = function() {
    this.style.color = "green";
};
document.getElementById("mainHeading").onmouseout = function() {
    this.style.color = "black";
};