<template>
    <el-container>
        <el-header style="line-height:60px" ref="containerHeader">
            <el-row :gutter="20" type="flex" justify="center" align="middle">
                <el-col class="test" :span="16">
                    <slot name="header"></slot>
                </el-col>
            </el-row>
        </el-header>
        <el-main class="container_main ">
            <el-row :gutter="20" type="flex" justify="center" align="middle">
                <el-col class="" :span="16">
                    <BlogList :blogList="blogList"></BlogList>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import BlogList from '@/components/BlogComponent.vue'

export default {
  name: 'BlogComponent',
  components: {
    BlogList
  },
  props: {
    blogList: []
  }

}
</script>

<style>
</style>
