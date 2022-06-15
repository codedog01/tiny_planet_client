import CryptoJS from 'crypto-js'
const key = CryptoJS.enc.Utf8.parse('cBssbHB3ZA==HKXT')
/**
 * [encrypt 加密]
 */
export function encrypt (content) {
  const encryptedData = CryptoJS.AES.encrypt(content, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  return encryptedData.toString()
}
/**
 * [decrypt 解密]
 */
export function decrypt (content) {
  const encryptedHexStr = CryptoJS.enc.Base64.parse(content)
  const encryptedBase64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  const decryptedData = CryptoJS.AES.decrypt(encryptedBase64Str, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  return decryptedData.toString(CryptoJS.enc.Utf8)
}
