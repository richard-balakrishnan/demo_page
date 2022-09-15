var toggler = document.getElementsByClassName('navbar-toggler')[0];
var nav = document.getElementsByClassName('navbar');
var mybutton = document.getElementById("backToTop");
var backToTop = document.getElementsByClassName('backToTop')[0];

document.addEventListener('DOMContentLoaded', function(){
    navHighlightEnableFunction();
})

toggler.addEventListener('click', function () {
    var toggler_dataset = this.dataset['bsTarget'].replace('#', '');
    var sideToggleElement = document.getElementById(toggler_dataset);
    sideToggleElement.classList.toggle("open");
});

backToTop.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.onscroll = function () { scrollToTopEnableFunction(); navHighlightEnableFunction(); };


function navHighlightEnableFunction() {
    if (window.pageYOffset < 10) {
        nav[0].style.backgroundColor = "#fff1e7";
        nav[0].style.boxShadow = "none";
    }
    else {
        nav[0].style.backgroundColor = "#fff";
        nav[0].style.boxShadow = "0 8px 11px -6px rgba(0, 0, 0, 0.12)";
    }
}

function scrollToTopEnableFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}