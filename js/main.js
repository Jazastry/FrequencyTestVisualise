'use strict';
$(document).ready(function() {
	$('.center').click(function(){
		$(this).removeClass('inactive');
		$('.freqBlock.active').removeClass('active');
	});
	$('.freqBlock').click(function(){
		$('.freqBlock.active').removeClass('active');
		$(this).addClass('active');
		$('.center').addClass('inactive');
	});
});