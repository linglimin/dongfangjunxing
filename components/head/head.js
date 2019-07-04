const app = getApp()
Component({
    properties: {
        navbarData: {   //navbarData   由父页面传递的数据
            type: Object,
            value: {},
            observer: function (newVal, oldVal) {
                if (!newVal) return
                this.setData({
                    showback: newVal.showback === false ? false : true,
                    showhome: newVal.showhome === false ? false : true,
                    title: newVal.title || '君想软件'
                })
            }
        }
    },
    data: {
        height: '',
        showback: true,
        showhome: true,
        title: '君想软件'
    },
    attached: function () {
        // 定义导航栏的高度   方便对齐
        this.setData({
            height: app.globalData.height
        })
    },
    methods: {
        // 返回上一页面
        _navback() {
            wx.navigateBack()
        },
        //返回到首页
        _backhome() {
            wx.reLaunch({
                url: '/pages/menu/menu'
            })
        }
    }

}) 
