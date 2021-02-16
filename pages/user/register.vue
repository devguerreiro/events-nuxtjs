<template>
  <div class="w-full px-4 md:w-4/5 lg:w-11/12 xl:w-1/3 2xl:w-1/4">
    <EventForm
      class="text-sm md:text-xl lg:text-2xl xl:text-base"
      legend="legends.register"
      :formData="formData"
      :labelButton="$t('buttons.send')"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    formData: [
      {
        id: 'event-user-register-username-input',
        label: 'labels.username', // attribute of dictionary file in lang/ directory
        placeholder: 'placeholders.typeYourUsername', // attribute of dictionary file in lang/ directory
        name: 'username', // field name specified in API documentation
        type: 'text', // input type
        value: '', // input value
        autocomplete: 'username',
        rules: 'required|username|max:150', // rules vee-validate
        icon: 'account', // file in assets/icons/
      },
      {
        id: 'event-user-register-username-email',
        label: 'labels.email',
        placeholder: 'placeholders.typeYourEmail',
        name: 'email',
        type: 'email',
        value: '',
        autocomplete: 'email',
        rules: 'required|email|max:254',
        icon: 'email',
      },
      {
        id: 'event-user-register-username-password',
        label: 'labels.password',
        placeholder: 'placeholders.typeYourPassword',
        name: 'password',
        type: 'password',
        value: '',
        autocomplete: 'on', // new password or current-password
        rules: 'required|max:100|min:8',
        vid: 'password',
        icon: 'lock',
      },
      {
        id: 'event-user-register-username-password2',
        label: 'labels.passwordConfirmation',
        placeholder: 'placeholders.typeYourPasswordAgain',
        name: 'password2',
        type: 'password',
        value: '',
        rules: 'required|confirmed:password',
        icon: 'lock',
      },
      {
        id: 'event-user-register-username-city',
        label: 'labels.city',
        placeholder: 'placeholders.typeYourCity',
        name: 'city',
        type: 'text',
        value: '',
        rules: 'required|alpha|max:50',
        icon: 'location',
      },
      {
        id: 'event-user-register-username-state',
        label: 'labels.state',
        placeholder: 'placeholders.typeYourState',
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
