<template>
    <div class="Home">
        <div v-for="(news,id) in dataShow"
             v-bind:key="id"
             class="news">
            <h2>{{news.title}}</h2>
            <img :src="news.img"/>
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
        created() {
            this.getData()
        },
        methods: {
            getData: function () {
                axios.mockData('hct.com').then(res => {
                    // eslint-disable-next-line no-console
                    console.log(res);
                    this.dataShow = res;
                })
            }
        }
    }
</script>
<style>
    .news {
        border: 1px solid gray;
    }

    h2 {
        text-align: left;
    }
</style>
