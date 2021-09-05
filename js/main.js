var links = document.getElementById("hidden-links");
var courtesy = document.getElementById("photo-courtesy");

function menuFunction() {
    if (links.style.display === "block") {
        links.style.display = "none";
        courtesy.style.display = "block";
    } else {
        links.style.display = "block";
        // Check sizes of both screen and browser window
        if (screen.width < 960 || window.innerWidth < 960) {
            courtesy.style.display = "none";
        }
    }
}
