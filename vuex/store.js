import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
let store = new Vuex.Store({
    state:{
        products:[],
        cart:[],
        isMobile:false,
        isDesktop:true,
        searchValue:''
    },
    mutations:{
        SET_DATA_FROM_AXIOS:(state,products)=>{
            state.products=products
        },
        SET_CART:(state,product)=>{
            let isExist=false
if(state.cart.length){
state.cart.map((item)=>{
    if(item.article === product.article){
isExist=true;
item.number++
    }
})
if(!isExist){
    state.cart.push(product)
}
} 
else{
    
    state.cart.push(product)
}
        } ,
        SET_DELETE:(state,index)=>{
            state.cart.splice(index,1)
        },
        SET_PLUS:(state,index)=>{
state.cart[index].number++
        },
        SET_MINUS:(state, index)=>{
            if(state.cart[index].number > 0){
                state.cart[index].number--
            }
        },
        SET_MOBILE:(state)=>{
state.isMobile=true;
state.isDesktop=false
        },
        SET_DESKTOP:(state)=>{
            state.isMobile=false;
            state.isDesktop=true
            },
            SET_SEARCH_VALUE:(state,value)=>{
                state.searchValue=value
            }
            
    },
    actions:{
        GET_PRODUCTS_FROM_API({commit}){
            return axios('http://localhost:3000/products',{
                method:'GET'
            })
            .then((products)=>{
        commit('SET_DATA_FROM_AXIOS',products.data)
                return products
            })
            .catch((err)=>{
                console.log(err)
                return err
            })
        },
        ADD_TO_CART({commit},product){
            commit('SET_CART',product)
        },
        DELETE_ACTION_FROM_CART({commit},index){
commit('SET_DELETE',index)
        },
        ACTION_PLUS({commit},index){
commit('SET_PLUS',index)
        },
        ACTION_MINUS({commit},index){
            commit('SET_MINUS',index)
                    },
    ACTION_MOBILE({commit}){
                        commit('SET_MOBILE')
                    },
ACTION_DESKTOP({commit}){
                        commit('SET_DESKTOP')
                    },
                    ACTION_SEARCH({commit},value){
                        commit('SET_SEARCH_VALUE',value)
                    }
            },
 getters:{
PRODUCTS(state){
                    return state.products
                },
/* CART(state){
     return state.cart
 }, */
 CART(state){
    return state.cart
},
IS_MOBILE(state){
    return state.isMobile
},
IS_DESKTOP(state){
    return state.isDesktop
},
GET_SEARCH_VALUE(state){
    return state.searchValue
}

            },
})
export default store 


 