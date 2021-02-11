<template>
  <ValidationObserver v-slot="{ invalid, handleSubmit }">
    <form
      class="flex flex-col items-center p-8 bg-main-color text-white ring-4 ring-black ring-opacity-10 rounded-2xl shadow-2xl"
      @submit.prevent="handleSubmit(register)"
      novalidate
    >
      <fieldset class="w-full">
        <legend
          class="text-center font-semibold text-2xl md:text-4xl lg:text-5xl xl:text-4xl"
        >
          {{ $t('register') }}
        </legend>
        <div class="w-full flex-1" inputs>
          <EventInput
            v-for="(input, index) in form_data"
            v-model="input.value"
            :key="index"
            :label="$t(input.label)"
            :placeholder="$t(input.placeholder)"
            :name="input.name"
            :type="input.type"
            :rules="input.rules"
            :icon="input.icon"
          />
        </div>
      </fieldset>
      <div class="h-16 flex justify-center items-center" button>
        <EventButton :label="label_button" :disabled="invalid" />
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

export default {
  props: ['form_data', 'label_button'],
  components: { ValidationObserver },
  methods: {
    register: () => {
      console.log('register')
    },
  },
}
</script>
