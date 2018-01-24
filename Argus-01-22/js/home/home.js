var msg = [
				{
					time:'20秒之前',
					address:'场地：010WB-北京大兴中转场',
					data:"违规置信度：80%",
					count:'连续告警次数:1次',
					duration:"持续时间：30s"
				},
				{
					time:'1分钟之前',
					address:'场地：021WN-上海闵行中转场',
					data:"违规置信度：70%",
					count:'连续告警次数:2次',
					duration:"持续时间：30s"
				}
			];
//			
//			标记信息[
//				[经度,维度,val.....]
//			]
			var convertData = [
			    [116.46, 39.92, 80],
			    [121.48, 31.22, 70]
			];			
			$.get('../JSON/china.json', function (chinaJson) {
		    echarts.registerMap('china', chinaJson);
		    var chart = echarts.init(document.getElementById('main'));
		   	option = {
			    backgroundColor: '#404a59',
			    tooltip : {
			        trigger: 'item',
			        show:true,
			        formatter: function (params) {
                    	var res = '';
						var i = params.dataIndex;
						res+='<p class="msg">'+msg[i].time+'</p><p class="msg">'+msg[i].address+'</p>'+'<p class="msg">'+msg[i].data+'</p>'+'<p class="msg">'+msg[i].count+'</p>'+'<p class="msg">'+msg[i].duration+'<a class="open" onclick = "clickAction()">查看详情</a></p>'
						return res;
					},
                    position: function (point, params, dom, rect, size) {
				        return [point[0], point[1]-100];
				    },
                    show: true,
			        backgroundColor:'#fff',
					borderColor:'#ECECEC',
					borderWidth:1,
					extraCssText:'box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);',
					textStyle:{
						color:'#000',
						lineHeight:14,
						fontSize:12
					},
					alwaysShowContent:true
			    },
			    geo: {
			        map: 'china',
			        regions: [{name: '南海诸岛', value: 0, itemStyle: {normal: {opacity: 0, label: {show: false}}}}],
			        label: {
			            emphasis: {
			                show: false
			            }
			        },
			        roam: true,
			        itemStyle: {
			            normal: {
			                areaColor: '#323c48',
			                borderColor: '#5578B5',
			                borderWidth: 1
			            },
			            emphasis: {
			                areaColor: '#323c48'
			            }
			        },
			        scaleLimit:{
			        	min:0.6,
			        	max:1.5
			        }
			    },
			    series : [
			        
			        {
			            type: 'effectScatter',
			            coordinateSystem: 'geo',
			            data: convertData,
			            symbolSize: function (val) {
			                return Math.pow(val[2],4) / 1600000;
			            },
			            showEffectOn: 'render',
			            rippleEffect: {
			                brushType: 'stroke'
			            },
			            hoverAnimation: true,
			            label: {
			                normal: {			                	
			                    show: false,
			                }
			            },
			            itemStyle: {
			                normal: {
			                    color: '#F6B836',
			                    shadowBlur: 10,
			                    shadowColor: '#333'
			                }
			            },
			            zlevel: 1
			        }
			    ]
			};
			chart.setOption(option);
		});

		clickAction = function(){
			
			window.open("vapd-event.html?id=123456789");
		}