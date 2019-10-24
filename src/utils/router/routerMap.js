/**
 * @description
 * 页面刷新路由回写，动态映射component组件
 */
export default {
  /* GoodDetail: () => import('@/views/GoodDetail/GoodDetail.vue') */
  ts2: () => import("@/views/ts2/ts2.vue"),
  index: () => import('@/views/index/index.vue')
};
