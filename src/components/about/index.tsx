import React, { FC } from "react";

import {useSelector, useDispatch} from 'react-redux'
import "./index.less";
import { Button } from "antd";
import actionType from "../../store/actionType";

import Bar from "../bar"
import Kline from "../kline";
import Line from "../line";
import Radar from "../radar"
const Logo =  require('@/static/imgs/app-plus/location@3x.png')
interface countTypt{
	count:number
}

interface countReducerType  {
	countReducer:any
}

const About: FC = () => {
	
	const status =useSelector<countReducerType,countTypt>(state=>{
		return state.countReducer
	})

	const dispatch = useDispatch()
	const zj = () => {
		dispatch({
			type: actionType.INCREASE,
		})
	}
	const js = () => {
		dispatch({
			type: actionType.DECREMENT,
			payload: 4
		})
	}
	return (
		<div>
			<Radar/>
			<Line/>
			<Bar/>
			<Kline/>
			
			{/* <button onClick={zj}>+</button>
			<button onClick={js}>-</button>
			<Button type="primary" >
				About  {status.count}
			</Button> */}
			{/* <img src={Logo} alt="" /> */}
			{/* <img src={require('../../static/imgs/logo.png')} alt="" /> */}
			
		</div>
	);
};
export default About;
