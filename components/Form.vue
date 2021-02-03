<template>
  <form
    class="flex flex-1 flex-col items-center p-8 bg-main-color text-white ring-4 ring-black ring-opacity-10 rounded-2xl shadow-2xl"
    action=""
    method="post"
    @submit.prevent
    novalidate
  >
    <span class="text-2xl md:text-4xl lg:text-5xl xl:text-4xl">{{
      $t('register')
    }}</span>
    <EventInput
      v-for="(input, index) in form_data"
      v-model="input.value"
      :key="index"
      :label="$t(input.label)"
      :placeholder="$t(input.placeholder)"
      :name="input.name"
      :type="input.type"
      :required="input.required"
      :invalid="hasError"
    />
    <EventButton
      class="mt-4 mb-2"
      :label="label_button"
      :disabled="hasError"
    />
  </form>
</template>

<script>
export default {
  props: ['form_data', 'label_button'],
  data: () => ({
    hasError: false,
  }),
}
</script>
