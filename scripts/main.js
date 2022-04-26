var menu = document.getElementById('mobile-menu');
var hamburger = document.getElementsByTagName('nav')[0].getElementsByTagName('a')[4];

function menuDropdown() {
    if (menu.style.visibility === 'visible') {
        menu.style.visibility = 'hidden';
        hamburger.style.backgroundColor = '#222';
        hamburger.style.color = "#f0f0f0";
    } else {
        menu.style.visibility = 'visible';
        hamburger.style.backgroundColor = '#f0f0f0';
        hamburger.style.color = "#222";
    }
}
