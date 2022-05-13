import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/page/Home.vue'
import Chart from './components/page/Chart.vue'
import SingleLine from './components/page/SingleLine.vue'
import PowerChart from './components/page/PowerChart.vue'
import TableList from './components/page/TableList.vue'
import User from './components/page/User.vue'
import Parameter from './components/page/Parameter.vue'
import Error from './components/page/Error.vue'
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/chart',
        component: Chart
    },
    {
        path: '/parameter',
        component: Parameter
    },
    {
        path: '/user',
        component: User
    },
    {
        path: '/single-line',
        component: SingleLine
    },
    {
        path: '/power-chart',
        component: PowerChart
    },
    {
        path: '/table-list',
        component: TableList
    },
    {
        path: '/:catchAll(.*)',
        component: Error
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router