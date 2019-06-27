// pages/salesAnalysis/salesAnalysis.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navbarData: { title: '销售分析' },
        searchTime: '2018-05',
        pickerIndex: 1,
        pickerArray:['门店','大类','品牌','供应商','销售员'],
        tableList:[
            {
                name:'东风店',
                salesMoney: '100090',
                salesVolume: '9212',
                profit: '81000',
                accountProfit: '88700',
                proportion: '11%'
            },
            {
                name: '南向店',
                salesMoney: '90090',
                salesVolume: '8212',
                profit: '78000',
                accountProfit: '88700',
                proportion: '9%'
            },
            {
                name: '太平店',
                salesMoney: '40090',
                salesVolume: '4212',
                profit: '61000',
                accountProfit: '58700',
                proportion: '6%'
            },
            {
                name: '长安街店',
                salesMoney: '101990',
                salesVolume: '3212',
                profit: '31000',
                accountProfit: '48700',
                proportion: '13%'
            },
            {
                name: '三元桥店',
                salesMoney: '198090',
                salesVolume: '9912',
                profit: '76000',
                accountProfit: '78700',
                proportion: '8%'
            },
            {
                name: '望京店',
                salesMoney: '100090',
                salesVolume: '9212',
                profit: '81000',
                accountProfit: '88700',
                proportion: '4%'
            },
            {
                name: '太平店',
                salesMoney: '40090',
                salesVolume: '4212',
                profit: '61000',
                accountProfit: '58700',
                proportion: '2%'
            },
            {
                name: '长安街店',
                salesMoney: '101990',
                salesVolume: '3212',
                profit: '31000',
                accountProfit: '48700',
                proportion: '3%'
            },
            {
                name: '三元桥店',
                salesMoney: '198090',
                salesVolume: '9912',
                profit: '76000',
                accountProfit: '78700',
                proportion: '3%'
            },
            {
                name: '望京店',
                salesMoney: '100090',
                salesVolume: '9212',
                profit: '81000',
                accountProfit: '88700',
                proportion: '9%'
            },
            {
                name: '太平店',
                salesMoney: '40090',
                salesVolume: '4212',
                profit: '61000',
                accountProfit: '58700',
                proportion: '8%'
            },
            {
                name: '长安街店',
                salesMoney: '101990',
                salesVolume: '3212',
                profit: '31000',
                accountProfit: '48700',
                proportion: '9%'
            },
            {
                name: '三元桥店',
                salesMoney: '198090',
                salesVolume: '9912',
                profit: '76000',
                accountProfit: '78700',
                proportion: '4%'
            },
            {
                name: '望京店',
                salesMoney: '100090',
                salesVolume: '9212',
                profit: '81900',
                accountProfit: '82700',
                proportion: '3%'
            },
            {
                name: '东风店',
                salesMoney: '100090',
                salesVolume: '9212',
                profit: '91000',
                accountProfit: '80700',
                proportion: '6%'
            },
            {
                name: '十里堡店',
                salesMoney: '100090',
                salesVolume: '9212',
                profit: '81900',
                accountProfit: '81100',
                proportion: '2%'
            },
            {
                name: '麦子店店',
                salesMoney: '100090',
                salesVolume: '9212',
                profit: '81900',
                accountProfit: '89700',
                proportion: '3%'
            },
            {
                name: '六里桥店',
                salesMoney: '100090',
                salesVolume: '9212',
                profit: '68000',
                accountProfit: '97700',
                proportion: '9%'
            },
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
    bindDateChange: function(e){
        let time = e.detail.value
        this.setData({
            searchTime: time
        })
    },
    bindPickerChange: function(e){
        let i = e.detail.value
        this.setData({
            pickerIndex: i
        })
    },
    search: function(){

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