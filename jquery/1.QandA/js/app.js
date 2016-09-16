$(function() {

    // // 1
    // var questions = $('div h1');
    // var answers = $('div p');
    //
    // questions.addClass("question");
    // answers.addClass("answer");
    //
    // // 2
    // console.log("działa");
    //
    // // 3
    // console.log(questions);
    // console.log(answers);
    // answers.hide();
    //
    // // 4
    // questions.on('click', function () {
    //     console.log('klikniecie w h1');
    // });
    //
    // // 5
    // // questions.on('click', function () {
    // //     questions.next().toggle();
    // // });
    //
    // // 6
    // questions.eq(0).on('click', function() {
    //     answers.eq(0).toggle();
    // });
    //
    //
    // questions.eq(1).on('click', function() {
    //     answers.eq(1).toggle();
    // });
    //
    // questions.eq(2).on('click', function() {
    //     answers.eq(2).toggle();
    // });
    //
    // questions.eq(3).on('click', function() {
    //     answers.eq(3).toggle();
    // });
    //
    // // 7
    // // no nie wiem, np. taki, ze moglabym powyzsze eventy napisac duzo krocej :P


    var allP = $('p');
    var allH1 = $('h1');
    allP.hide();

    allH1.on('click', function() {
        allP.not($(this).next()).hide();
        $(this).next().toggle();
    });
});
