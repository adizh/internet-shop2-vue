<template>
<div>
    <div class='mainCart'>
        <cartItem 
        v-for='(item, index ) in cartData'
:key='item.catalog'
:item='item'
@deleteFromCart='deleteFromCart(index)'
@plus='plus(index)'
@minus='minus(index)'
        />
         </div>
        <div>total {{Math.floor(totalSum)}}</div>
        <router-link :to='{name:"catalog"}'>Back</router-link>
</div>
</template>
<script>
import cartItem from './cartItem'
import {mapActions} from 'vuex'
export default {
    name:'cart',
    components:{
        cartItem
    },
    props:{
      cartData:{
          type:Array,
          default(){
              return []
          }
       }   
    },
    methods:{
        ...mapActions(['DELETE_ACTION_FROM_CART','ACTION_PLUS','ACTION_MINUS']),
        deleteFromCart(index){
this.DELETE_ACTION_FROM_CART(index)
     },
     plus(index){
this.ACTION_PLUS(index)
     },
     minus(index){
this.ACTION_MINUS(index)
     }
    },
    computed:{
        totalSum(){
           if(this.cartData.length){
                let res=[]
            for (let item of this.cartData){
                res.push(item.price*item.number)
            }
            res=res.reduce((acc,rec)=>acc+rec)
            return res
           }else{
               return 0
           }
        },
    }
}
</script>
<style>
.mainCart{
    margin-top: 101px;
    display:flex;
    justify-content:space-between;

}
</style>