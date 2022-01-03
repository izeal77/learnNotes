<template><h2 id="_1-ajax基础" tabindex="-1"><a class="header-anchor" href="#_1-ajax基础" aria-hidden="true">#</a> 1. Ajax基础</h2>
<p><strong>运行环境</strong>：需要运行在网站环境中才能生效。</p>
<p><strong>Ajax运行原理</strong>：相当于浏览器发送请求和接受响应的代理人，以实现在不影响用户浏览页面的情况下，局部更新页面数据，提高用户体验。</p>
<p><img src="/assets/ajax/ajax.png" alt="ajax"></p>
<p><strong>实现步骤</strong>：</p>
<ol>
<li>创建Ajax对象</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code> var xhr = new XMLHttpRequest();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2">
<li>告诉 Ajax 请求地址以及请求方式</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code> xhr.open('get', 'http://www.example.com');
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3">
<li>发送请求</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code> xhr.send();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4">
<li>获取服务器端给与客户端的响应数据</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code> xhr.onload = function () {
     console.log(xhr.responseText);
 }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>服务器端响应的数据格式</strong></p>
<p>在真实的项目中，服务器端大多数情况下会以 JSON 对象作为响应数据的格式。当客户端拿到响应数据时，要将 JSON 数据和 HTML 字符串进行拼接，然后将拼接的结果展示在页面中。</p>
<p>在 http 请求与响应的过程中，无论是请求参数还是响应内容，如果是对象类型，最终都会被转换为对象字符串进行传输。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code> JSON.parse() // 将 json 字符串转换为json对象
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> promise</h2>
<h3 id="_1-回调函数" tabindex="-1"><a class="header-anchor" href="#_1-回调函数" aria-hidden="true">#</a> 1.回调函数</h3>
<h4 id="同步回调" tabindex="-1"><a class="header-anchor" href="#同步回调" aria-hidden="true">#</a> 同步回调</h4>
<p>立即执行，执行完了才结束</p>
<h4 id="异步回调" tabindex="-1"><a class="header-anchor" href="#异步回调" aria-hidden="true">#</a> 异步回调</h4>
<p>不会立即执行，会放入回调队列中将来执行。</p>
<h3 id="_2-错误" tabindex="-1"><a class="header-anchor" href="#_2-错误" aria-hidden="true">#</a> 2.错误</h3>
<h4 id="_1-错误类型" tabindex="-1"><a class="header-anchor" href="#_1-错误类型" aria-hidden="true">#</a> 1.错误类型</h4>
<h4 id="_2-错误处理" tabindex="-1"><a class="header-anchor" href="#_2-错误处理" aria-hidden="true">#</a> 2.错误处理</h4>
<p>1.捕获错误：try...catch...</p>
<p>2.抛出错误：throw error</p>
<h4 id="_3-错误对象" tabindex="-1"><a class="header-anchor" href="#_3-错误对象" aria-hidden="true">#</a> 3.错误对象</h4>
<p>message属性：错误相关信息</p>
<p>stack属性：函数调用栈记录信息</p>
<h3 id="_3-基本使用" tabindex="-1"><a class="header-anchor" href="#_3-基本使用" aria-hidden="true">#</a> 3.基本使用</h3>
<h4 id="_1-promise是什么" tabindex="-1"><a class="header-anchor" href="#_1-promise是什么" aria-hidden="true">#</a> 1.promise是什么</h4>
<p>抽象表达：promise是js中进行异步编程的新的解决方案</p>
<p>具体表达：</p>
<p>从语法上来说：promise是一个构造函数</p>
<p>从功能上来说：promise对象用来封装一个异步操作并可以获取其结果</p>
<p><img src="https://camo.githubusercontent.com/9c3c916bd4697a5f6cbd0cbafb87e212a8867a3c5a1e01fcd26a704ada7703c7/687474703a2f2f7669706b7368747470312e77697a2e636e2f6b732f73686172652f7265736f75726365732f34396333303832342d646364662d346264302d616632612d3730386634393062343461312f39326238636266622d613437342d343835392d393433622d3630343865396463363666362f696e6465785f66696c65732f39623262393830653239353963346639393663616664646230336661356434642e706e67" alt="img"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//1.创建一个新的promise对象</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span> <span class="token comment">// 执行器函数  同步回调</span>
    <span class="token comment">//2.执行异步操作任务</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> time <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 如果当前时间是偶数就代表成功</span>
        <span class="token comment">//3.1 成功了，调用resolve(value)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>time<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 成功后返回（）里的内容</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'成功的数据'</span><span class="token operator">+</span>time<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token comment">//3.2 失败了，调用reject(reason)</span>
            <span class="token comment">// 失败后返回()里的内容</span>
            <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">'失败的数据'</span><span class="token operator">+</span>time<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span>

