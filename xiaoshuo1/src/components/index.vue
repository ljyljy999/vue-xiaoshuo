<template>
  <div>
    <van-nav-bar title="首页">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
  </div>
</template>
<script>
  import { NavBar } from 'vant';
  import { Icon } from 'vant';
  export default {
    components: {
      [NavBar.name]: NavBar,
      [Icon.name]: Icon
    },
    name:'index',
    data(){
      return{

      }
    }
  }
</script>
<style>

</style>
