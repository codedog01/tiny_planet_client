<template>
  <div class="HoneView" ref="HoneView">
    <el-container>
      <el-header class="containerHeader" ref="containerHeader" height="450px">
        <div>
          <particles-bg type="square" :bg="true" :num=11 />
        </div>
        <el-row type="flex" justify="center" align="middle">
          <el-col>
            <div style="font-size:35px; font-weight: 400;">LY'Blog</div>
            <div style="margin-top:20px;font-size:25px;" class="">😃前途似海 来日方长😋</div>
          </el-col>
        </el-row>
      </el-header>
      <el-main class="container_main ">
        <el-row :gutter=24 type="flex" justify="center">
          <el-col :span="12">
            <div class="left">
              <transition enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut">
                <BlogComponent :blogList="blogList" :span=24>
                </BlogComponent>
              </transition>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="right">
              <div class="user_info">
                <div class="center">
                  <el-avatar :size="100" src="https://blog.lystu.cn/avatar.webp">
                    <img src="https://blog.lystu.cn/avatar.webp" />
                  </el-avatar>
                </div>
                <div class="center">
                  {{ userName }}
                </div>
                <div class="center">
                  <el-row>
                    <el-col :offset=6 :span="6" style="border-right:1px black solid">
                      <div style="font-weight:800;font-size:16px">11</div>
                      <div style="font-weight:800;margin-top:10px;font-size:13px" class="">Articles</div>
                    </el-col>
                    <el-col :span="6">
                      <div style="font-weight:800;font-size:16px">120</div>
                      <div style="font-weight:800;margin-top:10px;font-size:13px">Tags</div>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <!-- <el-divider></el-divider> -->
              <!-- 分类 -->
              <div>
                <div class="title">
                  <i class="el-icon-menu"></i>
                  <span> Categories</span>
                </div>
                <div class="categories" v-for="category in userInfo.categories" :key="category.id">
                  <div class="categories_name">{{ category.name }}</div>
                  <div class="categories_count">{{ category.count }}</div>
                </div>
              </div>
              <el-divider></el-divider>
              <!-- 标签 -->
              <div>
                <div class="title">
                  <i class="el-icon-s-flag"></i>
                  <span> Tags</span>
                </div>
                <div class="user_tags">
                  <tag-cloud id="tagCloud" :data="hotTag" @clickTag="clickTagItem" :config="tagCloudConfig">
                  </tag-cloud>
                </div>
              </div>
              <el-divider></el-divider>
              <!-- 友情 -->
              <div>
                <div class="title">
                  <i class="el-icon-s-finance"></i>
                  <span> Friend Links</span>
                </div>
                <div class="user_tags">
                  <el-popover placement="bottom" title="缄默" width="200" trigger="hover"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                    <el-button slot="reference">hover 激活</el-button>
                  </el-popover>
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
import { ParticlesBg } from 'particles-bg-vue'
import BlogComponent from '@/components/BlogComponent.vue'
export default {
  name: 'HomeView',
  components: {
    ParticlesBg,
    BlogComponent
  },

  data () {
    return {
      isV: true,
      tagCloudConfig: {
        radius: 120, // 滚动半径，Number，单位px
        maxFont: 24, // 最大字体大小
        color: '', // 字体颜色。为null时随机s
        rotateAngleXbase: 600, // X方向旋转速度基数，数越小速度越快
        rotateAngleYbase: 600, // Y方向旋转速度基数，数越小速度越快
        hover: false // 是否开启悬浮联动
      },
      hotTag: [
        { id: '-1', name: '冷澳' },
        { id: '0ef028e5278f4f5ca31f99f1bd22b1cc', name: '剑河县' },
        { id: '1a32ef04d3c548eaa6777abb46da32f2', name: '台江县' },
        { id: '2c26488325bd493687d16315fe0e5fdd', name: '岑巩县' },
        { id: '3a786111828a4b9f89ae9da25753eedd', name: '黎平' },
        { id: '4ed593eed91b4244969995237f5c96c5', name: '丹寨县' },
        { id: '615d2c178f1a47cb8d473823e74f5386', name: '凯里市' },
        { id: '76f652df03db43349272a9aff492b065', name: '榕江县' },
        { id: '8ff29d0d35e548feb945063b34ed9c9b', name: '黄平县' },
        { id: 'a8ac2170008746fdadc05ea461bc5e37', name: '雷山县' },
        { id: '05023f8da31c4b4187cc6899e2a3aec2', name: '镇远县' }],
      userName: '肥羊',
      blogList: [{
        id: '7',
        title: 'MyBatis',
        author: '肥羊',
        createData: '2022/6/14',
        tags: [{ id: '1', name: 'MyBatis' }]
      }, {
        id: '6',
        title: 'MyBatis',
        author: '肥羊',
        createData: '2022/6/14',
        tags: [{ id: '1', name: 'MyBatis' }]
      }, {
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
      }],
      userInfo: {
        categories: [{
          id: 3,
          name: 'Java',
          count: 55
        }, {
          id: 2,
          name: 'Linux',
          count: 100
        }, {
          id: 1,
          name: 'MySQL',
          count: 9
        }],
        tags: [
          {
            id: '1',
            name: 'SpringSpring'
          }, {
            id: '2',
            name: 'SprinSpringSpringg'
          }, {
            id: '3',
            name: 'SprSpringing'
          }, {
            id: '4',
            name: 'Sprdeing'
          }, {
            id: '5',
            name: 'Sprewing'
          }, {
            id: '6',
            name: 'Sprytruing'
          }, {
            id: '7',
            name: 'Spring'
          }, {
            id: '8',
            name: 'Spring'
          }, {
            id: '9',
            name: 'Spring'
          }
        ]
      }
    }
  },
  methods: {
    clickTagItem (event) {
      console.log(event)
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
  }

}
</script>

<style lang="scss" scoped>
.test {
  animation-duration: 1s;
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
