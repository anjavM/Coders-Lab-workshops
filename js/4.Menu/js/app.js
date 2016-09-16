/**
 * Created by Jacek on 2015-12-16.
 */

 document.addEventListener('DOMContentLoaded', function() {

    var list = document.querySelectorAll('.nav>ul>li');

   for (var i = 0; i < list.length; i++) {

        list[i].addEventListener('mouseover', function() {
            var sublist = this.querySelector('ul');
            if (sublist != null) {

                this.firstElementChild.style.display = 'block';
            }

        })
        list[i].addEventListener('mouseout', function() {
            var sublist = this.querySelector('ul');
            if (sublist != null) {
                this.firstElementChild.style.display = 'none';
            }
        })
    }
})
