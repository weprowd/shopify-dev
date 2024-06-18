document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, "") + "js"

if (window.location.hash) { setTimeout(function () { window.scrollTo(0, 0); }, 2); }

jQuery(document).ready(function ($) {

    /*-----------------------------------------------------------------------------GLOBAL ON LOAD----*/

    //Load images, and images after doc ready
    var lazyLoadImages = (function () {
        var $lazyImages = $('img[data-src], iframe[data-src], [data-background]');
        if (!$lazyImages.length) { return; }

        function init() {
            $lazyImages.each(function () {
                var $this = $(this),
                    delay = 0,
                    dataSrc;
                if (dataSrc = $this.data('background')) {
                    if ($this.data('background-delay')) {
                        delay = $this.data('background-delay');
                    }
                    setTimeout(function () {
                        $this.css('background-image', 'url(' + dataSrc + ')');
                        $this.attr('data-background', null);
                    }, delay);
                } else if (dataSrc = $this.data('src')) {
                    if ($this.data('src-delay')) {
                        delay = $this.data('src-delay');
                    }
                    setTimeout(function () {
                        $this.attr('src', dataSrc);
                        $this.attr('data-src', null);
                    }, delay);
                }
            });
        }
        init();
        return { init: init }
    }());
	
	AOS.init();
	
	setTimeout(function(){
		AOS.refresh();
	},3000);
	setTimeout(function(){
		AOS.refresh();
	},7500);

    //Global function to toggle simple accordions
    var Accordions = (function () {
        var $accordions = $('.accordion');
        if (!$accordions.length) { return; }

        $accordions.each(function () {
            $this = $(this).find('.accordion__trigger');
            if ($this.hasClass('active')) {
                $this.next().slideToggle(250);
            }
        });
        $(document).on('click', '.accordion__trigger', function () {
            var $this = $(this);
            $this.toggleClass('active');
            $this.next().slideToggle(250);
        });
    }());

    //
    var InputMasks = (function () {
        var $masks = $('[data-mask]');
        if (!$masks.length) { return; }

        $('[data-mask]').keyup(function (e) {
            switch (this.dataset.mask) {
                case 'phone':
                    var x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                    console.log(x);
                    this.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
                    break;
                case 'ssn': {
                    var x = this.value.replace(/\D/g, '').match(/^(\d{0,3})(\d{0,2})(\d{0,4})/);
                    this.value = !x[2] ? x[1] : x[1] + '-' + x[2] + '-' + x[3];
                }
            }
        });
    }());

    //Plugin used for form validation
    var parselyOptions = {
        classHandler: function (parsleyField) {
            var $element = parsleyField.$element;
            if ($element.parent().hasClass('select-menu')) {
                return $element.parent();
            }
            return $element;
        },
        errorsContainer: function (parsleyField) {
            var $element = parsleyField.$element;
            var $fieldContainer = $element.closest('.form-field');
            if ($fieldContainer) {
                return $fieldContainer;
            }
        }
    };

    //Global function to set form state classes
    var formStates = (function () {
        $formInputs = $('main form :input');
        if (!$formInputs.length) { return; }

        $formSelectMenus = $('.select-menu select, .ginput_container_select select');

        function isGFormInput($el) {
            return $el.hasClass('ginput_container') ? $el.parent() : $el;
        }

        function setFilled($input) {
            var $parent = isGFormInput($input.parent());

            $parent.addClass('filled');
        }

        function removeFilled($input) {
            var $parent = isGFormInput($input.parent());

            $parent.removeClass('filled');
        }

        function setFocused() {
            var $parent = isGFormInput($(this).parent());

            $parent.addClass('focused');
        }

        function removeFocused() {
            var $parent = isGFormInput($(this).parent());

            $parent.removeClass('focused');
        }

        function checkInput(e) {
            if (this.type == 'button' ||
                this.type == 'range' ||
                this.type == 'submit' ||
                this.type == 'reset') { return; }

            var $this = $(this);
            var $parent = $this.parent();
            var is_selectMenu = $parent.hasClass('select-menu') || $parent.hasClass('ginput_container_select');

            var $input = is_selectMenu ? $parent : $this;

            switch (this.type) {
                case 'select-one':
                case 'select-multiple':
                    if (this.value !== '') {
                        setFilled($input);
                    } else {
                        removeFilled($input);
                    }
                    break;
                default:
                    if (this.value) {
                        setFilled($input);
                    } else {
                        removeFilled($input);
                    }
                    break;
            }
        }

        $formInputs.each(checkInput);
        $formInputs.on('change', checkInput);
        $formInputs.on('focus', setFocused);
        $formInputs.on('blur', removeFocused);
        $formSelectMenus.on('focus', setFocused);
        $formSelectMenus.on('blur', removeFocused);

    }());

    //Global function top open / close lightboxes
    var PDMLightbox = (function () {
        //Lightbox reset - This lightbox is empty and present on all pages
        var $lightbox = $('.pdm-lightbox--reset');

        //it's content can be filled from various sources
        //after close, the content is wiped
        var $lightbox_content = $('.pdm-lightbox--reset .pdm-lightbox__content');

        $('body').on('click', '[data-lightbox-iframe],[data-lightbox-content],[data-lightbox-target],.lightbox-trigger', function (e) {

            e.preventDefault();

            var iframe = $(this).data('lightbox-iframe');

            if (iframe) {
                $lightbox_content.html('<div class="iframe-wrap">' + iframe + '</div>');
            } else {
                if ($(this).data('lightbox-content')) {
                    var content = $(this).data('lightbox-content');
                } else if ($(this).data('lightbox-target')) {
                    var target = $(this).data('lightbox-target');
                    var content = $('#' + target).html();
                } else {
                    var content = $(this).next('.lightbox-content').html();
                }
                $lightbox_content.html(content);
            }

            var classes = $(this).data('lightbox-classes');
            $lightbox.addClass('active').addClass(classes);

        });

        function closeLightbox($lightbox) {
            $lightbox.removeClass('active');
            $('body').removeClass('noScroll');
            //wait before removing classes till lightbox closses
            if ($lightbox.hasClass('pdm-lightbox--reset')) {
                setTimeout(function () {
                    $lightbox.find('.pdm-lightbox__content').empty();
                    $lightbox.attr('class', 'pdm-lightbox pdm-lightbox--reset');
                }, 750);
            }
        }

        $('.pdm-lightbox').on('click', function (e) {
            var $lightbox = $(this);
            if (e.target == this) {
                closeLightbox($lightbox);
            }
        });

        $('.pdm-lightbox__close').click(function (e) {
            e.stopPropagation();
            $lightbox = $(this).closest('.pdm-lightbox');
            closeLightbox($lightbox);
        });
        return {
            close: closeLightbox
        };
    }());
	
	var header = (function(){
		
		var $header = $('#shopify-section-header'),
			$main = $('main'),
			headerHeight = $header.height();
		
		$header.css({ position: 'fixed' });
		
		function adjustPositions(){
			$main.css({ 'margin-top': headerHeight });
		}
		
		var lastScrollTop = 0;
		$(window).scroll(function(){
			var st = $(this).scrollTop();
			setTimeout(function(){
				if (st > lastScrollTop){
					$header.addClass('hide-nav');
				} else {
					$header.removeClass('hide-nav');
				}
				lastScrollTop = st;
			}, 100);
		});
		
		$(window).resize(function(){
			adjustPositions();
		});
		
		$(window).trigger('resize');
		
	}());
	
	var homeHero = (function(){
		
		if( !$('.h-hero').length ){ return false; }
		
		function updateHeroCards(){
			
			if( $(window).width() < 960 ){ return false; }
			
			//figure out the proportions of the card
			var width = $('.h-hero__card').width();
			
			//listen for scroll and figure out the percent that was scrolled
			var windowScrollTop = $(window).scrollTop();
			var scrollTop = windowScrollTop / 2;
			
			if( ($(window).height() / 3) > windowScrollTop ){
				$('.h-hero').removeClass('white-heading');
			}else{
				$('.h-hero').addClass('white-heading');
			}
			
			
			var pixelsToDegree = scrollTop / 6;
			var percent = pixelsToDegree / width;
			var degree = percent * 360;
			
			var startingTop = (width / 100) * -15;
			var newTop = startingTop + scrollTop;
			var maxTop = startingTop * -1 * 3;
			if( newTop > maxTop ){
				newTop = maxTop;
			}
			
			function moveLeft(){
				var startingLeft = (width / 100) * 25;
				var newLeft = startingLeft - scrollTop;
				if( newLeft < 0 ){
					newLeft = 0;
				}
				return newLeft;
			}
			
			function moveRight(){
				var startingRight = (width / 100) * -25;
				var newRight = startingRight + scrollTop;
				if( newRight > 0 ){
					newRight = 0;
				}
				return newRight;
			}
			
			function rotateRight(degree){
				degree = 25 - degree;
				if( degree > 25 ){
					degree = 25;
				}
				if( degree < 0 ){
					degree = 0;
				}
				return degree;
			}
			
			function rotateLeft(degree){
				degree = -25 + degree;
				if( degree < -25 ){
					degree = -25;
				}
				if( degree > 0 ){
					degree = 0;
				}
				return degree;
			}
			
			$('.h-hero__card.move-left').css({ transform: "translateX("+moveLeft()+"px) translateY("+newTop+"px) rotate("+rotateLeft(degree)+"deg)" });
			$('.h-hero__card.move-right').css({ transform: "translateX("+moveRight()+"px) translateY("+newTop+"px) rotate("+rotateRight(degree)+"deg)" });
			
		}
		
		$(window).scroll(updateHeroCards);
		$(window).resize(updateHeroCards);
		
		//use the percent to calculate how much to rotate
		
	}());
	
	
	var featCollections = (function(){
		
		var $colSlider = $('.collection-slider');
		
		var slideCount = $('.collection-slider .col-slide').length;
		
		function updateSlideCount(index){
			
			$('.collection-slider__count .count').text(index+'/'+slideCount);
		}
		
		updateSlideCount(1);
		
		$colSlider.on( 'ready.flickity', function() {
			updateMarquee(0);
			updateBG(0);
		});
		
		$colSlider.on( 'change.flickity', function(event,index) {
			updateMarquee(index);
			updateBG(index);
			updateSlideCount(index+1);
		});
				
		$colSlider.flickity({
			pageDots:false,
			imagesLoaded: true,
			lazyLoad:true,
			prevNextButtons: false,
			wrapAround: true,
			autoPlay:12000,
		});
		
		$('.flick-nav').click(function(){
			
			if( $(this).hasClass('next') ){
				$colSlider.flickity('next');
			}else{
				$colSlider.flickity('previous');
			}
			
		});
		
		function updateMarquee(index){
			var text = $('.col-slide').eq(index).data('text');
			$('.feat-collections__marquees span').text(text);
		}
		
		jQuery.Color.hook( "fill stroke" );
		
		function updateBG(index){
			var color = $('.col-slide').eq(index).data('color');
			$('.feat-collections .svg-icon--wave path').animate({ fill: color });
			$('.collection-slider').animate({ backgroundColor: color });
//			$('.feat-collections svg path').css({ fill: color });
		}
		
		var tickerSpeed = 1.5;
        var flickity = null;
       	var slideshowEl = document.querySelector('.feat-collections__marquees .marquee');
        
        function updateSlider($slider, callback, ltr){
            if ($slider.slides) {
                if( ltr ){
                    $slider.x = ($slider.x + tickerSpeed) % $slider.slideableWidth;
                }else{
                    $slider.x = ($slider.x - tickerSpeed) % $slider.slideableWidth;
                }
                $slider.selectedIndex = $slider.dragEndRestingSelect();
                $slider.updateSelectedSlide();
                $slider.settle($slider.x);
            }

            callback();
        }

        var update = function update() {
            updateSlider(flkty, function(){ window.requestAnimationFrame(update); });
        };

        flkty = new Flickity(slideshowEl, {
            prevNextButtons: false,
            pageDots: false,
            draggable: false,
            wrapAround: true,
            cellAlign: 'left',
            selectedAttraction: 0.015,
            friction: 0.25,
        });
        
        flkty.x = 0; 

        update(flkty);
		
	}());
	
	
	var featProducts = (function(){
		
		var $sliders = $('.feat-products__grid');
		
		console.log('this ran');
		
		$sliders.each(function(){
			console.log( $(this) );
			$(this).flickity({
				watchCSS: true,
				imagesLoaded: true,
				lazyLoad:2,
				contain: true,
				wrapAround: false,
				prevNextButtons: false,
				pageDots:false,
				cellAlign:'left',
			});
		});
		
	}());
	
	
	var startInstagramSlider = (function(){
		
		var $section = $('.insta-feed');
		
		if( !$section.length ){ return; }
		
		var instaInterval = setInterval(function(){
			
			if( $section.find('.fs-entry-container').length > 9 ){
				renderFeed($section.find('.fs-timeline'));
			}
			
		},250);
		
		function renderFeed($feed){
			
			clearInterval(instaInterval);
			
			$feed.flickity({
				wrapAround: false,
				prevNextButtons:false,
				pageDots:false,
				cellAlign:'left',
			});
			
		}
		
	}());
	
	
	var testimonialSliders = (function(){
		
		
//		if( !$sliders.length ){ return false; }
		
		var $sliders = $('.testimonials-slider').flickity({
							contain: true,
							wrapAround: true,
							prevNextButtons: false,
							pageDots:false,
							cellAlign:'left',
							adaptiveHeight: true,
							draggable: false,
						});
		
		var $authors = $('.author-slider').flickity({
							contain: true,
							wrapAround: true,
							prevNextButtons: false,
							pageDots:false,
							cellAlign:'left',
							draggable: false,
						});
		
	$('.flick-nav').click(function(){

		if( $(this).hasClass('next') ){
			$sliders.flickity('next');
			$authors.flickity('next');
		}else{
			$sliders.flickity('previous');
			$authors.flickity('previous');
		}

	});
		
//		$authors.on( 'select.flickity', function(event, pointer, cellElement, cellIndex) {
//			if ( typeof cellIndex == 'number' ) {
//				$sliders.flickity( 'select', cellIndex );
//			}
//		});
//		
//		$sliders.on( 'select.flickity', function(event, pointer, cellElement, cellIndex) {
//			if ( typeof cellIndex == 'number' ) {
//				$authors.flickity( 'select', cellIndex );
//			}
//		});
		
	}());
	

});