import axios from "axios";

// 创建一个http实例
const $http = axios.create({
    baseURL: "https://www.fastmock.site/mock/323354e56ef21147c3f550e18435baa1/api",
    timeout: 2000,
    headers: {
        "Content-Type": "application/json;charset=utf-8" 
    }
})

// 请求拦截
// $http.interceptors.request.use((config) => {
//     config.headers.token = localStorage.getItem('token')
// })