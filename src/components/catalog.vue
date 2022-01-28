<template>
<div class='catalogPage'>
    <router-link class='linkCart' :to='{name:"cart",params:{cartData:CART}}'>Cart {{CART.length}}</router-link>
<selectItem :options='options'
@selectName='selectName'
:selected='selected'
:isExpanded='IS_MOBILE'
/>
<div v-if='isAdded' class="alert alert-success added_alert" role="alert">
 Added to cart!
</div>
<div class="filters">
<input type="range" @change='rangeSlider' v-model.number='minPrice' min='0' max='10000'>
<input type="range" @change='rangeSlider' v-model.number='maxPrice' min='0' max='10000'>
</div>
<div> min {{minPrice}}</div>
<div> max {{maxPrice}}</div>
  <div class='catalog'>
 <catalogItem
  v-for='product in filteredOptions'
 :key='product.catalog'
 :product='product'
 @addToCart='addToCart'

 />
</div>

</div>
</template>
<script>
import catalogItem from './catalogItem'
import selectItem from './selectItem.vue'
import {mapActions,mapGetters} from 'vuex'
export default {
  name: "catalog",
  components: { catalogItem,selectItem},
     data() {
      return {
       isAdded:false,
        options:[{
name:'Мужские',value:'m'

        },
        {
name:'Женские',value:'w'

        },
        {
name:'Все',value:'a'

        }
        ],
         selected:"select",
         sortedProducts:[],
         minPrice:0,
         maxPrice:10000,
      }
      
    },
      computed: {
          ...mapGetters(['PRODUCTS','CART','IS_MOBILE','GET_SEARCH_VALUE']), 
          filteredOptions(){
            if(this.sortedProducts.length){
              return this.sortedProducts
            }else{
              return this.PRODUCTS
            }
          }
    },
  methods:{
      ...mapActions([
'GET_PRODUCTS_FROM_API',
'ADD_TO_CART'
      ]),
      addToCart(data){
       
      this.ADD_TO_CART(data)
      this.isAdded=true;
      let vm=this;
setTimeout(()=>{
  vm.isAdded=false;
},2000)
     
    },
    selectName(option){
      this.sortedProducts=[...this.PRODUCTS]
      let vm=this;
      this.sortedProducts=this.sortedProducts.filter((item)=>{
        return item.price >= vm.minPrice && item.price <=vm.maxPrice
      })
      if(option){
        this.selected=option.name
        this.sortedProducts=this.sortedProducts.filter((item)=>{
        return item.category===option.name
      })
      }
    },
    rangeSlider(){

 if(this.minPrice > this.maxPrice){
            let tmp=this.maxPrice
            this.maxPrice=this.minPrice;
            this.minPrice=tmp
          }
          
this.selectName()
    },
sortProductsBySearchValue(value) {
        this.sortedProducts = [...this.PRODUCTS]
        if (value) {
          this.sortedProducts = this.sortedProducts.filter(function (item) {
            return item.name.toLowerCase().includes(value.toLowerCase())
          })
        } else {
          //this.sortedProducts = this.PRODUCTS;
          return 'there is no such ppro'
        }
      }
    },
    watch:{
      GET_SEARCH_VALUE(){
this.sortProductsBySearchValue(this.GET_SEARCH_VALUE);
      }
    },
    mounted() {
     this.GET_PRODUCTS_FROM_API()
     .then((resp)=>{
       console.log(resp)
       this.selectName()
       this.sortProductsBySearchValue(this.GET_SEARCH_VALUE);
     })
    
    },
   
  };
 </script>
<style scoped>
.catalog{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items:center;
  gap:10px;
  margin: 20px auto;
      width: 755px;
    position: relative;
    left: -93px;
    right: 0;
    margin: 10px auto;
}
.catalogPage{
 
  margin-top: 100px;
}
.added_alert{
      position: fixed;
    z-index: 1000;
    position: absolte;
    /* position: absolute; */
   
    right: 10px;
    margin: 0 auto;
    width: 200px;
  
}
.linkCart{
width: 64px;
    /* left: 115px; */
    display: block;
    text-decoration: none;
    /* display: inline-block; */
    background: gainsboro;
    padding: 10px;
    border-radius: 5px;
    position: rea;
    position: absolute;
    right: 91px;
    transition: .2s ease
    
}
.linkCart:hover{
  color:white;
  transition: .2s ease-in;
}
</style>
