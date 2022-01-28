<template>
  <div id="app">
 <mainWrapper />
  </div>
</template>
<script>
import mainWrapper from './components/mainWrapper.vue'
import {mapGetters,mapActions} from 'vuex'
export default {
  name: "App",
  components: {
    mainWrapper
  },
  methods:{
...mapActions(['ACTION_MOBILE','ACTION_DESKTOP'])
  },
  computed:{
...mapGetters(['IS_MOBILE','IS_DESKTOP'])
  },
  mounted(){
    let vm=this
    window.addEventListener('resize',()=>{
      if(window.innerWidth>767){
        vm.ACTION_DESKTOP()
      }else{
        vm.ACTION_MOBILE()
      }
    })
  }
};
</script>

<style>

</style>
