$(document).ready(function() {
	click();
	
});

function click() {
	$('.circle-front').click(function(){
		$('.circle-back').toggleClass('extend'),
		$('.circle-left').toggleClass('move-left'),
		$('.circle-right').toggleClass('move-right'),
		$('.dot-left').toggleClass('dot-left-line'),
		$('.dot-right').toggleClass('dot-right-line'),
		setTimeout(function(){
		$('#comment').delay(1000).toggleClass('showcomment'),
		$('#downarrow').toggleClass('showdownarrow'),
		$('#heart').delay(1000).toggleClass('showheart'),
		$('#share').toggleClass('showshare')}, 200);
	})
}
