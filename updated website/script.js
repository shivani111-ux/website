document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar-footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar and footer:", error));
});
