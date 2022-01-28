import Vue from 'vue'
import Router from 'vue-router';
import catalog from '../components/catalog'
import cart from '../components/cart'
import mainPage from '../components/mainPage'
Vue.use(Router)
let router= new Router({
    routes:[
        {path:'/',name:'mainPage',component:mainPage},
        {path:'/catalog', component:catalog,name:'catalog'},
        {path:'/cart', component:cart,name:'cart',props:true},
    ]
})
export default router;