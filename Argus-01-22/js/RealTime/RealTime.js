$(function(){
	//截图
		function screenPic(domId){
			
			html2canvas($(domId), {
		    allowTaint: true,
		    taintTest: false,
		    onrendered: function(canvas) {
		    	
		        var imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
		         window.location.href= imgUri;
		  	  }
			});
		}
		
		$("#graph").click(function(){
			screenPic(".line-chart");
			
		})

	//tab切换部分
	
	$(".select-btn span").click(function(){
		$(this).toggleClass("select").siblings().removeClass('select')
		
	})

	//
	$(".lpss-day em").click(function(){
		
		$(this).toggleClass("active").siblings().removeClass("active");
	})









		
})
	