// pages/menu/menu.js
import common from '../../services/common'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navbarData:{
            showback:false,
            showhome:false
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getAuth()
        //if (wx.getStorageSync('thirdCode')) return
        // let param = {
        //     username: 'admin',
        //     password: '111111'
        // }
        // common.login(param, (res) => {
        //     if (res.code === 200) {
        //         this.getAuth()
        //         wx.setStorageSync('id', res.data.userInfo.id)
        //         wx.setStorageSync('name', res.data.userInfo.name)
        //         wx.setStorageSync('account', res.data.userInfo.account)
        //         wx.setStorageSync('roleNames', res.data.userInfo.roleNames[0])
        //         wx.setStorageSync('thirdCode', res.data.userInfo.thirdCode)
        //         wx.setStorageSync('otherId', res.data.userInfo.otherId)
        //     }
        // })
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
    getAuth: function(){
        let param = {
            username: 'admin',
            password: '111111'
        }
        common.auth(param, (res) => {
            if (res.data.userInfo) {
                wx.setStorageSync('token', 'Bearer ' + res.data.token)
                wx.setStorageSync('id', res.data.userInfo.userId)
                wx.setStorageSync('name', res.data.userInfo.name)
                wx.setStorageSync('account', res.data.userInfo.account)
                wx.setStorageSync('roleId', res.data.userInfo.roleId)
                wx.setStorageSync('thirdCode', res.data.userInfo.thirdCode)
                wx.setStorageSync('otherId', res.data.userInfo.otherId)
            }
            
        })
    },
    goMenuPage: function(){
        wx.navigateTo({
            url: '/pages/menu/menu',
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