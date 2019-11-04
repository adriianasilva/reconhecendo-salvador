$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   

  // criar margem no topo para a navbar
  setInterval(function(){
    if ($(window).width() < 1500) {
      var banner_altura = $('#carousel-example-generic').height();
      $('#carousel-example-generic .carousel-inner .item').css("margin-top", (banner_altura / 10 ));
    } else {
      $('#carousel-example-generic .carousel-inner .item').css("margin-top", 0);
    }
  
  }, 1000);
  
});



