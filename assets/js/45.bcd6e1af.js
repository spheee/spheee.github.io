(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{255:function(a,e,t){"use strict";t.r(e);var r=t(0),n=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack","aria-hidden":"true"}},[a._v("#")]),a._v(" webpack")]),a._v(" "),t("h2",{attrs:{id:"什么是-webpack-，与-grunt-和-gulp-有什么不同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-webpack-，与-grunt-和-gulp-有什么不同","aria-hidden":"true"}},[a._v("#")]),a._v(" 什么是 webpack ，与 grunt 和 gulp 有什么不同")]),a._v(" "),t("p",[a._v("webpack 是一个模块化管理和打包工具")]),a._v(" "),t("ul",[t("li",[a._v("把一切都视为模块：不管是 CSS、JS、Image 还是 HTML 都可以互相引用，通过定义 entry.js，对所有依赖的文件进行跟踪，将各个模块通过 loader 和 plugins 处理，然后打包在一起。")]),a._v(" "),t("li",[a._v("按需加载：打包过程中 Webpack 通过 Code Splitting 功能将文件分为多个 chunks，还可以将重复的部分单独提取出来作为 commonChunk，从而实现按需加载。")])]),a._v(" "),t("p",[a._v("grunt 和 gulp 都是代码构建工具，grunt 依照配置对文件进行操作，gulp 采用代码优于配置的原则对文件流进行操作。")]),a._v(" "),t("h2",{attrs:{id:"什么是-bundle，什么是-chunk，什么是-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-bundle，什么是-chunk，什么是-module","aria-hidden":"true"}},[a._v("#")]),a._v(" 什么是 bundle，什么是 chunk，什么是 module?")]),a._v(" "),t("p",[a._v("bundle 是由 webpack 打包出来的文件。"),t("br"),a._v("\nchunk 是指 webpack 在进行模块的依赖分析的时候，代码分割出来的代码块。"),t("br"),a._v("\nmodule 是开发中的单个模块。")]),a._v(" "),t("h2",{attrs:{id:"webpack-打包原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-打包原理","aria-hidden":"true"}},[a._v("#")]),a._v(" webpack 打包原理")]),a._v(" "),t("p",[a._v("webpack 只是一个打包模块的机制，只是把依赖的模块转化成可以代表这些包的静态文件。"),t("br"),a._v("\nwebpack 就是识别你的入口文件。识别你的模块依赖，来打包你的代码。\n至于你的代码使用的是 commonjs 还是 amd 或者 es6 的 import。webpack 都会对其进行分析。来获取代码的依赖。"),t("br"),a._v("\nwebpack 做的就是分析代码。转换代码，编译代码，输出代码。webpack 本身是一个 node 的模块，所以 webpack.config.js 是以 commonjs 形式书写的(node 中的模块化是 commonjs 规范的)")]),a._v(" "),t("h2",{attrs:{id:"如何提高-webpack-构建速度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何提高-webpack-构建速度","aria-hidden":"true"}},[a._v("#")]),a._v(" 如何提高 webpack 构建速度")]),a._v(" "),t("ul",[t("li",[a._v("通过 externals 配置来提取常用库")]),a._v(" "),t("li",[a._v('babel-loader 开启缓存 不需要打包编译的插件库换成全局"script"标签引入的方式')]),a._v(" "),t("li",[a._v("使用 fast-sass-loader 代替 sass-loader")]),a._v(" "),t("li",[a._v("优化构建时的搜索路径")]),a._v(" "),t("li",[a._v("使用 Tree-shaking 和 Scope Hoisting 来剔除多余代码")]),a._v(" "),t("li",[a._v("利用 DllPlugin 和 DllReferencePlugin 预编译资源模块 通过 DllPlugin 来对那些我们引用但是绝对不会修改的 npm 包来进行预编译，再通过 DllReferencePlugin 将预编译的模块加载进来")]),a._v(" "),t("li",[a._v("使用 Happypack 实现多线程加速编译")])]),a._v(" "),t("h2",{attrs:{id:"webpack-的优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-的优点","aria-hidden":"true"}},[a._v("#")]),a._v(" webpack 的优点")]),a._v(" "),t("ul",[t("li",[a._v("专注于处理模块化的项目，能做到开箱即用，一步到位")]),a._v(" "),t("li",[a._v("可通过 plugin 扩展，完整好用又不失灵活")]),a._v(" "),t("li",[a._v("使用场景不局限于 web 开发")]),a._v(" "),t("li",[a._v("社区庞大活跃，经常引入紧跟时代发展的新特性，能为大多数场景找到已有的开源扩展")]),a._v(" "),t("li",[a._v("良好的开发体验")])]),a._v(" "),t("h2",{attrs:{id:"webpack-的缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-的缺点","aria-hidden":"true"}},[a._v("#")]),a._v(" webpack 的缺点")]),a._v(" "),t("p",[a._v("webpack 的缺点是只能用于采用模块化开发的项目")])])}),[],!1,null,null,null);e.default=n.exports}}]);