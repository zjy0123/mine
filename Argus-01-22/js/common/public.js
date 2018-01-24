//实现irame的刷新
function refreshPage(){  
   var sessionStorage=window.sessionStorage;    
   var href=location.href.substring();  
   sessionStorage.setItem("refreshPage",href); 
   console.log(sessionStorage); 
};
refreshPage();

//用iframe的title修改页面的title
parent.document.title=document.title;