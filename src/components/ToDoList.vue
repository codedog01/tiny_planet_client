<template>
  <el-container>
    <!-- 便签头部 -->
    <el-header>
      <el-row justify="space-around" :gutter="5">
        <!-- 搜索框 -->
        <el-col :span="20"
          ><div class="grid-content bg-purple">
            <el-input
              type="text"
              placeholder="请输入查询关键词"
              v-model="serchText"
              clearable
            >
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input></div
        ></el-col>
        <!-- 新增按钮 -->
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            <el-button
              style="padding: 12px 12px"
              type="primary"
              icon="el-icon-plus"
            ></el-button></div
        ></el-col>
      </el-row>
    </el-header>
    <!-- 内容区域 -->
    <el-main style="padding: 20px">
      <el-row
        :gutter="5"
        v-for="(item, index) in filteredTodoList"
        :key="index"
        @click.native="btnClick"
        @mousemove.native="todoItemMouseOver(index)"
        @mouseleave.native="todoItemMouseleave"
      >
        <!-- 正文 -->
        <el-col :span="24"
          ><div class="grid-content bg-purple">
            <el-checkbox
              class="todoItem"
              shadow="hover"
              :checked="item.finished"
              style="margin: 0"
              >{{ item.content }}
              {{ currentHoverIdx === index }}
            </el-checkbox>
          </div></el-col
        >
        <!-- 操作框 -->
        <div
          class="operation"
          :style="currentHoverIdx === index ? 'right:20px' : ''"
        >
          <el-button
            size="small"
            type="success"
            icon="el-icon-edit"
            @click.native="editClick(index)"
          ></el-button>
          <el-button
            size="small"
            type="danger "
            icon="el-icon-delete"
            @click.native="deleteClick(index)"
          ></el-button>
        </div>
      </el-row>
      <!-- 计算属性结果集为空且原始结果集不为空 -->
      <el-empty
        image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        description="未搜索到结果"
        v-show="filteredTodoList.length === 0 && todoList.length !== 0"
      ></el-empty>
      <!-- 计算属性结果集为空且原始结果集为空 -->
      <el-empty
        image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        description="暂无结果"
        v-show="filteredTodoList.length === 0 && todoList.length === 0"
      ></el-empty>
    </el-main>
    <!--  -->
    <el-footer>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'ToDoList',
  data () {
    return {
      currentHoverIdx: -1,
      serchText: '',
      todoList: [
        { id: '1', content: '标签1', finished: false },
        { id: '2', content: '标签2', finished: false },
        { id: '3', content: '标签2', finished: false },
        { id: '4', content: '标签2', finished: false },
        { id: '5', content: '标签2', finished: false }]
    }
  },
  methods: {
    btnClick () {
    },
    todoItemMouseOver (idx) {
      this.currentHoverIdx = idx
    },
    todoItemMouseleave () {
      this.currentHoverIdx = -1
    },
    editClick (idx) {
      alert('修改便笺的弹窗')
    },
    deleteClick (idx) {
      this.todoList.splice(idx, 1)
    },
    sendName () {
      this.getName('zhangsan')
    }

  },
  computed: {
    filteredTodoList () {
      return this.todoList.filter(item => this.serchText === '' || item.content.indexOf(this.serchText) !== -1)
    }

  },
  props: ['']

}
</script >

<style scoped>
.el-container {
  margin-left: 50px;
  width: 300px;
  height: 400px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border: 5px;
  border-radius: 4px;
}
.el-header {
  background-color: #ffff00;
  color: #333;
  line-height: 60px;
  height: 60px;
  /* display: flex; */
  /* justify-content: space-around; */
}

.todoItem {
  line-height: 40px;
  width: 100%;
  height: 40px;
  overflow: hidden;
  margin-top: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: dotted 1px;
}

.todoItem:hover {
  box-shadow: 0px 2px rgba(94, 255, 185, 0.5);
  /* background-color:rgba(0, 0, 0, 0.1) */
}
.operation {
  font-size: 25px;
  transition-duration: 0.5s;
  right: -100px;
  /* right: 0px; */
  position: absolute;
  width: 50px;
  display: flex;
  justify-content: center;
  /* opacity: .8; */
}
.addBtn {
  border-radius: 10px;
  border: solid 5px red;
}
</style>>
