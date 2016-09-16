$(function() {

    var tabs = $('li');
    var divs = $('.tabs').find('div');

    console.log(divs);
    console.log(tabs);

    tabs.on('click', function () {
        var ind = $(this).index();

		tabs.removeClass('selected');
        $(this).addClass('selected');

		divs.hide();
        divs.eq(ind).show();
    });

});
