<template>
    <div class='mainWrapper'>
      <headerInput/>
    <keep-alive>
           <router-view></router-view>
    </keep-alive>
            </div>
</template>
<script>
import {mapGetters} from 'vuex'
import headerInput from './headerInput'
export default {
    name:'mainWrapper',
       components:{
         headerInput
    },
    computed: {
      ...mapGetters([
        'CART'
      ]),
    },
}
</script>

<style>
    .mainWrapper{
      max-width: 522px;
    margin: 10px auto;
    }
</style>