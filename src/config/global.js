
export const PROXY_URL = import.meta.env.VITE_PROXY_URL

console.log(import.meta.env)

export const JsNewGuid = () => {
  var curguid = ''
  for (var i = 1; i <= 32; i++) {
    var id = Math.floor(Math.random() * 16.0).toString(16)
    curguid += id
    if ((i === 8) || (i === 12) || (i === 16) || (i === 20)) {
      curguid += '-'
    }
  }
  return curguid
}
