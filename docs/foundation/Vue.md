### 01 Vue 概述

Vue：渐进式 JavaScript 框架

#### 基本使用

##### Vue 基本使用步骤：

​ 1.提供标签用于填充数据

​ 2.引入 vue.js 库文件

​ 3.使用 vue 的语法做功能

​ 4.把 vue 提供的数据填充到标签里面

##### Vue.js 之 HelloWorld 细节分析

​ 参数分析：

​ el：元素的挂载位置（值可以是 css 选择器或者 dom 元素）

​ data：模型数据，可以是数组、对象等（值是一个对象）

​ 插值表达式用法

​ 可以将数据填充到 HTML 标签中

​ 插值表达式支持基本的计算操作

#### 模板语法

##### 前端渲染方式

​ 1.原生 js 拼接字符串

​ 2.使用前端模板引擎

​ 3.使用 vue 特有的模板语法

​ 指令：本质是自定义属性；

​ 格式：以 v-开始

​ v-cloak 指令：

1.在 style 里面提供样式

```vue
[v-cloak]{ display:none; }
```

​ 2.在插值表达式所在的标签中添加 v-cloak 指令，需要在 style 中添加 v-cloak

​ 原理：利用样式隐藏内容，在内存中进行值的替换，替换好后再显示最终的值：因为 html 是从上到下解析，会先解析出 div 在替换那个值

##### 事件绑定

​ 1.数据绑定指令

​ `v-text`填充纯文本

​ 效果和`v-cloak`一样，但是相比插值表达式更加简洁，没有闪动问题，推荐，但是还是推荐{{}}

​ `v-html`填充 html 片段

​ 存在安全问题，所以只在本网站内部数据可以使用，来自第三方的数据不可用

​ `v-pre`填充原始信息

​ 显示原始信息，跳过编译过程

​ 2.Vue 如何处理事件

​ v-on 指令用法（事件监听器，通过它调用在 Vue 实例中定义的方法）

​ `<input type= 'button' v-on:click='num++'/>`

​ 简写：`<input type='button'@click='num++'/>`

​ 3.事件函数的调用方式

​ 直接绑定函数名称，事件调用的时候不需要额外传递参数，可以不加括号

​ `<button v-on:click='say()'>Hello</button>`

` <button v-on:click='say'>Hello</button>`

​ 调用函数

​ `<button v-on:click='say()'>Say hi</button>`

​ 区别

​ 1.如果事件直接绑定函数名称，默认传递事件对象作为事件函数的第一个参数

​ 2.如果事件绑定调用函数，那么事件对象必须作为最后一个参数显示传递，事件对象名称必须是$event

​ `<button @click='handle1($event)'>点击1</button>`

​ 4.事件函数参数传递

​ 普通参数和事件对象

​ `<button v-on:click='say("hi",$event)'>Say hi</button>`

​ 5.事件修饰符

​ `.stop`阻止冒泡

​ `<a v-on:click.stop="handle">跳转</a>`

​ `.prevent`阻止默认行为

​ `<a v-on:click.prevent="handle">跳转</a>`

​ 6.按键修饰符

​ `.enter`回车键

​ `<input v-on:keyup.enter='submit'>`

​ `.delete`删除键

​ `<input v-on:keyup.delete='handle'>`

​ 7.自定义按键修饰符

​ 全局`config.keyCodes`对象，名字是自定义的（f1），但是数值是按键对应的`event.keyCode`的值

​ `Vue.config.keyCodes.f1 = 112`

##### 数据绑定

​ `v-once`

​ 如果显示的信息后续不需要修改，使用该方法，提高性能，直接在标签上添加：

```javascript
<h2 v-once>{{ message }}</h2>
```

​ 双向数据绑定

​ `v-model`：其实就是 v-bind 属性绑定和 v-on 事件绑定的结合（实现表单输入和应用状态之间的双向绑定）

​ `<input type='text' v-model='uname'/>` uname 为需要双向绑定的内容，可以借此实现表单提交，与后台交互，这个时候 uname 变动，input 里面的内容也会跟着变

