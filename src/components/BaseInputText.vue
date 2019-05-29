<template>
  <div>
    <input type="text" v-bind:value="value" v-on="listener()">
  </div>
</template>

<script>
export default {
  name: "BaseInputText",
  props: {
    value: {
      type: String,
      default: "sleep"
    }
  },
  methods: {
    listener() {
      return {
        ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    }
  }
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #32485f;
}
</style>
