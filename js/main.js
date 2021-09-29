var links = document.getElementById('mobile-menu');

function menuDropdown() {
    if (links.style.visibility === 'visible') {
        links.style.visibility = 'hidden';
    } else {
        links.style.visibility = 'visible';
    }
}
