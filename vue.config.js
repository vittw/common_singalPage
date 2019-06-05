const path = require('path')
//const vuxLoader = require('vux-loader')

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports={
	baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
	outputDir: 'dist',
	// build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
	assetsDir: 'static',
	// 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
	//indexPath: 'index.html',
	lintOnSave: false, //去除eslint语法限制

	// 默认在生成的静态资源文件名中包含hash以控制缓存
	filenameHashing: true,
	configureWebpack: config => {
		//开启此处会造成Chrome中无法调试Vue,如果是正式环境发布，需要恢复
		// externals: {
		// 	"vue": "Vue",
		// 	"vuex": "Vuex",
		// 	"vue-router": "VueRouter",
		// 	"iview": "iview",
		// },
		if (process.env.NODE_ENV == 'development') {
			return {
				devtool: 'source-map',//源代码映射，方便在chrome-Source中找到指定文件，进行调试
				mode: 'development',
			}
		}
	},
	
	//配置 webpack-dev-server 行为
	devServer: {
		open: true, //运行项目后自动打开浏览器
		host: '127.0.0.1', //设置ip地址
		port: 9091, //设置端口号
		https: false,
		//      hotOnly: false,
		proxy: {
			'/xxx': {
				target: 'http://localhost:58367',
				ws: true,
				changeOrigin: true
			},
			'/foo': {
				target: '<other_url>'
			}
		}, // 设置代理
		//      before: app => {}

	},
	//// css相关配置
	css: {
		extract: true,
		sourceMap: false,
		loaderOptions: {
			less: {
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader",
			},
			sass:{
				test: /\.sass$/,
				loaders: ['style', 'css', 'sass']
			}
		},
		modules: false
	},
	//chainWebpack
	chainWebpack: config => {
		//设置路径别名
		config.resolve.alias
			.set('styles', resolve('src/assets/styles'))
			.set('@', resolve('src'))
			.set('components', resolve('src/components'))
	},
}