import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/index.vue'
import Vuex from '@/views/vuex/index.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/vuex',
		name: 'Vuex',
		component: Vuex
	},
	{
		path: '/axios',
		name: 'Axios',
		component: () => import('@/views/axios/index.vue') // 懒加载组件
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
