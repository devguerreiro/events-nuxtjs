<template>
  <div class="w-full my-2">
    <ValidationProvider
      v-slot="{ errors, invalid, classes }"
      :rules="rules"
      :vid="name"
    >
      <label class="text-white font-medium" :for="id">{{ label }}</label>
      <div
        class="flex my-1 ring-2 ring-opacity-100 rounded-lg"
        :class="classes"
      >
        <img
          class="w-8 p-1.5 bg-blue-300 rounded-l-lg"
          icon
          :title="`${icon} icon`"
          :src="require(`~/assets/icons/${icon}.svg`)"
          :alt="`${icon} icon`"
        />
        <input
          class="w-full flex-1 px-1 font-light text-gray-600 rounded-r-lg focus:outline-none"
          v-model="inputValue"
          input
          :autocomplete="autocomplete"
          :title="label"
          :class="classes"
          :id="id"
          :type="type"
          :placeholder="placeholder"
          :name="name"
        />
      </div>
      <span title="Errors" v-if="invalid" errors :class="classes">{{
        errors[0]
      }}</span>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    autocomplete: {
      type: String,
    },
    rules: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    vid: {
      type: String,
    },
    value: {
      type: String,
      default: '',
    },
  },
  components: { ValidationProvider },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
  },
}
</script>
