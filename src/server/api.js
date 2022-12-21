import axios from '@/server/http'

// 密码登录
export function passwordLogin (data) {
  return axios.post('/account/login', data)
}
export function down () {
  return axios.get('/test/test1', {
    responseType: 'blob'
  })
}
