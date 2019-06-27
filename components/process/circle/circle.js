// components/process/circle3/circle3.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        diameter: {
            type: Number,
            value: 180
        },
        //线条宽度 默认10
        lineWidth: {
            type: Number,
            value: 12
        },
        //线条底色 默认"#f7cffc"
        bottomLineColor: {
            type: String,
            value: "#507cb6"
        },
        //线条颜色 默认"#f7cffc"
        lineColor: {
            type: String,
            value: "#f7cffc"
        },
        //当前的值 默认45
        value: {
            type: Number,
            value: 45
        },
        //值的颜色 默认"#fff"
        valueColor: {
            type: String,
            value: "#fff"
        },
        fontSize: {
            type: Number,
            value: 40
        },
        //最大值 默认100
        maxValue: {
            type: Number,
            value: 100
        },
        //最小值 默认0
        minValue: {
            type: Number,
            value: 0
        },
        //当前值的后缀名
        suffix: {
            type: null,
            value: "%"
        },
        //从什么角度开始 0~360之间 （12点方向为0,18点方向为180,0点方向为360）
        startDegree: {
            type: Number,
            value: 0
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        leftDeg: -135,
        rightDeg: -135
    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    attached: function(){
        var leftDeg = 0;
        var rightDeg = 0;
        var deg = 3.6 * this.data.value - 135;
        rightDeg = deg <= 45 ? deg : 45;
        leftDeg = deg <= 45 ? -135 : -135 + deg - 45;
        this.setData({
            leftDeg: leftDeg,
            rightDeg: rightDeg
        })
    }
})
