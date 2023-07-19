
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
      type: 'loop',
      perPage: 3,
      focus: 'center',
      autoplay: true,
      interval: 3000,
      pauseOnHover: true,
    });
  
    splide.mount();
  });