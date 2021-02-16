<template>
  <div
    class="mt-8 container mx-auto flex flex-col items-center"
    title="I do not want translate this page, sorry"
  >
    <h1 class="font-semibold text-4xl text-main-color">
      {{ $t('pages.index.h1') }}
    </h1>
    <h2>
      {{ $t('pages.index.h2') }}
    </h2>
    <div class="mt-4 flex justify-center items-center">
      <EventButton
        :label="$t('buttons.support')"
        @click.once.native="incrementCounter"
      />
      <span class="inline-block ml-4 text-4xl text-main-color animate-bounce">
        <strong>{{ counter }}</strong>
      </span>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  async created() {
    await this.getCounter()
  },
  computed: {
    ...mapGetters('supporters', ['counter']),
  },
  methods: {
    ...mapActions('supporters', ['getCounter', 'incrementCounter']),
  },
}
</script>
