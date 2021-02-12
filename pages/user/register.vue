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
        id: "event-user-register-username-input",
        label: 'username', // attribute of dictionary file in lang/ directory
        placeholder: 'typeYourUsername', // attribute of dictionary file in lang/ directory
        name: 'username', // field name specified in API documentation
        type: 'text', // input type
        value: '', // input value
        autocomplete: "username",
        rules: 'required|username|max:150', // rules vee-validate
        icon: 'account', // file in assets/icons/
      },
      {
        id: "event-user-register-username-email",
        label: 'email',
        placeholder: 'typeYourEmail',
        name: 'email',
        type: 'email',
        value: '',
        autocomplete: "email",
        rules: 'required|email|max:254',
        icon: 'email',
      },
      {
        id: "event-user-register-username-password",
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
        id: "event-user-register-username-password2",
        label: 'passwordConfirmation',
        placeholder: 'typeYourPasswordAgain',
        name: 'password2',
        type: 'password',
        value: '',
        rules: 'required|confirmed:password',
        icon: 'lock',
      },
      {
        id: "event-user-register-username-city",
        label: 'city',
        placeholder: 'typeYourCity',
        name: 'city',
        type: 'text',
        value: '',
        rules: 'required|alpha|max:50',
        icon: 'location',
      },
      {
        id: "event-user-register-username-state",
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
