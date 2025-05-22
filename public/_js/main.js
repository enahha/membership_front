(function ($){ "use strict"
	main_menu();
	mv();
	sec01();
	sec02();
	sec03();
	sec05();

})(jQuery);


function main_menu(){
	$('body').scrollspy({ target: ".navbar", offset: 50 });
    $("#header nav a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash)?.offset()?.top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
}

function mv(){
	setTimeout(function(){
		$('#main_visual').addClass('visual_next1');
	},2400);
	setTimeout(function(){
		$('#main_visual').addClass('visual_next2');
	},3000);
	setTimeout(function(){
		$('#main_visual').addClass('visual_next3');
	},5000);




	/*
	const video = document.getElementById('mv_video');
	video.playbackRate = 0.9;*/
	/*
	var mvtext = gsap.timeline({
		scrollTrigger: {
			trigger: "#main_visual",
			start: "top top",
			end: "250% center",
			pin: true,
			scrub: 2,
			//markers: true,
		},
	});
	mvtext.to("#main_visual .img_text", {
		scale: 1,
		y: 0,
		opacity:1,
		duration: 1,
	});
	mvtext.to("#main_visual .img_sym", {
		opacity:1,
		scale: 1,
		filter: "grayscale(0)",
		duration: 1,
	});*/
}



function sec01(){
	// Swiper 초기화

}

function sec02(){
	$(window).on('scroll', function() {
		var sec02 = $('.sec02');
		var img = $('.sec02 .img');
		
		var sec02Top = sec02?.offset()?.top;                 // .sec02의 상단 위치
		var sec02Bottom = sec02Top + sec02.outerHeight() - 100;  // .sec02의 하단 위치
		var scrollTop = $(window).scrollTop();             // 현재 스크롤 위치

		if (scrollTop >= sec02Top && scrollTop <= sec02Bottom) {
			img.addClass('fixed');   // .sec02에 있을 때 고정 클래스 추가
		} else {
			img.removeClass('fixed'); // .sec02 밖으로 나가면 클래스 제거
		}
	});
}

function sec03(){

	// Step 1: .sec03이 고정되고, .bg2의 opacity가 1로 변경
	var tl1 = gsap.timeline({
		scrollTrigger: {
			trigger: ".sec03",
			start: "top top",
			end: "65% 90%",
			scrub: 2,
			//markers: true,
			id: "scrub-opacity",
			toggleClass: "active",
		},
	});
	tl1.to(".sec03 .bg2", {
		opacity: 1,
		duration: 1,
	});

	$(window).scroll(function(){
		let top1 = $('.sec03')?.offset()?.top;
		let wst = $(window).scrollTop();
		let bg2 = $('.sec03 .bg.bg2');
		let st = wst-top1;
		let scale = 1+(st*0.00005);
		if(wst > top1){
			$('.sec03').addClass('bg_active');
			bg2.css('top', st).css('transform', 'scale('+scale+')');
		} else {
			$('.sec03').removeClass('bg_active');
		}
	})

	$('.sec03 .qbox > div').click(function(){
		$(this).addClass('active');
		$(this).find('span').hide();
	})

	var swiper = new Swiper(".sec03 .mySwiper", {
		slidesPerView: 1,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".sw-next",
			prevEl: ".sw-prev",
		},
	});
}
function sec05(){
	$('.sec05 .faq_list li').on('click',function(){
		$('.sec05 .faq_list li').removeClass('on');
		$(this).addClass('on');
		var num = $(this).attr('data-num');

		$('.answer_list').show();
		$('.answer_list > div').hide();
		$('.answer_list > div[data-num="' + num + '"]').show();
	})

	$('.sec05 .answer_list > div button').on('click',function(){
		$('.sec05 .faq_list li').removeClass('on');
		$('.sec05 .answer_list').hide();
	})

	$('#faq_Modal button').on('click',function(){
		$('.sec05 .faq_list li').removeClass('on');
	})
}
