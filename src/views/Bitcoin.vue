<template>
  <div id="Home">
    <h1>bitcoin price</h1>
    <div v-for="(coin,key) in info"
         v-bind:key="key"
    >
      {{coin.description}}:
      <span v-html="coin.symbol"></span>
      {{coin.rate_float}}
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Bitcoin',
    components: {},
    data: function () {
      return {
        info: null
      };
    },
    mounted() {
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => (this.info = res.data.bpi))
    }
  }
</script>

