<template>
  <transition name="fade">
    <router-view class="app"></router-view>
  </transition>
</template>

<script>

export default {}
</script>
<style>
.app {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  margin: 0 auto;
}
</style>