​ `v-model:radio`

```javascript
<div id="app">
    <label for="male" >
      <input type="radio" id="male" value="男" v-model="sex">
      男</label>
    <label for="female">
      <input type="radio" id="female" value="女" v-model="sex">
      女</label>
      <h2>您选择的性别是：{{sex}}</h2>
  </div>

  <script src="../vue.min.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data:{
        // 实现默认选择男，如果不要默认选择，''内不加内容
        sex:'男'
      }
    })
  </script>
```

##### v-model 修饰符

​ 1.懒加载 lazy

​ `v-model.lazy=""`，在按下回车或者鼠标失去焦点的时候进行刷新数据

​ 2.number

​ 双向绑定的数据是数字，让输入框中输入的内容自动转为数字

`这里的age传入的是数字，若是string，input内不展示`

`<input type = "number" v-model.number = "age">`

​ 3.trim

​ 如果输入的首位有很多空格，希望将其去除，trim 可以过滤内容左右两边的空格

​ MVVM 设计思想

​ M(model)

​ V(view)

​ VM(View-Model)

##### 属性绑定

​ 1.动态处理属性

​ `v-bind`指令用法，在 data 里面进行中转存储从数据库拿到的数据，再利用`v-bind`绑定到对应的地方，从而实现动态处理

​ `<a v-bind:href='url'>跳转</a>`

​ 缩写`<a :href='url'>跳转</a>`

##### 样式绑定

​ 1.class 样式处理

​ 对象语法：对象里面可以放键值对，

​ `<div v-bind:class="{key1: value1,key2: value2}"></div>`

​ `<div v-bind:class="{类名1: boolean}"></div>`表示只要布尔值为 true 就会把类名 1 添加到 class 里面

`<div v-bind:class="{active: isActive}"></div>`这里的 active 是类名，isActive 其实是在 data 里面进行控制的，然后把 isActive 引入对象里面

​ 数组语法

​ `<div v-bind:class="[activeClass, errorClass]"></div>`

​ 语法细节：

​ 对象绑定和数组绑定可以结合使用

​ class 绑定的值可以简化操作

​ 默认的 class 在绑定了新的类的时候，默认的 class 会保留。

​ 2.style 样式处理

​ 对象语法

​ `<div v-bind:style="{属性名:属性值,fontSize:fontSize}"></div>`

​ `<div v-bind:style="{color:activeColor,fontSize:fontSize}"></div>`

​ 数组语法

​ `<div v-bind:style="[baseStyles, overridingStyles]"></div>`

##### 计算属性

需要有多个变量进行拼接同时需要多个地方进行显示的时候

计算属性是写在实例的 computed 选项中（和 el、data、methods 并列）

```javascript
const app = new Vue({
  el: '#app',
  data: {
    firstName: '',
    lastName: ''
  },
  // computed: 计算属性（）
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
调用的时候直接使用fullName替代
```

##### 计算属性的 setter 和 getter

计算属性其实包含了 set 和 get，简写成了`conputed：function（）{}`

```javascript
computed: {
    fullName：function(){
    	return this.firstName + ' ' + this.lastName
	}
}
等同于：
computed：{
    set: function(newValue){

    }，
    get: function(){
        return this.firstName + ' ' + this.lastName
    }
}
```

##### 计算属性的缓存（计算属性和调用方法区别）

计算属性会进行缓存，在进行多次调用的时候只要值没有发生改变，就最初的时候计算一次，调用多次并不会重新计算，可以提高性能。调用方法需要每次都执行。

##### 计算属性和侦听属性

通常更好的做法是使用计算属性而不是命令式的 watch 回调。

##### 侦听器

当需要在数据变化时执行异步或者开销较大的操作时适合。

##### 条件判断

`v-if` 如果为真，则执行以下的内容

`v-else`，和 v-if 搭配使用，有个复用的概念，输入框的内容会不会随着条件改变删除：在 v-if 和 v-else 上添加 key+""，若二者的 key 一样，则内容不会删除，若不一样，在条件改变的时候会删除输入框的内容。

