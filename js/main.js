$(document).ready(function () {
  new WOW().init()

  $(".dropdown-trigger").dropdown();

})

// Sidenav
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});


document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems);
});

// Scrollfire
window.addEventListener('scroll', function (e) {
  const navbar = document.querySelector('#navbar');
  var nav = document.getElementById('myNav');

  if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
    nav.classList.add('shadow');
    navbar.classList.remove('py-3');

  } else {
    nav.classList.remove('shadow');
    navbar.classList.add('py-3');

  }
});
