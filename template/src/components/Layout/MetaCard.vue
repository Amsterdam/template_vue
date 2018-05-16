<template>
  <div class="card text-center mt-2 metacard">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <!-- prevent default to stop the page from bouncing around when user switches between data or info states -->
          <a class="nav-link" :class="{ active: state===STATES.SHOWING_DATA }" @click.self.prevent="state = STATES.SHOWING_DATA" href="#">\{{ title || "Title Placeholder" }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: state===STATES.SHOWING_INFO }" @click.self.prevent="state = STATES.SHOWING_INFO" href="#">info</a>
        </li>
      </ul>
    </div>
    <template v-if="state===STATES.SHOWING_DATA">
      <div class="card-body" style="overflow: hidden">
        <slot name="data">
          Showing placeholder for data view.
        </slot>
      </div>
    </template>
    <template v-if="state===STATES.SHOWING_INFO">
      <!-- The info use a slightly smaller font-size hence the info-text class -->
      <div class="card-body info-text" style="overflow-y: auto">
        <slot name="info">
          Showing placeholder for info view.
        </slot>
      </div>
    </template>
  </div>
</template>

<script>

const STATES = {
  SHOWING_DATA: 'SHOWING_DATA',
  SHOWING_INFO: 'SHOWING_INFO'
}

export default {
  name: 'metacard',
  props: [
    'title',
    'initialState'
  ],
  data () {
    return {
      'STATES': STATES,
      'state': this.initialState || STATES.SHOWING_DATA
    }
  }
}
</script>

<style scoped>
@media print {
  .card {
    page-break-after: always;
  }
}

.info-text {
  text-align: left;
  font-size: 0.8rem;
}

.info-text h1 {
  font-size: 2rem
}

.info-text h2 {
  font-size: 1.75
}

.info-text h3 {
  font-size: 1.5rem
}

.info-text h4 {
  font-size: 1.25rem
}

.info-text h5 {
  font-size: 1rem
}

.info-text h6 {
  font-size: 0.8rem
}
</style>
