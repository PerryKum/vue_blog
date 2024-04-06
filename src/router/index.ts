// 1、引入路由
import { createRouter, createWebHistory } from 'vue-router'

// 2、引入组件

// 3、创建路由
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Welcome.vue')
        },

        // 环境配置
        {
            path: '/conf/ruoyi',
            component: () => import('../views/conf/Ruoyi.vue')
        },
        {
            path: '/conf/nodejs',
            component: () => import('../views/conf/Nodejs.vue')
        },
        {
            path: '/conf/mysql',
            component: () => import('../views/conf/Mysql.vue')
        },
        {
            path: '/conf/redis',
            component: () => import('../views/conf/Redis.vue')
        },
        {
            path: '/conf/vue',
            component: () => import('../views/conf/Vue.vue')
        },
        {
            path: '/conf/java',
            component: () => import('../views/conf/Java.vue')
        }
    ]
})

// 4、导出
export default router