**`v-if`和`v-show`：**
**`v-if`的结果为 false 的时候，不会在 dom 中渲染相关内容；**

**`v-show`的结果为 false 的时候，还是会渲染，只是在 style 的里面将 display 改为 none，不显示而已。**

**当需要在显示和隐藏里面频繁切换的时候使用 v-show，只有一次使用 v-if**

##### 循环语句`v-for`

数组直接使用的是`v-for="item in items"`，如果需要索引的话使用`v-for="(index,item) in items"`，会直接展示 index 和 item

对象有三种情况：

1.直接获取值：`v-for="item in info"`

2.获取 key 和 value：`v-for="(value,key) in info"`

3.获取 key 和 value 和 index，`v-for="(value,key,index) in info"`

**for 循环的几种类型**

1.普通的 for 循环

`for (let i = 0; i < this.books.length; i++)`

2.`for (let i in this.books)`,i 拿到的是索引值

3.`for (let item of this.books)`i 拿到的是 books 中的值

##### 组件的 key 属性

在使用`v-for`的时候给对应的元素或者组件添加上 key 值，使之和 item 一一对应，避免插入数据的时候重新赋值。（插入数据的流程：比如 A, B, C, D, E 对应的索引值是 01234，则在 B 后面插入一个 F 的时候，是将 2 对应的 item 变为 F，3 的 item 变为 C 以此类推，有了 key 先配对原始的 key 和 item）

##### `V-for`和`V-if`

不推荐在同一元素上使用，但当处于同一结点的时候，`v-for`的优先级会高于`v-if`，意味着`v-if`将分别重复运行于每个`v-for`循环中。只想为部分项渲染节点就十分有效

##### 数据响应式

对于 Vue 来说，数据可以进行响应式动态变化，其中

`push('aaa')`在最后添加一个元素或者多个

`pop('aaa')`在最后删除一个元素

`shift()`删除数组中的第一个元素

`unshift()`在数组最前面添加元素一个或者多个

`splice()`:可删除、插入、替换元素

删除：第一个参数是开始位置，第二个参数是要删除几个元素，若没有传，则删除开始位置以后的所有元素；

替换：第一个参数是开始位置，第二个参数是要删除几个元素，第三个以后的就是想添加的元素，从而实现替换效果

插入：第一个参数是开始位置，第二个参数写 0，第三个以后就是想添加的元素

`sort()`,

`reverse()`

是可以实现动态响应的。

通过索引值修改数组中的元素是无法实现响应式的

使用`Object.freeze()`，这会阻止修改现有的 property，意味着响应系统无法再追踪变化。

实例属性：有前缀$，以区别于用户定义的属性

##### Vue 过滤器 filters

一个函数，写法和函数一样，使用的时候类似

```javascript
{
  {
    item.price | showPrice(price)
  }
}
```

```javascript
小括号里面放上需要过滤的内容
showPrice(){}
```

##### 高阶函数

**1.filter**

num 是一个数组，`let newNums = nums.filter(function(n){})`

filter 中的回调函数有一个要求：必须返回一个布尔值

当返回 true 的时候，函数内部自动将这次回调的 n 加入到新数组中

当返回 false 的时候，函数内部会过滤掉这次的 n

```javascript
当数组里面有n<100的时候，结果为true，这个时候会返回这个值到newNums里面
let newNums = nums.filter(function(n){
    return n < 100
})
```

**2.map**

拿到一个数组，map 也需要一个回调函数，返回的值会作为该数组的新的值，相当于对某一个元素进行一次变换

```javascript
let new2Nums = newNums.map(function (n) {
  return n * 2
})
```

**3.reduce**

拿到一个数组，对数组中的所有内容进行汇总，相当于递归的意思

```javascript
new2Nums: [20, 40, 80, 100]
let total = new2Nums.reduce(function (preValue, n) {
  return preValue + n
}, 0)
// 解析
// 第一次 preValue:0  n:20
// 第二次 preValue:20 n:40
// 第三次 preValue:60 n:80
// 第四次 preValue:140 n:100
// 最后：240作为返回值
```

