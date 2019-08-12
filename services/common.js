//获取服务调用工具类，如jq.ajax，调用方式为 ajax(options)
const { ajax } = require('../utils/wxsendRequest').default
// 服务地址配置文件引入
const { sendLink } = require('../host').default

class common {
    constructor() { }
    login(params, callback) {
        ajax({
            url: sendLink('url1') + '/user/login',
            type: 'POST',
            data: params,
            success: function (ret) {
                typeof callback == 'function' && callback.call(this, ret)
            },
            error: function (ret) {
                typeof callback == 'function' && callback.call(this, ret)
            }
        })
    }
    auth(params, callback) {
        ajax({
            url: sendLink('url1') + '/gunsApi/auth',
            type: 'POST',
            data: params,
            success: function (ret) {
                typeof callback == 'function' && callback.call(this, ret)
            },
            error: function (ret) {
                typeof callback == 'function' && callback.call(this, ret)
            }
        })
    }
}

export default new common
