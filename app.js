const topBtn = document.querySelector('.topBtn');
const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.navbar')

document.addEventListener('scroll', displayBtn);
hamburger.addEventListener('click', displayNav)


function displayBtn() {
    const topNav = document.querySelector('.top-nav');
    let scrollHeight = document.documentElement.scrollTop;

    if(scrollHeight >= 60) {
        topBtn.style.display = "flex"
    }
    else {
        topBtn.style.display = "none";
    }

    if(scrollHeight >= 40) {
        topNav.style.background = "rgb(6, 233, 157)"
        navBar.style.background = "rgb(6, 233, 157)"
    } else {
        topNav.style.background = "rgb(40, 177, 131)"
        navBar.style.background = "rgb(40, 177, 131)"
    }
}

function displayNav(e) {
    e.preventDefault();
    navBar.classList.toggle('toggleClass')

}