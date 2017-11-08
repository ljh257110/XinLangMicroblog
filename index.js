import Vue from "vue"
import Vuex from "vuex"
import VueRouter from "vue-router"
import $ from "jquery"
window.$ = $
import "./resource/css/base.css"
Vue.use(Vuex)
Vue.use(VueRouter)
//引入组件
import index from "./components/index.vue"
import tab1 from "./components/tab/tab1.vue"
import tab2 from "./components/tab/tab2.vue"
import tab3 from "./components/tab/tab3.vue"
import tab4 from "./components/tab/tab4.vue"
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
		},]
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