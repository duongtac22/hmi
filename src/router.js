import { createRouter, createWebHistory } from 'vue-router'

import Home from './page/Home.vue'
import Chart from './page/Chart.vue'
import SingleLine from './page/SingleLine.vue'
import PowerChart from './page/PowerChart.vue'
import TableList from './page/TableList.vue'
import User from './page/User.vue'
import Parameter from './page/Parameter.vue'
import Error from './page/Error.vue'
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