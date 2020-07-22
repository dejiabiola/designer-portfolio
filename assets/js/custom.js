


// Tiny slider config
var slider = tns({
  container: '.my-slider',
  items: 3,
  slideBy: 'page',
  autoplay: true,
  autoWidth: false,
  controls: false,
  navPosition: 'bottom',
  mouseDrag: true,
  responsive: {
    640: {
      gutter: 20,
      items: 1,
      center: false
    },
    1000: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  }

});


function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


document.querySelector("#open-nav-button").addEventListener('click', function() {
  document.querySelector("body").style.overflow = 'hidden';
});

/* when modal is closed */
document.querySelector("#close-nav-button").addEventListener('click', function() {
  document.querySelector("body").style.overflow = 'visible';
});


