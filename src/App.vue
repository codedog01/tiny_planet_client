<template>
  <div class="app">
    <!-- <WebHeader></WebHeader> -->
    <el-backtop class="" target=".app"></el-backtop>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    "dasd"
</div>
</template>

<script>
export default {

  methods: {

  },
  mounted () {
  }
}
</script>

<style >
.animate {
  transition: all .5s;
}

.app {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  margin: 0 auto;
}

#da {}
</style>
