//请求数据，得到的数据计算width
//模拟计算
var beforeTime = 5;
var afterTime = 2;
var workTime = 15;
//右边留10px空隙
var totalWidth = $(".loading-proces").width() - $(".enter").width() - $(".leave").width() - 10;
$(".before-work").width(Math.ceil(totalWidth*5/22));
$(".after-work").width(Math.floor(totalWidth*2/22));
$(".working").width(Math.floor(totalWidth*15/22));

//点击图片放大,出现遮罩层
$(".magnify").on("click",function(){
	$(".mask").show();
	console.log($(this).find("img").attr("src"));
	$(".mask").find("img").attr("src",$(this).find("img").attr("src"));

});
//隐藏遮罩层
$(".mask").on("click",function(){
	$(this).hide();
});

//截图并保存事件信息
html2canvas(document.getElementById("report"),opts).then(function(canvas){
  	var url = canvas.toDataURL();
    var link = $("#report").find("a").eq(0);
    link.attr("href", url);
    link.attr("download", (new Date()).getTime() + ".png"); 	
});