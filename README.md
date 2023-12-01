# debugger_demo
# 如何利用source-map调试线上代码
# 1、本地创建一个webpack 项目
    mkdir debugger-demo 
    cd debugger-demo 
    npm init -y 
    npm i webpack webpack-cli

# webpack 配置文件 webpack.config.js ：
@图1
准备一个入口文件index.js
- 执行npx webapck,将代码打包 打包完成后，在 dist 文件夹下面生成了 index.js：
- 手动创建一个 index.html, 然后将 index.js 文件引入进去：@图二
- 往代码里添加一个 throw，让其报错：@图三
- 浏览器中勾选这一项，浏览器就会自动停在报错的地方 @图四
- soucemap 是一个描述文件，调试工具可以通过这个文件，将构建代码映射成构建之前的文件， webpack.config.js中加入source-map 配置 ，如下代码
           devtool: "source-map",
- 打包后的js 末尾会出现 sourcemap 地址
- 如果不想这样暴露sourceMap 我们可以更改配置 devtool: "hidden-source-map",
虽然浏览器看不见了，但开发人员不也看不见了？不用担心，开发人员可以手动添加 sourcemap
鼠标右键点击选择 addSourceMap 可以出现如下框 @图6 地址和index.html 地址相同
这样我们就可以直接看到源文件了
总结：我们主要利用的是webpack sourceMap 映射能力和浏览器添加Source Map 的能力

