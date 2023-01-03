// $(document).ready(function () {

//     let trigger = '.menu-btn',
//         nav = '.main-nav';

//     $(trigger).on('click', function () {
//         $(nav).slideToggle(300);
//     });

// });

$('.menu-btn').on('click',function(){
    $('.nav-main').toggleClass('js-active');
});

$(document).ready(function(){
    $('.my-gallery').slick();
});




