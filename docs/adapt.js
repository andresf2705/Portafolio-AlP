
document.addEventListener("DOMContentLoaded", function() {
    
    document.body.style.display = "block";

    
    let lastScroll = 0;
    window.addEventListener("scroll", function() {
        const currentScroll = window.scrollY;
        if (currentScroll > lastScroll) {
            
            document.body.classList.add("scroll-down");
            document.body.classList.remove("scroll-up");
        } else {
            
            document.body.classList.add("scroll-up");
            document.body.classList.remove("scroll-down");
        }
        lastScroll = currentScroll;
    });
});

$(document).ready(function(){
    $('#carouselExampleIndicators').carousel({
      interval: 2000
    });

    $('#carouselExampleIndicators').hover(function(){
      $(this).carousel('pause');
    }, function(){
      $(this).carousel('cycle');
    });
});
window.onscroll = function () {
    stickyHeader();
};

function stickyHeader() {
    var header = document.getElementById("header");

    if (window.pageYOffset > 0) {
        header.classList.add("header-fixed");
    } else {
        header.classList.remove("header-fixed");
    }
}