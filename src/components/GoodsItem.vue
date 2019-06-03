<template>
  <div id="goodsItem">
    <img v-bind:src="item.img">
    <div id="detail">
      <p>{{item.name}}</p>
      <p>￥{{item.price}}</p>
      <button v-on:click="addItem(item.id)">+</button>
      {{item.quantity}}
      <button @click="removeItem(item.id)">-</button>
    </div>

  </div>
</template>

<script>
  import store from '@/store'

  export default {
    name: "goodsItem",
    store,
    props: {
      item: {
        type: Object
      }
    },
    methods: {
      addItem(id) {
        store.commit('addItem', id)
      },
      removeItem(id) {
        store.commit('removeItem', id)
      }
    }
  }
</script>

<style scoped>
  #goodsItem {
    padding: 16px 10%;
    border-bottom: 1px solid;
    display: flex;
    align-items: center;
    height: 160px;
    justify-content: space-between;
  }
  #detail{
    width: 200px;
  }
  img{
    height: 100%;
  }

</style>
