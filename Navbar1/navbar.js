function toggle(){
    const navs = document.querySelectorAll(".navbarItems");
    navs.forEach(nav => nav.classList.toggle("navbarToggleShow"));
}

document.querySelector(".navbarToggle").addEventListener('click', toggle);