$(function() {

    var index = 0;
    var btnNext = $('button#nextPicture');
    var btnPrev = $('button#prevPicture');
    var slider = $('div.slider');
    var ul = slider.find('ul');
    var allLi = slider.find('li');
    var imgWidth = slider.find('img').first().width();

    allLi.first().clone().appendTo(ul);
    allLi.last().clone().prependTo(ul);
    allLi = slider.find('li');
    ul.width(imgWidth * allLi.length);

    ul.css('left', -imgWidth);
    slider.width(imgWidth);

    btnNext.on('click', function() {
        ul.animate({
            left: '-=' + imgWidth
        }, 1000, function() {
            index++;
            if (index >= allLi.length - 2) {
                ul.css('left', -imgWidth);
                index = 0;
            }
        });
    });

    btnPrev.on('click', function() {
        ul.animate({
            left: '+=' + imgWidth
        }, 1000, function() {
            index--;

            if (index < 0) {
                ul.css('left', -(imgWidth * (allLi.length - 2)));
                index = allLi.length - 3;
            }
        });
    });
});
