# commonproject

## Project setup
```
npm install
```
###项目描述
```
这是一个基于vue3.0的单页面的项目的外框架，包含了分环境打包的配置。
具体的开发，测试，生产环境的地址可以在 src/api/baseUrl/settings.js文件中进行单独的设置。
src/api/baseUrl/urls.js文件是请求接口的请求头，这个文件是公用的，可以根据具体情况具体设置。

项目中默认已经安装了less、sass、stylus三种css预处理器，可以根据个人习惯进行使用。

如果是app项目，需要适配各种不同的手机屏幕，这时可以在main.js文件中引入相应的js文件 "./rem/rem.js",然后在开发的时候使用一倍图进行开发。

当然，如果你想使用相应的插件来解决适配问题，你可以使用postcss-pxtorem，npm i postcss-pxtorem --save 安装好之后，要新建".postcssrc.js"文件进行如下配置
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
//  	browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    
    //这是添加的代码
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
```
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production(打包到生产环境)
```
npm run build
```
### Compiles and minifies for 打包到测试环境
```
npm run devbuild
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
