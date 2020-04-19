$(document).ready(function() {

    $('li:eq(7), .text-center').on('click',function() {
        $('.modal').show(900);
        $('.overlay').fadeIn(900);
    });

    $('span:first').on('click', function() {
        $('.modal').hide(900);
        $('.overlay').fadeOut(900);
    });

});