<template>
  <nav class="h-12 bg-main-color">
    <div class="md:hidden text-white h-full flex justify-end">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>
    <div class="h-full hidden md:flex items-center text-white md:text-lg lg:text-2xl xl:text-base">
      <div class="h-full w-36 mx-4">
        <EventLogo />
      </div>
      <div class="flex-1">
        <ul class="flex justify-end items-center">
          <li
          v-for="(link, index) in links"
          :key="index"
          class="mx-8"
          >
            <nuxt-link :to="link.url">
              {{link.label}}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="h-full flex-1 flex justify-end items-center">
        <nuxt-link class="mx-4" to="">Sign-in</nuxt-link>
        <nuxt-link class="mx-4" to="">Sign-up</nuxt-link>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data: () => ({
    links: [
      {
      "label": "Home",
      "url": ""
    },
    {
      "label": "About",
      "url": ""
    },
    {
      "label": "Contact",
      "url": ""
    },
    ]
  })
}
</script>
