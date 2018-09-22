<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home" :to="{path:'/'}">首页</van-tabbar-item>
            <van-tabbar-item icon="search" :to="{path:'/search'}">搜索</van-tabbar-item>
            <van-tabbar-item icon="records" :to="{path:'/rankings'}">排行</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
    export default{
        name:'bottoms',
        data(){
            return{
                active:0,
                icon:{
                    normal: '//img.yzcdn.cn/icon-normal.png',
                    active: '//img.yzcdn.cn/icon-active.png'
                }
            }
        },
        methods:{
//            toNews(){
//                this.$router.push({path:'/news',params:{id:10,content:'abc'}});
//                this.$router.push({path:"/news/10/detail/aaa"});
//            }
        },

    }
</script>