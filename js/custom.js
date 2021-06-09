// Hide scrollbar when not scrolling page
function scrollbar_toggle() {
    let body = document.getElementsByTagName('body');
    let userScrolled = false;
    document.addEventListener('scroll', () => {
        body[0].classList.remove('hidden-scrollbar');
        userScrolled = true;
    })
    setInterval(() => {
        if (userScrolled == false) {
            body[0].classList.add('hidden-scrollbar');
        }
        else {
            userScrolled = false;
        }
    }, 1000)
}

scrollbar_toggle();