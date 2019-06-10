$(function(){
//	console.log(srr);
	//手机
	var str = '';
	for(i=0;i<srr.length;i++){
		str = `<li class="detailBox_li l">
							<img src="${srr[i].src}" />
							<p class="detailBox_text">${srr[i].detailBox_text}</p>
							<p class="detailBox_textgrey">${srr[i].detailBox_textgrey}</p>
							<span class="detailBox_price">${srr[i].detailBox_price}</span>
						</li>`;
		//同时传入多个节点或字符串,JQ不能用innerHtml（返回纯字符串）？
		$('#detailBox_ul').append(str)
	}
	//商品详情
//	console.log(str)
	var str02 = '';
	var str08 = '';
	for(i=0;i<srr2.length;i++){
		str02 = `<li class="detailBox_li l">
							<img src="${srr2[i].src}" />
							<p class="detailBox_text">${srr2[i].detailBox_text}</p>
							<p class="detailBox_textgrey">${srr2[i].detailBox_textgrey}</p>
							<span class="detailBox_price">${srr2[i].detailBox_price}</span>
							<div id="detailBox_bottom">
							<a class="detailBox_bottom_a">挺好的为了这个空调，我在上海买了一套房</a>
							<p class="detailBox_bottom_p"> 来自于 刘军 的评价 </p>
							</div>
						</li>`
		//同时传入多个节点或字符串,JQ不能用innerHtml（返回纯字符串）？
		$('#item01_ul').append(str02)
		$('#item02_ul').append(str02)
		$('#item03_ul').append(str02)
		$('#item04_ul').append(str02)
		$('#item05_ul').append(str02)
	}
	str08 = `	<li class="detailBox_li2 l">
									<div class="detail_sBox">
									<div id="detail_sBox_left" class="l">
									<p class="detail_sBox_p" class="l">小米净水器（厨下式）</p>
									<span class="detail_sBox_price" >1799元</span>
									</div>
										
										<img src="img/detail_small01.jpg" id="detail_sPic" />
									</div>
									<div class="detail_sBox">
										<div id="detail_sBox_left" class="l">
										<p class="detail_sBox_p2">浏览更多</p>
										<span class="detail_sBox_span">热门</span>
										</div>
										
										<i class="iconfont" id="detail_sBox_icon">&#xe6c8;</i>
										
									</div>
							</li>`;
			$('#item01_ul').append(str08)	
			$('#item02_ul').append(str08)
			$('#item03_ul').append(str08)
			$('#item04_ul').append(str08)
			$('#item05_ul').append(str08)
	//小米闪购
	var str03 = '';
	for(i=0;i<srr3.length;i++){
		str03 = `<li class="quickShop_li l " style="border-top:1px solid orange ;">
						<a  href="seckill.html">
							<img src="${srr3[i].src}"/>
							<h3 id="quickShop_li_h3">${srr3[i].quickShop_li_h3}</h3>
							<p id="quickShop_li_p">${srr3[i].quickShop_li_p}</p>
							<span id="quickShop_li_price" style="color: red;">${srr3[i].quickShop_li_price}</span>
							&nbsp;&nbsp;
							<span id="quickShop_li_oldprice"><del>${srr3[i].quickShop_li_oldprice}</del></span>
						</a>
					</li>`;
	
		//同时传入多个节点或字符串,JQ不能用innerHtml（返回纯字符串）？
		$('#quickShop_ul').append(str03)
	}
	//为你推荐
	var str04 = '';
	for(i=0;i<srr4.length;i++){
		str04 = `<li class="introduce_li l " style="border-top:1px solid orange ;">
						<a>
							<img src="${srr4[i].src}"/>
							<h3 id="introduce_li_h3">${srr4[i].introduce_li_h3}</h3>
							<span id="introduce_li_price" style="color: red;">${srr4[i].introduce_li_price}</span>
							<p id="introduce_li_p">${srr4[i].introduce_li_p}</p>
						</a>
					</li>`;
	
		//同时传入多个节点或字符串,JQ不能用innerHtml（返回纯字符串）？
		$('#introduce_ul').append(str04)
	}
	//热评产品
	var str05 = '';
	for(i=0;i<srr5.length;i++){
		str05 = `<li class="hotComment_li l">
						<a>
							<img src="${srr5[i].src}"/>
							<div class="hotComment_li_text l">
							<a id="hotComment_li_a1">${srr5[i].hotComment_li_a1}</a>
							<p id="hotComment_li_p" style="color: grey;">${srr5[i].hotComment_li_p}</p>
							<a2 id="hotComment_li_a2">${srr5[i].hotComment_li_a2}</a>
							<span>|</span>
							<span id="hotComment_li_price" style="color: red;">${srr5[i].hotComment_li_price}</span>
							</div>
						</a>
					</li>`;
	
		//同时传入多个节点或字符串,JQ不能用innerHtml（返回纯字符串）？
		$('#hotComment_ul').append(str05)
	}
	//内容
	var str06 = '';
	for(i=0;i<srr6.length;i++){
		str06 = `<li class="content_li l">
						<a>
							<h3 id="content_li_h3">${srr6[i].content_li_h3}</h3>
							<a id="content_li_a1">${srr6[i].content_li_a1}</a>
							<a id="content_li_a2">${srr6[i].content_li_a2}</a>
							<img src="${srr6[i].src}"/>
						</a>
					</li>`;
	
		//同时传入多个节点或字符串,JQ不能用innerHtml（返回纯字符串）？
		$('#content_ul').append(str06)
	}
	//视频
	var str07 = '';
	for(i=0;i<srr7.length;i++){
		str07 = `<li class="video_li l">
						<a>
						<img src="${srr7[i].src}"/>
						<h3 id="video_li_h3">${srr7[i].video_li_h3}</h3>
						<p id="video_li_p">${srr7[i].video_li_p}</p>
						</a>
					</li>`;
	
		//同时传入多个节点或字符串,JQ不能用innerHtml（返回纯字符串）？
		$('#video_ul').append(str07)
	}


})





