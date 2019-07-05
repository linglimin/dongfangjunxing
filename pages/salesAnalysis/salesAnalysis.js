// pages/salesAnalysis/salesAnalysis.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navbarData: { title: '销售分析' },
        searchTime: '2018-05',
        pickerIndex: 1,
        pickerIndex1: 2,
        pickerIndex2: 3,
        height: '60px',
        isShowSort:false,
        isShowScreen:false,
        pickerArray:['门店','大类','品牌','供应商','销售员'],
        tableList:[
            {
                name:'东风店',
                salesMoney: '100090',
                salesVolume: '9212',
                profit: '81000',
                accountProfit: '88700',
                bareProfit: '69700',
                proportion: '11%'
            },
            {
                name: '南向店',
                salesMoney: '90090',
                salesVolume: '8212',
                profit: '78000',
                accountProfit: '88700',
                bareProfit: '59700',
                proportion: '9%'
            },
            {
                name: '太平店',
                salesMoney: '40090',
                salesVolume: '4212',
                profit: '61000',
                accountProfit: '58700',
                bareProfit: '44700',
                proportion: '6%'
            },
            {
                name: '长安街店',
                salesMoney: '101990',
                salesVolume: '3212',
                profit: '31000',
                accountProfit: '48700',
                bareProfit: '37800',
                proportion: '13%'
            },
            {
                name: '三元桥店',
                salesMoney: '198090',
                salesVolume: '9912',
                profit: '76000',
                accountProfit: '78700',
                bareProfit: '69980',
                proportion: '8%'
            },
            {
                name: '望京店',
                salesMoney: '100090',
                salesVolume: '9212',
                profit: '81000',
                accountProfit: '88700',
                bareProfit: '78300',
                proportion: '4%'
            },
            {
                name: '太平店',
                salesMoney: '40090',
                salesVolume: '4212',
                profit: '61000',
                accountProfit: '58700',
                bareProfit: '57600',
                proportion: '2%'
            },
            {
                name: '长安街店',
                salesMoney: '101990',
                salesVolume: '3212',
                profit: '31000',
                accountProfit: '48700',
                bareProfit: '34700',
                proportion: '3%'
            },
            {
                name: '三元桥店',
                salesMoney: '198090',
                salesVolume: '9912',
                profit: '76000',
                accountProfit: '78700',
                bareProfit: '61700',
                proportion: '3%'
            },
            {
                name: '望京店',
                salesMoney: '100090',
                salesVolume: '9212',
                profit: '81000',
                accountProfit: '88700',
                bareProfit: '61200',
                proportion: '9%'
            },
            {
                name: '太平店',
                salesMoney: '40090',
                salesVolume: '4212',
                profit: '61000',
                accountProfit: '58700',
                bareProfit: '32400',
                proportion: '8%'
            },
            {
                name: '长安街店',
                salesMoney: '101990',
                salesVolume: '3212',
                profit: '31000',
                accountProfit: '48700',
                bareProfit: '35200',
                proportion: '9%'
            },
            {
                name: '三元桥店',
                salesMoney: '198090',
                salesVolume: '9912',
                profit: '76000',
                accountProfit: '78700',
                bareProfit: '54700',
                proportion: '4%'
            },
            {
                name: '望京店',
                salesMoney: '100090',
                salesVolume: '9212',
                profit: '81900',
                accountProfit: '82700',
                bareProfit: '70300',
                proportion: '3%'
            },
            {
                name: '东风店',
                salesMoney: '100090',
                salesVolume: '9212',
                profit: '91000',
                accountProfit: '80700',
                bareProfit: '65300',
                proportion: '6%'
            },
            {
                name: '十里堡店',
                salesMoney: '100090',
                salesVolume: '9212',
                profit: '81900',
                accountProfit: '81100',
                bareProfit: '65300',
                proportion: '2%'
            },
            {
                name: '麦子店店',
                salesMoney: '100090',
                salesVolume: '9212',
                profit: '81900',
                accountProfit: '89700',
                bareProfit: '60300',
                proportion: '3%'
            },
            {
                name: '六里桥店',
                salesMoney: '100090',
                salesVolume: '9212',
                profit: '68000',
                accountProfit: '97700',
                bareProfit: '86300',
                proportion: '9%'
            },
        ],
        sorts:[{
            id:'01',
            name:'销售额',
            chose: 1,
            sort: 'up'
        }, {
            id: '02',
            name: '销量',
            chose: 1,
            sort: 'up'
        }, {
            id: '03',
            name: '毛利',
            chose: 1,
            sort: 'up'
        }, {
            id: '03',
            name: '裸价毛利',
            chose: 1,
            sort: 'up'
        }, {
            id: '04',
            name: '账后毛利',
            chose: 1,
            sort: 'up'
        }, {
            id: '05',
            name: '均价',
            chose: 0,
            sort: 'up'
        }, {
            id: '06',
            name: '比重',
            chose: 1,
            sort: 'up'
        }, {
            id: '07',
            name: '毛利比重',
            chose: 0,
            sort: 'up'
        }],
        stores:[{
            id:'1',
            chose:1,
            name:'东风店'
        }, {
            id: '2',
            chose: 1,
            name: '东风店'
        }, {
            id: '3',
            chose: 0,
            name: '新华店'
        }, {
            id: '4',
            chose: 1,
            name: '百大店'
        }, {
            id: '5',
            chose: 0,
            name: '安丘店'
        }, {
            id: '6',
            chose: 1,
            name: '临朐店'
        }],
        classList:[{
            id: '1',
            chose: 1,
            name: '彩电'
        }, {
            id: '2',
            chose: 1,
            name: '冰箱'
        }, {
            id: '3',
            chose: 0,
            name: '洗衣机'
        }, {
            id: '4',
            chose: 1,
            name: '小家电'
        }, {
            id: '5',
            chose: 0,
            name: '厨卫'
        }, {
            id: '6',
            chose: 1,
            name: '空调'
        }],
        brandList:[{
            id: '1',
            chose: 1,
            name: '海尔'
        }, {
            id: '2',
            chose: 1,
            name: '格力'
        }, {
            id: '3',
            chose: 0,
            name: '美的'
        }, {
            id: '4',
            chose: 1,
            name: '西门子'
        }],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            height: app.globalData.height
        })
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
    submitScreen: function(e){
        let sort = e.currentTarget.dataset.id
        if(e){
            //根据条件筛选
        }else{
            //默认筛选条件
        }
        this.setData({
            isShowScreen: false
        })
    },
    showSort:function(){
        this.setData({
            isShowSort: !this.data.isShowSort
        })
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
    bindPickerChange1: function (e) {
        let i = e.detail.value
        this.setData({
            pickerIndex1: i
        })
    },
    bindPickerChange2: function (e) {
        let i = e.detail.value
        this.setData({
            pickerIndex2: i
        })
    },
    showScreen: function(){
        this.setData({
            isShowScreen: true
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