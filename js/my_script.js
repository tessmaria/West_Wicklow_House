/* code to initialise the mobile side nav */

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
  
 
/* Code to initialize tabs in menu section */

$(document).ready(function(){
    $('.tabs').tabs();
  });