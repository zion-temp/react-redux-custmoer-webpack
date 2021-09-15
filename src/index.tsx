import React, { FC, Suspense, useReducer, useEffect } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route, Redirect, Link, BrowserRouter as Router } from 'react-router-dom'

import "@/index.less";

import Darkmode from 'darkmode-js';
import { Provider } from 'react-redux'
import store from "./store/index";
const Home = React.lazy(() => import('./components/home/index'));
const About = React.lazy(() => import('./components/about/index'));
import { optionsType } from './type/index'
const App: FC = () => {
    const option: optionsType = {
        time: '0.5s', // default: '0.3s'
        saveInCookies: true, // default: true,
        label: '🌓', // default: ''
        autoMatchOsTheme: true // default: true
    }
    useEffect(() => {
        new Darkmode(option).showWidget();
    }, [])
    return <>
        <Router>
            <Link to="/">首页</Link>
            <Link to="/about">关于我们</Link>
            <Switch>
                <Redirect exact from='/' to='/home' />
                <Suspense fallback={<div>加载中...</div>}>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                </Suspense>
            </Switch>
        </Router>
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
        console.log('succcess')
    }).catch(() => {
        console.log('feld')
    })

}
