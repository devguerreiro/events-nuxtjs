<template>
  <nav class="h-12 bg-main-color">
    <EventMobileNavLinks
      v-if="isMobile"
      class="h-full mx-4 flex justify-between items-center text-white"
      :links="mobileLinks"
    />
    <EventNavLinks
      v-else
      class="h-full flex items-center container mx-auto text-white"
      :links="links"
    />
  </nav>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        label: 'nav.signUp', // attribute of dictionary file in lang/ directory
        url: 'user-register', // route name
      },
      {
        label: 'nav.signIn',
        url: 'user-login',
      },
    ],
    mobileLinks: [
      {
        label: 'nav.home',
        url: 'index',
        icon: 'el-icon-s-home',
      },
      {
        label: 'nav.signUp',
        url: 'user-register',
        icon: 'el-icon-s-custom',
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
