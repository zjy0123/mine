//让iframe高度自适应
function reinitIframe(){
	var iframe = document.getElementById("myiframe");
	try{
		var bHeight = iframe.contentWindow.document.body.scrollHeight;
		var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
		var height = Math.max(bHeight, dHeight);
		iframe.height = height;
	}catch (ex){}
}
window.setInterval("reinitIframe()", 200);