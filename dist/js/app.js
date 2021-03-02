// active mobile menu
$(".navigation").click(function(){
    $(this).toggleClass("active");
    if($(".navigation").hasClass("active")){
        $(".menu__items").removeClass("hidden");
        $(".menu__items").addClass("active")

    }else{
        $(".menu__items").removeClass("active");
        $(".menu__items").addClass("hidden")
    }
})


$(document).ready(function(){
    $('.pets-block').slick({
        infinite: true,
        slidesToShow: 3,
        // autoplay:true,
        arrows:true,
        prevArrow:"<div class='pet__arrow_left'></div>",
        nextArrow: "<div class='pet__arrow_right'></div>",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow:2,
                slidesToScroll: 2,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows:false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }

          ]
    });
   
  });