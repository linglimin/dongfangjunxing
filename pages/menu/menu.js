// pages/menu/menu.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        menuList: [
            {
                title: "全员目标",
                list: [
                    {
                        title: "目标跟踪",
                        icon: "icon-configuration",
                        url: "/pages/targetTracking/targetTracking"
                    },
                    {
                        title: "目标设定",
                        icon: "icon-Stone-settings",
                        url: "/pages/targetSettings/targetSettings"
                    }
                ]
            },
            {
                title: "经营决策",
                list: [
                    {
                        title: "销售分析",
                        icon: "icon-bar",
                        url: "/pages/salesAnalysis/salesAnalysis"
                    },
                    {
                        title: "透视",
                        icon: "icon-eye_protection",
                        url: ""
                    },
                    {
                        title: "走势",
                        icon: "icon-data",
                        url: ""
                    }
                ]
            },
            {
                title: "个人中心",
                list: [
                    {
                        title: "个人中心",
                        icon: "icon-Stone-person",
                        url: ""
                    },
                    {
                        title: "任务清单",
                        icon: "icon-Stone-clipboard",
                        url: ""
                    },
                    {
                        title: "预警中心",
                        icon: "icon-Stone-alert",
                        url: ""
                    }
                ]
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
    goMenuInfoPage: function(e){
        let url = e.currentTarget.dataset.url;
        wx.navigateTo({
            url: url,
        })
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

    }
})