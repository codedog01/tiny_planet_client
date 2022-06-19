import axios from '@/server/http'

// 人脸登录
export function faceLogin (data) {
  return axios.post('/account/faceLogin', data)
}
// 密码登录
export function passwordLogin (data) {
  return axios.post('/account/passwordLogin', data)
}
// 手机验证登录
export function telephoneLogin (data) {
  return axios.post('/account/telephoneLogin', data)
}
