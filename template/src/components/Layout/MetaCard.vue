<template>
  <div class="card text-center mt-2 metacard">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link" :class="{ active: state===STATES.SHOWING_DATA }" @click="state = STATES.SHOWING_DATA" href="#">\{{ title || "Title Placeholder" }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: state===STATES.SHOWING_INFO }" @click="state = STATES.SHOWING_INFO" href="#">info</a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <template v-if="state===STATES.SHOWING_DATA">
        <slot name="data">
          Showing placeholder for data view.
        </slot>
      </template>
      <template v-if="state===STATES.SHOWING_INFO">
        <slot name="info">
          Showing placeholder for info view.
        </slot>
      </template>
    </div>
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

.info-button {
  vertical-align: middle
}
</style>
