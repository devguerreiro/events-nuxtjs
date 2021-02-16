<template>
  <div class="xl:w-1/4 2xl:w-1/5">
    <EventForm
      class="text-sm md:text-xl lg:text-2xl xl:text-base"
      legend="legends.login"
      :form_data="form_data"
      :label_button="$t('buttons.login')"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    form_data: [
      {
        id: 'event-user-login-email-input',
        label: 'labels.email', // attribute of dictionary file in lang/ directory
        name: 'email', // field name specified in API documentation
        type: 'email', // input type
        value: '', // input value
        autocomplete: 'email',
        rules: 'required',
        icon: 'email', // file in assets/icons/
      },
      {
        id: 'event-user-login-password-input',
        label: 'labels.password', // attribute of dictionary file in lang/ directory
        name: 'password', // field name specified in API documentation
        type: 'password', // input type
        value: '', // input value
        rules: 'required',
        icon: 'lock', // file in assets/icons/
      },
    ],
  }),
}
</script>
