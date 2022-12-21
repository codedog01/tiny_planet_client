<template>
  <div class="HoneView" ref="HoneView">

    <el-button @click.native.prevent="down" class="codebtn">
      下载</el-button>
    <div style="position: fixed;bottom: 0px;width: 100%;z-index: 99;">

      <div
        style="  width: 100%; line-height: 35px; background:white; padding-top:5px; font-size:14px; font-weight:500; text-align:center;">
        Copyright &copy; 隐藏原始标签，新创建一个标签 Co.,Ltd
      </div>

    </div>

  </div>
</template>

<script>
import * as API from '@/server/api'

export default {
  name: 'HomeView',
  components: {
  },

  methods: {
    down (event) {
      API.down().then(res => {
        const blob = new Blob([res.data], {
          type: 'application/zip'
        })
        const a = document.createElement('a')
        a.href = URL.createObjectURL(blob)
        a.download = 'fileName.zip'
        document.body.appendChild(a) // 追加a标签
        a.click() // a标签点击
        document.body.removeChild(a) // 移除节点
      })
    },
    click1 () {
      this.blogList.push({
        id: '1',
        title: 'SpringBoot',
        author: '肥羊',
        createData: '2022/6/14',
        tags: [{ id: '1', name: 'SpringBoot' }, { id: '2', name: '练习' }]
      })
    }
  },
  created () {
    this.clientWidth = document.documentElement.clientWidth
    this.clientHeight = document.documentElement.clientHeight
  },
  mounted () {
    if (this.blogList.length === 0) {
    // console.log(this.$refs.MainRef.$el.style)
    // this.$refs.MainRef.getRootNode.height = this.clientHeight - 450 - this.$refs.FooterRef.getRootNode.height
    }
  }

}
</script>

<style lang="scss" scoped>
.container_main {
  background-color: red;
}

.user_info {
  padding: 20px;
  border-radius: 10px;
  // background-color: #F6F8FC;
}

.user_tags {
  margin-top: 10px;
  padding: 10px;
  transition: all .3s;
  border-radius: .25rem;
}

/deep/.tag-cloud>p:hover {
  cursor: pointer;
}

.container {
  background-color: antiquewhite;
}

.text {
  font-size: 13px;
  color: rgb(129, 129, 129);
}

.title {
  font-size: 14px;
  font-weight: 800;
}

.red {
  background-color: red;
}

.containerHeader {
  text-align: center;
  overflow: hidden;
  // background-image: url(@/assets/static/home/bg.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position-y: -220px;
}

.categories {
  margin-top: 10px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
  transition: all .3s;
  overflow: hidden;
  border-radius: .25rem;
  display: flex;
  justify-content: space-between;
  height: 30px;
  line-height: 30px;
}

.categories:hover {
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);
}

.categories_name {
  font-size: 15px;
  font-weight: bold;
}

.categories_count {
  background-color: rgb(226, 92, 92);
  height: 30px;
  width: 30px;
  line-height: 30px;
  border-radius: 4px;
  text-align: center;
}

.right {
  // height: 600px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  padding: 20px;
  transition: all .3s;
  overflow: hidden;
  border-radius: .25rem;
}

.right>* {
  margin-top: 10px;
}

.blog {
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  transition: all .3s;
  overflow: hidden;
  border-radius: .25rem;
}

.right:hover,
.blog:hover {
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);
}

.center {
  text-align: center;
}

/deep/.el-row {
  height: 100%;
}
</style>
