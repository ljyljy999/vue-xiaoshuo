<template>
    <div>
        <div class="biao">
            <van-nav-bar :title="book" left-arrow @click-left="oncli"></van-nav-bar>
        </div>
        <div class="txt">
            <p v-for="item in text">{{item}}</p>
        </div>
        <ul class="aik">
            <li class="van-hairline van-pagination__item van-pagination__prev" @click="Left">
                上一章
            </li>
            <!--van-pagination__item&#45;&#45;disabled-->
            <li class="van-hairline van-pagination__item van-pagination__next" @click="Right">
                下一章
            </li>
        </ul>
    </div>
</template>
<script>
    import { Pagination } from 'vant';
    import { NavBar } from 'vant';
    export default{
        components: {
            [NavBar.name]: NavBar,
            [Pagination.name]: Pagination,
        },
        name:'conten',
        data(){
            return{
                data:[],
                cont:'',
                text:'',
                link:'',
                ind:'',
                id:'',
                book:''
            }
        },
        methods:{
            URLencode(sStr) {
                return sStr .replace(/\+/g, '%2B').replace(/\"/g,'%22').replace(/\'/g, '%27').replace(/\//g,'%2F').replace(/\?/,"%3F");
            },
            oncli(){
                this.$router.back(-1);
            },
            Left(){
                this.ind =--this.ind;
                this.chuan(this.ind)
                localStorage.setItem(this.id,this.ind);
            },
            Right(){
//                console.log(this.$route.query.id);
//                console.log(this.$route.query.ind);
                this.ind =++this.ind;
                this.chuan(this.ind);
                window.scrollTo(0,0);
                localStorage.setItem(this.id,this.ind);
            },
            chuan(aa){
                this.$axios.get(`/apic/mix-atoc/${this.$route.query.id}?view=chapters`).then(data=>{
//                    console.log(data.data.mixToc.chapters[this.ind].title);
                    this.book = data.data.mixToc.chapters[this.ind].title;
//                    console.log(this.$route.query.id);
                    this.link = data.data.mixToc.chapters[aa].link;
                    this.$axios.get(`/apix/chapter/${this.URLencode(this.link)}`).then(data=>{
//                        console.log(data)
                        this.data = data.data.chapter;
                        this.cont = data.data.chapter.body;
                        this.cont = this.cont.replace(/\n/g,"<br>");
                        this.text = this.cont.split("<br>");
                    });
                    localStorage.setItem(this.id,this.ind);
                });
            }
        },
        mounted(){
//            console.log(this.$route.query.tle)
            this.id = this.$route.query.id;
            this.ind = (this.$route.query.ind == 0 ? '0':this.$route.query.ind) || localStorage.getItem(this.id) || 0;
//            if(this.$route.query.ind != undefined){
//                this.ind = this.$route.query.ind
//            }else if(localStorage.getItem(this.id) != undefined){
//                this.ind = localStorage.getItem(this.id)
//            }else{
//                this.ind = 0
//            }
            this.chuan(this.ind);
            localStorage.setItem(this.id,this.ind);
        }
    }
</script>
<style scoped>
    .biao{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
    .txt p:first-child{
        margin-top: 60px;
    }
    p{
        font-size: 16px;
        line-height: 30px;
        color: #555;
        text-indent: 2em;
        margin: 0;
        margin: 0 15px;
    }
    .aik{
        display: flex;
        justify-content: space-between;
    }
    .van-hairline{
        width: 50%;
        font-size: 18px;
        text-align: center;
        line-height: 40px;
        color: #555;
    }
</style>
