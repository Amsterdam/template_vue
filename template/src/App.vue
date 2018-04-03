<template>
  <div>
    <ams-header :title="title"></ams-header>

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
  },
  data () {
    return {
      title: 'TITLE'
    }
  }
}
</script>

<!-- Global styling -->
<style>
</style>
