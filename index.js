import Vue from "vue"
import Vuex from "vuex"
import VueRouter from "vue-router"
import $ from "jquery"
window.$ = $
import "./resource/css/base.css"
import "./resource/css/iconfont.css"
import "./resource/css/weui.css"
import "./resource/iconfont/iconfont.css"
import "./resource/iconk/iconfont.css"
Vue.use(Vuex)
Vue.use(VueRouter)
//引入组件
import index from "./components/index.vue"
import set from "./components/set.vue"
import tab1 from "./components/tab/tab1.vue"
import tab2 from "./components/tab/message.vue"
import tab3 from "./components/tab/find.vue"
import tab4 from "./components/tab/me.vue"
import myhomepage from "./components/tab/myhomepage.vue"
import homepage from "./components/tab/homepage.vue"
import sina from "./components/tab/sina.vue"
//var xheader = require("./components/xheader.vue")
let router = new VueRouter({
	routes:[{
		path:"/index",
		component:index,
		children:[{
			path:"tab1",
			component:tab1,
		},{
			path:"tab2",
			component:tab2,
		},{
			path:"tab3",
			component:tab3,
		},{
			path:"tab4",
			component:tab4,
		},{
			path: '/index',
			redirect: '/index/tab1'
		}]
	},{
		path:'/set',
		component:set,
	},{
		path:'/myhomepage',
		component:myhomepage,
		children:[{
			path:"homepage",
			component:homepage,
		},{
			path:"sina",
			component:sina,
		},{
			path: '/myhomepage',
			redirect: '/myhomepage/homepage'
		}]
	},{
		path: '/',
		redirect: '/index'
	}]
})
let store = new Vuex.Store({
	state:{
		title:"vue-webpack"
	}
})

new Vue({
	el: "#index",
	store,
	router,
	data: {
		
	},
	template: `
		<router-view></router-view>
	`,
	components: {
		index
	}
})