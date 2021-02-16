<template>
  <footer class="w-full flex flex-col items-end bg-main-color">
    <div
      class="h-0 relative bottom-16 right-6 z-10"
      languages
      :title="$t('locales.chooseLanguage')"
    >
      <el-dropdown
        class="h-12 w-12"
        trigger="click"
        size="medium"
        placement="top"
      >
        <el-tooltip
          class="item el-dropdown-link"
          effect="light"
          placement="left"
          :content="$t('locales.chooseLanguage')"
        >
          <img
            class="object contain cursor-pointer"
            alt="Current Language"
            :src="require(`~/assets/icons/${currentLocale}.svg`)"
          />
        </el-tooltip>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            language
            v-for="language in languages"
            :key="language.locale"
          >
            <nuxt-link :to="switchLocalePath(language.locale)">
              <img
                class="my-2"
                height="32"
                width="32"
                :title="$t(language.title)"
                :src="require(`~/assets/icons/${language.locale}.svg`)"
                :alt="$t(language.title)"
              />
            </nuxt-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div
      class="w-full py-2 flex justify-center font-light text-white"
      copyright
    >
      <h1 title="Copyright" class="text-sm md:text-lg lg:text-2xl xl:text-base">
        &copy; Copyright {{ dateNow }}, DevGuerreiro &#x1F4BB; &#x2764;
        &#x1F989;
      </h1>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    languages: [
      {
        title: "locales['pt-br']",
        locale: 'pt-br',
      },
      {
        title: "locales['en']",
        locale: 'en',
      },
      {
        title: "locales['es']",
        locale: 'es',
      },
    ],
  }),
  computed: {
    dateNow: () => new Date().getFullYear(),
    currentLocale: function () {
      return this.$i18n.locale
    },
  },
}
</script>
