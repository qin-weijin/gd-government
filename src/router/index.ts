import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/gd-government',
    name: "首页",
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/gd-government',
    name: "特色创新",
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/gd-government',
    name: "个人服务",
    component: () => import('@/views/home/index.vue'),
  },  
  {
    path: '/gd-government',
    name: "法人服务",
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/gd-government',
    name: "好差评",
    component: () => import('@/views/home/index.vue'),
  },  {
    path: '/gd-government',
    name: "效能监督",
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/gd-government',
    name: "政务公开",
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/gd-government',
    name: "政民互动",
    component: () => import('@/views/home/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router