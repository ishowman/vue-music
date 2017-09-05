import JSONP from 'jsonp'
// data是对象类型的参数，省去自动拼接参数到url的过程
const jsonp = (url, data, option) => new Promise((resolve, reject) => {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  JSONP(url, option, (err, data) => {
    err ? reject(err) : resolve(data)
  })
})
const param = (data) => {
  let params = ''
  for (var i in data) {
    let val = data[i] !== undefined ? data[i] : ''
    params += `&${i}=${encodeURIComponent(val)}`
  }
  return params ? params.substring(1) : ''
}
export {jsonp, param}