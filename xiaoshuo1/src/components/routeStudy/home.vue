<template>
    <div>
        <div class="head">
            <van-nav-bar title="首页">
                <van-icon name="search" slot="right" />
            </van-nav-bar>
        </div>

        <list :myData="myData"></list>

    </div>
</template>
<script>
    import list from './list.vue';
    import { Card,Button } from 'vant';
    export default {
        name:'index',
        components: {
            [Card.name]: Card,
            [Button.name]: Button,
            list
        },
        data(){
            return{
                myData:[],
            }
        },
        beforeCreate(){
            this.$axios.get('/apis/54d43437d47d13ff21cad58b').then(data=>{
                console.log(data);
                let myData = data.data.ranking.books;
                console.log(myData);
                this.myData = myData;
                console.log(this.myData);
            }).catch(function (err) {
                console.log(err)
            });
        }

    }
</script>
<style scoped>

</style>
