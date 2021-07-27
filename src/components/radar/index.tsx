import React, { FC } from "react";
import echarts from 'echarts'
import ReactECharts from 'echarts-for-react';
const Radar: FC = () => {

    const man = [100, 90, 80, 66]
    const woman = [20, 30, 40, 56]
    const total: Array<number> = []
    man.forEach((item, index) => {
        let max = item > man[index] ? index : man[index]
        max = max > 0 ? max * 1.5 : 10
        total.push(max)
    })
    const indicator = [
        {
            name: '养老保险',
            max: total[0],
        },
        {
            name: '住房公积金',
            max: total[1],
        },
        {
            name: '生育保险',
            max: total[2],
        },
        {
            name: '工伤保险',
            max: total[3],
        },

    ]
    const option = {
        backgroundColor: '#0B0D13',
        tooltip: {
            trigger: 'item',
        },
        color: ['#068AC3', '#B2782C'],

        legend: {
            icon: 'roundRect',

            top: '90%',
            show: true,
            padding: [3, 5],

            y: '1',
            center: 0,
            itemWidth: 20,
            itemHeight: 10,
            itemGap: 26,
            z: 3,
            // orient: 'horizontal',
            data: ['男', '女'],
            textStyle: {
                fontSize: 12,
                color: '#F1F7FF',
            },
        },
        radar: {
            center: ['50%', '50%'], // 外圆的位置
            radius: '55%',
            name: {
                textStyle: {
                    color: '#fff',
                    fontSize: 15,
                    fontWeight: 400,
                    fontFamily: 'PingFangSC-Regular,PingFang SC',
                    fontStyle: 'italic',
                },
            },
            // TODO:
            indicator: indicator,
            splitArea: {
                // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: {
                    // 分隔区域的样式设置。
                    color: ['rgba(255,255,255,0.0)', 'rgba(255,255,255,0.0)', 'rgba(255,255,255,0.0)', 'rgba(255,255,255,0.0)', 'rgba(255,255,255,0.0)'], // 画布颜色 // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                },
            },
            axisLine: {


                // 指向外圈文本的分隔线样式
                lineStyle: {
                    color: 'rgba(255,255,255,0.2)',
                },
            },
            splitLine: {
                // type: 'dashed' ,
                lineStyle: {
                    type: 'dashed',
                    color: ['#00ff00', '#ff00ff', 'red', '#ffffff', '#000000'], // 分隔线颜色
                    width: 1, // 分隔线线宽
                },
            },
        },
        series: [
            {
                type: 'radar',
                symbolSize: 5,
                data: [
                    {
                        // TODO:
                        value: man,
                        name: '男',
                        areaStyle: {
                            normal: {
                                color: 'rgba(76,155,254,0.5)'
                            }
                        }

                    },
                    {
                        // TODO:
                        value: woman,
                        name: '女',
                        areaStyle: {
                            normal: {
                                color: 'rgba(35,189,84,0.4)'
                            }
                        }
                    }
                ],
            }
        ],
    }
    return (<div>
        <ReactECharts style={{ height: '300px', width: '500px' }} option={option} />
    </div>)
};
export default Radar;
