$(document).ready(function() {
	// SCROLLING
  $('.js--scroll-to-about').click(function() {
    debugger;
    $('html, body').animate({scrollTop: $('.js--section-about').offset().top + 25}, 1000);
  });

  $('.js--scroll-to-contact').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-contact').offset().top + 25}, 1000);
  });

  // Waypoints
  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeInUp');
  }, {
    offset: '100%'
  });

  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset: '100%'
  });

  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeInUp');
  }, {
    offset: '100%'
  });

  $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated fadeInUp');
  }, {
    offset: '100%'
  });

  $('.js--wp-5').waypoint(function(direction) {
    $('.js--wp-5').addClass('animated fadeInUp');
  }, {
    offset: '100%'
  });
});