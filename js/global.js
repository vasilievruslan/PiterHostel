$(document).ready(function() {
	var GLOBAL = {
		init: function() {
			var popup_button = $('.hostels__aboutbtn');
			var popup = $('.pop-up__bacground');
			var popUpPrice = $('.pop-up-price__bacground');
			var popUpContacts = $('.pop-up__bacground-contacts');
			var contacts_btn = $('#contacts');
			var price_btn = $('#price');
			var popup_layout = $('.pop-up__layout');
			var _body = $('body');
			var pop_slider = $('.pop-up__slider');
			var servise_slider = $('.service-slider');
			var	bgforchoose_bg = $('.bgforchoose_bg');
			var contacts_page__slider = $('.contacts-page__slider');
			var pop_up_rules__bacground = $('.pop-up_rules__bacground');
			var rusles_btn = $('#rusles_btn');


			function initPopSlider() {
				pop_slider.bxSlider({
					auto: true,
					pause: 6000,
					controls: false,
				});
			}


			$(function (){
				servise_slider.bxSlider({
					slideWidth: 170,
					pager: false,
					controls: true,
					auto:true,
					pause:6000,
					minSlides: 1,
					maxSlides: 5,
					moveSlides: 1,
					slideMargin: 10
				});
			});

			$(function(){
				contacts_page__slider.bxSlider({
					pagerCustom: '#bx-pager',
					controls: false,
					auto: true,
					pause: 6000
				});
			});

			popup_button.on('click', function(el) {
				el.preventDefault();
				_body.addClass('popap-revealed');
				popup.addClass('showed');
				initPopSlider();
				popup_layout.click(function(){
					_body.removeClass('popap-revealed');
					popup.removeClass('showed');

				});
			});

			rusles_btn.on('click', function(el) {
				el.preventDefault();
				_body.addClass('popap-revealed');
				pop_up_rules__bacground.addClass('showed');
				popup_layout.click(function(){
					_body.removeClass('popap-revealed');
					pop_up_rules__bacground.removeClass('showed');
				});
			});

			price_btn.on('click', function(el) {
				el.preventDefault();
				_body.addClass('popap-revealed');
				popUpPrice.addClass('showed');
				popup_layout.click(function(){
					_body.removeClass('popap-revealed');
					popUpPrice.removeClass('showed');
				});
			});
			contacts_btn.on('click', function(el) {
				el.preventDefault();
				_body.addClass('popap-revealed');
				popUpContacts.addClass('showed');
				popup_layout.click(function(){
					_body.removeClass('popap-revealed');
					popUpContacts.removeClass('showed');
				});
			});
//Не доделано!!!
			// Choose_btn.on('click', function(){
			// 	console.log('aaaa')
			// 	$(this).fadeOut(300);
			// 	bgforchoose_bg.animate({visibility: 'visible', opacity: '1', }, 300);
			// 	$('.hostels__aboutbtn').css('z-index', '1');
				
			// });

			var linkToSecondPage = $('.linktohostel_left');
			var ImgHostelsLeft = $('.left_photos');
			var logoMain = $('img.logo_main');
			var backgroundForChoose = $('.bgforchoose_bg');
			var hostelsAboutBtn = $('.hostels__aboutbtn');
			var logoOnClick = $('.logo_onclick');
			var hostelsAboutbtn = $('.hostels__aboutbtn');
			var photo_hostel_left = $('.photo-hostel-left a');
			var photo_hostel_right = $('.photo-hostel-right a');

			function chooseHostel (){
				photo_hostel_left.css({'background-image': 'url(img/photos-hostel_left-adress.png)', 'opacity': '1'});
				photo_hostel_right.css({'background-image': 'url(img/photos-hostel_right-adress.png)', 'opacity': '1'});
			}
			function removeChoose ()
			{
				photo_hostel_left.css({'background-image': 'url(img/photos-hostel_left.png)', 'opacity': '0.5'});
				photo_hostel_right.css({'background-image': 'url(img/photos-hostel_right.png)', 'opacity': '0.5'});
			}




			logoMain.on('click', function(){
				logoMain.fadeOut(700);
				backgroundForChoose.fadeIn(700);
				hostelsAboutbtn.css('z-index', '0')
				chooseHostel();
			});
			logoOnClick.on('click', function fadeOutBackGround(){
				backgroundForChoose.fadeOut(700);
				logoMain.fadeIn(700);
				hostelsAboutbtn.css('z-index', '4');
				removeChoose();
			});
			backgroundForChoose.on('click', function(){
				fadeOutBackGround();
			});


			// Якоря
			$('a[href^="#"]').click(function(){
				var el = $(this).attr('href');
				$('body').animate({
				scrollTop: $(el).offset().top}, 800);
				return false;
			});

			$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('.scrollToTop').fadeIn();
				} else {
					$('.scrollToTop').fadeOut();
				}
			});



		}
	}


	GLOBAL.init()
});