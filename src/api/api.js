import {jsonp} from '@/common/js/jsonp'

const common = {
  params: {
    g_tk: 1928093487,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'jsonp'
  },
  option: {
    param: 'jsonpCallback'  // 不配置默认为callback，qq音乐叫jsonpCallback
  },
  okCode: 0
}
const api = {
  recommend: () => {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    const data = Object.assign({}, common.params, {
      platform: 'h5',
      uin: 0,
      needNewCode: 1
    })
    return jsonp(url, data, common.option)
  }
}

export {common, api}