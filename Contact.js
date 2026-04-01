document.addEventListener("DOMContentLoaded", function() {
    function copyToClipboard(elementId, message) {
        const el = document.getElementById(elementId);
        if (el) {
            navigator.clipboard.writeText(el.textContent)
                .then(() => {
                    alert(message + " copied to clipboard!");
                })
                .catch(err => {
                    console.error("Copy failed", err);
                });
        }
    }
    document.getElementById("address").addEventListener("click", function() {
        copyToClipboard("address", "Address");
    });

    document.getElementById("email").addEventListener("click", function() {
        copyToClipboard("email", "Email");
    });

    document.getElementById("phone").addEventListener("click", function() {
        copyToClipboard("phone", "Phone number");
    });
    const heading = document.getElementById("heading");
    heading.addEventListener("mouseover", function() {
        heading.style.color = "green";
    });
    heading.addEventListener("mouseout", function() {
        heading.style.color = "#003366";
    });

});