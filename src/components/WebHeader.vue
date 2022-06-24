<template>
    <div id="webHeader">
        <el-row type="flex" align="middle">
            <el-col :span="10">
                <el-row :gutter=20 type="flex" align="middle">
                    <el-col :span="3" :push=1>
                        <el-avatar shape="square" :size="40" :src="avatar"></el-avatar>
                    </el-col>
                    <el-col :span="3">
                        <span style="font-size: 16px;font-weight: 800;">{{ author }}</span>
                    </el-col>
                </el-row>
                <div class="block">

                </div>

            </el-col>
            <el-col :span="14">
                <el-menu active-text-color="#51c4d3" text-color="#0f1423" :default-active="activeIndex"
                    class="el-menu-demo" mode="horizontal" :router=true @select="menuSelect">
                    <el-menu-item>
                        <el-input clearable size="small" placeholder="请输入内容" prefix-icon="el-icon-search"
                            v-model="searchText" @keyup.enter.native="search">
                        </el-input>
                    </el-menu-item>
                    <el-menu-item index="/home">
                        <i class="el-icon-reading"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item index="/categories">
                        <i class="el-icon-guide"></i>
                        <span slot="title">分类</span>
                    </el-menu-item>
                    <el-menu-item index="/timeline">
                        <i class="el-icon-time"></i>
                        <span slot="title">归档</span>
                    </el-menu-item>
                    <el-menu-item index="/tags">
                        <i class="el-icon-price-tag"></i>
                        <span slot="title">生活</span>
                    </el-menu-item>

                    <el-menu-item index="/about">
                        <i class="el-icon-paperclip"></i>
                        <span slot="title">链接</span>
                    </el-menu-item>
                </el-menu>
            </el-col>

        </el-row>
    </div>
</template>

<script>
export default {
  name: 'webHeader',
  props: {

  },
  data () {
    return {
      avatar: 'https://blog.lystu.cn/avatar.webp',
      author: '肥羊',
      searchText: '', //
      activeIndex: '/home'
    }
  },
  methods: {
    search () {
      console.log(this.searchText)
    },
    menuSelect (index, indexPath) {
      console.log(indexPath)
      this.activeIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.el-menu.el-menu--horizontal {
    border-bottom: 0
}

/deep/.el-menu--horizontal>.el-menu-item {
    border-bottom: 0
}

/deep/.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 0
}

/deep/.el-menu--horizontal>.el-menu-item:hover {
    color: #51c4d3;
    // background-color: #51c4d3;
}

#webHeader {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>
