const navbar = document.getElementById("navbar");
const navbarToggle = document.querySelector("#navbarToggle");

const navbarMenu = document.querySelector("#navbarMenu");

const navbarLinksContainer = document.querySelector(".navbarLinks");

function openMobileNavbar() {
  navbar.classList.add("opened");

  navbarToggle.setAttribute("aria-expanded", "true");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-expanded", "false");
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});


navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);

var option = ["left", "right"];
option.addEventListener("change", (e) => {
    const navType = option[1];
    navbarMenu.classList = navType;
  });
