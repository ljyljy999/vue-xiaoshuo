<template>
  <div id="app">
    <!--<index></index>-->
    <router-view name="bottom"></router-view>
    <transition :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
     // import index from "./components/index.vue"
  export default {
    name:'App',
    components:{
           // index
    },
    data(){
      return {
        transitionName:''
      }
    },
    watch: {//使用watch 监听$router的变化
      $route(to, from) {
        //如果to索引大于from索引,判断为前进状态,反之则为后退状态
        if(to.meta.index > from.meta.index){
          //设置动画名称
          this.transitionName = 'slide-left';
        }else{
          this.transitionName = 'slide-right';
        }
      }
    }
  }
</script>

<style scoped>
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 0.3s;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
