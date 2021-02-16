<template>
  <el-dropdown class="h-12 w-12" trigger="click" size="medium" placement="top">
    <el-tooltip
      class="item el-dropdown-link"
      effect="dark"
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
</template>

<script>
export default {
  data: () => ({
    languages: [
      {
        title: "locales['pt-br']", // attribute of dictionary file in lang/ directory
        locale: 'pt-br', // locale code
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
    currentLocale: function () {
      return this.$i18n.locale
    },
  },
}
</script>
