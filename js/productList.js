$(function(){
	//商品列表
	var str = '';
	for(i=0;i<srr.length;i++){
		str = `<li class="productList_li l">
						<img src="${srr[i].src}" />
						<p class="productList_p">${srr[i].productList_p}</p>
						<span class="productList_price">${srr[i].productList_price}</span><del>2599元</del>
						<img src="${srr[i].src}" id="sPic"/>
						<div id="bottom_p">9折促销</div>
					</li>`;
		//同时传入多个节点或字符串,JQ不能用innerHtml（返回纯字符串）？
		$('#productList_ul').append(str)
	}
	//猜你喜欢
	var str02 = '';
	for(i=0;i<srr3.length;i++){
		str02 = `<li class="likePro_li l">
						<img src="${srr3[i].src}" />
						<p class="likePro_p">${srr3[i].likePro_p}</p>
						<span class="likePro_price">${srr3[i].likePro_price}</span>
						<p class="likePro_p2">${srr3[i].likePro_p2}</p>
					</li>`;
		//同时传入多个节点或字符串,JQ不能用innerHtml（返回纯字符串）？
		$('#likePro_ul').append(str02)
	}
})