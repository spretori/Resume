(function() {

    'use strict';
  
    
    var items = document.querySelectorAll(".timeline li");
  

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        //}
       // else{
        //  items[i].classList.remove("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  
  })();




  $(function() {
    var row = $('.portfolioAnimate');
    var $window = $(window);
    
    $window.on('scroll', function() {
      var pad = Math.max(0, $window.height() - 100);
      var scrollTop = $window.scrollTop();
  
      if (!row.hasClass('visible') &&
          $window.scrollTop() + pad > row.offset().top) {
        row.addClass('visible');
        return;
      }
      
      // if (row.hasClass('visible') &&
      //     $window.scrollTop() + pad < row.offset().top) {
      //   row.removeClass('visible');
      //   return;
      // }
    });
    //inspired by https://codepen.io/lifvic/pen/BKYVqN  //
    var row2 = $('.portfolioAnimate2');
    var $window = $(window);
    
    $window.on('scroll', function() {
      var pad = Math.max(0, $window.height() - 100);
      var scrollTop = $window.scrollTop();
  
      if (!row2.hasClass('visible') &&
          $window.scrollTop() + pad > row2.offset().top) {
        row2.addClass('visible');
        return;
      }
      
      // if (row2.hasClass('visible') &&
      //     $window.scrollTop() + pad < row2.offset().top) {
      //   row2.removeClass('visible');
      //   return;
      // }
    });
  });


