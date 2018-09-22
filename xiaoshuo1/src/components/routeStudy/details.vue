<template>
    <div>
        <van-nav-bar :title="data.title" left-arrow @click-left="oncli">
            <van-icon name="search" slot="right" />
        </van-nav-bar>
        <div class="det">
            <div class="img">
                <img :src="'/apip/'+data.cover" alt="">
            </div>
            <p>{{data.title}}</p>
            <p><span class="pc">{{data.author}}</span><span>{{data.cat}}</span><span>{{shu}}万字</span></p>
            <p>更新时间:<span class="cp">{{arc1}}</span></p>
            <p class="zi">最新章节:<span>{{data.lastChapter}}</span></p>
            <router-link :to="{name:'content',query:{id:data._id}}" tag="span">
                <van-button type="primary" bottom-action>开始阅读</van-button>
            </router-link>
            <router-link :to="{name:'catalog',query:{id:data._id,title:data.title}}">
                <div class="btn">查看目录</div>
            </router-link>
        </div>
    </div>
</template>
<script>
    import { Button } from 'vant';
    export default{
        components: {
            [Button.name]: Button,
        },
        name:'detail',
        props:["myData"],
        data(){
            return{
                data:[],
                date:[],
                arc1:'',
                shu:''
            }
        },
        methods:{
          oncli(){
              this.$router.back(-1);
          }
        },
        beforeCreate(){
//            console.log(this.$route.query.id)
            this.$axios.get(`/apij/${this.$route.query.id}`).then(data=>{
                console.log(data);
                this.data = data.data;
                this.date = data.data.updated;
                this.zishu = data.data.wordCount/10000;
                let shu = this.zishu.toFixed(2);
                this.shu = shu;
                let arc = this.date.split(".");
                let arc1 = arc[0].replace(/[a-zA-Z]/g, " ");
                this.arc1 = arc1;
            });
        }
    }
</script>
<style scoped>
    .det .img{
        width: 140px;
        height: 190px;
        margin: 20px auto;
        border: 1px solid #eee;
    }
    .det .img img{
        width: 140px;
        height: 190px;
    }
    .det p:nth-child(2){
        font-size: 18px;
        color: #000;
    }
    .det p{
        margin: 0;
        font-size: 14px;
        text-align: center;
        margin-top: 6px;
        color: #666;
    }
    .det p:nth-child(3){
        font-size: 14px;
    }
    .det p span{
        border-right: 1px solid #666;
        display: inline-block;
        line-height: 10px;
        padding: 0 8px;
    }
    .det .pc{
        color: #e2833d;
    }
    .det p span:last-child{
        border: 0;
    }
    .det .cp{
        color: #f55239;
    }
    .van-button--bottom-action{
        height: 30px;
        line-height: 30px;
        width: 94%;
        border-radius: 5px;
        text-align: center;
        margin-left: 3%;
        font-weight: 100;
    }
    .btn{
        height: 40px;
        width: 110px;
        font-size: 14px;
        text-align: center;
        line-height: 40px;
        border: 1px solid #d6d8d8;
        border-radius: 10px;
        margin: 10px auto;
        color: #f05a59;
    }
    .zi{
        height: auto;
    }
    .zi span{
        height: auto;
    }
</style>
