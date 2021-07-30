import React, { FC } from "react";
import echarts from 'echarts'
import ReactECharts from 'echarts-for-react';
import "./index.less";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { HomeOutlined } from "@ant-design/icons";

interface countTypt {
	count: number;
}
interface countReducerType {
	countReducer: any;
}
const Home: FC = (res) => {
	const status = useSelector<countReducerType, countTypt>((state) => {
		return state.countReducer;
	});
	const toabout = () => {
		(res as any).history.push({ pathname: "/about" });
	};
	return (
		<div className="imgbox">
			<Button type="primary" onClick={toabout}>
				Home
			</Button>
			<HomeOutlined />
			<div>{status.count} </div>

			
		</div>
	);
};

export default Home;
