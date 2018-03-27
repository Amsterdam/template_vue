<!--Example of a component with a link and how to watch for state changes-->
<template>
  <div>
    <p>
      \{{text}}
    </p>

    <p>
      <button
        type="button"
        class="btn btn-primary"
        @click="setText('any other text')">
        Change text
      </button>
    </p>

    <div class="form-group">
      <label for="formInput">Input label</label>
      <input type="text"
             id="formInput"
             class="form-control"
             placeholder="Placeholder text">
      <button type="button" class="btn btn-primary" :disabled="true">
        Do
      </button>
      <button type="button" class="btn btn-secondary">Clear</button>
    </div>

    <p>
      <router-link :to="{name: 'HelloAgain', params: { text }}">
        Some link
      </router-link>
    </p>

    <div>
      <table class="table">
        <thead>
        <tr>
          <th colspan="3">Examples</th>
        </tr>
        <tr>
          <th width="33%">D3</th>
          <th width="33%">Vega</th>
          <th>Leaflet</th>
        </tr>
        </thead>
        <tbody class="">
        <tr>
          <td>
            <d3-example></d3-example>
          </td>
          <td>
            <vega-example></vega-example>
          </td>
          <td>
            <leaflet-example></leaflet-example>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import helloAgain from './HelloAgain'
import d3Example from './D3Example'
import vegaExample from './VegaExample'
import leafletExample from './LeafletExample'

export default {
  name: 'HelloWorld',
  components: {
    'hello-again': helloAgain,
    'd3-example': d3Example,
    'vega-example': vegaExample,
    'leaflet-example': leafletExample
  },
  data () {
    return {
      selected: '',
      items: Array.from(Array(100).keys()).map(i => ({key: i.toString() + ' element'}))
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
    },
    'selected' (to, from) {
      const found = this.items.find(i => i.key === to.key)
      if (found) {
        console.log('you have selected', found.key)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
