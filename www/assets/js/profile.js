$(document).ready(function(){
    $(".ecard-preloader").remove();
    var mySwiper = new Swiper('.categories', {
        slidesPerView: 4,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
    console.log("Called profile.js");

    //$('.loader').remove();
});