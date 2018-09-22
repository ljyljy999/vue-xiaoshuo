<template>
    <div>
        <div class="book" v-for="(item,index) in myData" :key="index">
            <router-link :to="{name:'details',query:{id:item._id}}" tag="span" class="ac">
                <div class="img">
                    <img :src="'/apip/'+item.cover" alt="">
                </div>
                <div class="info">
                    <div class="artical">
                        <p class="name">
                            <span>{{item.title}}</span>
                            <span>作者: {{item.author}}</span>
                        </p>
                        <p class="type">
                            <span :class="item.majorCate?'':'yin'">{{item.majorCate}}</span>
                        </p>
                    </div>
                    <div class="detail">
                        <p>{{item.shortIntro}}</p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default{
        name:'list',
        props:["myData"],
        methods:{

        }
    }
</script>
<style scoped>
    .van-card:not(:nth-child(1)) {
        margin-top: 0;
    }
    .head{
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
    }
    .book:last-child{
        margin-bottom: 66px;
    }
    .book{
        width:100%;
        box-sizing: border-box;
        padding:15px 20px 0 20px;
        display:flex;
        justify-content: space-between;
    }
    .img{
        width:85px;
        height:103px;
    }
    .img>img{
        display: inline-block;
        width:85px;
        height:103px;
        /*background-color: pink;*/
    }
    div.info{
        margin-left:15px;
        width:80%;
    }
    .artical{
        width:100%;
        height:66px;
        display: flex;
        justify-content: space-between;
    }
    .name{
        margin-top: 5px;
    }
    .name>span{
        display: block;
    }
    .name>span:nth-child(1){
        width: 154px;
        font-size: 18px;
        /*font-weight: bold;*/
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .name>span:nth-child(2){
        font-size: 14px;
        color:#ff9b63;
        margin-top: 10px;
    }
    .type{
        margin: 0;
        padding-top: 32px;
    }
    .type span{
        display: block;
        width:auto;
        height:20px;
        line-height:20px;
        text-align: center;
        border-radius:5px;
        border:1px solid #cbcdcc;
        font-size: 13px;
        padding: 0 4px;
    }
    .detail p{
        margin: 0;
        font-size: 10px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .yin{
        display: none !important;
    }
    .ac{
        display: flex;
    }
</style>