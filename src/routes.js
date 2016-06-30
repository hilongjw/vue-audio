import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
    '/': {
        component: (resolve) => {
            require(['./components/list.vue'], resolve)
        }
    },
    '/player1': {
        component: (resolve) => {
            require(['./components/covAudio.vue'], resolve)
        }
    }})

export default router
