const {override,fixBabelImports,addLessLoader} = require('customize-cra')

module.exports = override(
    // 针对antd实现按需打包(使用babel-plugin-importnat)
    fixBabelImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        style:true,
    }),
    addLessLoader({
        lessOptions:{
          javascriptEnabled:true,
          modifyVars:{'@primary-color':'#7F97DF'},
        }
    })
)