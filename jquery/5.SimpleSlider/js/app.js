$(function() {

    var slider = $('.slider');
    var imgWidth = slider.find('img').first().width();
    var li = slider.find('li');
    slider.width(imgWidth).css('overflow', 'hidden');
    slider.find('ul').width(imgWidth * li.length).css({
        'font-size': 0,
        margin: 0,
        padding: 0,
        position: 'relative'
    });
    li.css('display', 'inline-block');


    var index = 0;
    var btnNext = $('#nextPicture');
    var btnPrev = $('#prevPicture');


    btnNext.on('click', function () {
        if (index < li.length - 1) {
            slider.find('ul').animate({
                left: '-=' + imgWidth
            });
            index++;
        }
    });

    btnPrev.on('click', function () {
        if (index > 0) {
            slider.find('ul').animate({
                left: '+=' + imgWidth
            });
            index--;
        }
    });
});
