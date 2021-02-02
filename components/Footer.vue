<template>
  <footer class="h-24 w-full flex items-center fixed bottom-0 bg-main-color">
    <div
    class="fixed bottom-28 right-6 z-10"
    languages
    >
      <el-dropdown
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
          <i class="el-icon-plus text-4xl text-white"/>
        </el-tooltip>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
          v-for="language in languages"
          :key="language.locale"
          >
            <nuxt-link :to="switchLocalePath(language.locale)">
              <img
              class="h-8 w-8 my-2"
              :src="require(`~/assets/icons/${language.src}`)"
              :alt="language.alt"
              />
            </nuxt-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div
    class="flex flex-1 justify-center"
    copyright
    >
      <h1 class="text-white">&copy; Copyright {{dateNow}}, DevGuerreiro &#x1F4BB; &#x2764; &#x1F989;</h1>
    </div>
  </footer>
</template>
<script>
export default {
  data: () => ({
    languages: [
      {
        "locale": "pt-br",
        "alt": "Portuguese - Brazil",
        "src": "brazil.svg",
      },
      {
        "locale": "en",
        "alt": "English",
        "src": "united-states.svg"
      },
      {
        "locale": "es",
        "alt": "Espanish",
        "src": "spain.svg"
      }
    ]
  }),
  computed: {
    dateNow: () => new Date().getFullYear()
  }
}
</script>