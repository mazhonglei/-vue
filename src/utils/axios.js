import axios from 'axios'
import qs from 'qs'
axios.defaults.timeout = 8000;                  //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
axios.defaults.baseURL = 'http://119.3.71.137:8081'; //配置接口地址


//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  let token=localStorage.getItem('Token');
  if(config.method  === 'post'){
    if(token){
      config.headers.authorization =token;
    }
      config.data = qs.stringify(config.data);

  }

  return config;
},(error) =>{
  console.log('axios-错误的传参');
  return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
    //对响应数据做些事
  if(res.data.code==='305'){
      localStorage.removeItem('Token');
       this.$router.push({path:"/login"});
     }
    if(!res.data.success){
        return Promise.resolve(res);
    }

    return res;
}, (error) => {
    console.log('axios-网络异常');
    return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}
////返回一个Promise(发送get请求)
export function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params: param})
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}
export default {
    fetchPost,
    fetchGet,
}
