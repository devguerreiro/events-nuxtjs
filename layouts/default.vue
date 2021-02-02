<template>
  <div class="w-full h-full flex flex-col">
    <EventNavBar />
    <Nuxt />
    <EventFooter/>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

html, body, #__nuxt, #__layout {
  height: 100vh;
  width: 100vw;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

</style>
