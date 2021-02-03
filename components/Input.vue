<template>
  <p class="w-full m-2">
    <label class="text-white font-bold">{{label}}</label>
    <input
    class="block w-full py-1 px-2 my-1 ring-2 ring-opacity-100 rounded-lg text-black
    focus:outline-none"
    :class="invalid ? 'ring-red-400' : 'ring-blue-400'"
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :required="required"
    v-model="inputValue"
    >
  </p>
</template>

<script>
export default {
  props: ["value", "type", "placeholder", "name", "label", "required", "invalid"],
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue)
      }
    }
  }
}
</script>