#### 组件化（组件的 data 必须是一个函数）

##### 创建步骤

1.创建组件构造器

调用`vue.extend()`方法

2.注册组件

调用`Vue.component()`方法注册组件

3.使用组件

```javascript
// 示例
<body>
    <div id="app">
      // 3.使用组件
      <my-cpn></my-cpn>
    </div>

    <script src="../vue.min.js"></script>
    <script>
      // 1.创建组件构造器对象
      const cpnC = Vue.extend({
        template: `
        <div>
        <h2>我是标题</h2>
        <p>我是内容</p>
        </div>`
      })
      // 2.注册组件(全局组件，意味着可以在多个Vue的实例下使用)
      // Vue.component('my-cpn', cpnC)
      const app = new Vue({
        el: '#app',
        data: {
          message: '你好'
        },
        // 注册组件(局部组件)
        components: {
          // cpn使用组件时的标签名
          cpn: cpnC
        }
      })
    </script>
  </body>

  // 语法糖格式，省去了调用Vue.extend()的步骤，直接使用一个对象来替代
  <body>
    <div id="app">
      <cpn1></cpn1>
      <cpn2></cpn2>
    </div>

    <script src="../vue.min.js"></script>
    <script>
      // 注册全局组件的语法糖
      Vue.component('cpn1', {
        template: `
          <div>
           <h2>我是标题</h2>
            <p>我是内容</p>
          </div>`
      })

      // 2.注册局部组件的语法糖
      const app = new Vue({
        el: '#app',
        data: {
          message: '你好啊'
        },
        components: {
          cpn2: {
            template: `
            <div>
              <h2>我是标题1</h2>
              <p>我是内容</p>
            </div>`
          }
        }
      })
    </script>
  </body>
```

##### 父组件和子组件

要想使用组件，要么在全局注册，要么局部注册，像只注册了父组件，没有注册子组件，这样的话是无法使用子组件

```javascript
	<div id="app">
      <cpn2></cpn2>
    </div>

    <script src="../vue.min.js"></script>
    <script>
      // 创建第一个组件(子组件)
      const cpnC1 = Vue.extend({
        template: `
        <div>
          <h2>我是子组件</h2>
        </div>`
      })

      // 2.创建第二个组件构造器(父组件)
      const cpnC2 = Vue.extend({
        template: `
          <div>
            <h2>我是父组件</h2>
            <cpn1></cpn1>
          </div>`,
        components: {
          cpn1: cpnC1
        }
      })

      const app = new Vue({
        el: '#app',
        data: {
          message: '你好'
        },
        components: {
          cpn2: cpnC2
        }
      })
    </script>

```

##### 组件之间的通信

在开发过程中有一些数据需要从上层传递到下层，比如页面开发的时候，请求到数据，需要下面的子组件进行展示，通过让大组件将数据传给小组件。

可以用两种方式进行，一个是通过 props 向子组件传递数据，一个是通过事件向父组件发送消息。

![组件之间通信](/assets/vue/组件之间通信.png)

props：

值的方式：1.字符串数组，数组中的字符串就是传递时的名称；2.对象，对象可以设置传递时的类型，比如：cmovies:Array,也可以设置默认值和必传值，比如 cmessage：{type:String,default:'aaaa',required:true}；当类型是对象或者数组的时候，默认值必须是一个函数，比如 cmovies:{default(){return [ ]}}

```javascript
<body>
  <div id="app">
    // 通过这种方式获取子组件的cmovies，而cmovies是从父组件movies取得
    //  v-bind不支持驼峰命名，要把驼峰变成以-连接
    <cpn :cmovies="movies"></cpn>
  </div>

  // 子组件的模板，如果没有上述的div这个，获取到的其实就是默认值，就是空的，不会动态获取父组件中的数据
  <template id="cpn">
    <div>
      <p>{{cmovies}}</p>
    </div>
  </template>

  <script src="../vue.min.js"></script>
  <script>
    // 父传子使用props
    // 子组件，里面包含一个模板template，被分离出去了
    const cpn = {
      template:'#cpn',
      props:['cmovies'],
      data(){
        // 需要有return一个实例
        return{}
      }
    }


	// 实例中的数据（父级）
    const app = new Vue({
      el:'#app',
      data:{
        movies:['海王','海贼王','海尔兄弟']
      },
      // 子组件，只不过把cpn分离出去写
      components:{
        cpn
      }
    })
  </script>
</body>
```

