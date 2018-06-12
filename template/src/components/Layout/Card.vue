<template>
  <div class="row">
    <div class="col-12 card">
      <div class="row">
        <div class="col-12 grid-title">
          <h2>\{{title}}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: [
    'title'
  ]
}
</script>

<style scoped>
@media print {
  .card {
    page-break-after: always;
  }
}
</style>
