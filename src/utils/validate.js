/**
 * Created by zhanghengchang on 19/06/06.
 */
// 校验手机号 +86xxx \(+86)xxx \xxx
export function isMobile (value) {
  const patrn = /(^((\+?86)|(\(\+86\)))?[1][3,4,5,6,7,8,9][0-9]{9}$)|(^[1][3,4,5,6,7,8,9][0-9]{9}$)/
  return patrn.test(value)
}

export function isPass (value) {
  const patrn = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
  return patrn.test(value)
}

// 校验身份证号 15位全数字 18位最后一位可用x代替
export function isCardNo (value) {
  if (!value) return false
  const patrn = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return patrn.test(value)
}


// 校验是否包含特殊字符
export function isSpecial (value) {
  const patrn = /[`~@#$%^&()\s_\-+=<>:{}|\/\\[\]·~@#￥……&——\-+={}|《》]/im
  return patrn.test(value)
}

// 排除空格的特殊字符
export function excludeSpace (val) {
  const reg = /[`~@#$%^&()_\-+=<>:{}|\/\\[\]·~@#￥……&——\-+={}|《》]/im
  return reg.test(val)
}

// 姓名
export function isName (val) {
  console.log(val)
  if (!val || val.length < 2 || val.length > 4) {
    return false
  }
  const reg = /[`~@#$%^&()_\-+=<>:{}|\/\\[\]·~@#￥……&——\-+={}|《》]/im
  return !reg.test(val)
}


// 匹配URL 域名
export function isWebSite (value) {
  const patrn = /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*$/
  return patrn.test(value)
}

// 匹配URL
export function isURL (value) {
  // /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*([\?&]\w+=\w*)*$/
  const patrn = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/
  return patrn.test(value)
}

// 手机号变星星
export function replaceStart (value) {
  if (!value) return
  if ((typeof value) === 'number') {
    value = value.toString()
  }
  return value.replace(/^(\d{3})\d{4}(\d+)/, '$1****$2')
}

// 银行卡号变星星
export function replaceCard (value) {
  if (!value) return
  var reg = /^(\d{4})\d+(\d{4})$/
  return value.replace(reg, '$1 **** **** $2')
}

// 姓名变星星
export function replaceName (value) {
  if (!value) return
  if ((typeof value) === 'number') {
    value = value.toString()
  }
  const str = value.substr(1)
  let repStr = ''
  for (let i = 0; i < str.length; i++) {
    repStr += '*'
  }
  return value.replace(str, repStr)
  // 以下写法不兼容ie 火狐
  // return value.replace(/(\?<=.)./g, '*')
}

// 匹配银行卡号
export function backCard (value) {
  // 长度校验
  var bankcardnumberResult = value
  if (!bankcardnumberResult) return false
  if (bankcardnumberResult === '' || bankcardnumberResult.length < 16 || bankcardnumberResult.length > 19) {
    return false
  }
  return /^(\d{16}|\d{19})$/.test(value)
}