`$emit:`

```javascript
	<div id="app">
      <!-- 监听子组件发射出去的事件 -->
      <cpn @item-click="cpnClick"></cpn>
    </div>
    <!-- 子组件模板 -->
    <template id="cpn">
      <div>
        <button v-for="item in categories" @click="btnClick(item)">{{item.name}}</button>
      </div>
    </template>
    <script src="../vue.min.js"></script>
    <script>
      // 子组件
      const cpn = {
        template: '#cpn',
        data() {
          return {
            categories: [
              { id: '111', name: '吃' },
              { id: '222', name: '喝' }
            ]
          }
        },
        methods:{
          btnClick(item){
            // 发射事件
            this.$emit('item-click',item)
          }
        }
      }
      // 父组件
      const app = new Vue({
        el: '#app',
        data: {
          message: '你好'
        },
        components: {
          cpn
        },
        methods:{
          cpnClick(item){
            console.log('cpn',item);
          }
        }
      })
    </script>
```

##### 父子之间的双向绑定问题

先将子组件数据和 input 双向绑定，再通过子组件将 input 数据传给父组件实现 input 和父组件双向绑定

```javascript
<body>
    <div id="app">
      <cpn
        :number1="num1"
        :number2="num2"
        @num1change="num1change"
        @num2change="num2change"
      ></cpn>
    </div>
    <template id="cpn">
      <div>
        <h2>props:{{number1}}</h2>
        <h2>data:{{dnumber1}}</h2>
        <input type="text" :value="dnumber1" @input="num1Input" />
        <h2>props:{{number2}}</h2>
        <h2>data:{{dnumber2}}</h2>
        <input type="text" :value="dnumber2" @input="num2Input" />
      </div>
    </template>
    <script src="../vue.min.js"></script>
    <script>
      const cpn = {
        template: '#cpn',
        props: {
          number1: Number,
          number2: Number
        },
        data() {
          return {
            dnumber1: this.number1,
            dnumber2: this.number2
          }
        },
        methods: {
          num1Input(event) {
            this.dnumber1 = event.target.value
            this.$emit('num1change', this.dnumber1)
          },
          num2Input() {
            this.dnumber2 = event.target.value
            this.$emit('num2change', this.dnumber2)
          }
        }
      }
      const app = new Vue({
        el: '#app',
        data: {
          num1: 1,
          num2: 0
        },
        components: {
          cpn
        },
        methods: {
          num1change(value) {
            this.num1 = parseFloat(value)
          },
          num2change(value) {
            this.num1 = parseFloat(value)
          }
        }
      })
    </script>
  </body>
```

逻辑：![逻辑](/assets/vue/逻辑.png)

父组件创建`num1`和`num2`，通过`props`传给子组件的`number1`和`number2`，并复制一份到 data 中的 dnumber1 和 dnumber2 中，用来和 input 进行绑定，由于未使用双向绑定，使用方法`@input="num1Input"`，进行绑定，并通过$emit 进行向父组件传递方法和数据，从而保证父子数据双向绑定

##### 父子组件的访问方式

父组件访问子组件：`$children`或者`$refs`

​ 1. `this.$children`是一个数组类型，包含所有子组件对象；不建议使用

​ 通过遍历取出所有子组件的 message 状态

2. 为每个子组件添加一个`ref="aaa"`（对象类型，默认是空），这样父组件可以通过 ref 获取到子组件的数据。比如`this.$refs.aaa`获取到 ref 为 aaa 的子组件

子组件访问父组件：使用`$parent`；访问根组件：使用`$root`

#### 编译作用域

##### 插槽

保留共性，提出不一样的，供开发者自己选

