// Модальное окно



// // открыть по кнопке
// $('.js-button-campaign').click(function() { 
// 	$('main').css('filter', 'blur(5px)');
// 	$('.js-overlay-campaign').fadeIn();
// 	$('.js-overlay-campaign').addClass('disabled');
	
// });

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	$('main').css('filter', 'none');
});

// // закрыть по клику вне окна
// $(document).mouseup(function (e) { 
// 	var popup = $('.js-popup-campaign');
// 	if (e.target==popup[0]&&popup.has(e.target).length === 0){
// 		// $('.js-overlay-campaign').fadeOut();
// 		// $('main').css('filter', 'none');
// 		// $('.ball-move').css('left', '46%');
// 		// $('.ball-move').css('top', '11%');
// 	}
// });

// var countClicks = 0;
// function clickMe(){
// 	countClicks = countClicks + 1;
	
// 	if (countClicks == 1) {
// 		$('.ball-move').css('top', '11%');
// 		$('.ball-move').css('left', '36%');
//     }
// 	if (countClicks == 2) {
//     	$('.ball-move').css('background-color', 'blue');
//     }
// 	if (countClicks == 3) {
//     	$('.ball-move').css('background-color', 'yellow');
//     }
// 	if (countClicks == 4) {
//     	$('.ball-move').css('background-color', 'pink');
// 	}
// 	console.log(clickMe)
// // 11
// // 46
// }




// открыть по таймеру 
$(window).on('load', function () { 
	setTimeout(function(){
		if($('.js-overlay-campaign').hasClass('disabled')) {
			return false;
		} else {
			
			$(".js-overlay-campaign").fadeIn();
		}
	}, 500);
});


var countClicks = 0;
function clickMe(){
	countClicks = countClicks + 1;
	
	if (countClicks == 1) {
		$('.ball-move').css('top', '22%');
		$('.ball-move').css('left', '70%');
		
	}
	if (countClicks == 2) {
		$('.ball-move').css('top', '63%');
		$('.ball-move').css('left', '65%');
	}
	if (countClicks == 3) {
		$('.ball-move').css('top', '46%');
		$('.ball-move').css('left', '66%');
	}
	if (countClicks == 4) {
		$('.ball-move').css('top', '21%');
		$('.ball-move').css('left', '47%');
	}
	if (countClicks == 5) {
		$('.ball-move').css('top', '41%');
		$('.ball-move').css('left', '47%');
	}
	if (countClicks == 6 ) {
		$('.ball-cover').css('display', 'none');
		$('.popup-clicked').fadeIn();
		// $('.js-popup-campaign').addClass('popup-clicked');
		$('.popup-clicked').addClass('animated bounceIn');

		$('.congrats-cover').addClass('animated slideInLeft');
		$('.congrats-cover').css('display', 'block');

		$('.offer-cover').addClass('animated slideInLeft');
		$('.offer-cover').css('display', 'block');
		
		


		
	}

}
