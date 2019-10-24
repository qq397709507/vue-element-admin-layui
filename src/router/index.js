import Vue from 'vue'
import Router from 'vue-router'
import BaseSet from "@/utils/base-config";
import routes from "./routes";
Vue.use(Router)

const router = new Router({
  mode: "hash",
  routes
});

router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to, from, next) => {
  BaseSet.addOpendPage(router.app, to.name, to.params, to.query, to.meta, to.path)
})
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router

