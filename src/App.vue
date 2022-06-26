<template>
  <div class="app">
    <WebHeader></WebHeader>
    <el-backtop class="" target=".app"></el-backtop>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

</script>
<style >
.app {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  margin: 0 auto;
}
</style>
