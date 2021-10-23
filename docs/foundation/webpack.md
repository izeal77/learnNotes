### webpack

#### 1.概念

静态模块打包工具

模块化：webpack可以让我们进行模块化开发，自动处理相关依赖关系，

打包：文件压缩合并、预处理等功能

和grunt、gulp区别：

前者更强调流程的自动化，定义一些任务等，核心不是模块化

后者更强调模块化的开发管理

#### 2.使用

以webpack打包commonJS为例，先在各个模块写代码，使用commonJS的module.export{}和const xxx = require('xxx.js')各自依赖，最后用webpack打包好，在index.html中引用这个打包好的文件

只需要打包入口文件，会自动处理相关依赖；

`webpack ./src/main.js ./dist/bundle.js`对应的是入口文件和打包后存放的地方

#### 3.详解

模块化：

```js
// 导出
function add(num1, num2) {
  return num1 + num2
}

function mul(num1, num2) {
  return num1 * num2
}

module.exports = {
  add,
  mul
}

// 导入
const { add, mul } = require('./mathUtils')

console.log(add(20, 30));
console.log(mul(20, 30));
```

##### webpack配置

1.创建webpack.config.js并写入入口和出口

```js
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
}

```

2.npm init -y初始化webpack，即可使用webpack快捷打包

3.将webpack映射到npm run build(优先执行本地webpack)

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
```

##### 加载样式

loader使用过程：

步骤一：通过npm安装需要使用的loader

需要npmloader：css-loader和style-loader

css-loader负责加载css文件，不负责将css嵌入文档中

style-loader负责将样式添加到DOM中

步骤二：在webpack.config.js中的modules关键字下进行配置

步骤三：在main.js中引用css文件

**加载图片**

对于使用url的图片，会存在打包后访问不到的问题，可以去webpack.config.js中加上：publicPath:'dist/'，因为打包后的路径相对于之前改变了

```js
// 修改打包后的图片名字
{
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          },
        ],
      },
```

**es6=>es5**

在webpack中，我们直接使用babel对应的loader就可以了

安装npm install --save-dev babel-loader@7 babel-core babel-preset-es2015

配置webpack.config.js

```js
{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
```

**配置Vue**

几个问题：

使用runtime-only版本的vue，会报错，修改webpack的配置

el和template模板的关系是什么呢？

el用于指定Vue要管理的DOM，可以帮助解析其中的指令、事件监听等等。

而如果Vue实例中同时指定了template，那么template模板的内容会替换掉挂载的对应el的模板。

webpack打包vue的时候会报错，需要安装vue-loader和vue-template-compiler，并且修改webpack.config.js文件。并且把vue-loader版本改为："vue-loader": "^13.0.0",

##### plugin

loader主要用于转换某些类型的模型，是一个转换器

plugin是插件，是对webpack本身的扩展，是一个扩展器
