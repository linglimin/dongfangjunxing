// pages/targetTracking/targetTracking.js
import tracking from '../../services/tracking'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: '1',
        navbarData: { title: '目标跟踪' },
        header: [{
            key: "brand",
            value: "品牌"
        },
        {
            key: "category",
            value: "类别"
        },
        {
            key: "gross",
            value: "毛利"
        }],
        targetList: [
            {
                title: "2019-05月销售计划",
                target: "860.00万",
                complete: "563.18万",
                percent: "62",
                type: "circle",
                isReceive: true,
                hasReceive: false,
                showDetail: false,
                detail: [
                    {
                        name: "A: 2019-05月账前毛利",
                        value: "52.12万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "12.3"
                            },
                            {
                                "brand": "格力",
                                "category": "空调",
                                "gross": "14.5"
                            },
                            {
                                "brand": "美的",
                                "category": "空调",
                                "gross": "18.1"
                            },
                            {
                                "brand": "奥克斯",
                                "category": "空调",
                                "gross": "9.4"
                            },
                            {
                                "brand": "TCL",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "B: 2019-05月账后返利",
                        value: "6.06万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "C: 2019-05月账后毛利",
                        value: "58.18万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    }
                ]
            },
            {
                title: "2019-05月奖励目标",
                target: "860.00万",
                complete: "563.18万",
                percent: "56",
                type: "circle",
                isReceive: true,
                hasReceive: true,
                showDetail: false,
                detail: [
                    {
                        name: "A: 2019-05月账前毛利",
                        value: "52.12万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "12.3"
                            },
                            {
                                "brand": "格力",
                                "category": "空调",
                                "gross": "14.5"
                            },
                            {
                                "brand": "美的",
                                "category": "空调",
                                "gross": "18.1"
                            },
                            {
                                "brand": "奥克斯",
                                "category": "空调",
                                "gross": "9.4"
                            },
                            {
                                "brand": "TCL",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "B: 2019-05月账后返利",
                        value: "6.06万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "C: 2019-05月账后毛利",
                        value: "58.18万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    }
                ]
            },
            {
                title: "2019年销售计划",
                target: "1000.00万",
                complete: "563.18万",
                percent: "56",
                type: "circle",
                showDetail: false,
                detail: [
                    {
                        name: "A: 2019-05月账前毛利",
                        value: "52.12万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "B: 2019-05月账后返利",
                        value: "6.06万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "C: 2019-05月账后毛利",
                        value: "58.18万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    }
                ]
            },
            {
                title: "2019-05销售均价目标",
                target: "3200",
                complete: "2739",
                percent: "92",
                type: "segment",
                showDetail: false,
                detail: [
                    {
                        name: "A: 2019-05月账前毛利",
                        value: "52.12万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "B: 2019-05月账后返利",
                        value: "6.06万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "C: 2019-05月账后毛利",
                        value: "58.18万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    }
                ]
            },
            {
                title: "2019-05月账后毛利计划",
                target: "100.00万",
                complete: "58.18万",
                percent: "56",
                type: "circle",
                showDetail: false,
                detail: [
                    {
                        name: "A: 2019-05月账前毛利",
                        value: "52.12万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "B: 2019-05月账后返利",
                        value: "6.06万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "C: 2019-05月账后毛利",
                        value: "58.18万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    }
                ]
            },
            {
                title: "2019年业绩毛利计划",
                target: "1200.00万",
                complete: "428.18万",
                percent: "31",
                type: "circle",
                showDetail: false,
                detail: [
                    {
                        name: "A: 2019-05月账前毛利",
                        value: "52.12万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "B: 2019-05月账后返利",
                        value: "6.06万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "C: 2019-05月账后毛利",
                        value: "58.18万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    }
                ]
            },
            {
                title: "2019-05主推机销量目标",
                target: "120",
                complete: "96",
                percent: "80",
                type: "circle",
                showDetail: false,
                detail: [
                    {
                        name: "A: 2019-05月账前毛利",
                        value: "52.12万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "B: 2019-05月账后返利",
                        value: "6.06万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "C: 2019-05月账后毛利",
                        value: "58.18万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    }
                ]
            },
            {
                title: "2019-05-05至2019-05-25下市机销量目标",
                target: "50",
                complete: "21",
                percent: "42",
                type: "bar",
                showDetail: false,
                detail: [
                    {
                        name: "A: 2019-05月账前毛利",
                        value: "52.12万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "B: 2019-05月账后返利",
                        value: "6.06万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "C: 2019-05月账后毛利",
                        value: "58.18万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    }
                ]
            },
            {
                title: "2019-05-01至2019-05-03五一活动目标",
                target: "300.00万",
                complete: "300.00万",
                percent: "100",
                type: "circle",
                showDetail: false,
                detail: [
                    {
                        name: "A: 2019-05月账前毛利",
                        value: "52.12万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "B: 2019-05月账后返利",
                        value: "6.06万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "C: 2019-05月账后毛利",
                        value: "58.18万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    }
                ]
            },
            {
                title: "2019-02季度周转速度目标",
                target: "12次/年",
                complete: "15次/年",
                percent: "125",
                type: "bar",
                showDetail: false,
                detail: [
                    {
                        name: "A: 2019-05月账前毛利",
                        value: "52.12万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "B: 2019-05月账后返利",
                        value: "6.06万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "C: 2019-05月账后毛利",
                        value: "58.18万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    }
                ]
            },
            {
                title: "2019-05月销售计划",
                target: "860.00万",
                complete: "563.18万",
                percent: "62",
                type: "circle",
                showDetail: false,
                detail: [
                    {
                        name: "A: 2019-05月账前毛利",
                        value: "52.12万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "B: 2019-05月账后返利",
                        value: "6.06万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
                    },
                    {
                        name: "C: 2019-05月账后毛利",
                        value: "58.18万",
                        showTableData: false,
                        tableData: [
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            },
                            {
                                "brand": "海尔",
                                "category": "空调",
                                "gross": "4.2"
                            }
                        ]
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
        let param = {
            page: 1,
            limit: 50
        }
        tracking.listAll(param, function (res) {
            if (res.code === 200) {
               
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
        this.data.targetList[index].showDetail = !this.data.targetList[index].showDetail;
        this.setData({
            targetList: this.data.targetList
        })
    },
    showTableData: function(e) {
        let index = e.currentTarget.dataset.index;
        let secondindex = e.currentTarget.dataset.secondindex;
        this.data.targetList[index].detail[secondindex].showTableData = !this.data.targetList[index].detail[secondindex].showTableData;
        this.setData({
            targetList: this.data.targetList
        })
    }
})