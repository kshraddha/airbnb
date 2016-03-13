$(function () {
  $('.redirect').attr("href", "redirect.html");
  $('.company_items').attr("href", "redirect.html");
  $('.comm_disp').click(function () {
    window.open('redirect.html', '_self');
  });
  $(".check_date").datepicker();

  var slides = $(".slideshow>li");
  var slidecount = 0;
  var totalslides = slides.length;
  var slidecache = [];

  (function preloader() {
    if (slidecount < totalslides) {
      slidecache[slidecount] = new Image();
      slidecache[slidecount].src = slides.eq(slidecount).find('img').attr('src');
      slidecache[slidecount].onload = function () {
        slidecount++;
        preloader();
      }
    } else {
      slidecount = 0;
      slideshow();
    }
  }());

  function slideshow() {
    slides.eq(slidecount).fadeIn(500).delay(2000).fadeOut(500, function () {
      slidecount < totalslides - 1 ? slidecount++ : slidecount = 0;
      slideshow();
    });
  }
});
$(window).on('scroll', function () {
  transform();
});

function transform() {
  if ($(window).scrollTop() > 2700) {
    $('.community2').addClass("translate2");
    $('.community1').addClass("translate1");
    $('.community3').addClass("translate3");
    $('.community4').addClass("translate4");

  }
}