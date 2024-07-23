/* @preserve Navbar */
document.addEventListener("DOMContentLoaded", function (event) {

    /*
     * Display the menu items on smaller screens
     */
    const pull = document.getElementById('pull');
    const menu = document.querySelector('nav ul');

    ['click', 'touch'].forEach(function (e) {
        pull?.addEventListener(e, function () {
            menu.classList.toggle('hide')
        }, false);
    });
});