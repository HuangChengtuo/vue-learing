<template>
  <div class="ShoppingCart">
    <GoodsItem v-for="item in goods"
               v-bind:key="item.id"
               v-bind:item="item"
    >
    </GoodsItem>
    <div class="foot">
      total price:{{totalPrice}}
      total quantity:{{totalQuantity}}
      <p id="check"><span>check</span></p>
    </div>
  </div>
</template>

<script>
  import store from '@/store'
  import GoodsItem from '@/components/GoodsItem'
  import {mapState} from 'vuex'

  export default {
    name: 'ShoppingCart',
    store,
    components: {
      GoodsItem
    },
    data: function () {
      return {
        data: ''
      };
    },
    computed: {
      showGoods() {
        return store.getters.getGoods
      },
      // eslint-disable-next-line no-undef
      ...mapState([
        'totalPrice',
        'totalQuantity',
        'goods'
      ])
    },
    methods: {
      addData() {
        store.dispatch('incrementLater', 3)
      }
    }
  }
</script>
<style>
  .ShoppingCart {
    max-width: 800px;
    margin: 0 auto;
  }

  .foot {
    position: fixed;
    height: 80px;
    bottom: 0;
    margin: 0 auto;
    left: 0;
    right: 0;
  }

  #check {
    margin: 0 auto;
    background: orange;
    width: 100px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  /*
  #check span{
    display: inline-block;
    transform: translateY(50%);
  }
  */
</style>

