<template>
    <div>
        <van-nav-bar title="排行" left-arrow @click-left="onClickLeft">
            <van-icon name="search" slot="right" />
        </van-nav-bar>
        <van-tabs type="card" class="car" @click="dianji">
            <van-tab v-for="(item,index) in type" :title="item" :key="index"></van-tab>
        </van-tabs>
        <van-tabs @click="act" v-model="active">
            <van-tab v-for="(item,index) in all" :title="item.shortTitle" :key="index">
                <list :myData="myData"></list>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
    import { Tab,Tabs,Toast } from 'vant';
    import list from './list.vue';
    export default {
        name:'index',
        components: {
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            [Toast.name]: Toast,
            list
        },
        data(){
            return{
                type:['男生','电子书','女生'],
                title:'',
                my:[],
                myData:[],
                active:0
            }
        },
        methods:{
            onClickLeft(){
                this.$router.push({path:'/'})
                this.waiting();
            },
            dianji(item,title){
                this.active = 0;
                this.title = title;
                if(this.title == "女生"){
                    this.$axios.get('/apis/54d43437d47d13ff21cad58b').then(data=>{
                        this.myData = data.data.ranking.books;
                    })
                }else if(this.title == "电子书"){
                    this.$axios.get('/apis/5a323096fc84c2b8efab2482').then(data=>{
                        this.myData = data.data.ranking.books;
                    })
                }else{
                    this.$axios.get('/apis/54d42d92321052167dfb75e3').then(data=>{
                        this.myData = data.data.ranking.books;
                    })
                }
            },
            act(index){
                this.$axios.get('/apis'+this.all[index]._id).then(data=>{
//                    console.log(data.data.ranking.books);
                    let myData = data.data.ranking.books;
                    this.myData=myData;
//                    console.log(this.myData)
                })
                this.waiting();
            },
            waiting(){
                this.$axios.interceptors.request.use((config) => {
                    const toast = Toast.loading({
                        duration: 0,       // 持续展示 toast
                        forbidClick: true, // 禁用背景点击
                        loadingType: 'spinner',
                        message: '加载中...',
                        mask: true,
                    });
                    return config;
                }, (error) => {
                    Toast.fail('数据加载失败');
                    return Promise.reject(error);
                });
                this.$axios.interceptors.response.use(data => {// 响应成功关闭loading
                    Toast.clear();
                    return data
                }, error => {
                    Toast.fail('数据加载失败');
                    return Promise.reject(error)
                })
            }
        },
        computed:{
            all:{
                get(){
                    if(this.title == "女生"){
                        return this.all = this.my.female
                    }else if(this.title == "电子书"){
                        return this.all = this.my.epub
                    }
                    return this.all = this.my.male;
                },
                set(){

                }
            }
        },
        beforeCreate(){
            this.$axios.get('/apis/gender').then(data=>{
                console.log(data);
                this.my = data.data;
            });
            this.$axios.get('/apis/54d42d92321052167dfb75e3').then(data=>{
//                console.log(data);
                this.myData = data.data.ranking.books;
            });
        }
    }
</script>
<style scoped>
    .car{
        margin-top: 10px;
    }
</style>
