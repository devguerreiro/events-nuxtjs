<template>
  <div class="rounded-2xl bg-event-form w-4/5 mx-auto shadow-2xl">
    <form
    action=""
    method="post"
    class="flex flex-col items-center w-full p-8 text-white"
    @submit.prevent
    @submit="checkForm"
    >
      <span class="text-4xl">Cadastre-se</span>
      <EventInput
      v-for="(input, index) in form_data"
      v-model="input.value"
      :key="index"
      :label="input.label"
      :placeholder="input.placeholder"
      :name="input.name"
      :type="input.type"
      :invalid="input.invalid"
      />
      <EventButton
      type="submit"
      :label="label_button"
      :disabled="hasError"
      />
    </form>

  </div>
</template>

<script>
export default {
  props: ["form_data", "label_button"],
  data: () => ({
    hasError: true,
  }),
}
</script>
