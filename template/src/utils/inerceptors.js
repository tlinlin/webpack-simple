import axios from "axios";
import 'babel-polyfill';
axios.interceptors.request.use((config) => {
    console.log("请求拦截器")
    if (config.method === 'post') {
        config.data = config.data;
    }
    return config;
}, (error) => {
    alert("错误的传参");
    return Promise.reject(error);
});

axios.interceptors.response.use((res) => {
    console.log("返回拦截器", res);
    if (res.data.code != '200') {
        //  alert(res.data.msg);
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    alert("网络异常");
    return Promise.reject(error);
});