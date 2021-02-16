<template>
  <div>
    <h1 title="Copyright" class="text-sm md:text-base lg:text-base 2xl:text-sm">
      &copy; Copyright {{ dateNow }}, DevGuerreiro &#x1F4BB; &#x2764; &#x1F989;
    </h1>
  </div>
</template>

<script>
export default {
  computed: {
    dateNow: () => new Date().getFullYear(),
  },
}
</script>
