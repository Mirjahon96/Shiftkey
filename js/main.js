$(document).ready(function () {
  new WOW().init()

  $(".dropdown-trigger").dropdown();

  $('.tabs').tabs();

  $('.collapsible').collapsible();

  $('.carousel').carousel({
    dist: 0,
    numVisible: 0
  });

  // Scroll to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#backToTop').fadeIn();
    } else {
      $('#backToTop').fadeOut();
    }
  })
});

// Sidenav
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

