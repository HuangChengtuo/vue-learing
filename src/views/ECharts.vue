<template>
  <div class="echarts">
    <div id="charts"></div>
    <button v-on:click="addItem()">add</button>
  </div>
</template>

<script>

  import echarts from 'echarts'

  let myChart
  export default {
    data: function () {
      return {
        goods: {
          item: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          sales: [5, 20, 36, 10, 10, 20]
        }
      }
    },
    mounted() {
      this.demoCharts()
    },
    methods: {
      demoCharts() {
        myChart = echarts.init(document.getElementById('charts'), 'light');
        myChart.setOption({
          title: {
            text: this.$route.name
          },
          tooltip: {},
          dataset:{
            
          },
          xAxis: {
            data: this.goods.item
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: this.goods.sales
          }]
        });
        myChart.showLoading()
        setTimeout(function () {
          myChart.hideLoading()
        }, 500)
      },
      addItem() {
        this.goods.item.push('pants')
        this.goods.sales.push(78)
        this.demoCharts()
      }
    }
  }
</script>

<style scoped>
  #charts {
    width: 400px;
    height: 400px;
    margin: 0 auto;
  }
</style>
