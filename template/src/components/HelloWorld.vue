<!--Example of a component with a link-->
<template>
  <div>
    <p>
      {{text}}
    </p>
    <p>
      <router-link :to="{path: 'helloagain/' + text}">
        Some link
      </router-link>
    </p>
    <div>
      <table class="table table-sm table-striped table-bordered">
        <thead class="text-center">
        <tr>
          <th colspan="3">Examples</th>
        </tr>
        <tr>
          <th width="33%">D3</th>
          <th width="33%">Vega</th>
          <th>Leaflet</th>
        </tr>
        </thead>
        <tbody class="text-center">
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
import { mapGetters } from 'vuex'
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
