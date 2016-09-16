$(function() {

    var btns = $('button');
    var divs = $('div');

    btns.on('click', function () {
        var progressNr = $(this).data('nr');
        var progressColor = $(this).data('color');
        var progressPercent = $(this).data('percent');

        var progressSelector = "#bar"+progressNr;
        var span = $(progressSelector).find('span');

        span.removeClass().addClass(progressColor).animate({
            width: progressPercent
        }, 2000);
    });

});
