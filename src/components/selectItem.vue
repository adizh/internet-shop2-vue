<template>
    <div 
    :class='areOptionsVisible ? "selectItem":""' class='mainS'>
        <div 
        class='selectedOne'
        @click='areOptionsVisible =! areOptionsVisible'> {{selected}} </div>
<div class='mainOptions'>
  <div
 @click='selectOption(option)'
v-show='areOptionsVisible || isExpanded'
class='options' v-for='option in options'
 :key='option.value'>
  <p class='item'>{{option.name}}</p>
</div>
</div>
    </div>
</template>
<script>
export default {
  name:'selectItem' ,
  props:{
    options:{
      type:Array,
      default(){
        return []
      }
    },
    selected:{
      type:String
    },
    isExpanded: {
        type: Boolean,
        default: false
      }
  } ,
  data(){
    return{
      areOptionsVisible:false
    }
  },
  methods:{
    selectOption(option){
    this.$emit('selectName',option)
    this.areOptionsVisible=false
    },
    hideSelect(){
      this.areOptionsVisible=false
    }
  },
  mounted(){
       document.addEventListener('click',this.hideSelect.bind(this),true)
  },
  beforeDestroy() {
    document.removeEventListener('click',this.hideSelect)
  },
}
</script>
<style>
*{
  box-sizing:border-box;
}
.mainS{
  margin: 20px 4px;
}
    .options{
      height:auto;
    }
    .selectedOne{
      border: 1px solid grey;
   
    text-align: center;
        border-radius: 4px;
    border: 1px solid grey;

    text-align: center;
    padding: 6px;
    max-width: 204px;
    }
    .selectItem{
      border-radius:10px;
      border: 1px solid grey;
      width:200px;
      height: 200px;
    }
    .options{
      display:flex;
      flex-direction:column;
      justify-content: center;
      width:inherit;
       width:100%;
    }
    .item{
      border: 1px solid grey;
      padding:5px;
      text-align:center;
      width:90%;
      margin: 10px auto;
    }
    .item:hover{
      background-color:burlywood
    }

</style>