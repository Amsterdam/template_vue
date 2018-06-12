<template>
  <div class="row">
    <div class="col-12 card">
      <div class="row">
        <div class="col-12">
          <ul class="tabs">
            <li :class="{ selected: state===STATES.SHOWING_DATA }">
              <!-- prevent default to stop the page from bouncing around when user switches between data or info states -->
              <a @click.self.prevent="state = STATES.SHOWING_DATA" href="#">{{ title || "Title Placeholder" }}</a>
            </li>
            <li :class="{ selected: state===STATES.SHOWING_INFO }">
              <a class="nav-link" @click.self.prevent="state = STATES.SHOWING_INFO" href="#">info</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
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
      </div>
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
</style>
