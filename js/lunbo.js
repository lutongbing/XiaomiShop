$(function(){
	   var iNow = 0;
	   var timer;
	   inter();
	   
	   function inter(){
	   	 timer = setInterval(function(){
	   	 	if(iNow>$('.bigPic').length-1){
	   	 		iNow = 0;
	   	 	}
//	   	 	$('.bigPic').eq(iNow).removeClass('hide').addClass('show');
//	   	 	$('.bigPic:not(.show)').removeClass('show').addClass('hide');
//	   	 	$('.picBtn').eq(iNow).removeClass('nchange').addClass('changec');
//	   	 	$('.picBtn:not(.changec)').eq(iNow).removeClass('changec').addClass('nchange'); 	 	
//	   	 	console.log(iNow);
	   	 	$('.bigPic').animate({'opacity':0},'0.5s','linear');
	   	 	$('.bigPic').eq(iNow).animate({'opacity':1},'0.5s','linear');
	   	 	$('.picBtn').removeClass('changec').addClass('nchange');
	   	 	$('.picBtn').eq(iNow).removeClass('nchange').addClass('changec');
	   	 	iNow++;
	   	 },2000)
	   }
	   //小圆点按钮
	   $('.picBtn').click(function(){
	    iNow = $('.picBtn').index(this);
//	   	console.log('当前索引值'+iNow);
	   	clearInterval(timer);
	   	$('.bigPic').animate({'opacity':0},'0.5s','linear');
	   	$('.bigPic').eq(iNow).animate({'opacity':1},'0.5s','linear');
	   	$('.picBtn').removeClass('changec').addClass('nchange');
	   	$('.picBtn').eq(iNow).removeClass('nchange').addClass('changec');
	   	inter();
	   })
	   
	   //向前按钮
	   $('#before').click(function(){
	   	 		clearInterval(timer);
	   	 		iNow--;
	   	 		if(iNow<0){
	   	 			iNow = $('.bigPic').length-1;
	   	 		}
//	   	 		console.log('前'+iNow)
	   	 		$('.bigPic').animate({'opacity':0},'0.5s','linear');
	   	 		$('.bigPic').eq(iNow).animate({'opacity':1},'0.5s','linear');
	   	 		$('.picBtn').removeClass('changec').addClass('nchange');
	   			$('.picBtn').eq(iNow).removeClass('nchange').addClass('changec');
	   	 		inter();
	   	 		
	   	 	})
	   //向后按钮
	   $('#next').click(function(){
	   	 		clearInterval(timer);
	   	 		iNow++;
	   	 		if(iNow>$('.bigPic').length-1){
	   	 			iNow = 0;
	   	 		}
//	   	 		console.log('后'+iNow)
	   	 		$('.bigPic').animate({'opacity':0},'0.5s','linear');
	   	 		$('.bigPic').eq(iNow).animate({'opacity':1},'0.5s','linear');
	   	 		$('.picBtn').removeClass('changec').addClass('nchange');
	   			$('.picBtn').eq(iNow).removeClass('nchange').addClass('changec');
	   	 		inter();
	   	 	})
	
	
	
})