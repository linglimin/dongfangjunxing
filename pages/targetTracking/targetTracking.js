// pages/targetTracking/targetTracking.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: '1',
        navbarData: { title: '目标跟踪' },
        targetList: [
            {
                title: "2019-05月销售计划",
                target: "860.00万",
                complete: "563.18万",
                percent: "130",
                type: "segment",
                isReceive: true,
                hasReceive: false
            },
            {
                title: "2019-05月销售计划",
                target: "860.00万",
                complete: "563.18万",
                percent: "89",
                type: "bar",
                isReceive: true,
                hasReceive: true
            },
            {
                title: "2019-05月销售计划",
                target: "860.00万",
                complete: "563.18万",
                percent: "55",
                type: "circle"
            },
            {
                title: "2019-05月销售计划",
                target: "860.00万",
                complete: "563.18万",
                percent: "62",
                type: "bar"
            },
            {
                title: "2019-05月销售计划",
                target: "860.00万",
                complete: "563.18万",
                percent: "62",
                type: "circle"
            },
            {
                title: "2019-05月销售计划",
                target: "860.00万",
                complete: "563.18万",
                percent: "62",
                type: "bar"
            },
            {
                title: "2019-05月销售计划",
                target: "860.00万",
                complete: "563.18万",
                percent: "62",
                type: "circle"
            },
            {
                title: "2019-05月销售计划",
                target: "860.00万",
                complete: "563.18万",
                percent: "62",
                type: "bar"
            },
            {
                title: "2019-05月销售计划",
                target: "860.00万",
                complete: "563.18万",
                percent: "62",
                type: "circle"
            },
            {
                title: "2019-05月销售计划",
                target: "860.00万",
                complete: "563.18万",
                percent: "62",
                type: "bar"
            },
            {
                title: "2019-05月销售计划",
                target: "860.00万",
                complete: "563.18万",
                percent: "62",
                type: "circle"
            }
        ]
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
    }
})