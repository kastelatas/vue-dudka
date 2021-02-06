<template>
  <div class="header">
    <div class="header__container">
      <div class="header__row">
        <div class="header__block">
          <span class="header__menu">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </span>
          <p class="header__title">Dudka todo</p>
        </div>
        <div class="header__block">
         <span class="header__reload" :class="{'animation':animation}">
         <img src="../assets/img/reload.svg" alt="" @click="reload">
         </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Header',
  data(){
    return{
      animation: false
    }
  },
  methods:{
    reload(){
      this.animation = true;
      setTimeout(()=> {
        this.animation = false;
        this.$store.commit('reload');
      },1000)

    }
  }
}
</script>