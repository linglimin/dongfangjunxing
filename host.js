const server = {
    product: {
        domain1: 'https://monline.01zhuanche.com',
        domain2: 'https://booking.01zhuanche.com',
        url1: 'http://148.70.94.36:9076'
    },
    dev: {
        domain1: 'https://dev-monline.01zhuanche.com',
        domain2: 'https://dev-booking.01zhuanche.com',
        url1: 'http://148.70.94.36:9076'
    },
    test: {
        domain1: 'https://test-monline.01zhuanche.com',
        domain2: 'https://test-booking.01zhuanche.com',
        url1: 'http://148.70.94.36:9076'
    },
    pre: {
        domain1: 'https://pre-monline.01zhuanche.com',
        domain2: 'https://pre-booking.01zhuanche.com',
        url1: 'http://148.70.94.36:9076'
    }
}
export default {
    sendLink(key) {
        return server.dev[key]
        // let app = getApp()
        // if (app.build.env === 'dev-env') {
        //     return server.dev[key]
        // } else if (app.build.env === 'test-env') {
        //     if (!wx.getStorageSync('host')) {
        //         wx.setStorageSync('host', 'test')
        //     } else {
        //         let host = wx.getStorageSync('host')
        //         if (host == 'test') {
        //             return server.test[key]
        //         } else if (host == 'pre') {
        //             return server.pre[key]
        //         } else if (host == 'product') {
        //             return server.product[key]
        //         }
        //     }
        //     return server.test[key]
        // } else if (app.build.env === 'pre-env') {
        //     return server.pre[key]
        // } else if (app.build.env === 'product-env') {
        //     return server.product[key]
        // }
    }
}