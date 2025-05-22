(function ($){ "use strict"
	gsap.registerPlugin(ScrollTrigger);
	header();
	gotop();
	alert();
	member();
	$('.datepicker > input').datetimepicker({
		locale: 'ko',
		format: 'YYYY-MM-DD',
		dayViewHeaderFormat: "YYYY년 MMMM",
	});
	AOS.init({
		duration:1500,
	});
	
})(jQuery);


function header(){
	$(window).scroll(function(){
		var win_scroll = $(window).scrollTop();
		if(win_scroll > 100){
			$('header').addClass('scroll');
		} else{
			$('header').removeClass('scroll');
		}

		let bh = $('body').height();
		let wt = $(window).scrollTop();
		let wh = $(window).height();
		$('header .page_bar span').css('width', (wt/(bh-wh))*100 + '%');
	});

	$('header aside .menuBtn').on('click',function(){$('header nav').addClass('on');})
	$('header nav .closeBtn').on('click',function(){$('header nav').removeClass('on');})

	$("header .sns button").on('click',function(){
		$("header .lan > p").slideUp();
		$(this).next("div").slideToggle();
	});
	
	$("header .lan button").on('click',function(){
		$("header .sns > div").slideUp();
		$(this).next("p").slideToggle();
	});
}

function gotop(){
	$('#gotop').on('click',function(){
		$('html,body').animate({
			scrollTop : 0,
		})
	})

	$(document).on('click' , '#quick_menu button' , function(){
		$('#quick_menu .etc_link').toggleClass('is-open');
	});
}

function member(){
	$('.membership_hotel .tabs2 a').on('click' , function(e){
		let idx = $(this).parents('li').index();
		$('.membership_hotel .tabs2 a').removeClass('is-active');
		$(this).addClass('is-active');
		$('.membership_hotel .room_info').hide();
		$('.membership_hotel .room_info'+(idx+1)).fadeIn();
	});
}

function alert(){
	$(".alert-view").on('click',function (e) {
		const icon = $(this).data('icon') || 'warning'; 
		const title = $(this).data('title');
		const text = $(this).data('text');
	
		// title이나 text 둘 중 하나라도 있을 때만 호출
		if (title || text) {
			Swal.fire({
				icon: icon,
				title: title || undefined,
				text: text || undefined,
			});
		}
	});
}
