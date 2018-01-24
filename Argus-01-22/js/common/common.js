//页面加载动画
function startLoading() {
	layer.load(2, {
		shade: [0.1,'#000'],
		offset:['400px','50%'],
		area:['100px','100px']
	});
};
//关闭页面加载动画
function endLoading() {
	layer.closeAll("loading");
};
//延时器模拟关闭
startLoading();
setTimeout(function(){
    endLoading();
}, 1000);


//成功的提示
function msg_success(msg) {
	layer.msg(msg, {
		icon : 1,
		time : 1000,
		offset : "300px"
	});
};
//错误警告
function msg_error(msg) {
	layer.alert(msg, {
		icon : 2,
		offset : "300px"
	});
};