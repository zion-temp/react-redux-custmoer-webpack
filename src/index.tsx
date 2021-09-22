import React, { FC, useEffect } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route, Redirect, Link, BrowserRouter as Router } from 'react-router-dom'
import asyncComponent from './utils/ asyncComponent';
import "@/index.less";

import Darkmode from 'darkmode-js';
import { Provider } from 'react-redux'
import store from "./store/index";

const Home = asyncComponent(() => import("./views/home/index"));
const About = asyncComponent(() => import("./views/about/index"));
const ErrorPage = asyncComponent(() => import("./views/404/index"));


import { optionsType } from './type/index'

import routers from './config/routes'

import LayoutComp from "./layout";



const App: FC = () => {
    const option: optionsType = {
        time: '0.5s', // default: '0.3s'
        saveInCookies: true, // default: true,
        label: '🌓', // default: ''
        autoMatchOsTheme: true // default: true
    }

    function routerFilter(routers: any, islayout: boolean) {
        return <HashRouter>
            <Switch>
                <Route path={'/home'} >
                    <Home />
                </Route>
                <Route path={'/about'} component={() => {
                    return (<About />);
                }} />
                <Redirect exact to={'/home'} from={'/'}/>
                <Route component={ErrorPage}/>
            </Switch> 
        </HashRouter>
    }
    useEffect(() => {
        new Darkmode(option).showWidget();
    }, [])
    return <>
        {
            routerFilter(routers, true)
        }
    </>
};


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));

// 渐进式serviceworker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(() => {
        // console.log('succcess')
    }).catch(() => {
        console.log('feld')
    })

}
