$(function(){
	var str = '';
	for(i=0;i<srr2.length;i++){
		str = `<li class="goodsBox_li l">
					<img src="${srr2[i].src}" />
					<div class="goodsBox_text r">
						<p class="goodsBox_text_p1">${srr2[i].goodsBox_text_p1}</p>
						<span class="goodsBox_text_span1">${srr2[i].goodsBox_text_span1}</span>
						<p class="goodsBox_text_p2"><span class="goodsBox_redline"></span><span>100%</span></p>
						<p class="goodsBox_text_p3"><span class="goodsBox_text_price">${srr2[i].goodsBox_text_price}</span><del>169元</del></p>
						<span class="goodsBox_textBtn">已结束</span>
					</div>
				</li>`;
		//同时传入多个节点或字符串,JQ不能用innerHtml（返回纯字符串）？
		$('#goodsBox_ul').append(str)
	}
	
	
})