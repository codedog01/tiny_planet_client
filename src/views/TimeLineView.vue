<template>
    <div class="block">

        <el-row :gutter="20">
            <el-col :span="10" :offset="6">
                <el-timeline v-infinite-scroll>
                    <el-timeline-item color="#45b787" class="year" size="large" timestamp="2022" placement="top">
                    </el-timeline-item>
                    <el-timeline-item color="#45b787" timestamp="6月5日" placement="top">
                        <div class="line_item">王小虎发表的博客 </div>
                        <div class="line_item">王小虎发表的博客 </div>
                    </el-timeline-item>
                    <el-timeline-item color="#45b787" timestamp="6月5日" placement="top">
                        <div class="line_item">王小虎发表的博客 </div>
                        <div class="line_item">王小虎发表的博客 </div>
                    </el-timeline-item>
                    <el-timeline-item color="#45b787" timestamp="6月5日" placement="top">
                        <div class="line_item">王小虎发表的博客 </div>
                        <div class="line_item">王小虎发表的博客 </div>
                    </el-timeline-item>
                    <el-timeline-item color="#45b787" class="year" size="large" timestamp="2018" placement="top">
                    </el-timeline-item>
                    <el-timeline-item color="#45b787" timestamp="6月5日" placement="top">
                        <div class="line_item">王小虎发表的博客 </div>
                        <div class="line_item">王小虎发表的博客 </div>
                    </el-timeline-item>
                    <el-timeline-item color="#45b787" timestamp="6月5日" placement="top">
                        <div class="line_item">王小虎发表的博客 </div>
                        <div class="line_item">王小虎发表的博客 </div>
                    </el-timeline-item>
                    <el-timeline-item color="#45b787" timestamp="6月5日" placement="top">
                        <div class="line_item">王小虎发表的博客 </div>
                        <div class="line_item">王小虎发表的博客 </div>
                    </el-timeline-item>
                    <el-timeline-item class="year" color="#45b787" timestamp="起始" placement="top">

                    </el-timeline-item>

                </el-timeline>

            </el-col>
        </el-row>

    </div>
</template>

<script>
export default {
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      platform: 'github',
      owner: 'OWNER_OF_REPO',
      repo: 'NAME_OF_REPO',
      clientId: '736ff8263682f6fcb5f3   ',
      clientSecret: 'e7bd14f48d69eb9363a84f974079f7e187f829ac'
    }
  },
  methods: {

  }
}
</script >

<style lang="less" scoped>

/deep/.year>.el-timeline-item__wrapper>.el-timeline-item__timestamp {
    font-size: 18px;
    font-weight: 800;
}

.line_item {
    height: 40px;
    line-height: 40px;
    cursor: pointer;

    border-bottom: 1px dashed #eaecef;
}

.line_item:hover {
    color: #45b787;
    transition: all .2s;
    // margin-left: 10px;
    // transform: translateX(10px);
}
</style>
