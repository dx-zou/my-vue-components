import Vue from "vue";
import axios from "axios";
// import BASE_URL from "./api";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: "https://easy-mock.com/mock/5c949a926811807c6b28d8c0/feng/",
  // baseURL: BASE_URL,
  withCredentials: true,
  timeout: 10000
});
// 添加请求拦截
service.interceptors.request.use(
  config => {
    // 设置请求头信息
    config.headers.Authorization = sessionStorage.getItem("token") || "";
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据先做一层处理
    // 请求成功后返回的数据
    if (response.data.code === 0) {
      Vue.prototype.$toast("error", response.data.msg);
    }
    return response.data;
  },
  error => {
    // 对响应错误做统一处理
    // Vue.prototype.$notify({
    //   type: "fail",
    //   duration: 1000,
    //   message: error.response.data.errMsg
    // });
    return Promise.reject(error);
  }
);
Vue.prototype.$http = service;
export default service;