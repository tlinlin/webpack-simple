import axios from "axios";

axios.defaults.timeout = 5000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = "http://localhost:9080";
const config = {
    //  baseURL: "http://localhost:9080",
    transformRequest: [function(data) {
        // Do whatever you want to transform the data
        console.log("this is requset before----------", data)
        return data;
    }],
    transformResponse: [function(data) {
        // Do whatever you want to transform the data
        console.log("this is requset after----------", data)
        return data;
    }],
    validateStatus: function(status) {
        console.log(status, "false is rejected")
        return status >= 200 && status < 300; // default
    },


}
export const getRequest = (url, methods, data = {}) => {
    if (methods === "get") {
        data = { params: data };
    }
    return axios[methods](url, data, config).then((res) => {
        return codeStatus(res);
    }).catch((e) => {
        console.log(`请求错误:${e}`);
    })
}

function codeStatus(res) {
    if (res.status === 200) {
        return res.data;
    } else {
        return {
            code: -404,
            message: res.status,
            data: res.statusText,
        }
    }
}