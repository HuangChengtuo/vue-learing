<template xmlns:v-for="http://www.w3.org/1999/xhtml">
    <div id="todo">
        <BaseInputText
                v-model="todoText"
                placeholder="New todo"
        ></BaseInputText>
        <ul>
            <TodoListItem
                    v-for="todo in todos"
                    v-bind:key="todo.id"
                    v-bind:todo="todo"
            ></TodoListItem>
        </ul>
    </div>
</template>

<script>

    import BaseInputText from "@/components/BaseInputText";
    import TodoListItem from "@/components/TodoListItem";

    let todoId = 1;

    export default {
        name: "Todo",
        components: {TodoListItem, BaseInputText},
        data: function () {
            return {
                todoText: '',
                todos: [
                    {
                        id: todoId++,
                        text: 'learn Vue'
                    },
                    {
                        id: todoId++,
                        text: 'sleep'
                    }
                ]
            };
        },
        method: {}
    }
</script>

<style scoped>
    #todo{
        max-width: 400px;
        margin: 0 auto;
    }
</style>
