<template>
  <!-- 顶部左侧的静态 -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <!-- 右侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item>权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts" name="BreadCrumb">
import useLayOutSettingStore from '@/store/modules/setting'
//获取layout配置相关的仓库
let LayOutSettingStore = useLayOutSettingStore()
//点击图标切换的方法
const changeIcon = () => {
  LayOutSettingStore.fold = !LayOutSettingStore.fold
}
</script>
<style lang="scss" scoped></style>
