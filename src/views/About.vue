<template>
  <div class="about">
    <HelloWorld v-model="lovingVue"></HelloWorld>
  </div>
</template>
<script>

  import HelloWorld from '@/components/HelloWorld'

  export default {
    name: 'About',
    components: {HelloWorld},
    data: function () {
      return {
        lovingVue: true
      }
    }
  }
</script>
