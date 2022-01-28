<template>
    <div class='headerMain'>
        <div><router-link :to="{name:'catalog'}">Catalog</router-link></div>
    </div>
</template>
<script>
export default {
    name:'mainPage'
}
</script>
<style>
    .headerInput {
        padding: 10px;
        
        text-align:center;
    }
    .headerMain{
            justify-content: space-around;
    /* justify-content: center; */
    display: flex;
    position:relative;
    top:90px;
    align-items: center;
    }
   
</style>