先在模块中使用 slot 定义插槽，可以添加默认值，如果添加了默认值，当使用该模块的时候，自动填充默认值；如果添加了自定义的东西，会在插槽的位置添加自定义的东西

```javascript
<div id="app">
      <cpn></cpn>
      <cpn></cpn>
      <cpn><p>测试</p></cpn>
    </div>

    <template id="cpn">
      <div>
        <h2>吃饭</h2>
        <h3>睡觉</h3>
        <!-- 可以给插槽赋予默认值，当cpn未给参数，就把默认值传过去；如果有多个值传入到一个插槽，会全部替换 -->
        <slot><button>按钮</button></slot>
      </div>
    </template>

    <script src="../vue.min.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          message: '测试'
        },
        components: {
          cpn: {
            template: '#cpn'
          }
        }
      })
    </script>
```

##### 具名插槽

需要给插槽 slot 赋予 name，替换的时候需要标上具体使用哪一个具名插槽

```javascript
<body>
  <div id="app">
    <!-- 选择指定的slot进行替换 -->
    <cpn><button slot="center">标题</button></cpn>
  </div>
  <template id="cpn">
    <div>
      <!-- 赋予默认值和name -->
      <slot name="left"><span>左边</span></slot>
      <slot name="center"><span>中间</span></slot>
      <slot name="right"><span>右边</span></slot>
    </div>
  </template>
  <script src="../vue.min.js"></script>
  <script>
    const cpn = {
      template:'#cpn'
    }
    const app = new Vue({
      el:'#app',
      data:{
        message:'你好'
      },
      components:{
        cpn
      }
    })
  </script>
</body>
```

##### 作用域插槽

父组件替换插槽的标签，但是内容由子组件来提供，即父组件去替换子组件插槽中的一些标签，用不同的方式展现出子组件中的内容，内容还是由子组件来决定。

逻辑：子组件定义一个默认的模板，数据来源于子组件，模板可使用 slot 包裹作为插槽，使用:data 获取子组件的数据；当父组件使用这个模板，并想个性化改变的时候，先获取插槽和插槽数据 slot.data 进行展示

```javascript
<div id="app">
      <cpn>
        <template slot-scope="slot">
          <!-- <span v-for="item in slot.data">{{item}} - </span> -->
          <span>{{slot.data.join(' - ')}}</span>
        </template>
      </cpn>
    </div>
    <template id="cpn">
      <div>
        <slot :data="pLanguage">
          <ul>
            <li v-for="item in pLanguage">{{item}}</li>
          </ul>
        </slot>
      </div>
    </template>
    <script src="../vue.min.js"></script>
    <script>
      const cpn = {
        template: '#cpn',
        data() {
          return {
            pLanguage: ['javascript', 'c++', 'c#']
          }
        }
      }
      const app = new Vue({
        el: '#app',
        data: {
          message: '你好'
        },
        components: {
          cpn
        }
      })
    </script>
```

#### 模块化开发

常见的模块化规范：CommonJS，AMD，CMD，ES6 的 Modules

##### ES6 中的模块化开发，模块有自己的作用域

首先先在某一个需要导出的 js 文件中，使用 export 指令导出变量，比如`export let name = 'xxx'`或者使用另一种写法：`let name = 'xxx' export {name}`接着在**html**中对导入的 js 进行`<script src="aaa.js" type="module"></script>`重点是 type="module"，可以将 js 文件作为一个模块处理；在其他的**js**中如果想使用这个 js，直接使用 import {xxx} form "js 文件" （如果我们希望导入某个模块的所有信息，通过*可以导入模块中所有的 export 变量，通常情况下需要给心号起一个别名方便后续使用`import * as info from 'js 文件'`），此时这两个 js 文件都需要导入到 html

某些情况下，想让导入者自己命名，这个时候使用 export default，但是同一个模块只能有一个 export default

```js
// 导出
export default function (argument){
    console.log(argument);
}

// 导入，其中print是自己命名，也就是说默认把导出的default作为print
import print form "js文件";
print('hello');
```

#### webpack 详解

