var toggler = document.getElementsByClassName('navbar-toggler')[0];
var nav = document.getElementsByClassName('navbar');

toggler.addEventListener('click', function () {
    var toggler_dataset = this.dataset['bsTarget'].replace('#', '');
    var sideToggleElement = document.getElementById(toggler_dataset);
    sideToggleElement.classList.toggle("open");
});

window.onscroll = function () { navHighlightEnableFunction(); };


function navHighlightEnableFunction() {
    if (window.pageYOffset < 10) {
        nav[0].style.backgroundColor = "transparent";
        nav[0].style.boxShadow = "none";
    }
    else {
        nav[0].style.backgroundColor = "#fff";
        nav[0].style.boxShadow = "0 8px 11px -6px rgba(0, 0, 0, 0.12)";
    }
}