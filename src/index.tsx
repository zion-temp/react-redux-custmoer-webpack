import React, { FC, Suspense, useReducer, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route, Redirect, Link, BrowserRouter as Router } from 'react-router-dom'

import "@/index.less";

import Darkmode from 'darkmode-js';
import { Provider } from 'react-redux'
import store from "./store/index";
const Home = React.lazy(() => import('./views/home/index'));

const About = React.lazy(() => import('./views/about/index'));

const ErrorPage = React.lazy(() => import('./views/404/index'));

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
        // console.log(routers,islayout);

        return <HashRouter>
            <Switch>
                <Suspense fallback={<div>加载中...</div>}>
                    <Route path={'/home'} >
                        <Home />
                    </Route>
                    <Route path={'/about'} component={() => {
                        return (<About />);
                    }} />
                    {/* {
                    routers.map((item: any, index: number) => {
                        if (item.layout) {
                            return <Route exact path={item.path} key={index} component={()=>{
                                return (<item.component/>)
                            }} />
                        } else {
                            if (item.routes && item.routes.length > 0) {
                                if (item.component) {
                                    return <Route
                                        exact
                                        path={item.path}
                                        key={index}
                                        component={
                                            () => <LayoutComp >
                                                <item.component {...item.routes}></item.component>
                                            </LayoutComp>}
                                    />
                                } else {
                                    return item.routes.map((it: any, ind: number) => {
                                        return <Route exact path={it.path} key={ind} render={() => <LayoutComp>
                                            {<it.component />}
                                        </LayoutComp>} />
                                    })
                                }
                            } else {
                                if (islayout) {
                                    return <Route exact path={item.path} key={index} render={() => <LayoutComp>
                                        {<item.component />}
                                    </LayoutComp>} />
                                } else {
                                    return <Route exact path={item.path} key={index} component={item.component as React.ComponentType<any>} />
                                }

                            }
                        }
                    })
                } */}
                </Suspense>
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
