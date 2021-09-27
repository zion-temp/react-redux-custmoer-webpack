import React, { FC, Suspense, useState, useEffect } from "react";
import echarts from 'echarts'
import ReactECharts from 'echarts-for-react';
import "./index.less";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { HomeOutlined } from "@ant-design/icons";
import { Switch, Route, withRouter } from "react-router-dom"
// import { Comlist } from "../comlist";
const Comlist = React.lazy(() => import('../comlist'));
const About = React.lazy(() => import('../about/index'));
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
	// console.log(res);
	const [num, setNum] = useState(0)
	useEffect(() => {
		console.log('变量----');
		console.log(num)
	}, [num])
	console.log('变量----333');
	const status = useSelector<countReducerType, countTypt>((state) => {
		return state.countReducer;
	});
	const toabout = () => {
		(res as any).history.push({ pathname: "/about" });

		window.less.modifyVars(//更换主题颜色要这么写
			{
				'@primary-color': '#1DA57A',
			}
		)
			.then(() => { console.log('success') })
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
			<div>{num}</div>
			<button onClick={() => {
				setNum((pro) => {
					let a = pro + 1



					return a
				})
			}}>add</button>


			<Switch>
				<Suspense fallback={<div>加载中...</div>}>
					<Route exact path="/home/c" component={() => (
						<Comlist>
							child test
						</Comlist>
					)}></Route>
				</Suspense>
			</Switch>



		</div>
	);
};

export default withRouter(Home);
