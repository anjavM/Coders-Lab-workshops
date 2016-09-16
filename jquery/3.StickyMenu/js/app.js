$(function() {

    var nav = $('nav');
    var ul = $('ul.menu');
    var header = $('div').first();
    var height = nav.position().top;

    $(window).on('scroll resize',function() {
        console.log($(window).scrollTop());
      if($(window).scrollTop() > height ) {
        ul.addClass('sticky');
      } else {
        ul.removeClass('sticky');
      }
    });

});
