<template>
  <p class="w-full m-2">
    <label class="text-white font-bold">{{label}}</label>
    <input
    class="block w-full py-1 px-2 my-1 border-4 rounded-lg text-black"
    :class="invalid ? 'border-red-400' : 'border-blue-400'"
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
