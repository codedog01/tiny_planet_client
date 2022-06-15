import axios from '@/server/http'
import * as url from '@/server/url'

// 根路径的处理

export const sys = url.sysUrl
// 人脸登录
export function faceLogin (data) {
  return axios.post(sys + '/account/faceLogin', data)
}
// 密码登录
export function passwordLogin (data) {
  return axios.post(sys + '/account/passwordLogin', data)
}
// 手机验证登录
export function telephoneLogin (data) {
  return axios.post(sys + '/account/telephoneLogin', data)
}
