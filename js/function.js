$(function() {
	const $gnb = $('.gnb>li')
	const $lnb = $('.lnb')
	const $bg = $('.bg')

	$gnb.on({
		mouseover: function() {
			$(this).addClass('on')
			$bg.stop().fadeIn(200)
			$lnb.stop().fadeIn(200)
		},
		mouseout: function() {
			$(this).removeClass('on')
			$lnb.stop().fadeOut(200)
			$bg.stop().fadeOut(200)
		}
	})

	$lnb.children('li').on({
		mouseover: function() {
			$(this).addClass('on')
		},
		mouseout: function() {
			$(this).removeClass('on')
		}
	})
})

$(function() {
	const $img = $('section>.TrahaView>.conter>.view')
	let nowIdx = -1

	$img.animate(
		{
			left: 9950 * nowIdx
		},
		250000,
		'linear'
	)
})
