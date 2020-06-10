// IE support for "main"
document.createElement('main');

// Object-Fit
$(function() {
	objectFitImages();
});

// Add target="_blank" rel="noreferrer noopener"
$('a[href^="http://"], a[href^="https://"]').attr({ target: '_blank', rel: 'noreferrer noopener' });

// Immersive
$(document).ready(function($) {
	var lastScroll = 0;
	$(window).scroll(function() {
		setTimeout(function() {
			var scroll = $(window).scrollTop();
			if (scroll > lastScroll + 10) {
				$('.l-site-header').removeClass('js-show');
			} else if (scroll < lastScroll - 10) {
				$('.l-site-header').addClass('js-show');
			}

			if (scroll >= 100) {
				$('.l-site-header').addClass('js-active');
			} else {
				$('.l-site-header').removeClass('js-active');
			}
			lastScroll = scroll;
		}, 300);
	});
});

// Smooth scroll
$(document).ready(function() {
	$('a').on('click', function(event) {
		if (this.hash !== '') {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({ scrollTop: $(hash).offset().top }, 300, function() {
				window.location.hash = hash;
			});
		}
	});
});

// Toggle class on click
const siteMenu = document.querySelector('.c-site-menu');
const siteHeader = document.querySelector('.l-site-header');
const navigation = document.querySelector('.l-site-header-navigation');
siteMenu.addEventListener('click', function() {
	siteMenu.classList.toggle('js-active');
	siteHeader.classList.toggle('js-menu-opened');
	navigation.classList.toggle('js-show');
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
	function parallaxImg() {
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
			var imgBottom = (winBottom - imgY) * speed;
			// Max number of pixels until block disappear
			var imgTop = winH + parentH;
			// Percentage between start showing until disappearing
			var imgPercent = imgBottom / imgTop * 100 + (50 - speed * 50);
		}
		img.css({
			top: imgPercent + '%',
			transform: 'translate(-50%, -' + imgPercent + '%)'
		});
	}

	$(document).on({
		scroll: function() {
			parallaxImg();
		},
		ready: function() {
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
		$('#' + tab_id).addClass('js-current');
	});
});

//CAROUSEL
var slideIndex, slides, dots, captionText;
function initGallery() {
	slideIndex = 0;
	slides = document.getElementsByClassName('imageHolder');
	slides[slideIndex].style.opacity = 1;

	//disable nextPrevBtn if slide count is one
	if (slides.length < 2) {
		var nextPrevBtns = document.querySelector('.leftArrow,.rightArrow');
		nextPrevBtns.style.display = 'none';
		for (i = 0; i < nextPrevBtn.length; i++) {
			nextPrevBtn[i].style.display = 'none';
		}
	}

	//add dots
	dots = [];
	let dotsContainer = document.getElementById('dotsContainer'),
		i;
	for (i = 0; i < slides.length; i++) {
		var dot = document.createElement('span');
		dot.classList.add('dots');
		dotsContainer.append(dot);
		dot.setAttribute('onclick', 'moveSlide(' + i + ')');
		dots.push(dot);
	}
	dots[slideIndex].classList.add('active');
}
initGallery();
function plusSlides(n) {
	moveSlide(slideIndex + n);
}
function moveSlide(n) {
	let i;
	let current, next;
	const moveSlideAnimClass = {
		forCurrent: '',
		forNext: ''
	};
	let slideTextAnimClass;
	if (n > slideIndex) {
		if (n >= slides.length) {
			n = 0;
		}
		moveSlideAnimClass.forCurrent = 'moveLeftCurrentSlide';
		moveSlideAnimClass.forNext = 'moveLeftNextSlide';
		slideTextAnimClass = 'slideTextFromTop';
	} else if (n < slideIndex) {
		if (n < 0) {
			n = slides.length - 1;
		}
		moveSlideAnimClass.forCurrent = 'moveRightCurrentSlide';
		moveSlideAnimClass.forNext = 'moveRightPrevSlide';
		slideTextAnimClass = 'slideTextFromBottom';
	}

	if (n != slideIndex) {
		next = slides[n];
		current = slides[slideIndex];
		for (i = 0; i < slides.length; i++) {
			slides[i].className = 'imageHolder';
			slides[i].style.opacity = 0;
			dots[i].classList.remove('active');
		}
		current.classList.add(moveSlideAnimClass.forCurrent);
		next.classList.add(moveSlideAnimClass.forNext);
		dots[n].classList.add('active');
		slideIndex = n;
	}
}

// ACCORDION
const initAccord = document.querySelectorAll('.accordion');
for (let i = 0; i < initAccord.length; i++) {
	initAccord[i].addEventListener('click', function() {
		if (this.innerText === 'SHOW CERTIFICATES & LICENSES') {
			this.innerText = 'HIDE CERTIFICATES & LICENSES';
		} else {
			this.innerText = 'SHOW CERTIFICATES & LICENSES';
		}

		this.classList.toggle('active');
		const child = this.nextElementSibling;
		child.style.maxHeight ? (child.style.maxHeight = null) : (child.style.maxHeight = child.scrollHeight + 'px');
	});
}

// ACCORDION 2
const Accord = document.querySelectorAll('.accordion2');
for (let i = 0; i < Accord.length; i++) {
  Accord[i].addEventListener("click", function() {
    if (this.innerText === 'Show More Projects') {
			this.innerText = 'Hide Projects';
		} else {
			this.innerText = 'Show More Projects';
    }
    
    this.classList.toggle("active");
    const child = this.nextElementSibling;
    child.style.maxHeight ? child.style.maxHeight = null 
    : child.style.maxHeight = child.scrollHeight + "px";
  });
}