<template>
  <footer class="w-full flex flex-col items-end bg-main-color">
    <div
      class="h-0 relative bottom-16 right-6 z-10"
      languages
      :title="$t('locales.chooseLanguage')"
    >
      <EventChooseLanguage />
    </div>
    <div class="w-full py-2 font-light text-white" copyright>
      <EventCopyright class="flex justify-center" />
    </div>
  </footer>
</template>
