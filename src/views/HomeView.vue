<template>
  <div class="HoneView">
    <WebHeader></WebHeader>
    <el-container>
      <el-header class="containerHeader" ref="containerHeader" height="450px">

        <el-row type="flex" justify="center" align="middle">
          <el-col>
            <div style="font-size:35px; font-weight: 400;">LY'Blog</div>
            <div style="margin-top:20px;font-size:25px;" class="">😃前途似海 来日方长😋</div>
          </el-col>
        </el-row>
      </el-header>

      <el-main class="containerMain ">

        <el-row gutter="24" type="flex" justify="center">
          <el-col :span="12">
            <div class="left">
              <div class="blog" v-for="blog in blogList" :key="blog.id">
                <div style="font-weight: 800;margin-bottom:20px">{{ blog.title }}</div>
                <el-row gutter="24" type="flex" justify="start">
                  <el-col :span="3">
                    <div class="text">
                      <i class="el-icon-user-solid"></i>
                      <span>{{ blog.author }}</span>
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <div class="text">
                      <i class="el-icon-time"></i>
                      <span>{{ blog.createData }}</span>
                    </div>
                  </el-col>
                  <el-col>
                    <div class="text">
                      <i class="el-icon-s-ticket"></i>
                      <span v-for="tag in blog.tags" :key="tag.id" style="margin-right:5px">{{ tag.name }}</span>
                    </div>
                  </el-col>
                </el-row>
              </div>

            </div>
          </el-col>
          <el-col :span="5">
            <div class="right">
              <div class="center">
                <el-avatar :size="100" src="https://empty" @error="errorHandler">
                  <img src="https://blog.lystu.cn/avatar.webp" />
                </el-avatar>
              </div>
              <div class="center">
                {{ userName }}
              </div>
              <div class="center">
                <el-row>
                  <el-col :span="6" style="border-right:1px black solid" offset="6">
                    <div style="font-weight:800;font-size:16px">11</div>
                    <div style="font-weight:800;margin-top:10px;font-size:13px" class="">Articles</div>
                  </el-col>
                  <el-col :span="6">
                    <div style="font-weight:800;font-size:16px">120</div>
                    <div style="font-weight:800;margin-top:10px;font-size:13px">Tags</div>
                  </el-col>
                </el-row>
              </div>

              <el-divider></el-divider>
              <!-- 分类 -->
              <div>
                <div class="title">
                  <i class="el-icon-guide"></i>
                  <span>Categories</span>
                </div>
                <div class="categories" v-for="category in userInfo.categories" :key="category.id">
                  <div class="categories_name">{{ category.name }}</div>
                  <div class="categories_count">{{ category.count }}</div>
                </div>
              </div>
              <!-- 标签 -->
              <div>
                <div class="title">
                  <i class="el-icon-guide"></i>
                  <span>Categories</span>
                </div>
                <div class="categories" v-for="category in userInfo.categories" :key="category.id">
                  <div class="categories_name">{{ category.name }}</div>
                  <div class="categories_count">{{ category.count }}</div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>footer
      </el-footer>
    </el-container>

  </div>
</template>

<script>
import WebHeader from '@/components/WebHeader.vue'

export default {
  name: 'HomeView',
  components: {
    WebHeader
  },
  data () {
    return {
      userName: '肥羊',
      blogList: [{
        id: '1',
        title: 'MyBatis',
        author: '肥羊',
        createData: '2022/6/14',
        tags: [{ id: '1', name: 'MyBatis' }]
      }, {
        id: '1',
        title: 'Spring',
        author: '肥羊',
        createData: '2022/6/14',
        tags: [{ id: '1', name: 'Spring' }]
      }, {
        id: '1',
        title: 'SpringMVC',
        author: '肥羊',
        createData: '2022/6/14',
        tags: [{ id: '1', name: 'SpringMVC' }]
      }, {
        id: '1',
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
      }],
      userInfo: {
        categories: [{
          id: 1,
          name: 'Java',
          count: 55
        }, {
          id: 1,
          name: 'Linux',
          count: 100
        }, {
          id: 1,
          name: 'MySQL',
          count: 9
        }]
      }
    }
  },
  methods: {

  },
  created () {
    this.clientWidth = document.documentElement.clientWidth
    this.clientHeight = document.documentElement.clientHeight
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
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
  background-image: url(@/assets/static/home/bg.svg);
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
