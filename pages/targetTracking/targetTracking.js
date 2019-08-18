// pages/targetTracking/targetTracking.js
import tracking from '../../services/tracking'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: '1',
        navbarData: { title: '目标跟踪' },
        header: [],
        targetList: []
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
            page: 1,
            limit: 50
        }
        tracking.listAll(param, (res) => {
            if (res.code === 200) {
              this.setData({
                targetList: res.data.map(item => {
                  item.percent = (item.finishNum / item.goalNum).toFixed(0);
                  item.showDetail = false;
                  item.detail = null;
                  return item
                })
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
    goTrackingSettings: function(){
        wx.navigateTo({
            url: '/pages/targetSettings/targetSettings',
        })
    },
    tab: function(e){
        this.setData({
            active: e.currentTarget.dataset.id
        })
    },
    showDetail: function(e) {
      let index = e.currentTarget.dataset.index;
      let showDetail = !this.data.targetList[index].showDetail;
      if (showDetail && !this.data.targetList[index].detail){
        let param = {
          goalInfoId: this.data.targetList[index].id
        }
        tracking.listDetail(param, (res) => {
          if (res.code === 200) {
            this.data.targetList[index].detail = res.data.map(item => {
              item.showTableData = false;
              item.tableData = null;
              return item;
            });
            this.data.targetList[index].showDetail = showDetail;
            this.setData({
              targetList: this.data.targetList
            })
          }
        })
      }
      else{
        this.data.targetList[index].showDetail = showDetail;
        this.setData({
          targetList: this.data.targetList
        })
      }
    },
    showTableData: function(e) {
      let index = e.currentTarget.dataset.index;
      let secondindex = e.currentTarget.dataset.secondindex;
      let showTableData = !this.data.targetList[index].detail[secondindex].showTableData;
      if (showTableData && !this.data.targetList[index].detail[secondindex].tableData){
        let param = {
          id: this.data.targetList[index].detail[secondindex].id
        }
        tracking.listDetailInfo(param, (res) => {
          if (res.code === 200) {
            this.data.targetList[index].detail[secondindex].showTableData = showTableData;
            this.data.targetList[index].detail[secondindex].tableData = res.data.l_dataItem;
            this.setData({
              targetList: this.data.targetList,
              header: res.data.titles
            })
          }
        })
      }
      else{
        this.data.targetList[index].detail[secondindex].showTableData = showTableData;
        this.setData({
          targetList: this.data.targetList
        })
      }
    }
})