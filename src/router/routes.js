/**
 * @param isTabView 是否放入TabView
 */
export default [
  {
    path: "/login",
    name: "login",
    alias: "/",
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/index",
    component: () => import("@/views/index/index.vue"),
    name: "index",
    children: [
      {
        path: "/consoleView",
        name: "consoleView",
        alias: "/",
        meta: {
          isTabView: true,
          title: "首页"
        },
        component: () => import("@/views/consoleView/consoleView.vue")
      },
      {
        path: "/ts2",
        name: "Ts2",
        component: () => import("@/views/ts2/ts2.vue")
      }
    ]
  },
  {
    path: "/dragresize",
    component: () => import("@/views/dragresize/dragresize.vue"),
    name: "dragresize",
  }
]
