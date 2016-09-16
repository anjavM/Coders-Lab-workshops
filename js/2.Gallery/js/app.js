/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
 document.addEventListener("DOMContentLoaded", function(){

     var body = document.querySelector("body");
     var list = document.querySelectorAll(".gallery li");

     var div = document.createElement('div');
     div.classList.add('fullScreen');
     div.innerHTML = '<img><button class="close">Close</button>';

     // +src+ = połącz string ze stringiem i z tym, co jest po tym wewnetrznym stringu, przy czym ++ to zwartosc zmiennej, gdybysmy wstawili bez,to bylby zwykly string

     for (var i = 0; i < list.length; i++) {
         list[i].addEventListener ("click", function () {
            var src = this.firstElementChild.getAttribute('src');
            var img = div.querySelector('img');
            img.setAttribute('src', src);
            body.appendChild(div);
         });

     }

     var close = div.querySelector('.close');
     close.addEventListener("click", function () {
             body.removeChild(div);
    });





 });
