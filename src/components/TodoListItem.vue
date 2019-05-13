<template>
    <li>
        {{todo.text}}
        <button>done</button>
    </li>
</template>

<script>
    export default {
        name: "TodoListItem",
        props:{
            todo:{
                type:Object
            }
        }
    }
</script>

<style scoped>
    li{
    }
</style>
