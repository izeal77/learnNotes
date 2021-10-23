## 1. Ajax基础

**运行环境**：需要运行在网站环境中才能生效。

**Ajax运行原理**：相当于浏览器发送请求和接受响应的代理人，以实现在不影响用户浏览页面的情况下，局部更新页面数据，提高用户体验。

![image-20210119144828365](C:\Users\24331\AppData\Roaming\Typora\typora-user-images\image-20210119144828365.png)

**实现步骤**：

1. 创建Ajax对象

```html
 var xhr = new XMLHttpRequest();
```

2. 告诉 Ajax 请求地址以及请求方式

```html
 xhr.open('get', 'http://www.example.com');
```

3. 发送请求

```html
 xhr.send();
```

4. 获取服务器端给与客户端的响应数据

```html
 xhr.onload = function () {
     console.log(xhr.responseText);
 }
```

**服务器端响应的数据格式**

在真实的项目中，服务器端大多数情况下会以 JSON 对象作为响应数据的格式。当客户端拿到响应数据时，要将 JSON 数据和 HTML 字符串进行拼接，然后将拼接的结果展示在页面中。

在 http 请求与响应的过程中，无论是请求参数还是响应内容，如果是对象类型，最终都会被转换为对象字符串进行传输。

```html
 JSON.parse() // 将 json 字符串转换为json对象
```

## promise

### 1.回调函数

#### 同步回调

立即执行，执行完了才结束

#### 异步回调

不会立即执行，会放入回调队列中将来执行。

### 2.错误

#### 1.错误类型

#### 2.错误处理

1.捕获错误：try...catch...

2.抛出错误：throw error

#### 3.错误对象

message属性：错误相关信息

stack属性：函数调用栈记录信息

### 3.基本使用

#### 1.promise是什么

抽象表达：promise是js中进行异步编程的新的解决方案

具体表达：

从语法上来说：promise是一个构造函数

从功能上来说：promise对象用来封装一个异步操作并可以获取其结果

![img](https://camo.githubusercontent.com/9c3c916bd4697a5f6cbd0cbafb87e212a8867a3c5a1e01fcd26a704ada7703c7/687474703a2f2f7669706b7368747470312e77697a2e636e2f6b732f73686172652f7265736f75726365732f34396333303832342d646364662d346264302d616632612d3730386634393062343461312f39326238636266622d613437342d343835392d393433622d3630343865396463363666362f696e6465785f66696c65732f39623262393830653239353963346639393663616664646230336661356434642e706e67)

```js
//1.创建一个新的promise对象
const p = new Promise((resolve,reject) =>{ // 执行器函数  同步回调
    //2.执行异步操作任务
    setTimeout(()=>{
        const time = Date.now() // 如果当前时间是偶数就代表成功
        //3.1 成功了，调用resolve(value)
        if(time%2 == 0){
            // 成功后返回（）里的内容
            resolve('成功的数据'+time)
        }else{
            //3.2 失败了，调用reject(reason)
            // 失败后返回()里的内容
            reject('失败的数据'+time)
        }
    },1000)
    
})

p.then(
    value => {
        //接受得到成功的value数据 onResolved
        // value是从前面的resolve得到
        console.log('成功的回调',value)
    },
	reason => {
        //接受得到失败的reason数据 onRejected
        console.log('失败的回调',reason)
    })
```

### 优势：

1.指定回调函数的方式更加灵活

以前的回调函数：必须在启动异步任务前指定

promise：启动异步任务=>返回promise对象=>给promise对象绑定回调函数（甚至可以在异步promise发出甚至结束后指定回调函数）

2.支持链式调用，可以解决回调地狱问题

什么是回调地狱？回调函数嵌套调用，外部回调函数异步执行的结果是嵌套的回调函数执行的条件

缺点：不便于阅读、不便于异常处理

解决方案：promise链式调用

终极解决方案：async await

### API

1.Promise构造函数：Promise(excutor){}

​	excutor函数：同步执行（resolve,reject)=>{}

​	resolve函数：内部定义成功时我们调用的函数 value=>{}

​	reject函数：内部定义失败时我们调用的函数 reason=>{}

​	说明：excutor会在promise内部立即同步调用，异步操作在执行器中执行。

2.Promise.prototype.then方法：(onResolve,onRejected)=>{}

​	onResolved函数：成功的回调函数（value）=>{}

​	onRejected函数：失败的回调函数（reason）=>{}

​	说明：指定用于得到成功value的成功回调和用于得到失败reason的失败回调 返回一个新的promise对象

3.Promise.prototype.catch方法：(onRejected)=>{}

​	onRejected函数：失败的回调函数(reason)=>{}

​	说明：then()的语法糖，相当于then(undefined,onRejected)

4.Promise.resolve方法：(value)=>{}

​	value：成功的数据或promise对象

​	说明：返回一个成功/失败的promise对象

5.Promise.reject方法：(reason)=>{}

​	reason：失败的原因

​	说明：返回一个失败的promise对象

6.Promise.all方法：(promises)=>{}

​	promises：包含n个promise的数组

