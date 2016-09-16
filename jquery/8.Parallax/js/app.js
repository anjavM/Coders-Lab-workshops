$(function(){
    var kontener = $('.scene');
    var elements = $('.element');
    var oldMousePositionX = 0;
    var oldMousePositionY = 0;

    elements.each(function(){
        var dataZ = $(this).data('z');
        var dataX = $(this).data('x');
        var dataY = $(this).data('y');

        $(this).css('z-index', dataZ).css('left', dataX).css('top', dataY);

    });

    kontener.on('mouseenter', function(){
        oldMousePositionX = event.offsetX;
        oldMousePositionY = event.offsetY;
        console.log(oldMousePositionX, oldMousePositionY);

    });

    kontener.on('mousemove', function(){
        var currentMousePositionX = event.offsetX;
        var currentMousePositionY = event.offsetY;
        console.log(currentMousePositionX, currentMousePositionY);

        if($(event.target).hasClass('element')) {
            currentMousePositionX += $(event.target).position().left;
            currentMousePositionY += $(event.target).position().top;
        }

        var mouseMoveX = oldMousePositionX - currentMousePositionX;
        var mouseMoveY = oldMousePositionY - currentMousePositionY;

        elements.each(function(){

            $(this).css('left', '+=' + mouseMoveX * $(this).data('speed')).css('top', '+=' + mouseMoveY * $(this).data('speed'));

        });

        oldMousePositionX = currentMousePositionX;
        oldMousePositionY = currentMousePositionY;

    });
});
