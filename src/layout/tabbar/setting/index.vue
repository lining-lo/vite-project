<template>
  <el-button
    size="small"
    icon="Refresh"
    circle
    @click="updateRefresh"
  ></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <img
    :src="userSotre.avatar"
    style="width: 20px; height: 20px; margin: 0 10px"
  />
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userSotre.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts" name="Setting">
import { useRoute, useRouter } from 'vue-router'
//获取用户相关的小仓库
import useUserStore from '@/store/modules/user'
//获取骨架的小仓库
import useLayOutSettingStore from '@/store/modules/setting'
let layoutSettingStore = useLayOutSettingStore()
let userSotre = useUserStore()
//获取路由器对象
let $router = useRouter()
//获取路由对象
let $route = useRoute()

//刷新按钮点击回调
const updateRefresh = () => {
  layoutSettingStore.refresh = !layoutSettingStore.refresh
}
//全屏按钮点击回调
const fullScreen = () => {
  //DOM对象的一个属性：可以判断当前是不是全屏模式[全屏：true,不是全屏：null]
  let full = document.fullscreenElement
  //切换为全屏模式
  if (!full) {
    //文档根节点的方法requestFullscreen,实现全屏模式
    document.documentElement.requestFullscreen()
  } else {
    //变为不是全屏模式->退出全屏模式
    document.exitFullscreen()
  }
}
//退出登录点击回调
const logout = async () => {
  //第一件事：需要向服务器发送请求[退出登录接口]
  //第二件事：仓库当中关于用于相关的数据清空[token、username、avatar]
  //第三件事：跳转到登录页面
  await userSotre.userLogout()
  //跳转到登录页面
  $router.push({ path: '/login', query: { redirect: $route.path } })
}
</script>
<style lang="scss" scoped></style>
