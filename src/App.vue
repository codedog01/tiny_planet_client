<template>
  <div>
    <WebHeader></WebHeader>
    <transition name="fade">
      <router-view class="app"></router-view>
    </transition>
  </div>
</template>

<script>

// components: {
//   WebHeader
// },
</script>
<style>
    body {
      /* background-color: #EBF0F5; */
    }
.app {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  margin: 0 auto;
}
</style>
