$(function(){
	$('#contact .userGroup_ls .group_item a').tap(function(){
		if(!$(this).parent('.group_item').hasClass('select')){
			$(this).parent('.group_item').addClass('select').siblings().removeClass('select');
		}else{
			$(this).parent('.group_item').removeClass('select');
		}
	});
	$('.alter_btns .btn').tap(function(){
		$(this).addClass('select').siblings().removeClass('select');
	});
	$('.showSwipe').on('swipeleft',swipeLeftHandler);
	function swipeLeftHandler(event){
		$('.f_lefttarget',this).trigger('click');
	}
	$('.showSwipe').on('swiperight',swipeRightHandler);
	function swipeRightHandler(event){
		$('.f_righttarget',this).trigger('click');
	}
});
function scrollBottom(){
	var h = document.body.clientHeight;
	document.body.scrollTop = h;
}