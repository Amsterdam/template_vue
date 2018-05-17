<template>
  <div>
    <meta-card title="Data title" initialState="SHOWING_INFO">
      <template slot="data">
        <!-- Demonstrate that we can include anything here -->
        <d3-example></d3-example>
      </template>
      <template slot="info">
        <!-- Demonstrate how to render Markdown info text -->
        <div v-html="compiledMarkdown" class="info-text"></div>
      </template>
    </meta-card>
  </div>
</template>

<script>
import MetaCard from '@/components/Layout/MetaCard'
import d3Example from './D3Example'
import marked from 'marked'

const markdown = `
# Markdown Support!
* [Some link](http://data.amsterdam.nl)
* [En nog één](http://data.amsterdam.nl)`

export default {
  data: function () {
    return {
      markdown: markdown
    }
  },
  components: {
    MetaCard,
    d3Example
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.markdown, { sanitize: true })
    }
  }
}
</script>

<style>
/* The MetaCard.vue component has a metacard class, which you can use to force its height */
.metacard {
  height: 250px
}
</style>