p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
    <span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">//接受得到成功的value数据 onResolved</span>
        <span class="token comment">// value是从前面的resolve得到</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'成功的回调'</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token parameter">reason</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">//接受得到失败的reason数据 onRejected</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'失败的回调'</span><span class="token punctuation">,</span>reason<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="优势" tabindex="-1"><a class="header-anchor" href="#优势" aria-hidden="true">#</a> 优势：</h3>
<p>1.指定回调函数的方式更加灵活</p>
<p>以前的回调函数：必须在启动异步任务前指定</p>
<p>promise：启动异步任务=&gt;返回promise对象=&gt;给promise对象绑定回调函数（甚至可以在异步promise发出甚至结束后指定回调函数）</p>
<p>2.支持链式调用，可以解决回调地狱问题</p>
<p>什么是回调地狱？回调函数嵌套调用，外部回调函数异步执行的结果是嵌套的回调函数执行的条件</p>
<p>缺点：不便于阅读、不便于异常处理</p>
<p>解决方案：promise链式调用</p>
<p>终极解决方案：async await</p>
<h3 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h3>
<p>1.Promise构造函数：Promise(excutor){}</p>
<p>​	excutor函数：同步执行（resolve,reject)=&gt;{}</p>
<p>​	resolve函数：内部定义成功时我们调用的函数 value=&gt;{}</p>
<p>​	reject函数：内部定义失败时我们调用的函数 reason=&gt;{}</p>
<p>​	说明：excutor会在promise内部立即同步调用，异步操作在执行器中执行。</p>
<p>2.Promise.prototype.then方法：(onResolve,onRejected)=&gt;{}</p>
<p>​	onResolved函数：成功的回调函数（value）=&gt;{}</p>
<p>​	onRejected函数：失败的回调函数（reason）=&gt;{}</p>
<p>​	说明：指定用于得到成功value的成功回调和用于得到失败reason的失败回调 返回一个新的promise对象</p>
<p>3.Promise.prototype.catch方法：(onRejected)=&gt;{}</p>
<p>​	onRejected函数：失败的回调函数(reason)=&gt;{}</p>
<p>​	说明：then()的语法糖，相当于then(undefined,onRejected)</p>
<p>4.Promise.resolve方法：(value)=&gt;{}</p>
<p>​	value：成功的数据或promise对象</p>
<p>​	说明：返回一个成功/失败的promise对象</p>
<p>5.Promise.reject方法：(reason)=&gt;{}</p>
<p>​	reason：失败的原因</p>
<p>​	说明：返回一个失败的promise对象</p>
<p>6.Promise.all方法：(promises)=&gt;{}</p>
<p>​	promises：包含n个promise的数组</p>
<p>​	说明：返回一个新的promise 只有所有的promise都成功才成功</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 语法糖</span>
<span class="token keyword">const</span> p2 <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="几个关键问题" tabindex="-1"><a class="header-anchor" href="#几个关键问题" aria-hidden="true">#</a> 几个关键问题：</h3>
<h4 id="如何改变promise状态" tabindex="-1"><a class="header-anchor" href="#如何改变promise状态" aria-hidden="true">#</a> 如何改变promise状态</h4>
<p>resolve(value):如果当前是pendding，就会变为resolved</p>
<p>reject(reason):如果当前是pendding就会变为rejected</p>
<p>抛出异常:如果当前是pendding就会变为rejected</p>
<h4 id="一个promise指定多个成功或者失败的回调函数-都会调用吗" tabindex="-1"><a class="header-anchor" href="#一个promise指定多个成功或者失败的回调函数-都会调用吗" aria-hidden="true">#</a> 一个promise指定多个成功或者失败的回调函数，都会调用吗？</h4>
<p>改变为对应状态的时候都会调用</p>
<h4 id="改变promise状态和指定回调函数谁先谁后" tabindex="-1"><a class="header-anchor" href="#改变promise状态和指定回调函数谁先谁后" aria-hidden="true">#</a> 改变promise状态和指定回调函数谁先谁后？</h4>
<p>(1)都有可能，正常情况下是先指定回调再改变状态，但也可以先改状态再指定回调。</p>
<p>(2)如何先改变状态在指定回调</p>
<p>在执行器中直接调用resolve()/reject()</p>
<p>延迟更长的时间才调用then()</p>
<p>(3)什么时候才能得到数据</p>
<p>如果先指定的回调，那当状态发生改变时，回调函数就会调用，得到数据</p>
<p>如果先改变的状态，那当指定回调时，回调函数就会调用，得到数据</p>
<h4 id="promise-then-返回的新promise的结果状态有什么决定" tabindex="-1"><a class="header-anchor" href="#promise-then-返回的新promise的结果状态有什么决定" aria-hidden="true">#</a> promise.then()返回的新promise的结果状态有什么决定？</h4>
<p>简单表达：由then()指定的回调函数执行的结果决定</p>
<p>详细表达：</p>
<p>如果抛异常 新的promise变为rejected，reason为抛出的异常</p>
<p>如果返回的是非promise的任意值，新promise变为resolved，value为返回的值</p>
<p>如果返回的是另一个新的promise 此promise的结果就会成为新的promise的结果</p>
<p><img src="/assets/ajax/promise.png" alt="promise"></p>
<p>会打印onResolved1(),1 onResolved2(),2(2是因为上一个promise返回一个2)</p>
<p><img src="/assets/ajax/promise2.png" alt="promise2"></p>
<h3 id="async和await" tabindex="-1"><a class="header-anchor" href="#async和await" aria-hidden="true">#</a> async和await</h3>
<p>async函数</p>
<p>函数的返回值是promise对象</p>
<p>promise对象的结果由async函数执行的返回值决定</p>
<p>await表达式</p>
<p>await右侧的表达式一般为promise对象 但也可以是其他的值</p>
<p>如果表达式是promise对象，await返回的是promise成功的值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>如果表达式是其他值，直接将此值作为await返回值</p>
<p>await只会得到成功的结果，所以失败了需要通过try...catch捕获</p>
<p>注意</p>
<p>await必须写在async中，但是async可以没有await</p>
<p>如果await的promise失败了就会抛出异常，需要通过try...catch捕获</p>
<h3 id="宏队列与微队列" tabindex="-1"><a class="header-anchor" href="#宏队列与微队列" aria-hidden="true">#</a> 宏队列与微队列</h3>
<p>宏队列：用来保存待执行的宏任务，定时器回调 dom事件回调 ajax回调</p>
<p>微队列：用来保存待执行的宏任务，promise回调 mutation回调</p>
<p>同一种类型的队列有先后次序，不同类型的队列 同步代码先执行，微队列后执行 宏队列最后。每次准备取出第一个宏任务执行前，<strong>都要将所有的微任务</strong>一个一个取出来执行</p>
<h3 id="相关面试题" tabindex="-1"><a class="header-anchor" href="#相关面试题" aria-hidden="true">#</a> 相关面试题</h3>
<p>注意：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

