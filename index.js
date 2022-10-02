const collapseMenu = document.querySelector("[data-hidden-navbar]");
const menuCollapseBtn = document.querySelector("[data-hiddenMenu-button]");


menuCollapseBtn.addEventListener("click", (e) => {
    if (collapseMenu.classList.contains("hidden-navbar-menu-invisible")) {
        collapseMenu.classList.remove("hidden-navbar-menu-invisible");
        collapseMenu.classList.add("hidden-navbar-menu-visible");
    } else {
        collapseMenu.classList.remove("hidden-navbar-menu-visible");
        collapseMenu.classList.add("hidden-navbar-menu-invisible");

    }
});
