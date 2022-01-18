import axios from 'axios'
import store from '@/store'
import { JsNewGuid } from '@/config/global'

// 创建 axios 实例
const service = axios.create({
  baseURL: '', // api base_url
  timeout: 1000 * 60 * 3 // 请求超时时间
})

service.defaults.headers.post['Content-Type'] = 'application/json'
service.defaults.transformRequest = [function (data) {
  data = JSON.stringify(data)
  return data
}]
const err = (error) => {
  if (error.data) {
    // do sth
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
  const token = store.state.user.token || JsNewGuid()
  if (config.headers['Content-Type'] === 'multipart/form-data') {
    config.transformRequest = [function (data) {
      // 对 data 进行任意转换处理
      return data
    }]
  }
  if (token) {
    config.headers['Token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  // 处理公共参数
  if (token) {
    config.data['UserId'] = store.state.user.user_id || 0
  }
  return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
  // 未登录
  if (response.data.StatusCode === 2164260879 || response.data.StatusCode === 2164260871) {
    return err(response)
  }
  return response.data
}, err)


export {
  service as axios
}