顺序：<span class="token number">25341</span>
首先：console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>和console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>是同步执行的，只有在then后的才是异步执行，放在微队列
接着：console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>先放到微队列，console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>需要等<span class="token number">3</span>放到微队列并且执行才能放到队列里面，因为当前是pending状态。<span class="token number">4</span>放进去执行完才是执行宏队列的<span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 从上往下：374125</span>
<span class="token keyword">const</span> <span class="token function-variable function">first</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 2.同步执行，打印3</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
       <span class="token comment">// 5.同步执行 打印7</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>
        <span class="token comment">// 6.放到宏队列，轮到其执行的时候会打印5，但是下一句的resolve(6)没意义，因为状态只能改变一次</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">//会被忽略，因为状态已经改变过了</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token comment">// 7.改变p的promise状态</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 3.改变first的promise状态</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token comment">// 4.调用p，并且把参数放到微队列，由步骤7打印1</span>
    p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 1.调用first(),走到first里面看一下，由first()走完并且由步骤3，打印2</span>
  <span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token comment">// 同步执行</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/*

*/</span>
<span class="token comment">//172384650</span>
      <span class="token comment">// 4的then执行完要把6的then放到队列里面 但是因为打印4还没执行 只是在队列里 所以5的还不能放到队列里</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'0'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 1.同步</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'2'</span><span class="token punctuation">)</span>
          <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'3'</span><span class="token punctuation">)</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'4'</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'5'</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'6'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'7'</span><span class="token punctuation">)</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'8'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div></template>
