<template>
    <div class='cartItem'>
   <div>{{item.name}}</div>
   <div>{{Math.floor(item.price)}}</div>
   <div>{{item.category}}</div>
<button  @click='deleteFromCart'>delete</button>

  <div>
      <button @click='minus'>-</button>
       quantity {{item.number}}
<button @click='plus'>+</button>

  </div>
    </div>
</template>
<script>
export default {
    name:'catalogItem',
    props:{
        item:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
deleteFromCart(){
    this.$emit('deleteFromCart')
},
plus(){
    this.$emit('plus')
},
minus(){
    this.$emit('minus')
},
    },
    mounted(){
        this.$set(this.item,'number',1)
    }
}
</script>
<style>
   .cartItem{
 border-radius: 4px;
    border: 1px solid grey;
    width: 70%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
   } 
   .cartItem div{
       margin: 6px 4px;
   }
</style>