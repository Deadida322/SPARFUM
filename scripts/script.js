$(document).ready(function(){
    $('.first_slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        infinite: true,
        slidesToShow:1,
        dots: true,

    });
    $('.second_slider').slick({
        arrows:true,
        infinite: true,
        slidesToShow:1,
    });
    $('.third_slider').slick({
        arrows:false,
        infinite: true,
        slidesToShow:1,
        dots: true,
    });
});
  