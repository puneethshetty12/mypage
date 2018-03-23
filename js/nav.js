//to make the nav bar stick to the top of the screen when scrolled
$(document).ready(function() {
    
  $(window).scroll(function () { 

    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 422) {
      $('#nav_bar').addClass('nav-scroll');
    }

    if ($(window).scrollTop() < 423) {
      $('#nav_bar').removeClass('nav-scroll');
    }
  });
});