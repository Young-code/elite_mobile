$(function(){
	//鼠标点击页面第一次的时候，头和脚都隐藏，点击第二次的时候再显示
	var times_one=1;
	$(".banner").click(function(){
		if(times_one==1){
			$(".topnav").animate({
                "top": "-0.75rem"
            }, 400);
			$("footer").animate({
                "bottom": "-1.15rem"
            }, 400);
            $(".banner").animate({
                "margin-top": "0"
            }, 400);
			times_one=2;
		}else if(times_one==2){
			$(".topnav").animate({
                "top": "0"
            }, 400);
			$("footer").animate({
                "bottom": "0"
            }, 400);
            $(".banner").animate({
                "margin-top": "0.75rem"
            }, 400);
			times_one=1;
		}
	});
})

$(function() {
	//广告弹窗,每隔15秒弹一次
	$(".guanggao").hide();
	$(".guanbi").hide();
	var timeaa=setInterval(showguanggao,15000);
	function showguanggao(){
		$(".guanbi").show();
		$(".guanggao").show();
	}
	$(".guanbi").click(function(){
		$(".guanggao").hide();
		$(".guanbi").hide();
	});
//	banner图轮播
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		spaceBetween: 10,
		centeredSlides: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false
	});
});
// 国旗轮播
$(function() {
	var swiper2 = new Swiper('.swiper-page1', {
		pagination: '.swiper-pagination2',
		paginationClickable: true,
		spaceBetween: 10,
		centeredSlides: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false
	});
});
//新闻切换
$(function(){
	$(".liebiaoul .aside:gt(0)").hide();
	$(".newsnav .newsul").find("li").each(function(index){
		$(this).click(function(){
			$(".newsnav .newsul").find("li").removeClass("ofon").eq(index).addClass("ofon");
			$(".newsnav .newsul").find("li").css("color","#808080").eq(index).css("color","red");
			$(".liebiaoul .aside").hide().eq(index).show();
		})
	})
});
//点击加载更多
$(function(){
	var time1=1;
	$(".jiazaibtn").click(function(){
		if(time1==1){
			$(".aside li:first").clone().appendTo($(".aside"));/*克隆ul里面的第一条li并加到ul列表末尾*/
			$(".jiazaibtn").css("margin-top","9.4rem");
			$(".newsnav").css("height","11.4rem");
            time1=2;
		}
		else if (time1==2) {
			$(".aside li:last-child").remove();/*删除最后一个li*/
			$(".jiazaibtn").css("margin-top","8rem");
			$(".newsnav").css("height","10rem");
			$(".jiazaibtn").html("点击收起加载");
			time1=1;
       }
	});
});
$(function(){
	var times = 1;
    $("#doclick").click(function() {
        //侧边栏展开
        if (times == 1) {
            $(".slide_right").animate({
                "right": "0"
            }, 500);
            $(".slide_left").animate({
                "right": "3rem"
            }, 500);
            $("#doclick").attr("src", "images/ico_btn2.png");
            $("#doclick").bind('touchmove', function(event) {
                event.preventDefault();
            });
            times = 2;
        }
        //侧边栏收缩
        else if (times == 2) {
            $(".slide_right").animate({
                "right": "-3rem"
            }, 500);
            $(".slide_left").animate({
                "right": "0"
            }, 500);
            $("#doclick").attr("src", "images/ico_btn2_hov.png");
            times = 1;
        }
    });
})
// 底部
$(function(){
		$("footer").find("i").each(function(index){
		$(this).click(function(){
			$("footer").find("i").css("color","#999").eq(index).css("color","red");
			$("footer").find("i").css("font-size","0.6rem").eq(index).css("font-size","0.7rem");
		})
	});
	//优选更多下拉
	$(".opti .proj").hide();
	var timesa=1;
	$(".opti-title").click(function(){
		$(".opti .proj").slideToggle();/*所有内容放在一起，点击下拉方法*/
		if(timesa==1){
			$("#xiala1").attr("src","images/icon3.png");
			timesa=2;
		}
		else if(timesa==2){
			$("#xiala1").attr("src","images/xiala_icon1.png");
			timesa=1;
		}
	});
//点击指纹
	$(".btn .f-icon").hide();
	var timesb=1;
	$(".btn .finger").click(function(){
		if(timesb==1){
			$(" #f-icon1").animate({'left':"1rem"},200).show();
			$(" #f-icon2").animate({'left':"1.8rem"},400).show();
			$(" #f-icon3").animate({'left':"2.6rem"},600).show();
			$(" #f-icon4").animate({'left':"3.4rem"},800).show();
			$(" #f-icon5").animate({'left':"4.2rem"},1000).show();
			$("#finger").attr("src","images/ico_btn23.png");
			timesb=2;
		}
		else if(timesb==2){
			$(" #f-icon1").animate({'left':"0.2rem"},200).delay(1).hide(0);
			$(" #f-icon2").animate({'left':"0.2rem"},400).delay(2).hide(0);
			$(" #f-icon3").animate({'left':"0.2rem"},600).delay(3).hide(0);
			$(" #f-icon4").animate({'left':"0.2rem"},800).delay(4).hide(0);
			$("#finger").attr("src","images/ico_btn22.png");
			timesb=1;
		}
	});
	//点击返回顶部
	$("#f-icon5").hide();
	$(window).scroll(function(event) {
        $(window).scrollTop()>200?$("#f-icon5").show():$("#f-icon5").hide();
   });
	$("#f-icon5").click(function(event){
		 $("html,body").animate({ "scrollTop": 0 }, 500);
	});
	
	
})
