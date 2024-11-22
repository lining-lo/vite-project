import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn, // 国际化
})

app.mount('#app')
