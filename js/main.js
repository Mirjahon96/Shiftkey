$(document).ready(function () {
  new WOW().init()

  $(".dropdown-trigger").dropdown();

  $('.tabs').tabs();

  $('.collapsible').collapsible();

  $('.carousel').carousel({
    dist: 0,
    numVisible: 0
  });
})

// Sidenav
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});