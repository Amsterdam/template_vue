<template>
  <div>
    <div class="container app-container">
      <div class="container">
        <ams-header :title="title">Header</ams-header>
      </div>
      <div class="container">
        <ams-menu>Menu</ams-menu>
      </div>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row bg-darkgrey footer">
        <ams-footer></ams-footer>
      </div>
    </div>
    <loading-component></loading-component>
  </div>
</template>

<script>
import amsHeader from '@/components/Layout/AMSHeader'
import amsMenu from '@/components/Layout/AMSMenu'
import amsContent from '@/components/Layout/AMSContent'
import amsFooter from '@/components/Layout/AMSFooter'
import loadingComponent from '@/components/Layout/LoadingComponent'

export default {
  name: 'App',
  components: {
    'ams-header': amsHeader,
    'ams-menu': amsMenu,
    'ams-content': amsContent,
    'ams-footer': amsFooter,
    'loading-component': loadingComponent
  },
  data () {
    return {
      title: '{{description}}'
    }
  }
}
</script>

<!-- Global styling -->
<style>
</style>
