/**
 * Created by Jacek on 2015-12-16.
 */

 document.addEventListener("DOMContentLoaded", function(){

     var imgs = document.querySelectorAll('#gallery img');
     var hide = document.querySelector('#hideButton');
     var show = document.querySelector('#showButton');
     var input = document.querySelector('input');


     for(var i=0; i<imgs.length;i++) {
         imgs[i].classList.add('invisible');
     }

    hide.addEventListener('click', function () {
        var tag = input.value;
        input.value = '';


        for(var i = 0;  i < imgs.length; i++) {
            var tags = imgs[i].dataset.tag;
            for(var j = 0; j < tags.length; j++) {
                if(tag == tags.substring(j, j+ tag.length)) {
                    imgs[i].classList.remove('invisible');
                    console.log("znaleziono!");
                    break;
                }
            }
        }
    });


 });
