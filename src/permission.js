import router from "./route";
import NProgress from "nprogress";
import getPageTitle from "./utils/getPageTitle";
import store from "./store";
// 判断是否有路由访问权限
const permissionControl = (to, next) => {
  let hasPermission =
    store.getters.menuName.includes(to.name) ||
    store.getters.menuName.includes(to.meta.parentName);
  if (hasPermission || to.path === "/dashboard" || to.path === "/login") {
    next();
  } else {
    to.path === "/404" ? next() : next("/404");
  }
  NProgress.done();
};
// 全局前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start();
  document.title = getPageTitle(to.name);
  let hasToken = sessionStorage.getItem("userToken");
  let username = sessionStorage.getItem("username");
  if (hasToken) {
    // 如果刷新了页面就重新获取菜单列表
    if (!store.getters.menuList.length) {
      store.dispatch("user/getUserMenu", username).then(() => {
        permissionControl(to, next);
      });
    } else {
      permissionControl(to, next);
    }
  } else {
    to.path === "/login" ? next() : next("/login");
    NProgress.done();
  }
});
router.afterEach(() => {
  NProgress.done();
});