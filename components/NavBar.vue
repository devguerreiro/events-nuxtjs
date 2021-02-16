<template>
  <nav class="h-12 bg-main-color">
    <div
      v-if="isMobile"
      class="md:hidden text-white h-full flex justify-end items-center"
      mobile
    >
      <el-dropdown trigger="click">
        <span title="Menu" class="el-icon-menu mr-4 text-3xl text-blue-400" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="link in rightLinks"
            :icon="link.icon"
            :key="link.label"
          >
            <div class="inline-block text-center">
              <nuxt-link :to="localePath(link.url)">
                {{ $t(link.label) }}
              </nuxt-link>
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div
      v-else
      class="h-full hidden text-white container mx-auto md:flex md:justify-between md:text-lg lg:text-2xl xl:text-base"
      desktop
    >
      <div class="h-full" logo-left>
        <nuxt-link :to="localePath('index')">
          <EventLogo size="nav" />
        </nuxt-link>
      </div>
      <div class="h-full flex justify-around items-center" items-right>
        <nuxt-link
          v-for="link in rightLinks"
          class="mx-4 px-2"
          :key="link.label"
          :to="localePath(link.url)"
        >
          {{ $t(link.label) }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    rightLinks: [
      {
        label: 'nav.signUp', // attribute of dictionary file in lang/ directory
        url: 'user-register', // route name
        icon: 'el-icon-s-custom', // icon to show on mobile
      },
      {
        label: 'nav.signIn',
        url: 'user-login',
        icon: 'el-icon-user-solid',
      },
    ],
    windowWidth: '',
    isMobile: '',
    maxMobileWidth: 768,
  }),
  beforeMount() {
    this.updateWindowWidth(window.innerWidth)

    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    updateWindowWidth: function (newWidth) {
      this.windowWidth = newWidth
      this.isMobile = this.handleIsMobile(newWidth)
    },
    handleResize: function (e) {
      this.updateWindowWidth(e.target.innerWidth)
    },
    handleIsMobile: function (width) {
      return width < this.maxMobileWidth
    },
  },
}
</script>

<style scoped>
.nuxt-link-exact-active {
  border-bottom: 4px solid #60a5fa;
  border-radius: 12px;
}

@media (max-width: 768px) {
  .nuxt-link-exact-active {
    border-bottom: 2px solid #60a5fa;
    border-radius: 5px;
    padding-bottom: 2px;
  }
}
</style>
