<template>
  <div align="center" class="mt-8">
    <h1 class="font-semibold text-4xl text-main-color">
      Playing with Vuex Store
    </h1>
    <h2>If you liked this page, click below to support me 👇</h2>
    <div class="mt-4 flex justify-center items-center">
      <EventButton label="Support" @click.once.native="execAddSupporter" />
      <span class="inline-block ml-4 text-4xl text-main-color animate-bounce">
        <strong>{{ counter }}</strong>
      </span>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { ADD_SUPPORTER } from '@/store/mutation-types'

export default {
  computed: {
    ...mapGetters('supporters', ['counter']),
  },
  methods: {
    ...mapMutations('supporters', [ADD_SUPPORTER]),
    execAddSupporter: function () {
      this[ADD_SUPPORTER]()
    },
  },
}
</script>
