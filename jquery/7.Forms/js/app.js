$(function() {

    var form = $('form');
    var input = $('#contactForm input');
    var name = input.first();
    var email = input.eq(1);
    var message = input.eq(2);
    var submit = input.last();
    var error = $('div.error');

    submit.on('click', function(event) {
        var nameVal = name.val();
        var emailVal = email.val();
        var messageVal = message.val();


        // if (nameVal.length > 5) {
        //     console.log('ok');
        // } else if (emailVal.indexOf("@") >= 0) {
        //     console.log('ok');
        // } else if (emailVal.indexOf(".") >= 0) {
        //     console.log('ok');
        // } else if (messageVal.length < 10) {
        //     console.log('ok');
        // } else {
        //     error.text("Błąd!");
        //     event.preventDefault();
        // }

        if (nameVal.length < 5) {
            event.preventDefault();
            error.text("Błąd!")
        } else if (emailVal.indexOf("@") == -1) {
            event.preventDefault();
            error.text("Błąd!")
        } else if (emailVal.indexOf(".") == -1) {
            event.preventDefault();
            error.text("Błąd!")
        } else if (messageVal.length < 10) {
            event.preventDefault();
            error.text("Błąd!")
        } else {}

    });

});
