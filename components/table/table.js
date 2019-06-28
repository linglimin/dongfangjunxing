// components/table/table.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tableData: {
            type: Array,
            value: []
        },
        header: {
            type: Array,
            value: []// [{key: "", value: ""}]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    attached: function() {
        console.error(this.data.header)
        console.error(this.data.tableData)
    }
})
