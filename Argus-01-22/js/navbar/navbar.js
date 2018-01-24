
//下拉上拉
$(".item").on("click",function(e){
	e.stopPropagation();
	if(!$(this).hasClass("drop-up")){
		$(this).addClass("drop-up");
		$(this).siblings().removeClass("drop-up");
	}
	if($(this).find("i").hasClass("icon-xiala")){
		$(this).addClass("drop-up");
		$(this).siblings().removeClass("drop-up");
		$(this).find(".drop-down-list").stop().slideDown("fast");
		$(this).find("i").removeClass("icon-xiala");
		$(this).find("i").addClass("icon-shangla");
	}   
	else if($(this).find("i").hasClass("icon-shangla")){
		$(this).removeClass("drop-up");
		$(this).find(".drop-down-list").stop().slideUp("fast");
		$(this).find("i").removeClass("icon-shangla")
		$(this).find("i").addClass("icon-xiala");
	}
	switch($(this).index()){
		case 4:
		$(".content iframe").attr("src","./htmls/SystemSetup.html");
		break;
		case 3:
		$(".content iframe").attr("src","./htmls/SystemMonitoring.html");
		break;
		
	}
	
});
$(".new-page").on("click",function(){
	$(this).siblings().find(".drop-down-list li").removeClass("active");
});
//回到首页
$("#homePage").on('click',function(){
	$(".content iframe").attr("src","./htmls/Home.html");
})

//下拉菜单点击
$(".drop-down-list li").on("click",function(e){
	e.stopPropagation();
	$(this).parent().parent().addClass("drop-up");
	$(this).parent().parent().siblings().removeClass("drop-up");
	$(this).parent().parent().siblings().find("li").removeClass("active");
	$(this).addClass("active");
	$(this).siblings().removeClass("active");
		
	switch($(this).html()){
		case '今日实时':
		$(".content iframe").attr("src","./htmls/TodayTimeming.html");
		break;
		case '历史统计':
		$(".content iframe").attr("src","./htmls/VAPD-HistoricalSta.html");
		break;
		case '实时事件':
		$(".content iframe").attr("src","./htmls/RealTime.html");
		break;
		case '历史统计查询':
		$(".content iframe").attr("src","./htmls/LPSS-HistoricalSta.html");
		break;
		
	}
})
//选择分区
$("#areaLi").click(function(){
	$(".areaLi .selectDistrict").toggleClass("active")
})
$("#selectDistrict li").click(function(){
	$("#areaLi span").html($(this).html())
	
});
//实现iframe刷新
function setIframePage(){  
    var sessionStorage=window.sessionStorage;  
    var refreshPage=sessionStorage.getItem("refreshPage");
    if(refreshPage!=null&&refreshPage!=""&&refreshPage!=undefined){  
        document.getElementById("myiframe").src=refreshPage; 
    }
    else{
    	document.getElementById("myiframe").src='./htmls/Home.html'; 
    }
}     
setIframePage(); 
