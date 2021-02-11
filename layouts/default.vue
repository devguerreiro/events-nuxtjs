<template>
  <div class="h-full w-full flex flex-col">
    <header>
      <EventNavBar />
    </header>
    <Nuxt class="flex-1" />
    <EventFooter />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap');

* {
  box-sizing: border-box;
}

html,
body,
#__nuxt,
#__layout {
  height: 100vh;
  width: 100vw;
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
