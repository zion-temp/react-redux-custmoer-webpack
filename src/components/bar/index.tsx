import React,{FC} from "react";
import echarts from 'echarts'
import ReactECharts from 'echarts-for-react';
const Bar:FC= () => {
	var barImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozODBBRTU4RkZGNjUxMUU4Qjg0M0MyQjk1NEVFQTRCMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozODBBRTU5MEZGNjUxMUU4Qjg0M0MyQjk1NEVFQTRCMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM4MEFFNThERkY2NTExRThCODQzQzJCOTU0RUVBNEIwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM4MEFFNThFRkY2NTExRThCODQzQzJCOTU0RUVBNEIwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8z6pYgAAAOVJREFUeNpiFBQUZAACfiD+yMQAAR9BAkxQUbAAQAAxApXBlaBIfwQIIEaoCQzI6lE0w7QABBDMEAYkCQaYgShGIDsELoFuJgOyShQJgADC5iQGdIuRdSM7kwHNMXAH8WMxBUMDE7pOXBpYsFiF7mUwGyCA0EMNq0ewhSQ20xlwhS5WxUy4rMIVXwQV4wpHDMCEI/o+4lJIUDETviDBlSjwKgYI0EoZ3AAAhCDMsP+ybuAEWrjc3zSKDaRZOV/bVuxrcNP0An4BC86KwTKyi8CiTFKw3LBdsNIvEliverjdVFAUTbIP88I1kSgGzWQAAAAASUVORK5CYII=';
	var PatternImgA = new Image();
	PatternImgA.src = barImage;
	const option = {
		xAxis: {
			show: false,
			type: 'value'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none'
			},
			formatter: function(params: { value: string;name:string }[]) {
				return params[0].name + ' : ' + params[0].value
			}
		},
		yAxis:[
			{
				type: 'category',
				inverse: true,
				axisLabel: {
					show: true,
					// margin:15,
					textStyle: {
						color: '#fff',
					},
				},
				splitLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				},
				data: ['小一', '小二', '小三','小四','小五','小六']
			}, {
				type: 'category',
				inverse: true,
				axisTick: 'none',
				axisLine: 'none',
				show: true,
				axisLabel: {
					textStyle: {
						color: '#4B4B4B',
						fontSize: '12'
					},
				},
				data: [653, 755,705,655,675,654]
			}
		],
		series: [
			{
				data: [653, 755,705,655,675,654],
				type: 'bar',
				barWidth: 16,
				barGap: '-100%',
				barCategoryGap: 23,
				itemStyle: {
					barBorderRadius: [8, 8, 8, 8],
					xAxisIndex: 2,
					yAxisIndex: 2,
					zlevel: 2
				},
			},
			{
				name: '背景',
				type: 'bar',
				barWidth: 15,
				barGap: '-100%',
				data: [1000,1000,1000,1000,1000,1000],
				itemStyle: {
					color: {
						image: PatternImgA,
						repeat: 'repeat'
					},
					barBorderRadius: [8, 8, 8, 8],
					xAxisIndex: 2,
					yAxisIndex: 2,
					zlevel: 2
				},
			},
		]
	};
	return (<div>
		<ReactECharts  style={{ height: '300px',width:'500px' }} option={option} />
	</div>)
};
export default Bar;
