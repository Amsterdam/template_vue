<template>
  <div class="row menu">
    <div class="container type-nav-primair">
      <nav>
        <ul class="links horizontal">
          <li class="selected">
            <router-link to="/" class="nav-link">
              <span class="linklabel">
                Home
              </span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "~stijl/dist/scss/ams-colorpalette";

.menu {
  background-color: $ams-lichtgrijs;
  min-height: 45px;
}
</style>
