$(document).ready(start);

function start(){
  fadeInElements();
  
}
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

function clickProfilePicture(){
  var check = $("#imgProfile").attr('alt');

  if(check == 'p1'){
    $("#imgProfile").attr('alt', 'p2').attr('src', 'img/profile_2.jpg');
    $("#theme").attr("href", "css/resume_offGreen.css");

  }
  else{
    $("#imgProfile").attr('alt', 'p1').attr('src', 'img/profile.jpg');
    $("#theme").attr("href", "css/resume.css");

  }
}

function fadeInElements(){
  $("#sub1").css("opacity", 0).delay(500).fadeTo(1000, 1);
  $("#sub2").css("opacity", 0).delay(1500).fadeTo(1000, 1);
  $("#sub3").css("opacity", 0).delay(2500).fadeTo(1000, 1);
  $("#sub4").css("opacity", 0).delay(3500).fadeTo(1000, 1);
}

