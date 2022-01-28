<template>
    <div class='searchField'>
        <div class='mainForm'>
            <input class='searchInput' placeholder='searh' v-model='searchInput'/>
            <button  class='searchBtn' @click='searchItem(searchInput)'>Search</button>
            </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name:'headerInput',
    data(){
        return{
            searchInput:''
        }
    },
    methods:{
        ...mapActions(['ACTION_SEARCH']),
        searchItem(value){
this.ACTION_SEARCH(value);
this.$router.push('/catalog')
        }
    }
}
</script>
<style>
    .searchField{
      left: 0;
    margin: 0px auto;
    width: 900px;
    min-height: 84px;
    background: #008080;
    position: fixed;
    /* right: 202px; */
    top: 0;
    right: 0;
        z-index: 1000;
    border-radius: 10px;
    }
    .searchInput{
        border:none;
        padding:10px;
        border-radius:5px;
    }
    .searchInput:focus{
        outline:none;
        border: 1px solid dodgerblue;
    }
   .searchBtn{
       display: inline-block;
    border: none;
    margin-left: 10px;
    border-radius: 4px;
    color: white;
    background: slategrey;
    padding: 4px;
   }
   .mainForm{
    position: absolute;
    right: 21px;
    top: 22px;
   }


</style>