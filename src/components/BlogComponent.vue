<template>
    <el-container>
        <el-header v-if="type !== ''" style="height:60px line-height:60px;height: auto;" ref="containerHeader">
            <el-row class="" :gutter="20" type="flex" justify="center" align="middle">
                <el-col class="" :span="16">
                    <div class="categories_div">
                        <div class="categories_item">
                            <span class="title">Jadsdsva</span>
                            <span class="num">15</span>
                        </div>
                        <div class="categories_item">
                            <span class="title">Java</span>
                            <span class="num">15</span>
                        </div>
                        <div class="categories_item">
                            <span class="title">Java</span>
                            <span class="num">15</span>
                        </div>
                        <div class="categories_item">
                            <span class="title">Java</span>
                            <span class="num">15</span>
                        </div>
                        <div class="categories_item">
                            <span class="title">Java</span>
                            <span class="num">15</span>
                        </div>
                        <div class="categories_item">
                            <span class="title">Java</span>
                            <span class="num">15</span>
                        </div>
                    </div>
                    <div class="tags_div">
                        <el-tag type=" success">标签二</el-tag>
                        <el-tag type="info">标签三</el-tag>
                        <el-tag type="success">标签二</el-tag>
                        <el-tag type="info">标签三</el-tag>
                        <el-tag type="warning">标签四</el-tag>
                        <el-tag type="danger">标签五</el-tag>
                        <el-tag type="info">标签三</el-tag>
                        <el-tag type="success">标签二</el-tag>
                        <el-tag type="info">标签三</el-tag>
                        <el-tag type="warning">标签四</el-tag>
                        <el-tag type="danger">标签五</el-tag>
                        <el-tag type="warning">标签四</el-tag>
                        <el-tag type="danger">标签五</el-tag>
                        <el-tag type="danger">标签五</el-tag>
                        <el-tag type="warning">标签四</el-tag>
                        <el-tag type="danger">标签五</el-tag>
                        <el-tag type="success">标签二</el-tag>
                        <el-tag type="info">标签三</el-tag>
                        <el-tag type="warning">标签四</el-tag>
                        <el-tag type="danger">标签五</el-tag>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-main class="container_main ">
            <el-row :gutter="20" type="flex" justify="center" align="middle">
                <el-col class="" :span=span>
                    <div id="blogsDiv">
                        <div class="blog animate__zoomIn " :style="generateStyle(index)"
                            v-for="(blog, index) in blogList" :key="blog.id">
                            <div style="font-size: 15px; font-weight: 800;margin-bottom:20px">{{ blog.title }}
                            </div>
                            <el-row :gutter=24 type="flex" justify="start">
                                <el-col :span="6">
                                    <div class="text">
                                        <i class="el-icon-time"></i>
                                        <span>{{ blog.createData }}</span>
                                    </div>
                                </el-col>
                                <el-col>
                                    <div class="text">
                                        <i class="el-icon-s-ticket"></i>
                                        <span v-for="tag in blog.tags" :key="tag.id" style="margin-right:5px">{{
                                                tag.name
                                        }}</span>
                                    </div>
                                </el-col>
                                <el-col :span="4">
                                    <div class="text">
                                        <i class="el-icon-user-solid"></i>
                                        <span>{{ 11 }}</span>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
export default {
  name: 'BlogComponent',
  components: {

  },
  mounted () {
    // 滚动条的获取
    window.addEventListener('scroll', this.handleScrollx, true)
  },

  props: {
    type: {
      type: String,
      default: ''
    },
    blogList: [],
    span: { type: Number, default: 16 }
  },
  data: () => {
    return {
    }
  },
  methods: {
    generateStyle (index) {
      return index < 5 ? 'display : block;' : 'display : none;'
    },
    handleScrollx () {
      document.getElementById('blogsDiv').childNodes.forEach((item, index) => {
        if (item.getBoundingClientRect().top < 770 && item.style.display === 'none') {
          item.style.display = 'block'
        }
      })
    }
  }

}
</script>

<style lang="less" scoped>
.categories_item {
    height: 45px;
    width: 60px;
    width: auto;
    border-radius: 3px;
    line-height: 45px;
    font-size: 13px;
    margin-left: 10px;
    margin-top: 5px;
    transition: all .3s;
    padding: 0 10px 0 10px;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.categories_item>.num {
    background-color: rebeccapurple;
    padding: 3px;
    margin-left: 2px;
    border-radius: 3px;
}

.categories_div {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
}

.categories_item:hover {
    background-color: #3EAF7C;
    color: white;
}

.tags_div {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    height: auto;
    align-items: center;
}

.tags_div>span {
    margin-right: 10px;
    cursor: pointer;
    margin-top: 5px;
}

.tags_div>span:hover {
    transform: scale(1.04);
}

.blog {
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    padding: 20px;
    transition: all .3s;
    overflow: hidden;
    border-radius: .25rem;
    animation-duration: 1.5s;
}

.blog:hover {
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
