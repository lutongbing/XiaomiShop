$(function(){
	$('#imageBox').mouseover(function(){
		$('#bPic').css('display','block');
		$('#square').css('display','block');
	})
	$('#imageBox').mousemove(function(ev){
//	console.log($('#imageBox').offset().left,$('#imageBox').offset().top)
		//鼠标当前位置
		var pageX = ev.pageX;
		var pageY = ev.pageY;
//		console.log(pageX,pageY)
		//原图窗口相对于整个文档的偏移量
		var offsetX = $('#imageBox').offset().left;
		var offsetY = $('#imageBox').offset().top;
//		console.log(offsetX,offsetY)
		//鼠标在原图中的相对位置
		var relativeX = pageX - offsetX;
		var relativeY = pageY - offsetY;
//		console.log(relativeX,relativeY)
	   //根据鼠标位置计算放大镜框的位置
	   var squareX = $('#square').width()/2;
	   var squareY = $('#square').height()/2;
	   $('#square').css({left:relativeX-squareX+'px',
	   					 top:relativeY-squareY+'px'});
	   	//获取放大镜新的位置
	   	var newsquareX = $('#square').position().left;
	   	var newsquareY = $('#square').position().top;
	   	//确定边界
	   	var maxMagX = $('#imageBox').width()-$('#square').width()
	   	var maxMagY = $('#imageBox').height()-$('#square').height()
	   	
	   //左边界
	   if(newsquareX<=0){
	   	$('#square').css('left','0px');
	   }
	   //右边界
	   if(newsquareX>=maxMagX){
	   	$('#square').css('left',maxMagX+'px');
	   }
	   //上边界
	   if(newsquareY<=0){
	   		$('#square').css('top','0px');
	   }
	   //下边界
	   if(newsquareY>=maxMagY){
	   	$('#square').css('top',maxMagY+'px');
	   }
	   var bPicX = newsquareX*-2;
	   var bPicY = newsquareY*-2;
	   $('#b').css({left:bPicX+'px',top:bPicY+'px'});
})
	$('#imageBox').mouseout(function(){
		$('#bPic').css('display','none');
		$('#square').css('display','none');
		
	})
	
	
	
})

