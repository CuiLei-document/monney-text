// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
  lintOnSave: false,
  chainWebpack: config=>{
    const dir =path.resolve(__dirname,'src/assets/icons')
    config.module
        .rule('svg-sprite')
        .test(/\.svg$/)
        .include.add(dir).end() // 只包含 icons 目录
        .use('svg-sprinter-loader-mod').loader('svg-sprite-loader-mod').options({extract:false}).end()
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    config.plugin('svg-sprite').use(require('svg-sprite-loader-mod/plugin'),[{plainSprite:true}])
    config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录
  }
}

