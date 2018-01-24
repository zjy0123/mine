//折线图开始
var myChart = echarts.init(document.getElementById('main'));		
	var colors = ['#9fdb86', '#49aaef', '#675bba','#000'];
	option = {
	    color: colors,				
	    tooltip: {
	    	trigger: 'axis',
	        backgroundColor:"#fff",
	        borderColor:"#eeeeee",
	        textStyle:{
	            color:"#656565",
	            fontSize:14,
	            lineHeight:30	           
	        },
	        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);',		    
	       	padding:20,
	       	formatter: function (params) {
	        	var res='<div class="time-info"><p>'+params[0].name+'</p><p>00:00~23:59:59</p></div>'				
				res+='<p class="lpss-data"><img src="../img/event/green.png"/>'+params[0].seriesName+'：'+params[0].data+'次</p>';
				res+='<p class="lpss-data"><img src="../img/vapd/ellipse.png"/>'+params[1].seriesName+'：'+params[1].data+'次</p>';
				return res;
			}
	    },
	    legend: {
	        data:['装车次数', '卸车次数'],
	        right:'70px',
	        top:'30px',
	        selectedMode:false  
	    },
	    grid: {
	        top: 70,
	        bottom: 50
	    },
	    xAxis: [			        
	        {  		            
	            type: 'category',		            
	            data: ["11-22", "11-23", "11-24", "11-25", "11-26", "11-27", "11-28"],
	            splitLine:{  
                    　　　　		 show:false  
                    　　		},
                axisTick:{
            		length:0   
            	},
            	axisLine:{
            		lineStyle:{
            			color:'#eee'
            		}
            	},
            	axisLabel:{
            		color:'#333'
            	}
	        },
	        {
	            type: 'category',
	            data: ["11-22", "11-23", "11-24", "11-25", "11-26", "11-27", "11-28"],
	            splitLine:{  
                    　　　　		 show:false  
                    　　		},
                axisTick:{
            		length:0   
            	},
            	position:'bottom',
            	axisLine:{
            		lineStyle:{
            			color:'#eee'
            		}
            	},
            	axisLabel:{
            		color:'#333'
            	}
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value',
	            splitLine:{  
                    　　　　		 show:false  
                    　　		},
                axisTick:{
            		length:0   
            	},
            	scale:false,
            	axisLabel: {
	            	formatter: '{value} 次',
	            	color:'#333'
	        	},
	        	min:function(value){
	        		var res = value.min - value.min%10 - 30;
	        		return res>0?res:value.min;
	        	},
	        	axisLine:{
            		lineStyle:{
            			color:'#eee'
            		}
            	}           
	        }
	    ],
	    series: [
	        {
	            name:'装车次数',
	            type:'line',
	            xAxisIndex: 1,
	            smooth: false,
	            data: [75, 80, 82, 75, 81, 100, 84],
	            markLine: {
	                data: [
	                    {
	                    	yAxis: 80,
	                    	name: '同比去年',
	                    	lineStyle:{
	                    		normal:{
	                    			color:'#80E680'
	                    		}
	                    	}			                    
	                    },
	                    {
	                    	yAxis: 70,
	                    	name: '环比上周',
	                    	lineStyle:{
	                    		normal:{
	                    			color:'#FBDC9B'
	                    		}
	                    	}
	                    }
	                ],
	                label: {
	                    normal: {
	                        position: 'end',
	                        formatter: '{b}'
	                    }
	                }, 
	                symbol:'none',
	            }
	        },
	        {
	            name:'卸车次数',
	            type:'line',
	            smooth: false,
	            data: [80, 76, 85, 88, 75, 78, 72],
	            xAxisIndex: 1,
	        },
	        
	    ]
	};
 myChart.setOption(option);
 
//折线图结束

//截图开始
		
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
		
		$("#btn").click(function(){
			screenPic("#main");
			
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
		
	})
//分页请求数据
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
  //分页请求数据结束
 //tab切换
 $(".mainHeadSort li").click(function(){
 	
 	$(this).toggleClass('active').siblings().removeClass('active')
 	
 })
