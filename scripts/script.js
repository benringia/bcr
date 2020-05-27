

// IE support for "main"
document.createElement('main');

// Object-Fit
$(function () { objectFitImages() });

// Add target="_blank" rel="noreferrer noopener"
$('a[href^="http://"], a[href^="https://"]').attr({ target:"_blank", rel:"noreferrer noopener" });

// Immersive
$(document).ready(function($) {
  var lastScroll = 0;
    $(window).scroll(function() {
    setTimeout(function() {
      var scroll = $(window).scrollTop();
      if (scroll > lastScroll + 10) {
        $(".l-site-header").removeClass("js-show");
      } else if (scroll < lastScroll - 10) {
        $(".l-site-header").addClass("js-show");
      }

      if (scroll >= 100) {
        $(".l-site-header").addClass("js-active");
      } else {
        $(".l-site-header").removeClass("js-active");
      } lastScroll = scroll;
    }, 300);
  });
});





// Smooth scroll
$(document).ready(function() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({ scrollTop: $(hash).offset().top }, 300,
      function() { window.location.hash = hash; });
    }
  });
});

// Toggle class on click
const siteMenu = document.querySelector('.c-site-menu')
const siteHeader = document.querySelector('.l-site-header')
const navigation = document.querySelector('.l-site-header-navigation')
siteMenu.addEventListener('click',function() {
siteMenu.classList.toggle('js-active');
siteHeader.classList.toggle('js-menu-opened');
navigation.classList.toggle('js-show')
});

// Detect if user is using TAB to navigate
function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('tab-used');
    window.removeEventListener('keydown', handleFirstTab);
  }
}
window.addEventListener('keydown', handleFirstTab);

// Parallax
$('.l-parallax-image').each(function() {
  var img = $(this);
  var imgParent = $(this).parent();
  function parallaxImg () {
    var speed = img.data('speed');
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();


    // The next pixel to show on screen
    var winBottom = winY + winH;

    // If block is shown on screen
    if (winBottom > imgY && winY < imgY + parentH) {
      // Number of pixels shown after block appear
      var imgBottom = ((winBottom - imgY) * speed);
      // Max number of pixels until block disappear
      var imgTop = winH + parentH;
      // Percentage between start showing until disappearing
      var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
    }
    img.css({
      top: imgPercent + '%',
      transform: 'translate(-50%, -' + imgPercent + '%)'
    });
  }

  $(document).on({
    scroll: function () {
      parallaxImg();
    }, ready: function () {
      parallaxImg();
    }
  });
});

  $(document).ready(function() {

	$('.c-tab-link li').click(function() {
		var tab_id = $(this).attr('data-tab');

		$('.c-tab-link li').removeClass('js-current');
		$('.c-tab-content').removeClass('js-current');

		$(this).addClass('js-current');
		$("#"+tab_id).addClass('js-current');
	})
});

