import React, { FC } from "react";
import echarts from 'echarts'
import ReactECharts from 'echarts-for-react';
import "./index.less";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { HomeOutlined } from "@ant-design/icons";
// import less from 'less';
interface countTypt {
	count: number;
}
interface countReducerType {
	countReducer: any;
}
const Home: FC = (res) => {
	// less.modifyVars({
	// 	'@primary-color': 'red'
	//  });
	const status = useSelector<countReducerType, countTypt>((state) => {
		return state.countReducer;
	});
	const toabout = () => {
		// (res as any).history.push({ pathname: "/about" });

		window.less.modifyVars(//更换主题颜色要这么写
            {
                '@primary-color': '#1DA57A',
            }
        )
        .then(() => {console.log('success')})
        .catch(error => {
            console.log(error);
        });


	};
	return (
		<div className="imgbox">
			<Button type="primary" onClick={toabout}>
				Home
			</Button>
			<HomeOutlined />
			<div className="box1">{status.count} </div>


		</div>
	);
};

export default Home;
