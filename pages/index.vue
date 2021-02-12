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
        @click.once.native="execAddSupporter"
      />
      <span class="inline-block ml-4 text-4xl text-main-color animate-bounce">
        <strong>{{ counter }}</strong>
      </span>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { ADD_SUPPORTER } from '~/store/mutation-types'

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
