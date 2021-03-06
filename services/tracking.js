//获取服务调用工具类，如jq.ajax，调用方式为 ajax(options)
const { ajax } = require('../utils/wxsendRequest').default
// 服务地址配置文件引入
const { sendLink } = require('../host').default

class tracking {
    constructor() { }
    listAll(params, callback) {
        ajax({
            url: sendLink('url1') + '/goalInfoApi/showGoalList',
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
  listDetail(params, callback) {
    ajax({
      url: sendLink('url1') + '/goalInfoApi/showGoalItems',
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
  listDetailInfo(params, callback) {
    ajax({
      url: sendLink('url1') + '/goalInfoApi/showGoalItemGroup',
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
  templateList(params, callback) {
    ajax({
      url: sendLink('url1') + '/goalPlanApi/findPlanlist',
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
  targetSet(params, callback) {
    ajax({
      url: sendLink('url1') + '/goalInfoApi/addPersonGoalInfo',
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

export default new tracking