使用 webpack 打包：只需要打包入口文件，会自动处理相关依赖；

`webpack ./src/main.js ./dist/bundle.js`对应的是入口文件和打包后存放的地方

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

console.log(add(20, 30))
console.log(mul(20, 30))
```

##### webpack 配置

1.创建 webpack.config.js 并写入入口和出口

```js
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
```

2.npm init -y 初始化 webpack，即可使用 webpack 快捷打包

3.将 webpack 映射到 npm run build(优先执行本地 webpack)

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
```

##### 加载样式

loader 使用过程：

步骤一：通过 npm 安装需要使用的 loader

需要 npmloader：css-loader 和 style-loader

css-loader 负责加载 css 文件，不负责将 css 嵌入文档中

style-loader 负责将样式添加到 DOM 中

步骤二：在 webpack.config.js 中的 modules 关键字下进行配置

步骤三：在 main.js 中引用 css 文件

**加载图片**

对于使用 url 的图片，会存在打包后访问不到的问题，可以去 webpack.config.js 中加上：publicPath:'dist/'，因为打包后的路径相对于之前改变了

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

在 webpack 中，我们直接使用 babel 对应的 loader 就可以了

安装 npm install --save-dev babel-loader@7 babel-core babel-preset-es2015

配置 webpack.config.js

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

**配置 Vue**

几个问题：

使用 runtime-only 版本的 vue，会报错，修改 wevpack 的配置

el 和 template 模板的关系是什么呢？

el 用于指定 Vue 要管理的 DOM，可以帮助解析其中的指令、事件监听等等。

而如果 Vue 实例中同时指定了 template，那么 template 模板的内容会替换掉挂载的对应 el 的模板。

webpack 打包 vue 的时候会报错，需要安装 vue-loader 和 vue-template-compiler，并且修改 webpack.config.js 文件。并且把 vue-loader 版本改为："vue-loader": "^13.0.0",

##### plugin

loader 主要用于转换某些类型的模型，是一个转换器

plugin 是插件，是对 webpack 本身的扩展，是一个扩展器

### 02 Vue CLI

**安装**

npm install -g @vue/cli

**拉取 vue2 的旧模板**

npm install -g @vue/cli-init

**vue CLI2 初始化项目**

vue init webpack my-project

**vue CLI3 初始化项目**

vue create my-project

**目录结构**

build 和 config 都是配置，

assets：当文件大小小于一定范围就会使用 base64 转换

static：原封不动打包

当遇到安装 vue CLI 报错。可以清除这个文件夹 C:\Users\24331\AppData\Roaming\npm-cache

当开启了 ESlint，想要关闭：

config：index.js：use ESlint 改为 false

runtimecompiler 和 runtimeonly 区别：

后者性能更高、代码量更少；后者会创建函数

```js
render：function（createElement）{
    // 1. createElement('标签',{标签的属性},["内容"])
}
```

#### vue.config.js

使用 vuecli3 的时候，如果需要自己配置，使用 vue.config.js

#### 箭头函数中的 this

箭头函数的 this 引用的是最近作用域中的 this（也就是说，箭头函数没有 this，会作为变量一直向上级词法作用域找，直到找到为止）

```js
const obj = {
  aaa() {
    setTimeout(function () {
      setTimeout(function () {
        console.log(this) // 指向window
      })

      setTimeout(() => {
        console.log(this) // 指向window，因为会找到最近作用域的this，就是上一层的this：window
      })
    })

    setTimeout(() => {
      setTimeout(function () {
        console.log(this) // 指向window（只要是function这种格式就是指向window）
      })

      setTimeout(() => {
        console.log(this) //obj；往上一层找，没有this，在网上一层，找到obj的this
      })
    })
  }
}
```

#### 路由

##### 前端渲染和后端渲染

后端渲染：jsp/php；早期服务器直接渲染好对应的 html 页面返回给客户端进行展示

这种情况下渲染好的页面不需要单独加载任何 js 和 css，可以直接交给浏览器展示，有利于 seo 优化

