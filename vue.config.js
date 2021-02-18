const path = require('path')
module.exports = {
    pages: {
        index: {
            entry: 'example/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    // 扩展webpack配置，使 packages 加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include.add(path.resolve(__dirname,'packages')).end()
            .use('babel')
            .loader('babel-loader')
            .tap(option => {
                // 修改他的选项
                return option
            })
    }
}