$(function(){
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
		
		$("#warnSort").click(function(){
			screenPic(".warn");
			
		})
		$("#warnScreen").click(function(){
			
			screenPic(".warn");
		    
		})
		$("#TimeScreen").click(function(){
			
			screenPic(".lengthOfTime");
		    
		})
		$("#throwScreen").click(function(){
			
			screenPic(".throw");
		    
		})
		$("#violationScreen").click(function(){
			
			screenPic(".violationLink");
		    
		})
		$("#processScreen").click(function(){
			
			screenPic(".processingTime");
		    
		})
		$("#loadScreen").click(function(){
			
			screenPic(".loadingRate");
		    
		})
		$("#warnCount").click(function(){
			
			screenPic(".line-chart");
		    
		})
		
	})
	//分页
	var newlist = new Vue({
      el: '#app',
      data: {
        current_page: 1, //当前页
        pages: 50, //总页数
        changePage:'',//跳转页
        nowIndex:0
      },
      computed:{
         show:function(){
             return this.pages && this.pages !=1
         },
         pstart: function() {
           return this.current_page == 1;
         },
         pend: function() {
           return this.current_page == this.pages;
         },
         efont: function() {
           if (this.pages <= 7) return false;
           return this.current_page > 5
         },
         ebehind: function() {
           if (this.pages <= 7) return false;
           var nowAy = this.indexs;
           return nowAy[nowAy.length - 1] != this.pages;
         },
         indexs: function() {

           var left = 1,
             right = this.pages,
             ar = [];
           if (this.pages >= 7) {
             if (this.current_page > 5 && this.current_page < this.pages - 4) {
               left = Number(this.current_page) - 3;
               right = Number(this.current_page) + 3;
             } else {
               if (this.current_page <= 5) {
                 left = 1;
                 right = 7;
               } else {
                 right = this.pages;

                 left = this.pages - 6;
               }
             }
           }
           while (left <= right) {
             ar.push(left);
             left++;
           }
           return ar;
         },
       },
      methods: {
        jumpPage: function(id) {
          this.current_page = id;
        },
      },

    })