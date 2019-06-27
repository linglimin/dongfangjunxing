// pages/targetSettings/targetSettings.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        pickerArray1: ['月销售计划', '季销售计划', '年销售计划', '月业绩毛利计划', '季业绩毛利计划', '年业绩毛利计划', '月奖励目标', '周销售目标', '活动销售目标', '主推机销售目标', '下市机销售目标目标', '销售均价目标', '周转速度目标'],
        pickerIndex1: 1,
        searchTime: '2018-05',
        pickerArray2: ['月', '季', '年', '无'],
        pickerIndex2: 1,
        startTime: '2018-05-01',
        endTime: '2018-06-01',
        tempFilePaths: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        bindPickerChange1(e){
            let value = e.detail.value
            this.setData({
                pickerIndex1: value
            })
        },
        bindPickerChange2(e) {
            let value = e.detail.value
            this.setData({
                pickerIndex2: value
            })
        },
        bindDateChange1(e) {
            let value = e.detail.value
            this.setData({
                searchTime: value
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
        chooseimage(){
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
        }
    }
})
