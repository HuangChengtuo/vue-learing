<template>
  <div>
    <input
            type="checkbox"
            v-bind:checked="checked"
            v-on:change="$emit('change', $event.target.checked)"
    >
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      checked: Boolean
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
