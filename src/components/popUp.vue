<template>
    <div class='overlay-popup' ref="popup_wrapper">
        <div class="popup">
            <div class='close_popUp'> <button class='btn btn-danger'
            @click='closePopUp'>X</button></div>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        closePopUp(){
            this.$emit('closePopUp')
        }
    },
     mounted() {
      let vm = this;
      document.addEventListener('click', function (item) {
        if (item.target === vm.$refs['popup_wrapper']) {
          vm.closePopUp()
        }
      })
    },
}
</script>
<style>
.overlay-popup{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup{
    justify-content: center;
    width: 186px;
    min-height: 200px;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.close_popUp{
  position:relative;
}
.close_popUp button{
border: none;
    /* text-align: right; */
    position: absolute;
    right: -73px;
    top: -30px;
}
.close_popUp button:hover{
  cursor:pointer
}
</style>