​	说明：返回一个新的promise 只有所有的promise都成功才成功

```js
const p1 = new Promise((resolve,reject)=>{
    resolve(1)
})
// 语法糖
const p2 = Promise.resolve(2);
```

### 几个关键问题：

#### 如何改变promise状态

resolve(value):如果当前是pendding，就会变为resolved

reject(reason):如果当前是pendding就会变为rejected

抛出异常:如果当前是pendding就会变为rejected

#### 一个promise指定多个成功或者失败的回调函数，都会调用吗？

改变为对应状态的时候都会调用

#### 改变promise状态和指定回调函数谁先谁后？

(1)都有可能，正常情况下是先指定回调再改变状态，但也可以先改状态再指定回调。

(2)如何先改变状态在指定回调

在执行器中直接调用resolve()/reject()

延迟更长的时间才调用then()

(3)什么时候才能得到数据

如果先指定的回调，那当状态发生改变时，回调函数就会调用，得到数据

如果先改变的状态，那当指定回调时，回调函数就会调用，得到数据

#### promise.then()返回的新promise的结果状态有什么决定？

简单表达：由then()指定的回调函数执行的结果决定

详细表达：

如果抛异常 新的promise变为rejected，reason为抛出的异常

如果返回的是非promise的任意值，新promise变为resolved，value为返回的值

如果返回的是另一个新的promise 此promise的结果就会成为新的promise的结果

![image-20210531225809175](C:\Users\24331\AppData\Roaming\Typora\typora-user-images\image-20210531225809175.png)

会打印onResolved1(),1 onResolved2(),2(2是因为上一个promise返回一个2)

![image-20210531230103710](C:\Users\24331\AppData\Roaming\Typora\typora-user-images\image-20210531230103710.png)

### async和await

async函数

函数的返回值是promise对象

promise对象的结果由async函数执行的返回值决定

await表达式

await右侧的表达式一般为promise对象 但也可以是其他的值

如果表达式是promise对象，await返回的是promise成功的值

```js
function fn2(){
    return Promise.resolve(2)
}

async function fn3(){
    const value = await fn2()
}
// 2
```



如果表达式是其他值，直接将此值作为await返回值

await只会得到成功的结果，所以失败了需要通过try...catch捕获

注意

await必须写在async中，但是async可以没有await

如果await的promise失败了就会抛出异常，需要通过try...catch捕获

### 宏队列与微队列

宏队列：用来保存待执行的宏任务，定时器回调 dom事件回调 ajax回调

微队列：用来保存待执行的宏任务，promise回调 mutation回调

同一种类型的队列有先后次序，不同类型的队列 同步代码先执行，微队列后执行 宏队列最后。每次准备取出第一个宏任务执行前，**都要将所有的微任务**一个一个取出来执行

### 相关面试题

注意：

```js
setTimeout(()=>{
    console.log(1)
},0)
new Promise((resolve)=>{
    console.log(2)
    resolve()
}).then(()=>{
    console.log(3)
}).then(()=>{
    console.log(4)
})
console.log(5)

顺序：25341
首先：console.log(2)和console.log(5)是同步执行的，只有在then后的才是异步执行，放在微队列
接着：console.log(3)先放到微队列，console.log(4)需要等3放到微队列并且执行才能放到队列里面，因为当前是pending状态。4放进去执行完才是执行宏队列的1
```

```js
// 从上往下：374125
const first = () => (new Promise((resolve, reject) => {
    // 2.同步执行，打印3
    console.log(3)
    let p = new Promise((resolve, reject) => {
       // 5.同步执行 打印7
      console.log(7)
        // 6.放到宏队列，轮到其执行的时候会打印5，但是下一句的resolve(6)没意义，因为状态只能改变一次
      setTimeout(() => {
        console.log(5)
        resolve(6) //会被忽略，因为状态已经改变过了
      }, 0)
        // 7.改变p的promise状态
      resolve(1)
    })
    // 3.改变first的promise状态
    resolve(2)
    // 4.调用p，并且把参数放到微队列，由步骤7打印1
    p.then((arg) => {
      console.log(arg)
    })

  }))
// 1.调用first(),走到first里面看一下，由first()走完并且由步骤3，打印2
  first().then((arg) => {
    console.log(arg)
  })
	// 同步执行
  console.log(4)
```

```js
/*

*/
//172384650
      // 4的then执行完要把6的then放到队列里面 但是因为打印4还没执行 只是在队列里 所以5的还不能放到队列里
      setTimeout(() => {
        console.log('0')
      }, 0)
      new Promise((resolve, reject) => {
        // 1.同步
        console.log('1')
        resolve()
      })
        .then(() => {
          console.log('2')
          new Promise((resolve, reject) => {
            console.log('3')
            resolve()
          })
            .then(() => {
              console.log('4')
            })
            .then(() => {
              console.log('5')
            })
        })
        .then(() => {
          console.log('6')
        })

      new Promise((resolve, reject) => {
        console.log('7')
        resolve()
      }).then(() => {
        console.log('8')
      })
```

