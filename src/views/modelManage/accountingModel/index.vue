<template>
  <div class="layout-pd">
    <el-card shadow="hover">
      <!-- 表单 -->
        <div class="formbox">
          <el-form :model="form" label-width="100px">
            <el-row class="formRow">
              <el-col :span="6">
                <el-form-item label="模型名称：">
                  <el-input size="medium" v-model="form.name" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="模型名称：">
                  <el-input size="medium" v-model="form.name" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="模型名称：">
                  <el-input size="medium" v-model="form.name" />
                </el-form-item>
              </el-col>
              <el-col :span="6" style="text-align: center;">
                <el-button size="medium" @click="search" >搜索</el-button>
                <el-button size="medium">清空</el-button>
              </el-col>
            </el-row>
          </el-form>
          <el-row>
            <el-col :span="24">
              <el-button size="medium" >新增</el-button>
              <el-button size="medium" >删除</el-button>
            </el-col>
          </el-row>
        </div>
      <!-- 表格 -->
        <div class="main">

        </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  name: ''
})

const search = () => {

}

</script>

<style lang="scss" scoped>
.formbox {
  .formRow {
    line-height: 40px;
  }
}
</style>