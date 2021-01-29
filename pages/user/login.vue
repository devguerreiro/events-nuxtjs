<template>
  <div class="w-full h-full bg-blue-400 flex items-center">
    <div class="w-full flex items-center">
      <div class="flex-1 flex justify-center mx-24">
        <EventLogo
        width="w-80"
        height="h-72"
        />
      </div>
      <div class="flex-1 mx-24">
        <EventForm
        :form_data="form_data"
        label_button="Concluir cadastro"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    form_data: [
      {
        "label": "Nome",
        "placeholder": "Digite seu nome",
        "name": "first_name",
        "type": "text",
        "required": true,
        "value": "",
        "invalid": false,
      },
      {
        "label": "Sobrenome",
        "placeholder": "Digite seu sobrenome",
        "name": "last_name",
        "type": "text",
        "required": true,
        "value": "",
        "invalid": false,
      },
      {
        "label": "Email",
        "placeholder": "Digite seu melhor email",
        "name": "email",
        "type": "email",
        "required": true,
        "value": "",
        "invalid": false,
      },
      {
        "label": "Senha",
        "placeholder": "Digite uma senha segura",
        "name": "password",
        "type": "password",
        "required": true,
        "value": "",
        "invalid": false,
      },
      {
        "label": "Confirme sua senha",
        "placeholder": "Repita a senha",
        "name": "password2",
        "type": "password",
        "required": true,
        "value": "",
        "invalid": false,
      },
    ]
  })
}
</script>
