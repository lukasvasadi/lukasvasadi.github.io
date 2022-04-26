var links = document.getElementById('mobile-menu');

function menuDropdown() {
    if (links.style.visibility === 'visible') {
        links.style.visibility = 'hidden';
        links.style.background = '#222';
    } else {
        links.style.visibility = 'visible';
    }
}
