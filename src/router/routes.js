import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../components/HcodeSectionBanner'
import News from './../components/HcodeSectionNews'
import Notice from './../components/HcodeSectionNewsNotice'
import HcodeTo404 from './../components/HcodeTo404'

Vue.use(VueRouter)

export default new VueRouter({
    linkExactActiveClass: 'link-active',
    routes: [{
        path: '/',
        component: Home
    }, {
      path: '/news',
      alias: '/notices',
      component: News  
    }, {
        path: '/news/:idnotice',
        name: 'notice',
        component: Notice,    
    }, {
        path: '/admin',
        redirect: '/'
    }, {
        path: '*',
        component: HcodeTo404
    }
]
})