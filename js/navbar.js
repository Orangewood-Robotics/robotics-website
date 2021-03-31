window.onscroll = function(){stickyNav()};

var navbar = document.getElementById("nav--links");

var sticky = navbar.offsetTop;

function stickyNav(){
    window.pageYOffset >= sticky ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}; 