//右下角的回到首页和顶部
$(function() {
	$(".side").hide();
	$(window).scroll(function() {
		if($(window).scrollTop() >= 1) {
			//$(window).scrollTop()滚动高度
			$(".side").fadeIn(500);

		} else {

			$(".side").fadeOut(500);
		}
	})

	$(".sidebox").mouseover(function() {

		$(this).css("width", "120px")
		$(this).css("background", "rgb(174,28,28)")
		$(this).css("opacity", "1")
	})
	$(".sidebox").mouseout(function() {

		$(this).css("width", "54px")
		$(this).css("background", "#555")
		$(this).css("opacity", "0.7")
	})
	$("#gotop").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 100);
		return false;

	});
})