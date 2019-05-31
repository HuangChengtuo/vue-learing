<template>
  <div id="Home">
    {{data}}
    <br/>
    <button @click="getData">get</button>
    <button v-on:click="addData">add</button>
  </div>
</template>

<script>
  import store from '@/store'

  export default {
    name: 'Home',
    store,
    components: {},
    data: function () {
      return {
        data: ''
      };
    },
    computed:{
      show(){
        return store.state.count
      }
    },
    methods: {
      getData() {
        this.data = this.$store.getters.getCount
      },
      addData() {
        store.commit('increment',3)
      }
    }
  }
</script>

