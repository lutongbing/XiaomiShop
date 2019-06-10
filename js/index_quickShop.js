$(function(){
	//小米闪购轮播
	var iNow = 0;
	function changePic(){
				var nowleft = -iNow*960;
//				console.log(nowleft);
				$('#quickShop_ul').css('left',nowleft)
				
			}
	$('#nextBtn').click(function(){
		iNow++;
		changePic();	
		if(iNow>=3){
					iNow = 0;
					changePic()
				}
	})
	$('#beforeBtn').click(function(){
		iNow--;
		console.log(iNow)
		changePic();
		if(iNow<0){
					iNow = 0;
					changePic()
				}
	})
})

//				setInterval(function(){
//					iNow++;
//					if(iNow>srr3.length){
//						iNow = 0;
//						$('#quickShop_ul').css('transition','')
//						changePic()
//					}else{
//						$('#quickShop_ul').css('transition','left 0.2s')	
//						changePic()
//					}
//					console.log(iNow);
//					 changePic()
//				},1000)
//			function changePic(){
//				var nowleft = -iNow*880;
//				console.log(nowleft);
//				$('#picBox').css('left',nowleft)
//			}
//})

