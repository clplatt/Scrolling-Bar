//variables
var itemCount = $('.scroll-item').length;
var viewWidth = $('#scroll-view').innerWidth();
var width = $('.scroll-item').innerWidth() * itemCount + itemCount * 2 + 2;
var time = itemCount * 2000;
var forward = true;//scrolling towards left


$('#scroll-wrapper').css('width', width+'px');

$(document).ready(function(){
	scroll(true);
});


function scroll(arg)
{
	if(forward)
	{
		$('#scroll-wrapper').animate({
			left:-(width-viewWidth)

		},{
			duration:time,
			easing:"linear",
			complete:function(){
					forward = !forward;
					scroll(forward);
				}
		});
	}else{
		$('#scroll-wrapper').animate({
			left:0

		},{
			duration:time,
			easing:"linear",
			complete:function(){
					forward = !forward;
					scroll(forward);
				}
		});
	}
	
}

