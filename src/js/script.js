$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                  infinite: true,
                  arrows: false,
                  dots: true,
                  touchThreshold: 20,
                }
              },
           ]
    });
});

/* const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    speed: 1000,
    responsive: {
        900: {
            nav: true,
            arrowKeys: false
        }
    }
  });

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });  */