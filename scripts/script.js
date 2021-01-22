$(document).ready(function(){
    $('.first_slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        infinite: true,
        slidesToShow:1,
        dots: true,

    });
    $('#second_slider').lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
        loop: true,
        pager: false,
       
    });
    $('.third_slider').slick({
        arrows:false,
        infinite: true,
        slidesToShow:1,
        dots: true,
    });
});
  