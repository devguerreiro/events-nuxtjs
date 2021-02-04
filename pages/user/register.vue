<template>
  <main
    class="py-8 bg-blue-400 flex flex-col items-center xl:flex-row xl:justify-around"
  >
    <div class="h-24 w-24 md:w-2/5 md:h-1/5 xl:h-1/3">
      <EventLogo />
    </div>
    <div class="w-full px-4 md:w-4/5 lg:w-11/12 xl:w-1/3">
      <EventForm
        class="text-sm md:text-xl lg:text-2xl xl:text-base"
        :form_data="form_data"
        :label_button="$t('confirm')"
      />
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    form_data: [
      {
        label: 'firstName',
        placeholder: 'typeYourFirstName',
        name: 'first_name',
        type: 'text',
        required: true,
        value: '',
        invalid: false,
      },
      {
        label: 'lastName',
        placeholder: 'typeYourLastName',
        name: 'last_name',
        type: 'text',
        required: true,
        value: '',
        invalid: false,
      },
      {
        label: 'email',
        placeholder: 'typeYourEmail',
        name: 'email',
        type: 'email',
        required: true,
        value: '',
        invalid: false,
      },
      {
        label: 'password',
        placeholder: 'typeYourPassword',
        name: 'password',
        type: 'password',
        required: true,
        value: '',
        invalid: false,
      },
      {
        label: 'passwordConfirmation',
        placeholder: 'typeYourPasswordAgain',
        name: 'password2',
        type: 'password',
        required: true,
        value: '',
        invalid: false,
      },
    ],
  }),
}
</script>
