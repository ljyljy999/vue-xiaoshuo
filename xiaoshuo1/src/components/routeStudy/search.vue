<template>
    <div>
        <van-nav-bar title="搜索" left-arrow @click-left="onClickLeft">
        </van-nav-bar>
        <form action="/">
            <van-search v-model="value" placeholder="请输入小说名称" show-action @keyup="search" @keyup.13="ac"/>
        </form>
        <div>
            <list :myData="myData"></list>
        </div>
    </div>
</template>
<script>
    import { Search } from 'vant';
    import list from './list.vue';
    export default {
        name:'index',
        components: {
            list,
            [Search.name]: Search
        },
        data(){
            return{
                value:'',
                myData:[],
            }
        },
        methods:{
            onClickLeft(){
              this.$router.push({path:'/'})
            },
            ac(){
                if(this.value==""){
                    Toast('请输入小说名')
                }
            },
            search(){
                this.$axios.get('/apij/fuzzy-search?query=' + this.value).then(data=>{
                    console.log(data.data.books);
                    this.myData = data.data.books;
//                    console.log(this.mydata)
                })
            }
        }
    }
</script>
<style>

</style>
