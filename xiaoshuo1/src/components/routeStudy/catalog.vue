<template>
    <div>
        <div class="fl">
            <van-nav-bar :title="$route.query.title" left-arrow @click-left="oncli">
                <van-icon name="search" slot="right" />
            </van-nav-bar>
            <div class="zhang">
                <div class="jie">共<span>{{books.length}}</span>章</div>
                <div class="dao">倒序</div>
            </div>
        </div>
        <div class="gun">
            <p v-for="(item,index) in books" class="jie1">
                <router-link :to="{path:'content',query:{link:item.link,id:$route.query.id,ind:index,tle:item.title}}"
                             tag="span">
                    <span>
                        {{item.title}}
                    </span>
                </router-link>
            </p>
        </div>
    </div>
</template>
<script>
    export default{
        name:'catalog',
        data(){
            return{
                books:[],
            }
        },
        methods:{
            oncli(){
                this.$router.back(-1);
            }
        },
        beforeCreate(){
            this.id = this.$route.query.id;
            this.$axios.get(`/apic/mix-atoc/${this.id}?view=chapters`).then(data=>{
//                console.log(data)
                this.books = data.data.mixToc.chapters;
            });
        }
    }
</script>
<style scoped>
    .zhang{
        height: 50px;
        line-height: 55px;
        width: auto;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        color: #666;
        border-bottom: 1px solid #f55239;
        padding: 0 15px;
    }
    .jie1{
        margin: 0;
        font-size: 16px;
        border-bottom: 1px solid #eee;
        height: 40px;
        line-height:40px;
        margin-left: 15px;
        color: #555;
    }
    .gun .jie1:first-child{
        margin-top: 97px;
    }
    .gun .jie1:last-child{
        border-bottom: 0;
    }
    .fl{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #fff;
    }
</style>