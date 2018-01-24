window.onload=function(){
	var myChartFirst = echarts.init(document.getElementById('mainFirst'));
	var mainSecond = echarts.init(document.getElementById('mainSecond'));
	var mainThird = echarts.init(document.getElementById('mainThird'));
	var mainFourth = echarts.init(document.getElementById('mainFourth'));
	var mainFixth = echarts.init(document.getElementById('mainFixth'));
	var sixFourth = echarts.init(document.getElementById('sixFourth'));
	function PercentPie(value1,value2){
		option = {
	    legend: {
	        orient: 'vertical',
	        x: 'left'
	    },
	  
	    series: [
	        {
	         
	            type:'pie',
	            radius: ['80%', '100%'],
	            legendHoverLink:false,
	            hoverAnimation:false,
	            stillShowZeroSum:false,
	            avoidLabelOverlap: false,
	         
	            label: {
	                normal: {
	                    show: true,
	                    color:'#000',
	                    position: 'center',
	                    fontSize:'14',
	                    padding:[15,0,0,0]
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '3',
	                        fontWeight: '100'
	                    }
	                }
	            },
	           
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            itemStyle:{
	            	
	            },
	            data:[
	                {value:value1, name:'2.78G \n\n'},
	                {value:value2, name:'8G'}
	               
	            ]
	        }
	    ]
		};
	}
	
	 PercentPie(2.78,8);
	 myChartFirst.setOption(option);
	 PercentPie(5,8);
	 mainSecond.setOption(option);
	 PercentPie(2.78,8);
	 mainThird.setOption(option);
	 PercentPie(5,8);
	 mainFourth.setOption(option);
	 PercentPie(2.78,8);
	 mainFixth.setOption(option);
	 PercentPie(5,8);
	 sixFourth.setOption(option);
}
	
//进度条

 