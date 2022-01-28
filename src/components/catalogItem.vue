<template>
  <div class='catalogItem'>
    <img class='catalogImg' :src="require('../assets/images/' + product.image)"  alt="">
   <div>{{product.name}}</div>
   <div>{{Math.floor(product.price)  | priceFormat}}</div>
   <div>{{product.category}}</div>
<div class='btns'>
     <button class='info_btn' @click='showInfo'>Info</button>
<button class='add_btn' @click='addToCart'>add to cart</button>
</div>
 <popUp v-if='isPopUpVisible'
 @closePopUp='closePopUp'
  >
   <div>{{product.name}}</div>
   <div>{{Math.floor(product.price) | priceFormat }}</div>
   <div>{{product.category}}</div>
  </popUp>

  </div>
 
</template>

<script>
import popUp from './popUp'
import priceFormat from '../filters/price-format.js'
export default {
  name: "catalogItem",
  components:{popUp},
  filters:{priceFormat},
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return{
      isPopUpVisible:false
    }
  },
  methods: {
    addToCart(){
      this.$emit('addToCart',this.product)
    },
    showInfo(){
      this.isPopUpVisible=true
    },
    closePopUp(){
      this.isPopUpVisible=false
    }
  },
};
</script>

<style>
.catalogItem{
  border:1px solid grey;
  width:35%;
  margin:10px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:4px;
  padding: 10px;
}

.catalogItem div {
  margin: 6px 4px;
}

.catalogImg{
max-width: 50%;
}
.info_btn{
  margin-right: 4px;
    border: none;
    border-radius: 4px;
    padding: 5px 17px;
}
.add_btn{
    border: none;
    border-radius: 4px;
    padding: 5px 17px;
}
.add_btn:hover,
.info_btn:hover{
  color:#00000050;
  cursor:pointer;
}
</style>