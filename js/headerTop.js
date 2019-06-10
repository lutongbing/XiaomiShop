$(function(){
        $(window).scroll(function(){
            if($(window).scrollTop()>200){
                $("#top_sec").css({"position":"fixed","top":0,"left":74.5,"z-index":30,"backgroundColor":"#FAFAFA"});
            }else{
                $("#top_sec").css({"position":"static","backgroundColor":"white"});
            }
        $('#gotoTop').click(function(){
        	$(window).scrollTop(0) ;
        })
        });
    });

