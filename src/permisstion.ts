//路由鉴权：鉴权,项目当中路由能不能被访问的权限的设置
import router from '@/router'
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
//全局守卫：项目当中任意路由切换都会触发的钩子
//全局前置守卫
router.beforeEach((_to: any, _from: any, next: any) => {
  //访问某一个路由之前的守卫
  nprogress.start()
  next()
})

//全局后置守卫
router.afterEach(() => {
  nprogress.done()
})
