// Fucking Scroll
window.addEventListener('scroll', e => {
  let blackLogo = document.querySelector('.logo-black');
  let whiteLogo = document.querySelector('.logo-white');
  let nav2 = document.getElementById('myNav2');
  let navBtn = document.querySelector('.nav-btn');
  navBtn.style.color = '#fff';
  navBtn.style.borderColor = '#fff';

  if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
    nav2.classList.add('colored-nav');
    nav2.classList.add('shadow');
    nav2.classList.remove('transparent');
    nav2.classList.remove('py-3');
    blackLogo.style.display = 'none';
    whiteLogo.style.display = 'block';
    document.querySelectorAll('.nav-links').forEach(el => {
      el.style.color = "#000";
    });
    navBtn.style.borderColor = '#000';
    navBtn.style.color = '#000';


  } else {
    nav2.classList.add('transparent');
    nav2.classList.add('py-3');
    nav2.classList.remove('colored-nav');
    nav2.classList.remove('shadow');
    blackLogo.style.display = 'block';
    whiteLogo.style.display = 'none';
    document.querySelectorAll('.nav-links').forEach(el => {
      el.style.color = "#fff";
    });
    navBtn.style.borderColor = '#fff';
    navBtn.style.color = '#fff';
  }

});