import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router);

import Home from "@/pages/Home.vue";
import Example from "@/pages/Example.vue";
import notFound from '@/pages/404.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/example',
		name: 'example',
		component: Example,
	},
	{
		path: '*',
		name: 'notFound',
		component: notFound,
	},
]
const router = new Router({
	mode: 'history',
	routes,
})
export default router
