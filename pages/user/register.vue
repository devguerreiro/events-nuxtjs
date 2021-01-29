<template>
  <div class="h-full bg-blue-400 grid grid-cols-1 grid-rows-6 xl:grid-cols-2 xl:grid-rows-1 xl:items-center">
    <div class="md:row-span-2 xl:h-2/5">
      <EventLogo class="object-contain"/>
    </div>
    <div class="row-span-5 mx-4 mb-8 xl:w-3/5 xl:mx-auto">
      <EventForm
      class="max-h-full overflow-scroll overscroll-contain md:overflow-hidden md:overscroll-none text-sm md:text-xl lg:text-2xl xl:text-base"
      :form_data="form_data"
      label_button="Concluir cadastro"
      />
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
