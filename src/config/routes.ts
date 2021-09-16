
import React from 'react';
const Home = React.lazy(() => import('../views/home/index'));
const About = React.lazy(() => import('../views/about/index'));
const ErrorPage = React.lazy(() => import('../views/404/index'));
export default [
    {
        name: '首页',
        layout: true,
        path: '/',
        icon: 'table',
        component: Home
    },
    {
        name: '首页',
        layout: true,
        path: '/home',
        icon: 'table',
        component: Home
    },
    {
        name: '表格',
        path: '/about',
        icon: 'table',
        component: About
    },
    {
        path: '/admin',
        name: 'admin',
        icon: 'crown',
        component: ErrorPage,
        routes: [
            {
                path: '/admin/index',
                name: 'sub-page',
                icon: 'smile',
                component: ErrorPage,

            },
            {
                path: '/admin/sub-page',
                name: 'sub-page',
                icon: 'smile',
                component: About,
                
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