<template>
  <div class="h-full w-full flex flex-col">
    <header>
      <EventNavBar />
    </header>
    <main class="flex-1">
      <Nuxt />
    </main>
    <EventFooter />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

html,
body,
#__nuxt,
#__layout {
  height: 100%;
  width: 100%;
}

html {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
