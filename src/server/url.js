const NODE_ENV = process.env.NODE_ENV
let sysUrl
if (NODE_ENV === 'development') {
  sysUrl = 'sysdev' // 开发
} else {
  switch (NODE_ENV) {
    case 'test': // 测试
      sysUrl = '/systest'
      break
    default:
      sysUrl = '/sysdev'
      break
  }
}
module.exports = {
  sysUrl
}
