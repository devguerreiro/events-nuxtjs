<template>
  <div :class="[width, height]">
    <img class="v-full h-full" src="/img/coruja-logo.png" alt="Logo Coruja">
  </div>
</template>

<script>
export default {
  props: ["width", "height"],
}
</script>

