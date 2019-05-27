<template xmlns:v-for="http://www.w3.org/1999/xhtml">
    <div class="todo">
        <BaseInputText
                v-model="todoText"
                placeholder="New todo"
                v-on:keydown.enter="addTodo()"
        ></BaseInputText>
        <transition-group name="list" tag="ul">
            <TodoListItem
                    v-for="todo in todos"
                    v-bind:key="todo.id"
                    v-bind:todo="todo"
                    v-on:remove="removeTodo"
            ></TodoListItem>
        </transition-group>
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
        created(){
            this.getTodo()
        },
        methods: {
            getTodo(){

            },
            addTodo() {
                if (this.todoText != '') {
                    this.todos.push({
                        id: todoId++,
                        text: this.todoText
                    })
                    this.todoText = ''
                }
            },
            removeTodo(removeId) {
                this.todos = this.todos.filter(function (todo) {
                    return todo.id != removeId
                })
            }
        }
    }
</script>

<style scoped>
    .todo {
        max-width: 400px;
        margin: 0 auto;
    }
    .list-enter-active, .list-leave-active {
        transition: all 0.5s;
    }
    .list-enter, .list-leave-to
        /* .list-leave-active for below version 2.1.8 */ {
        opacity: 0;
    }
</style>
