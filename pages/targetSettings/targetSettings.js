// pages/targetSettings/targetSettings.js
import tracking from '../../services/tracking'
Page({
    /**
     * 组件的初始数据
     */
    data: {
        navbarData: { title: '目标设定' },
        pickerArray1: [],
        pickerIndex1: 0,
        searchTime: '2019',
        searchTimeFormat: '2019',
        pickerArray2: [{
            dateType: '1',
            dateName: '年',
            mode: 'date',
            fields: 'year',
            defaultValue: '2019'
          },
          {
            dateType: '2',
            dateName: '季',
            mode: 'multiSelector',
            fields: 'month',
            range: [[{ name: "2018年", key: "2018" }, { name: "2019年", key: "2019" }], [{ name: "一季度", key: "1" }, { name: "二季度", key: "2" }, { name: "三季度", key: "3" }, { name: "四季度", key: "4" }]],
            defaultValue: [1, 0]
          },
          {
            dateType: '3',
            dateName: '月',
            mode: 'date',
            fields: 'month',
            defaultValue: '2019-01'
          },
          {
            dateType: '4',
            dateName: '周',
            mode: 'date',
            fields: 'year',
            defaultValue: '2019-01'
          },
          {
            dateType: '5',
            dateName: '日',
            mode: 'date',
            fields: 'day',
            defaultValue: '2019-01-01'
          },
          {
            dateType: '6',
            dateName: '自定义',
            mode: 'time',
            fields: 'time'
          }],
        pickerIndex2: 0,
        startTime: '2018-05-01',
        endTime: '2018-06-01',
        tempFilePaths: '',
        goalName: "",
        goalNum: "",
        remark: ""
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let param = {
      otherId: 1,
    }
    tracking.templateList(param, (res) => {
      if (res.code === 200) {
        let obj = {};
        res.data.forEach(item => {
          obj[item.id] = item;
        })
        this.setData({
          pickerArray1: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindPickerChange1(e) {
    let value = e.detail.value
    this.setData({
      pickerIndex1: value
    })
  },
  bindPickerChange2(e) {
    let value = e.detail.value
    let mode = this.data.pickerArray2[value].mode
    let range = this.data.pickerArray2[value].range
    let defaultValue = this.data.pickerArray2[value].defaultValue
    this.setData({
      pickerIndex2: value,
      searchTime: defaultValue,
      searchTimeFormat: mode === 'multiSelector' ? range[0][defaultValue[0]].key + '-' + range[1][defaultValue[1]].key : defaultValue
    })
  },
  bindDateChange1(e) {
    let value = e.detail.value
    let mode = this.data.pickerArray2[this.data.pickerIndex2].mode
    let range = this.data.pickerArray2[this.data.pickerIndex2].range
    this.setData({
        searchTime: value,
        searchTimeFormat: mode === 'multiSelector' ? range[0][value[0]].key + '-' + range[1][value[1]].key : value
    })
  },
  bindDateChange2(e) {
    let value = e.detail.value
    this.setData({
      startTime: value
    })
  },
  bindDateChange3(e) {
    let value = e.detail.value
    this.setData({
      endTime: value
    })
  },
  bindinputName(e) {
    let value = e.detail.value
    this.setData({
      goalName: value
    })
  },
  bindinputNum(e) {
    let value = e.detail.value
    this.setData({
      goalNum: value
    })
  },
  bindinputRemark(e) {
    let value = e.detail.value
    this.setData({
      remark: value
    })
  },
  chooseimage() {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  },
  submit() {
    let param = {
      goalPlanId: this.data.pickerArray1[this.data.pickerIndex1].id,
      planName: this.data.pickerArray1[this.data.pickerIndex1].goalName,
      type: 2,
      dateType: this.data.pickerArray2[this.data.pickerIndex2].dateType,
      dateInfo: this.data.searchTime,
      beginDate: this.data.startTime,
      endDate: this.data.endTime,
      goalName: this.data.goalName,
      goalNum: this.data.goalNum,
      remark: this.data.remark,
      goalImageCode: ""
    }
    tracking.targetSet(param, (res) => {
      if (res.code === 200) {
        wx.navigateTo({
          url: '/pages/targetTracking/targetTracking',
        })
      }
    })
  }
})
