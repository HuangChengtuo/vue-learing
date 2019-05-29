import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Todo from './views/Todo.vue'
import notFound from "@/views/notFound";
import HelloWorld from "@/components/HelloWorld";
import News from '@/views/News'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: {name: 'home'}
		},
		{
			path: '/home',
			name: 'home',
			component: Home,
			children: [
				{
					path: ':id',
					component: HelloWorld
				}
			]
		},
		{
			path: '/news',
			name: 'news',
			component: News
		},
		{
			path: '/todo',
			name: 'todo',
			component: Todo
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		},
		{
			path: '*',
			name: '404',
			component: notFound
		}
	]
})
