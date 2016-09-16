/**
 * Created by Jacek on 2015-12-16.
 */


/*
 <span class="tooltipText">Text tooltipa</span>
 */

  addEventListener('DOMContentLoaded', function(){

      var tooltip = document.querySelectorAll('.tooltip');
      console.log(tooltip);

      for(i=0; i<tooltip.length; i++) {

          var toolText = document.createElement('span');
          toolText.classList.add('tooltipText');

          tooltip[i].addEventListener('mouseover', function() {
             toolText.innerText = this.dataset.text;
             this.appendChild(toolText);
         });

          tooltip[i].addEventListener('mouseout', function() {
              this.removeChild(toolText);
          });
      }
 });
