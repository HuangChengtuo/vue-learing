<template>
  <li>
    {{todo.text}}
    <button
            v-on:click="$emit('remove',todo.id)"
    >done
    </button>
  </li>
</template>

<script>
  export default {
    name: "TodoListItem",
    props: {
      todo: {
        type: Object
      }
    }
  }
</script>

<style scoped>
  li {
    margin: 5px auto;
    text-align: left;
  }
</style>
