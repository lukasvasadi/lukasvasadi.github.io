function copyCommand(e) {
    var parent = e.closest("p")
    var text = parent.textContent
    // alert(text);
    navigator.clipboard.writeText(text)
}

function addCopyLinks() {
    var commandLines = document.getElementsByClassName('command')

    for (let i = 0; i < commandLines.length; i++) {
        var copyLink = document.createElement('a')
        copyLink.setAttribute('href', 'javascript:void(0);')
        copyLink.setAttribute('onclick', 'copyCommand(this)')

        var cloneIcon = document.createElement('i')
        cloneIcon.setAttribute('class', 'fas fa-clone')

        copyLink.appendChild(cloneIcon)

        commandLines[i].insertAdjacentElement('beforeend', copyLink)
    }
}

addCopyLinks();

// apply vertical offset
function offsetAnchor() {
    if (location.hash.length !== 0) {
        window.scrollTo(window.pageXOffset, window.pageYOffset - 60)
    }
}

var toc = document.getElementsByClassName('toc')[0]
var links = toc.getElementsByTagName('a')

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        // check for <a> elements with href that starts with #
        if (links[i].href.includes('#')) {
            window.setTimeout(() => {
                offsetAnchor();
            }, 1)
        }
    })
}
  
// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0)