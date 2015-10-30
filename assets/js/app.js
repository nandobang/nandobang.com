(function ($) {
  console.log('App bootstraped!');

  $(document).on('ready', function () {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
        var target = $(this.hash);

        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);

          return false;
        }
      }
    });

    $('.menu .expand-menu').on('click', function (evt) {
      $('.menu').toggleClass('expanded');

      ga('send', 'event', 'Menu', 'Toggle');
    });

    $('.menu .links a').on('click', function (evt) {
      $('.menu').toggleClass('expanded');

      ga('send', 'event', 'Navigation', $(evt.currentTarget).attr('href').split('#').join(''));
    });
  });
})(jQuery);
