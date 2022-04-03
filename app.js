
const desktopView = document.querySelector(".desktopview");
const mobileView = document.querySelector(".mobileview");

window.addEventListener('resize', () => {
    if (mobileView.classList.contains("mobileview") && window.innerWidth < 960) {
        mobileView.classList.add("active");
        desktopView.classList.remove("active");
    }
})
window.addEventListener('load', () => {
    if (mobileView.classList.contains("mobileview") && window.innerWidth < 960) {
        mobileView.classList.add("active");
        desktopView.classList.remove("active");
    }
})
window.addEventListener('resize',() => {
    if (desktopView.classList.contains("desktopview") && window.innerWidth > 960) {
        desktopView.classList.add("active");
        mobileView.classList.remove("active");
    }
})

