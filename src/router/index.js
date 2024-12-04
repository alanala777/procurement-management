import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/views/layout/Index.vue"
import Login from '@/views/login/Index.vue'
import Home from '@/views/home/Home.vue'

const Product = ()=> import ('@/views/product/Index.vue')
const ProductList = () => import ('@/views/product/list/Index.vue')
const ProductCategory = () => import ('@/views/product/category/Index.vue')

const Order = () => import('@/views/order/Index.vue')
const OrderList = () => import('@/views/order/list/Index.vue')
const OrderCollect = () => import('@/views/order/collect/Index.vue')

const Advert = () => import('@/views/advert/Index.vue')
const AdvertList = () => import('@/views/advert/list/Index.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            // 首页
            {
                path: '/',
                component: Home,
                name: 'home'
            },
            // 产品管理
            {
                path: '/product',
                component: Product,
                name: 'product',
                children: [
                    {
                        path: 'product_list',
                        component: ProductList,
                        name: 'product_list',
                    },
                    {
                        path: 'product_category',
                        component: ProductCategory,
                        name: 'product_category',
                    }
                ]
            },
            // 订单管理
            {
                path: '/order',
                component: Order,
                name: 'order',
                children: [
                    {
                        path: 'order_list',
                        component: OrderList,
                        name: 'order_list',
                    },
                    {
                        path: 'order_collect',
                        component: OrderCollect,
                        name: 'order_collect',
                    }
                ]
            },
            // 广告分类
            {
                path: '/advert',
                component: Advert,
                name: 'advert',
                children: [
                    {
                        path: 'advert_list',
                        component: AdvertList,
                        name: 'advert_list',
                    }
                ]
            },
            // 系统管理
        ]
    }, {
        path: '/login',
        component: Login,
        name: 'login'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router