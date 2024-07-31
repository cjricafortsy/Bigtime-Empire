//Preloader
$(window).on('load', function () {
    $(".preloader").fadeOut(1000, function () {
        $(".navbar").fadeIn(1000);
    });
});

$(document).ready(function(){
    $('#carousel').carousel();
});

$(document).ready(function() {
    var carousel = document.getElementById('carousel');
    var hammertime = new Hammer(carousel);

    hammertime.on('swipeleft', function() {
        $(carousel).carousel('next');
    });

    hammertime.on('swiperight', function() {
        $(carousel).carousel('prev');
    });
});