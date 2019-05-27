<template>
    <div class="home">
        <div ref="test">
            <div v-for="(news,id) in dataShow"
                 v-bind:key="id"
                 class="news"
            >
                <h2>{{news.title}}</h2>
                <p>作者：{{news.author}}</p>
                <img v-bind:src="news.img"/>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from '../axios'

    export default {
        name: 'Home',
        data: function () {
            return {
                dataShow: []
            };
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData: function () {
                axios.mockData('hct.com').then(res => {
                    // eslint-disable-next-line no-console
                    this.dataShow = res;
                    // for (let i = 0; i < this.$refs.test.children.length; i++) {
                    //     this.$refs.test.children[i].style.background = `url(${this.dataShow[i]})`;
                    // }
                })
            }
        }
    }
</script>
<style>
    .home {
        max-width: 800px;
        margin: 0 auto;
    }

    .news {
        border-bottom: 1px solid gray;
        background-size: contain;
        height: 280px;
    }

    .news img {
        position: relative;
        top: -80px;
        right: 16px;
        float: right;
        border-radius: 16px;
    }

    h2 {
        text-align: left;
        margin: 16px;
    }

    p {
        text-align: left;
        margin: 16px;
    }
</style>
