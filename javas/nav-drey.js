window.addEventListener('scroll', function() {
    var navContainer = document.querySelector('.container-nav-total');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition >= 150) {
      navContainer.classList.add('scrolled');
    } else {
      navContainer.classList.remove('scrolled');
    }
  });
  