$(function(){  
    var t = $('#remark-text'); //获取到文本域对象  
    t.css("color","#999"); //设置文本域的样式  
    t.val("备注信息（选填）"); //设置默认显示文字  
    var default_value = t.val(); //把默认显示的文字赋给一个变量  
     
    t.focus(function() {  //当鼠标点击文本域时修改文本域的样式，判断文本域内的文字是否等于默认值，如果等于就把文本域内设空  
        t.css("color","black");  
        if (t.val() == default_value) {  
            t.val('');  
        }  
    });   
    t.blur(function() { //当文本域失去鼠标焦点时判断文本域中的值是否为空，如果为空就把文本域的值设置为默认显示的文字并修改样式  
        t.css("color","black");  
        if (t.val() == '') {  
            t.val(default_value);  
            t.css("color","#999");  
        }  
    });   
    //进入页面时清空负责人信息
    $(".principal-info").find("input").val("");
    
    //按下确认键
    $("#countersign_btn").on("click",function(){
    	var jobNumber = $("#number").val();
    	if(jobNumber){//如果不为空，则传至后台验证
    		
    		msg_success("提交成功！");
    	
    	}
    	else{//如果为空，则提醒用户
    		msg_error("工号不能为空");
    	}
    });
    
    $("#number").focus(function(){//工号输入框获取焦点时取消提醒
    	$(".caution").hide();
    	$("#number").css("borderColor","#707070");    
    });
    
    //截图并保存事件信息
	var opts = {
		useCORS: true
	};
	html2canvas(document.getElementById("report"),opts).then(function(canvas){
	  	var url = canvas.toDataURL();
	    var link = $("#report").find("a").eq(0);
	    link.attr("href", url);
	    link.attr("download", (new Date()).getTime() + ".png"); 	
	});
    //操作VEDIO
    var myPlayer = videojs("myvideo", { fluid: true });
	myPlayer.on("pause", function(){
		$(".vjs-big-play-button").eq(0).show();
	});
	myPlayer.on("play", function(){
		$(".vjs-big-play-button").eq(0).hide();
	});
	$(".vjs-big-play-button").empty(true);
});
