//创建用户相关的小仓库
import { defineStore } from 'pinia'
//引入接口
import { reqLogin } from '@/api/user'
//引入数据类型
import type { loginFormData, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
//引入本地储存token的工具
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
//引入常量路由
import { constantRoute } from '@/router/routes'
//创建用户小仓库
const useUserStore = defineStore('User', {
  //小仓库存储数据的地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(), //用户唯一标识token
      menuRoutes: constantRoute, //仓库存储生成菜单需要数组（路由）
    }
  },
  //处理异步|逻辑的地方
  actions: {
    //用户登录的方法
    async userLogin(data: loginFormData) {
      //登录请求
      const result: loginResponseData = await reqLogin(data)
      //登录请求：成功200->token
      //登录请求：失败201->登录失败错误信息
      if (result.code === 200) {
        //pinia仓库存储token
        //由于pinia|vuex存储数据其实利用js对象
        this.token = result.data.token as string
        //本地存储持久化存储一份
        SET_TOKEN(result.data.token as string)
        //保证当前async函数返回一个成功的promise函数
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})
//对外暴露获取小仓库的方法
export default useUserStore
