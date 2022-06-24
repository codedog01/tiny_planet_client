<template>
    <div>
        <div class="blog" v-for="blog in blogList" :key="blog.id">
            <div style="font-size: 20px; font-weight: 800;margin-bottom:20px">{{ blog.title }}</div>
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
</template>

<script>
export default {
  name: 'BlogList',
  props: {
    blogList: []
  }
}
</script>

<style>
.blog {
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    padding: 20px;
    transition: all .3s;
    overflow: hidden;
    border-radius: .25rem;
}

.blog:hover {
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
