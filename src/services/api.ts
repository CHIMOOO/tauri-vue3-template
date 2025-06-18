import axios from 'axios'

// 创建 axios 实例
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，比如添加 token
    // config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response.data
  },
  (error) => {
    // 对响应错误做点什么
    console.error('API Error:', error)
    return Promise.reject(error)
  }
)

// API 方法示例
export const userApi = {
  // 获取用户列表
  getUsers: () => api.get('/users'),
  
  // 获取单个用户
  getUser: (id: number) => api.get(`/users/${id}`),
  
  // 创建用户
  createUser: (data: any) => api.post('/users', data),
  
  // 更新用户
  updateUser: (id: number, data: any) => api.put(`/users/${id}`, data),
  
  // 删除用户
  deleteUser: (id: number) => api.delete(`/users/${id}`)
}

export default api 