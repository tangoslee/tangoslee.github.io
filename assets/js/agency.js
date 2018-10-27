(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  // $('body').scrollspy({
  $('#page-top').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  // var navbarCollapse = function() {
  //   if ($("#mainNav").offset().top > 100) {
  //     $("#mainNav").addClass("navbar-shrink");
  //   } else {
  //     $("#mainNav").removeClass("navbar-shrink");
  //   }
  // };
  // Collapse now if page is not at top
  // navbarCollapse();
  // Collapse the navbar when page is scrolled
  // $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function (e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function (e) {
    $(".navbar").removeClass("d-none");
  })


  $(document).on('click', '.btn-go', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $this = $(this);
    var isNext = ($this.attr('class').match(/carousel-control-next/)) ? true : false;
    var items = $this.parent().find('.carousel-item');
    var index = -1;
    items.each(function (i, item) {
      if ($(item).hasClass('active')) {
        index = i;
        return;
      }
    })

    var n = (isNext) ? (index + 1) % 3 : (index - 1) % 3;

    items
      .removeClass('active')
      .eq(n).addClass('active')
      ;
  });

})(jQuery); // End of use strict
