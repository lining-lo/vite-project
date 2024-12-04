<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <!-- 登录的表单 -->
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              @click="login"
              class="login_btn"
              type="primary"
              size="default"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElNotification } from 'element-plus'
import useUserStore from '@/store/modules/user'
//引入用户相关的小仓库
let useStore = useUserStore()
//引入获取当前时间的函数
import { getTime } from '@/utils/time'
//获取el-form表单
let loginForms = ref()
//获取路由器
let $router = useRouter()
//获取路由对象
let $route = useRoute()
//定义变量控制按钮加载效果
let loading = ref(false)
//收集账号与密码的数据
let loginForm = reactive({
  username: 'admin',
  password: '111111',
})
//登录按钮的回调
const login = async () => {
  //保证全部表单校验通过再发请求
  await loginForms.value.validate()
  //加载效果：开始加载
  loading.value = true
  try {
    //也可以书写.then语法
    await useStore.userLogin(loginForm)
    //编程式导航跳转到展示数据的首页
    //判断登录的时候，路由路径当中是否有query参数，如果有就往query参数跳转，没有就跳转到首页
    let redirect: any = $route.query.redirect
    $router.push({ path: redirect || '/' })
    //登录成功的提示信息
    ElNotification({
      type: 'success',
      message: '登录成功！',
      title: `HI,${getTime()}好`,
    })
    //登录成功加载效果消失
    loading.value = false
  } catch (error) {
    //登录失败加载效果也消失
    loading.value = false
    //登录失败的提示信息
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
//自定义校验规则函数
const validatorUserName = (_rule: any, value: any, callback: any) => {
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少五位'))
  }
}
const validatorPassword = (_rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('账号长度至少六位'))
  }
}
//定义表单校验需要的配置对象
const rules = {
  username: [
    {
      trigger: 'change',
      validator: validatorUserName,
    },
  ],
  password: [
    {
      trigger: 'change',
      validator: validatorPassword,
    },
  ],
}
</script>
<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background: cover;
}
.login_form {
  position: relative;
  width: 80%;
  top: 30vh;
  background: url('@/assets/images/login_form.png') no-repeat;
  background-size: cover;
  padding: 40px;
  h1 {
    color: white;
    font-size: 40px;
  }
  h2 {
    font-size: 20px;
    color: white;
    margin: 20px 0px;
  }
  .login_btn {
    width: 100%;
  }
}
</style>
