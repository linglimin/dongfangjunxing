const app = getApp()
export default {
  ajax(options) {
    var randomSum = function (min, max) {
      return min + Math.round(Math.random() * (max - min));
    }
    var rtime = randomSum(0, 100000)
    console.log('[' + rtime + ']服务请求地址：', options.url)
    var cookies = []
    cookies.push('lang=zh')
    var sso_uid = wx.getStorageSync('sso_uid')
    var sso_tk = wx.getStorageSync('sso_tk')
    var sso_phone = wx.getStorageSync('sso_phone')
    var sso_name = wx.getStorageSync('sso_name')
    let app_version = wx.getStorageSync('app_version')
    let openid = wx.getStorageSync('openid')
    if (openid) cookies.push('openid=' + openid)
    cookies.push('version=' + app_version)
    let carPs = ''
    if (wx.getStorageSync('actChannel')){
      carPs = 'mp-' + app.globalData.scene + '-' + wx.getStorageSync('actChannel')
    }else{
      carPs = ('mp-' + app.globalData.systemInfo.brand || 'wx').substring(0, 20)
    }
    carPs = carPs.substring(0, 50)
    cookies.push('car-ps=' + carPs)
    if (sso_uid) {
      cookies.push('sso_uid=' + sso_uid)
    }
    if (sso_tk) {
      cookies.push('sso_tk=' + sso_tk)
    }
    if (sso_phone) {
      cookies.push('sso_phone=' + sso_phone)
    }
    if (sso_name) {
      cookies.push('sso_name=' + encodeURIComponent(sso_name))
    }
    var _options = {
      url: options.url || '',
      method: options.type || 'GET',
      dataType: options.dataType || 'json',
      data: options.data || {},
      'content-type': options['content-type']
    }
    if (typeof options.error === 'function') {
      _options.fail = options.error
    }
    if (typeof options.success === 'function') {
      _options.success = options.success
    }
    let _wx_option = {
      url: _options.url,
      method: _options.method,
      data: _options.data,
      'content-type': options['content-type'],
      // 数据格式的转换也在这进行处理
      success: function (res) {
        if (res.statusCode == 200) {
          /**
           * -2:token无效，请求从新登录
           * -100:token无效，请求从新登录
           * 备注，目录前能统一处理，需要放在业务层设计跳转到首页后已选择的数据被清空的问题，主要场景，选择完下单数据，接口返回-2执行navigateTo回到首页后，页面回到了没有选信息的默认情况
           */
          // if (res.data.code === -2 || res.data.code === -100) {
          //   wx.navigateTo({ url: '/pages/Home/index?lg=login' })
          // } else {
          //   typeof _options.success == 'function' && _options.success.call(this, res.data)
          // }
          console.log('[' + rtime + ']服务返回数据：', res.data)
          typeof _options.success == 'function' && _options.success.call(this, res.data)
        } else {
          console.warn('[' + rtime + ']服务返回非0code：', res)
          res.data = {
            code: -100200,
            msg: 'the statusCode is ' + res.statusCode + ' for wx.request'
          }
          //console.log('[' + rtime + ']服务返回数据：', res.data)
          typeof _options.success == 'function' && _options.success.call(this, res.data)
        }
      },
      fail: function (err) {
        console.error('[' + rtime + ']服务返回异常：', err)
        var retData = {
          code: -100201,
          msg: '请求失败',
          err: err
        }
        //console.log('[' + rtime + ']服务返回数据：', retData)
        typeof _options.error == 'function' && _options.error.call(this, retData)
      }
    }
    var _header = {
      'cookie': cookies.join(';')
    }
    //post方式只有配置application/x-www-form-urlencoded，上传参数的类型才是form Data
    if (_wx_option.method === "POST") {
      _header['content-type'] = _wx_option['content-type'] || 'application/x-www-form-urlencoded' // 默认值,
    }
    _header['car-vs'] = wx.getStorageSync('app_version') // 默认值,
    _wx_option.header = _header
    console.log('[' + rtime + ']服务请求入参：', _wx_option.data)
    wx.request(_wx_option);
  }
}