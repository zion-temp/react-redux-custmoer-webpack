import React,{FC} from "react";

import './index.less'
import { Button } from 'antd';
import {useSelector, useDispatch} from 'react-redux'
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
  } from '@ant-design/icons';

  interface countTypt{
    count:number
  }
  interface countReducerType  {
    countReducer:any
  }
const Home:FC = (res ) => {

  const status =useSelector<countReducerType,countTypt>(state=>{
		  return state.countReducer
	})
  // console.log(res)
    const toabout = ()=>{
      (res as any).history.push({pathname: '/about'})
    }
    return <div>
                <Button type="primary" onClick={toabout}>Home</Button> 
                <HomeOutlined />
                <div>{status.count}</div>
        </div>;
};

export default Home;