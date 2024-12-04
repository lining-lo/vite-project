<template>
  <div>
    <h1>我是路由组件home</h1>
  </div>
</template>

<script setup lang="ts">
//引入组合式API函数之生命周期函数
import { onMounted } from 'vue'
//获取用户仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
//首页挂载完毕发请求获取用户信息
onMounted(() => {
  userStore.userInfo()
})
</script>
<style lang="scss" scoped></style>
