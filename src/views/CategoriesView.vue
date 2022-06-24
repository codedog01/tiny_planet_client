<template>
  <div>
    <BlogComponent :blogList="blogList">
    <div class="" slot="header">

    </div>
    </BlogComponent>
  </div>
</template>

<script>
import BlogComponent from '@/components/BlogComponent.vue'

export default {
  name: 'categoriesView',
  components: {
    BlogComponent
  },
  data: () => {
    return {
      blogList: [{
        id: '5',
        title: 'MyBatis',
        author: '肥羊',
        createData: '2022/6/14',
        tags: [{ id: '1', name: 'MyBatis' }]
      }, {
        id: '4',
        title: 'Spring',
        author: '肥羊',
        createData: '2022/6/14',
        tags: [{ id: '1', name: 'Spring' }]
      }, {
        id: '3',
        title: 'SpringMVC',
        author: '肥羊',
        createData: '2022/6/14',
        tags: [{ id: '1', name: 'SpringMVC' }]
      }, {
        id: '2',
        title: 'SpringBoot',
        author: '肥羊',
        createData: '2022/6/14',
        tags: [{ id: '1', name: 'SpringBoot' }, { id: '2', name: '练习' }]
      }, {
        id: '1',
        title: 'SpringBoot',
        author: '肥羊',
        createData: '2022/6/14',
        tags: [{ id: '1', name: 'SpringBoot' }, { id: '2', name: '练习' }]
      }]
    }
  }
}
</script>

<style>

</style>
