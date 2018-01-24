<template>
  <div>
    <p>
      \{{text}}
    </p>
    <div>
      <router-link :to="{path: 'helloagain/' + text}">
        Hello Again
      </router-link>
    </div>
    <div>
      <d3-example></d3-example>
    </div>
    <div>
      <vega-example></vega-example>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import helloAgain from './HelloAgain'
import d3Example from './D3Example'
import vegaExample from './VegaExample'

export default {
  name: 'HelloWorld',
  components: {
    'hello-again': helloAgain,
    'd3-example': d3Example,
    'vega-example': vegaExample
  },
  computed: {
    ...mapGetters([
      'text'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