前端渲染：浏览器中显示的网页中的大部分内容都是由前端写的 js 代码在浏览器中执行，最终渲染出来的页面

先请求静态资源服务器中的 html css js 代码 再去请求数据

前端路由：将每一个 url 和组件内页面内容进行映射

第三阶段：单页面富应用，整个网页只有一个 html 页面，通过前端路由一一映射

#### 前端路由

url 的 hash，即锚点（#），本质是改变 window.location 的 href 属性

我们可以通过直接赋值 location.hash 来改变 href，但是页面不刷新

还有一种改变 url 页面不刷新的方法：history.pushState()和 history.back()，这两个相当于栈结构，可以前进和后退

history.replaceState() 本页面刷新 url，不会记录上一个 url

history.go() 前往某一个页面，go(-1)表示后退；

history.forward() 等价于 go(1)前进一个页面；

#### vue 安装和使用路由

安装：npm install vue-router --save

使用：Vue.use()安装路由功能

第一步：导入路由对象，并且调用 Vue.use(VueRouter)来安装插件

第二步：创建路由实例，传入路由映射配置

第三步：在 Vue 实例中挂载创建的路由实例

使用 vue-router 的步骤

第一步：创建路由组件

第二步：配置路由映射：组件和路径映射关系

第三步：使用路由：通过`<router-link>`（这个相当于 a 标签，可以通过 tag="button"更换）和`<router-view>`

**重定向**

默认把初始页面定义为 home，嵌套路由也可以默认路径

**路由里的 linkActiveClass:'active'**

可以为选中的路由设置样式

**通过代码切换路由**

$router 为 VueRouter 实例

`this.$router.push('/home')`可以把路径切换到 home

**全局获取当前活跃路由下的内容**

$route 为当前 router 跳转对象

`this.$route.param.userId`

内容对应的是 path 后的参数

#### 路由懒加载

不同的路由对应的组件分割成不同代码块，用到的时候在加载

**路由懒加载写法，打包的时候会分成多个 js 文件，实现分开请求：**const Home = ( ) => import('../components/Home.vue')

#### 子路由

子路由不需要加上斜杠，会自动搜索父级路径并拼接

```js
{
	path: '/home',
    component: Home,
    children: [{
      path: 'news',
      component: HomeNews
    }, {
      path: 'message',
      component: HomeMessage
    }]
  },
```

**跨页面传参**

方式 1：params

配置路由格式：/router/:id

传递的方式：在 path 后面跟上对应的值

传递后形成的路径：/router/123，/router/abc

方式 2：query

配置路由格式：/router

传递的方式：对象中使用 query 的 key 作为传递方式

传递后形成的路径：/router？id=123

**组件使用**

约定俗成对单个 vue 文件进行导出后，其他页面需要导入使用时以小写和短线连接的形式

如 HomeNews.vue 文件导出后，其他页面需要导入使用，以
`<home-news>` `</home-news>`的形式

#### 导航守卫

vue-router 提供的导航守卫主要用来监听路由的进入和离开的.

vue-router 提供了 beforeEach（前置守卫）和 afterEach（后置钩子）的钩子函数, 它们会在路由即将改变前和改变后触发.

router 里面的 meta: { title: "档案" }：meta 是源数据，

如果是后置钩子，也就是 afterEach，不需要主动调用 next()函数

#### Keep-alive

Keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染

```js
  // activated和deactivated只有状态被保持，也就是keep-alive的时候才生效
  activated() {
    this.$router.push(this.path);
  },
  // 离开之前记录this.path
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    next();
  },
```

Keep-alive 有两个参数：include 和 exclude

include - 字符串或正则表达，只有匹配的组件会被缓存

exclude - 字符串或正则表达式，任何匹配的组件都不会被缓存

##### 生命周期

生命周期钩子的 this 上下文指向调用它的 vue 实例

created：在实例被创建之后执行代码

mounted：

updated：

![img](https://upload-images.jianshu.io/upload_images/11370083-f279314aef6741db.jpg)

对于在 app.vue 中的 style 引用样式需要加上@，比如@import...

一般的 tabbar 高度是 49px
