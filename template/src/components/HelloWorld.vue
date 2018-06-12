<!--Example of a component with a link and how to watch for state changes-->
<template>
  <div>
    <card title="Input example">
      <p>
        {{text}}
      </p>
      <button class="action primary"
              @click="setText('any other text')"
      >
        <span class="value">  Change text</span>
      </button>

      <div class="rij mode_input text rij_verplicht">
        <div class="label">
          <label for="formInput">Input label</label>
        </div>

        <div class="invoer">
          <input name="" id="formInput" value="" class="input" type="text" placeholder="placeholder text">
        </div>
      </div>

      <button class="action primary" :disabled="true">
        <span class="value">Disabled</span>
      </button>
      <button class="action secundary-blue ">
        <span class="value">Secundaire button</span>
      </button>
    </card>

    <card title="Link example">
      <router-link :to="{name: 'HelloAgain', params: { text }}">
        Some link
      </router-link>
    </card>

    <card title="D3 example">
      <d3-example></d3-example>
    </card>
    <card title="vega example">
      <vega-example></vega-example>
    </card>
    <card title="leaflet example">
      <leaflet-example></leaflet-example>
    </card>
    <div>
      <h1>Tabs example</h1>
      <meta-card-example></meta-card-example>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import card from './Layout/Card'
import helloAgain from './HelloAgain'
import d3Example from './D3Example'
import vegaExample from './VegaExample'
import leafletExample from './LeafletExample'
import metaCardExample from './MetaCardExample'

export default {
  name: 'HelloWorld',
  components: {
    'card': card,
    'hello-again': helloAgain,
    'd3-example': d3Example,
    'vega-example': vegaExample,
    'leaflet-example': leafletExample,
    'meta-card-example': metaCardExample
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'text'
    ])
  },
  methods: {
    ...mapActions({
      setText: 'setText'
    })
  },
  watch: {
    'text' (to, from) {
      // Example of a state change watch
      console.log('text has changed', from, to)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
