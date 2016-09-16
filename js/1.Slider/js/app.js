/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function(){

    var next = document.getElementById("nextPicture");
    var prev = document.getElementById("prevPicture");
    var ul = document.querySelector("ul");
    var li = document.querySelectorAll(".slider li");
    var index = 0;


        li[index].classList.add("visible");


        next.addEventListener("click", function () {
            li[index].classList.remove("visible");
            index++;
            if(index >= li.length) {
                index = 5;
            }
            li[index].classList.add("visible");

        });

        prev.addEventListener("click", function () {
            li[index].classList.remove("visible");
            index--;
            if(index <= 0) {
                index = 0;
            }
            li[index].classList.add("visible");
        });




});
