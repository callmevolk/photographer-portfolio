$(function() {
  $(".navbar-toggler").click(function() {
    $(".navbar").toggleClass("small-white");
  });
  $(window).resize(function(){
     var width = $(window).width();
     if(width <= 991){
         $('.main__recents__images').removeClass('col-lg-4').addClass('row');
         $('.main__recents__images__image').addClass('col-6')
     } else if(width > 992) {
       $('.main__recents__images').removeClass('row').addClass('col-lg-4');
       $('.main__recents__images__image').removeClass('col-6');
     }
  })
  .resize();

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".navbar").addClass("bg-light").addClass("golden");
    }
})
});
