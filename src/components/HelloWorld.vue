<template>
    <div>
        first name:<input type="text" v-model="firstName"/>
        last name:<input type="text" v-model="lastName"/>
        full name:{{fullName}}
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data: function () {
            return {
                firstName: '',
                lastName: ''
            };
        },
        computed: {
            fullName() {
                return this.firstName + ' ' + this.lastName
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
