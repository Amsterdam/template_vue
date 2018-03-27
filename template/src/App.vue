<template>
  <div>
    <ams-header>Header</ams-header>

    <div id="app" class="container">
      <router-view></router-view>
    </div>

    <ams-footer>Footer</ams-footer>

    <loading-component></loading-component>
  </div>
</template>

<script>
import amsHeader from '@/components/AMSHeader'
import amsFooter from '@/components/AMSFooter'
import loadingComponent from '@/components/LoadingComponent'

export default {
  name: 'App',
  components: {
    'ams-header': amsHeader,
    'ams-footer': amsFooter,
    'loading-component': loadingComponent
  }
}
</script>

<!-- Global styling -->
<style>
</style>
