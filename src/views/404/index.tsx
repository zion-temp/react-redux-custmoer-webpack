import React, { FC } from "react";
import "./index.less";
import { Switch, Route } from "react-router-dom"
import  About1  from '../about/index'
// import About1 from "../views/about"
const ErrorPage: FC = (res) => {
	console.log(res);

	return (
		<div>
			404d
			{/* <About1></About1> */}
			<Switch>
				<Route exact path='/admin/index' component={About1} ></Route>
			</Switch>
		</div>
	);
};
export default ErrorPage;
