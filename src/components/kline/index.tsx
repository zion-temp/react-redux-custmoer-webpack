import React, { FC } from "react";
import echarts from 'echarts'
import ReactECharts from 'echarts-for-react';
const Kline: FC = () => {

    const option = {
        tooltip: {  //提示框
            trigger: 'axis',    //触发类型：坐标轴触发
            axisPointer: {  //坐标轴指示器配置项
                type: 'cross'   //指示器类型，十字准星
            }
        },
        xAxis: {
            show:false,
            data: [1612695300, 1612695240, 1612695180, 1612695120, 1612695060, 1612695000, 1612694940, 1612694880, 1612694820, 1612694760, 1612694700, 1612694640, 1612694580, 1612694520, 1612694460, 1612694400, 1612694340, 1612694280, 1612694220, 1612694160, 1612694100, 1612694040, 1612693980, 1612693920, 1612693860, 1612693800, 1612693740, 1612693680, 1612693620, 1612693560]
        },
        yAxis: {
            // show:false,
            scale: true,
            splitArea: {
                show: false
            },
            "axisLine": {
                "lineStyle": {
                    "color": '#4a657a'
                }
            },
            "axisLabel": {
                "textStyle": {
                    "color": '#4a657a'
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": '#0AFDC5',
                    "type": 'dashed'
                }
            },
        },
        series: [{
            type: 'k',
            itemStyle: {
                borderRadius: [5, 5, 5, 5],
                color: '#004FA4',
                color0: '#0AFDC5',
                borderColor: '#004FA4',
                borderColor0: '#0AFDC5'
            },
            data: [
                [1650.27, 1650.06, 1650.0, 1651.16],
                [1650.06, 1650.37, 1649.32, 1650.52],
                [1650.37, 1651.06, 1650.37, 1651.84],
                [1650.93, 1648.01, 1648.0, 1651.07],
                [1648.01, 1650.28, 1646.44, 1651.1],
                [1650.28, 1653.37, 1649.68, 1653.65],
                [1653.36, 1654.0, 1653.05, 1655.0],
                [1654.0, 1652.61, 1652.39, 1655.0],
                [1652.82, 1650.16, 1649.0, 1652.82],
                [1650.16, 1647.29, 1646.4, 1651.64],
                [1646.74, 1647.98, 1646.05, 1649.39],
                [1647.85, 1647.57, 1647.0, 1648.61],
                [1647.6, 1646.29, 1645.67, 1647.6],
                [1646.29, 1642.91, 1642.5, 1647.64],
                [1642.91, 1643.17, 1636.54, 1645.0],
                [1643.17, 1642.88, 1642.27, 1644.21],
                [1642.88, 1643.87, 1642.88, 1644.17],
                [1643.87, 1642.41, 1641.17, 1644.1],
                [1642.41, 1641.13, 1641.13, 1644.0],
                [1641.28, 1642.0, 1639.52, 1642.0],
                [1642.0, 1642.22, 1641.29, 1643.87],
                [1642.22, 1641.63, 1641.57, 1643.52],
                [1641.63, 1641.75, 1641.58, 1643.0],
                [1641.74, 1641.76, 1641.65, 1643.16],
                [1641.76, 1640.63, 1639.2, 1641.76],
                [1640.64, 1639.87, 1638.55, 1640.64],
                [1639.98, 1641.3, 1639.67, 1641.33],
                [1641.29, 1639.51, 1638.97, 1641.29],
                [1639.47, 1639.99, 1638.95, 1640.57],
                [1640.0, 1639.96, 1639.71, 1640.0]
            ]
        }]


    };
    return (<div>
        <ReactECharts style={{ height: '300px', width: '500px' }} option={option} />
    </div>)
};
export default Kline;
