export function timeFix () {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}

export function welcome () {
  const arr = ['休息一会儿吧', '准备吃什么呢?', '我猜你可能累了']
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

// 获取assets静态资源
export const getAssetsFile = (url) => {
  return new URL(`../assets/${url}`, import.meta.url).href
}

/**
 * 获取input光标位置
 */
export const getPosition = function (element) {
  let cursorPos = 0
  console.log(element.selectionStart)
  if (document.selection) { // IE
    var selectRange = document.selection.createRange()
    selectRange.moveStart('character', -element.value.length)
    cursorPos = selectRange.text.length
  } else if (element.selectionStart || element.selectionStart === '0') {
    cursorPos = element.selectionStart
  }
  return cursorPos
}

/**
 * 取两个数之间的随机值
 */
export const getRandomInt = function (min, max) {
  min = Math.ceil(min * 100)
  max = Math.floor(max * 100)
  const ram = Number(((Math.random() * (max - min) + min) / 100).toFixed(2))
  return ram // 不含最大值，含最小值
}

/**
 * 数组对象去重
 */
export const removeRept = function (arr, key) {
  const obj = {}
  arr = arr.reduce(function (item, next) {
    if (!obj[next[key]]) {
      obj[next[key]] = true
      item.push(next)
    }
    return item
  }, [])
  return arr
}
