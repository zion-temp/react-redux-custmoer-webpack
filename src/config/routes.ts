
import React from 'react';
const Home = React.lazy(() => import('../views/home/index'));
const About = React.lazy(() => import('../views/about/index'));
const ErrorPage = React.lazy(() => import('../views/404/index'));
// import {} from '../'
import Home1 from "../views/home"
import ErrorPage1 from "../views/404"
import About1 from "../views/about"
export default [
    {
        name: '首页',
        layout: true,
        path: '/',
        icon: 'table',
        component: Home1
    },
    {
        name: '首页',
        layout: true,
        path: '/home',
        icon: 'table',
        component: Home1
    },
    {
        name: '表格',
        path: '/about',
        icon: 'table',
        component: About1
    },
    {
        path: '/admin',
        name: 'admin',
        icon: 'crown',
        component: ErrorPage1,
        routes: [
            {
                path: '/admin/index',
                name: 'sub-page',
                icon: 'smile',
                component: ErrorPage1,

            },
            {
                path: '/admin/sub-page',
                name: 'sub-page',
                icon: 'smile',
                component: About1,
                
            },
        ],
    },
    {
        name: 'list.table-list',
        icon: 'table',
        path: '/list',
        component: './TableList',
    },
]