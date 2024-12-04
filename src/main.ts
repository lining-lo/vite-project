import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示
import 'virtual:svg-icons-register'
//引入全局组件
import gloablComponent from '@/components/index'
import '@/styles/index.scss'
//引入路由
import router from './router'
//引入仓库
import pinia from './store'

const app = createApp(App)
//安装ElementPlus
app.use(ElementPlus, {
  locale: zhCn, // 国际化
})
//安装全局组件
app.use(gloablComponent)
//安装路由
app.use(router)
//安装仓库
app.use(pinia)
//引入路由鉴权文件
import './permisstion'
app.mount('#app')
