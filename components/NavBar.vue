<template>
  <nav class="h-12 bg-main-color">
    <!-- mobile menu -->
    <div class="md:hidden text-white h-full flex justify-end items-center">
      <el-dropdown trigger="click">
        <i class="el-icon-menu mr-4 text-3xl text-blue-400 "/>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
          v-for="link in middleLinks"
          :icon="link.icon"
          :key="link.label"
          >
            <div class="inline-block text-center">
              <nuxt-link
              :to="localePath(link.url)"
              >
                {{ $t(link.label) }}
              </nuxt-link>
            </div>
          </el-dropdown-item>
          <el-dropdown-item divided/>
          <el-dropdown-item
          v-for="link in rightLinks"
          :icon="link.icon"
          :key="link.label"
          >
            <div class="inline-block text-center">
              <nuxt-link
              :to="localePath(link.url)"
              >
                {{ $t(link.label) }}
              </nuxt-link>
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- not mobile menu -->
    <div
    class="h-full hidden md:flex text-white md:text-lg lg:text-2xl xl:text-base"
    nav-items
    >
      <div
      class="h-full w-36 mx-4"
      logo-left
      >
        <nuxt-link :to="localePath('index')">
          <EventLogo />
        </nuxt-link>
      </div>
      <div
      class="h-full flex flex-1"
      items-middle
      >
        <nuxt-link
        v-for="link in middleLinks"
        class="flex items-center mx-6 px-2"
        :key="link.label"
        :to="localePath(link.url)"
        >
          {{ $t(link.label) }}
        </nuxt-link>
      </div>
      <div
      class="h-full flex"
      items-right
      >
        <nuxt-link
        v-for="link in rightLinks"
        class="flex items-center mx-4 px-2"
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
    middleLinks: [
    {
      "label": "home", // word of language file to translate
      "url": "index", // route name
      "icon": "el-icon-s-home"
    },
    {
      "label": "about",
      "url": "about",
      "icon": "el-icon-info"
    },
    {
      "label": "contact",
      "url": "contact",
      "icon": "el-icon-phone"
    },
    ],
    rightLinks: [
    {
      "label": "signIn",
      "url": "user-login",
      "icon": "el-icon-user-solid"
    },
    {
      "label": "signUp",
      "url": "user-register",
      "icon": "el-icon-s-custom"
    },
    ]
  })
}
</script>

<style>
.nuxt-link-exact-active {
  border-bottom: 4px solid #60A5FA;
  border-radius: 12px;
}

@media (max-width: 768px) {
  .nuxt-link-exact-active {
    border-bottom: 2px solid #60A5FA;
    border-radius: 5px;
    padding-bottom: 2px;
  }
}
</style>