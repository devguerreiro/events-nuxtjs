<template>
  <div
    class="h-full py-8 bg-blue-400 flex flex-col items-center xl:flex-row xl:justify-around"
  >
    <div class="h-24 w-24 md:w-2/5 md:h-1/5 xl:h-1/3">
      <EventLogo />
    </div>
    <div class="w-full px-4 md:w-4/5 lg:w-11/12 xl:w-1/3">
      <EventForm
        class="text-sm md:text-xl lg:text-2xl xl:text-base"
        legend="register"
        :form_data="form_data"
        :label_button="$t('send')"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    form_data: [
      {
        label: 'username', // attribute of dictionary file in lang/ directory
        placeholder: 'typeYourUsername', // attribute of dictionary file in lang/ directory
        name: 'username', // field name specified in API documentation
        type: 'text', // input type
        value: '', // input value
        rules: 'required|username|max:150', // rules vee-validate
        icon: 'account', // file in assets/icons/
      },
      {
        label: 'email',
        placeholder: 'typeYourEmail',
        name: 'email',
        type: 'email',
        value: '',
        rules: 'required|email|max:254',
        icon: 'email',
      },
      {
        label: 'password',
        placeholder: 'typeYourPassword',
        name: 'password',
        type: 'password',
        value: '',
        rules: 'required|max:100',
        vid: 'password',
        icon: 'lock',
      },
      {
        label: 'passwordConfirmation',
        placeholder: 'typeYourPasswordAgain',
        name: 'password2',
        type: 'password',
        value: '',
        rules: 'required|confirmed:password',
        icon: 'lock',
      },
      {
        label: 'city',
        placeholder: 'typeYourCity',
        name: 'city',
        type: 'text',
        value: '',
        rules: 'required|alpha|max:50',
        icon: 'location',
      },
      {
        label: 'state',
        placeholder: 'typeYourState',
        name: 'state',
        type: 'text',
        value: '',
        rules: 'required|alpha|max:50',
        icon: 'location',
      },
    ],
  }),
}
</script>
