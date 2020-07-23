

$(window).on('load', function(){
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






// Animate on scroll config
AOS.init({
  offset: 200,
  duration: 600,
  once: true,
  // disable: 'phone'
});





// Brag number count config
$(function(){
    $('.brag-number').rCounter({
      duration:30
    });
});
  
});

// Mobile navbar config
function openNav() {
  document.getElementById("myNav").style.height = "100vh";
}


function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

$('.mobile-link').click(function() {
  setTimeout(
    function(){ 
      closeNav();
    }, 150);
 
})

  





  


