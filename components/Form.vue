<template>
  <form
    class="flex flex-col items-center w-full p-8 bg-main-color text-white ring-4 ring-black ring-opacity-10 rounded-2xl shadow-2xl"
    action=""
    method="post"
    @submit.prevent
    >
      <span class="text-2xl md:text-4xl lg:text-5xl xl:text-4xl">Cadastre-se</span>
      <EventInput
      v-for="(input, index) in form_data"
      v-model="input.value"
      :key="index"
      :label="input.label"
      :placeholder="input.placeholder"
      :name="input.name"
      :type="input.type"
      :required="input.required"
      :invalid="hasError"
      />
      <EventButton
      class="mt-4 mb-2"
      type="submit"
      :label="label_button"
      :disabled="hasError"
      />
  </form>
</template>

<script>
export default {
  props: ["form_data", "label_button"],
  data: () => ({
    hasError: false,
  }),
}
</script>
