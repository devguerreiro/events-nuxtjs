<template>
  <footer class="w-full flex flex-col items-end relative top-0 bg-main-color">
    <div class="h-0 relative bottom-16 right-6 z-10" languages>
      <el-dropdown
        class="h-12 w-12"
        trigger="click"
        size="medium"
        placement="top"
      >
        <el-tooltip
          class="item el-dropdown-link"
          effect="light"
          content="Choose a language"
          placement="left"
        >
          <img
            class="object contain cursor-pointer"
            :src="require(`~/assets/icons/${currentLocale}.svg`)"
            alt="Current Language"
          />
        </el-tooltip>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="language in languages"
            :key="language.locale"
          >
            <nuxt-link :to="switchLocalePath(language.locale)">
              <img
                :src="require(`~/assets/icons/${language.locale}.svg`)"
                :alt="language.alt"
              />
            </nuxt-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="w-full py-2 flex justify-center text-white" copyright>
      <h1 class="text-sm md:text-lg lg:text-3xl xl:text-base">
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
        locale: 'pt-br',
        alt: 'Portuguese - Brazil',
      },
      {
        locale: 'en',
        alt: 'English',
      },
      {
        locale: 'es',
        alt: 'Espanish',
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
