<template>
    <div class="block">
        <el-row :gutter="20">
            <el-col :span="12" :offset="6">
                <el-timeline v-infinite-scroll>
                    <el-timeline-item timestamp="2018/4/12" placement="top">
                        <p>王小虎 提交于 2018/4/12 20:46</p>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/3" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/3 20:46</p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </el-col>
        </el-row>

    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
