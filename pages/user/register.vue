<template>
  <main
    class="h-full bg-blue-400 grid grid-cols-1 grid-rows-6 xl:grid-cols-2 xl:grid-rows-1 xl:items-center"
  >
    <div class="md:row-span-2 xl:h-2/5">
      <EventLogo />
    </div>
    <div class="row-span-5 mx-4 mb-8 xl:w-3/5 xl:mx-auto">
      <EventForm
        class="max-h-full overflow-scroll overscroll-contain md:overflow-hidden md:overscroll-none text-sm md:text-xl lg:text-2xl xl:text-base"
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
