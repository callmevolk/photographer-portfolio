$(function() {
  $(this).scrollTop(0);
  $(".navbar-toggler").click(function() {
    $(".navbar").toggleClass("small-white");
  });

  $(window).resize(function(){
    var width = $(window).width();
    if(width <= 991){
        $('.main__recents__images').removeClass('col-lg-4').addClass('row');
        $('.main__recents__images__image').addClass('col-6')
    } else if(width > 991) {
      $('.main__recents__images').removeClass('row').addClass('col-lg-4');
      $('.main__recents__images__image').removeClass('col-6');
    }
    if(width <= 768){
        $(".navbar").addClass("bg-light");
    } else if(width > 768) {
      //offset() measures how far down the sticky element is from the top of the window
      var stickyTop = $(".sticky").offset().top;
      //whenever the user scrolls, measure how far we have scrolled
      $(window).scroll(function() {
        var windowTop = $(window).scrollTop();
        //check to see if we have scrolled past the original location of the sticky element
        if (windowTop > stickyTop) {
          //if so, change the sticky element to fised positioning
          $(".sticky").addClass("stuck").addClass("golden");
        } else {
          $(".sticky").removeClass("stuck").removeClass("golden");
        }
      });
    }
  })
  .resize();
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
});
