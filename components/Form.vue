<template>
  <ValidationObserver v-slot="{ invalid, handleSubmit }">
    <form
      class="flex flex-col items-center p-8 bg-main-color text-white ring-4 ring-black ring-opacity-10 rounded-2xl shadow-2xl"
      @submit.prevent="handleSubmit()"
      novalidate
    >
      <fieldset class="w-full">
        <legend
          class="text-center font-semibold text-2xl md:text-4xl lg:text-5xl xl:text-4xl"
        >
          {{ $t(legend) }}
        </legend>
        <div class="w-full flex-1" inputs>
          <EventFormInput
            v-for="(input, index) in formData"
            v-model="input.value"
            :id="input.id"
            :key="index"
            :label="$t(input.label)"
            :placeholder="$t(input.placeholder)"
            :name="input.name"
            :type="input.type"
            :autocomplete="input.autocomplete"
            :rules="input.rules"
            :icon="input.icon"
          />
        </div>
      </fieldset>
      <div class="h-16 mt-4 flex justify-center items-center" button>
        <EventButton type="submit" :label="labelButton" :disabled="invalid" />
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

export default {
  props: {
    formData: {
      type: Array,
      required: true,
    },
    labelButton: {
      type: String,
      required: true,
    },
    legend: {
      type: String,
      required: true,
    },
  },
  components: { ValidationObserver },
}
</script>
