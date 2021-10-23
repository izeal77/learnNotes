<template><h3 id="_01-vue-概述" tabindex="-1"><a class="header-anchor" href="#_01-vue-概述" aria-hidden="true">#</a> 01 Vue 概述</h3>
<p>Vue：渐进式 JavaScript 框架</p>
<h4 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h4>
<h5 id="vue-基本使用步骤" tabindex="-1"><a class="header-anchor" href="#vue-基本使用步骤" aria-hidden="true">#</a> Vue 基本使用步骤：</h5>
<p>​ 1.提供标签用于填充数据</p>
<p>​ 2.引入 vue.js 库文件</p>
<p>​ 3.使用 vue 的语法做功能</p>
<p>​ 4.把 vue 提供的数据填充到标签里面</p>
<h5 id="vue-js-之-helloworld-细节分析" tabindex="-1"><a class="header-anchor" href="#vue-js-之-helloworld-细节分析" aria-hidden="true">#</a> Vue.js 之 HelloWorld 细节分析</h5>
<p>​ 参数分析：</p>
<p>​ el：元素的挂载位置（值可以是 css 选择器或者 dom 元素）</p>
<p>​ data：模型数据，可以是数组、对象等（值是一个对象）</p>
<p>​ 插值表达式用法</p>
<p>​ 可以将数据填充到 HTML 标签中</p>
<p>​ 插值表达式支持基本的计算操作</p>
<h4 id="模板语法" tabindex="-1"><a class="header-anchor" href="#模板语法" aria-hidden="true">#</a> 模板语法</h4>
<h5 id="前端渲染方式" tabindex="-1"><a class="header-anchor" href="#前端渲染方式" aria-hidden="true">#</a> 前端渲染方式</h5>
<p>​ 1.原生 js 拼接字符串</p>
<p>​ 2.使用前端模板引擎</p>
<p>​ 3.使用 vue 特有的模板语法</p>
<p>​ 指令：本质是自定义属性；</p>
<p>​ 格式：以 v-开始</p>
<p>​ v-cloak 指令：</p>
<p>1.在 style 里面提供样式</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>[v-cloak]{ display:none; }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>​ 2.在插值表达式所在的标签中添加 v-cloak 指令，需要在 style 中添加 v-cloak</p>
<p>​ 原理：利用样式隐藏内容，在内存中进行值的替换，替换好后再显示最终的值：因为 html 是从上到下解析，会先解析出 div 在替换那个值</p>
<h5 id="事件绑定" tabindex="-1"><a class="header-anchor" href="#事件绑定" aria-hidden="true">#</a> 事件绑定</h5>
<p>​ 1.数据绑定指令</p>
<p>​ <code>v-text</code>填充纯文本</p>
<p>​ 效果和<code>v-cloak</code>一样，但是相比插值表达式更加简洁，没有闪动问题，推荐，但是还是推荐{{}}</p>
<p>​ <code>v-html</code>填充 html 片段</p>
<p>​ 存在安全问题，所以只在本网站内部数据可以使用，来自第三方的数据不可用</p>
<p>​ <code>v-pre</code>填充原始信息</p>
<p>​ 显示原始信息，跳过编译过程</p>
<p>​ 2.Vue 如何处理事件</p>
<p>​ v-on 指令用法（事件监听器，通过它调用在 Vue 实例中定义的方法）</p>
<p>​ <code>&lt;input type= 'button' v-on:click='num++'/&gt;</code></p>
<p>​ 简写：<code>&lt;input type='button'@click='num++'/&gt;</code></p>
<p>​ 3.事件函数的调用方式</p>
<p>​ 直接绑定函数名称，事件调用的时候不需要额外传递参数，可以不加括号</p>
<p>​ <code>&lt;button v-on:click='say()'&gt;Hello&lt;/button&gt;</code></p>
<p><code> &lt;button v-on:click='say'&gt;Hello&lt;/button&gt;</code></p>
<p>​ 调用函数</p>
<p>​ <code>&lt;button v-on:click='say()'&gt;Say hi&lt;/button&gt;</code></p>
<p>​ 区别</p>
<p>​ 1.如果事件直接绑定函数名称，默认传递事件对象作为事件函数的第一个参数</p>
<p>​ 2.如果事件绑定调用函数，那么事件对象必须作为最后一个参数显示传递，事件对象名称必须是$event</p>
<p>​ <code>&lt;button @click='handle1($event)'&gt;点击1&lt;/button&gt;</code></p>
<p>​ 4.事件函数参数传递</p>
<p>​ 普通参数和事件对象</p>
<p>​ <code>&lt;button v-on:click='say(&quot;hi&quot;,$event)'&gt;Say hi&lt;/button&gt;</code></p>
<p>​ 5.事件修饰符</p>
<p>​ <code>.stop</code>阻止冒泡</p>
<p>​ <code>&lt;a v-on:click.stop=&quot;handle&quot;&gt;跳转&lt;/a&gt;</code></p>
<p>​ <code>.prevent</code>阻止默认行为</p>
<p>​ <code>&lt;a v-on:click.prevent=&quot;handle&quot;&gt;跳转&lt;/a&gt;</code></p>
<p>​ 6.按键修饰符</p>
<p>​ <code>.enter</code>回车键</p>
<p>​ <code>&lt;input v-on:keyup.enter='submit'&gt;</code></p>
<p>​ <code>.delete</code>删除键</p>
<p>​ <code>&lt;input v-on:keyup.delete='handle'&gt;</code></p>
<p>​ 7.自定义按键修饰符</p>
<p>​ 全局<code>config.keyCodes</code>对象，名字是自定义的（f1），但是数值是按键对应的<code>event.keyCode</code>的值</p>
<p>​ <code>Vue.config.keyCodes.f1 = 112</code></p>
<h5 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定" aria-hidden="true">#</a> 数据绑定</h5>
<p>​ <code>v-once</code></p>
<p>​ 如果显示的信息后续不需要修改，使用该方法，提高性能，直接在标签上添加：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>h2 v<span class="token operator">-</span>once<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> message <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>​ 双向数据绑定</p>
<p>​ <code>v-model</code>：其实就是 v-bind 属性绑定和 v-on 事件绑定的结合（实现表单输入和应用状态之间的双向绑定）</p>
<p>​ <code>&lt;input type='text' v-model='uname'/&gt;</code> uname 为需要双向绑定的内容，可以借此实现表单提交，与后台交互，这个时候 uname 变动，input 里面的内容也会跟着变</p>
<p>​ <code>v-model:radio</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"male"</span> <span class="token operator">></span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"radio"</span> id<span class="token operator">=</span><span class="token string">"male"</span> value<span class="token operator">=</span><span class="token string">"男"</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"sex"</span><span class="token operator">></span>
      男<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
    <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"female"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"radio"</span> id<span class="token operator">=</span><span class="token string">"female"</span> value<span class="token operator">=</span><span class="token string">"女"</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"sex"</span><span class="token operator">></span>
      女<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>您选择的性别是：<span class="token punctuation">{</span><span class="token punctuation">{</span>sex<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"../vue.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      el<span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">// 实现默认选择男，如果不要默认选择，''内不加内容</span>
        sex<span class="token operator">:</span><span class="token string">'男'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h5 id="v-model-修饰符" tabindex="-1"><a class="header-anchor" href="#v-model-修饰符" aria-hidden="true">#</a> v-model 修饰符</h5>
<p>​ 1.懒加载 lazy</p>
<p>​ <code>v-model.lazy=&quot;&quot;</code>，在按下回车或者鼠标失去焦点的时候进行刷新数据</p>
<p>​ 2.number</p>
<p>​ 双向绑定的数据是数字，让输入框中输入的内容自动转为数字</p>
<p><code>这里的age传入的是数字，若是string，input内不展示</code></p>
<p><code>&lt;input type = &quot;number&quot; v-model.number = &quot;age&quot;&gt;</code></p>
<p>​ 3.trim</p>
<p>​ 如果输入的首位有很多空格，希望将其去除，trim 可以过滤内容左右两边的空格</p>
<p>​ MVVM 设计思想</p>
<p>​ M(model)</p>
<p>​ V(view)</p>
<p>​ VM(View-Model)</p>
<h5 id="属性绑定" tabindex="-1"><a class="header-anchor" href="#属性绑定" aria-hidden="true">#</a> 属性绑定</h5>
<p>​ 1.动态处理属性</p>
<p>​ <code>v-bind</code>指令用法，在 data 里面进行中转存储从数据库拿到的数据，再利用<code>v-bind</code>绑定到对应的地方，从而实现动态处理</p>
<p>​ <code>&lt;a v-bind:href='url'&gt;跳转&lt;/a&gt;</code></p>
<p>​ 缩写<code>&lt;a :href='url'&gt;跳转&lt;/a&gt;</code></p>
<h5 id="样式绑定" tabindex="-1"><a class="header-anchor" href="#样式绑定" aria-hidden="true">#</a> 样式绑定</h5>
<p>​ 1.class 样式处理</p>
<p>​ 对象语法：对象里面可以放键值对，</p>
<p>​ <code>&lt;div v-bind:class=&quot;{key1: value1,key2: value2}&quot;&gt;&lt;/div&gt;</code></p>
<p>​ <code>&lt;div v-bind:class=&quot;{类名1: boolean}&quot;&gt;&lt;/div&gt;</code>表示只要布尔值为 true 就会把类名 1 添加到 class 里面</p>
<p><code>&lt;div v-bind:class=&quot;{active: isActive}&quot;&gt;&lt;/div&gt;</code>这里的 active 是类名，isActive 其实是在 data 里面进行控制的，然后把 isActive 引入对象里面</p>
<p>​ 数组语法</p>
<p>​ <code>&lt;div v-bind:class=&quot;[activeClass, errorClass]&quot;&gt;&lt;/div&gt;</code></p>
<p>​ 语法细节：</p>
<p>​ 对象绑定和数组绑定可以结合使用</p>
<p>​ class 绑定的值可以简化操作</p>
<p>​ 默认的 class 在绑定了新的类的时候，默认的 class 会保留。</p>
<p>​ 2.style 样式处理</p>
<p>​ 对象语法</p>
<p>​ <code>&lt;div v-bind:style=&quot;{属性名:属性值,fontSize:fontSize}&quot;&gt;&lt;/div&gt;</code></p>
<p>​ <code>&lt;div v-bind:style=&quot;{color:activeColor,fontSize:fontSize}&quot;&gt;&lt;/div&gt;</code></p>
<p>​ 数组语法</p>
<p>​ <code>&lt;div v-bind:style=&quot;[baseStyles, overridingStyles]&quot;&gt;&lt;/div&gt;</code></p>
<h5 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性" aria-hidden="true">#</a> 计算属性</h5>
<p>需要有多个变量进行拼接同时需要多个地方进行显示的时候</p>
<p>计算属性是写在实例的 computed 选项中（和 el、data、methods 并列）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  el<span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    firstName<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    lastName<span class="token operator">:</span> <span class="token string">''</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// computed: 计算属性（）</span>
  computed<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">fullName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
调用的时候直接使用fullName替代
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h5 id="计算属性的-setter-和-getter" tabindex="-1"><a class="header-anchor" href="#计算属性的-setter-和-getter" aria-hidden="true">#</a> 计算属性的 setter 和 getter</h5>
<p>计算属性其实包含了 set 和 get，简写成了<code>conputed：function（）{}</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>computed<span class="token operator">:</span> <span class="token punctuation">{</span>
    fullName：<span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
等同于：
computed：<span class="token punctuation">{</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>，
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h5 id="计算属性的缓存-计算属性和调用方法区别" tabindex="-1"><a class="header-anchor" href="#计算属性的缓存-计算属性和调用方法区别" aria-hidden="true">#</a> 计算属性的缓存（计算属性和调用方法区别）</h5>
<p>计算属性会进行缓存，在进行多次调用的时候只要值没有发生改变，就最初的时候计算一次，调用多次并不会重新计算，可以提高性能。调用方法需要每次都执行。</p>
<h5 id="计算属性和侦听属性" tabindex="-1"><a class="header-anchor" href="#计算属性和侦听属性" aria-hidden="true">#</a> 计算属性和侦听属性</h5>
<p>通常更好的做法是使用计算属性而不是命令式的 watch 回调。</p>
<h5 id="侦听器" tabindex="-1"><a class="header-anchor" href="#侦听器" aria-hidden="true">#</a> 侦听器</h5>
<p>当需要在数据变化时执行异步或者开销较大的操作时适合。</p>
<h5 id="条件判断" tabindex="-1"><a class="header-anchor" href="#条件判断" aria-hidden="true">#</a> 条件判断</h5>
<p><code>v-if</code> 如果为真，则执行以下的内容</p>
<p><code>v-else</code>，和 v-if 搭配使用，有个复用的概念，输入框的内容会不会随着条件改变删除：在 v-if 和 v-else 上添加 key+&quot;&quot;，若二者的 key 一样，则内容不会删除，若不一样，在条件改变的时候会删除输入框的内容。</p>
<p><strong><code>v-if</code>和<code>v-show</code>：</strong>
<strong><code>v-if</code>的结果为 false 的时候，不会在 dom 中渲染相关内容；</strong></p>
<p><strong><code>v-show</code>的结果为 false 的时候，还是会渲染，只是在 style 的里面将 display 改为 none，不显示而已。</strong></p>
<p><strong>当需要在显示和隐藏里面频繁切换的时候使用 v-show，只有一次使用 v-if</strong></p>
<h5 id="循环语句v-for" tabindex="-1"><a class="header-anchor" href="#循环语句v-for" aria-hidden="true">#</a> 循环语句<code>v-for</code></h5>
<p>数组直接使用的是<code>v-for=&quot;item in items&quot;</code>，如果需要索引的话使用<code>v-for=&quot;(index,item) in items&quot;</code>，会直接展示 index 和 item</p>
<p>对象有三种情况：</p>
<p>1.直接获取值：<code>v-for=&quot;item in info&quot;</code></p>
<p>2.获取 key 和 value：<code>v-for=&quot;(value,key) in info&quot;</code></p>
<p>3.获取 key 和 value 和 index，<code>v-for=&quot;(value,key,index) in info&quot;</code></p>
<p><strong>for 循环的几种类型</strong></p>
<p>1.普通的 for 循环</p>
<p><code>for (let i = 0; i &lt; this.books.length; i++)</code></p>
<p>2.<code>for (let i in this.books)</code>,i 拿到的是索引值</p>
<p>3.<code>for (let item of this.books)</code>i 拿到的是 books 中的值</p>
<h5 id="组件的-key-属性" tabindex="-1"><a class="header-anchor" href="#组件的-key-属性" aria-hidden="true">#</a> 组件的 key 属性</h5>
<p>在使用<code>v-for</code>的时候给对应的元素或者组件添加上 key 值，使之和 item 一一对应，避免插入数据的时候重新赋值。（插入数据的流程：比如 A, B, C, D, E 对应的索引值是 01234，则在 B 后面插入一个 F 的时候，是将 2 对应的 item 变为 F，3 的 item 变为 C 以此类推，有了 key 先配对原始的 key 和 item）</p>
<h5 id="v-for和v-if" tabindex="-1"><a class="header-anchor" href="#v-for和v-if" aria-hidden="true">#</a> <code>V-for</code>和<code>V-if</code></h5>
<p>不推荐在同一元素上使用，但当处于同一结点的时候，<code>v-for</code>的优先级会高于<code>v-if</code>，意味着<code>v-if</code>将分别重复运行于每个<code>v-for</code>循环中。只想为部分项渲染节点就十分有效</p>
<h5 id="数据响应式" tabindex="-1"><a class="header-anchor" href="#数据响应式" aria-hidden="true">#</a> 数据响应式</h5>
<p>对于 Vue 来说，数据可以进行响应式动态变化，其中</p>
<p><code>push('aaa')</code>在最后添加一个元素或者多个</p>
<p><code>pop('aaa')</code>在最后删除一个元素</p>
<p><code>shift()</code>删除数组中的第一个元素</p>
<p><code>unshift()</code>在数组最前面添加元素一个或者多个</p>
<p><code>splice()</code>:可删除、插入、替换元素</p>
<p>删除：第一个参数是开始位置，第二个参数是要删除几个元素，若没有传，则删除开始位置以后的所有元素；</p>
<p>替换：第一个参数是开始位置，第二个参数是要删除几个元素，第三个以后的就是想添加的元素，从而实现替换效果</p>
<p>插入：第一个参数是开始位置，第二个参数写 0，第三个以后就是想添加的元素</p>
<p><code>sort()</code>,</p>
<p><code>reverse()</code></p>
<p>是可以实现动态响应的。</p>
<p>通过索引值修改数组中的元素是无法实现响应式的</p>
<p>使用<code>Object.freeze()</code>，这会阻止修改现有的 property，意味着响应系统无法再追踪变化。</p>
<p>实例属性：有前缀$，以区别于用户定义的属性</p>
<h5 id="vue-过滤器-filters" tabindex="-1"><a class="header-anchor" href="#vue-过滤器-filters" aria-hidden="true">#</a> Vue 过滤器 filters</h5>
<p>一个函数，写法和函数一样，使用的时候类似</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    item<span class="token punctuation">.</span>price <span class="token operator">|</span> <span class="token function">showPrice</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>小括号里面放上需要过滤的内容
<span class="token function">showPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="高阶函数" tabindex="-1"><a class="header-anchor" href="#高阶函数" aria-hidden="true">#</a> 高阶函数</h5>
<p><strong>1.filter</strong></p>
<p>num 是一个数组，<code>let newNums = nums.filter(function(n){})</code></p>
<p>filter 中的回调函数有一个要求：必须返回一个布尔值</p>
<p>当返回 true 的时候，函数内部自动将这次回调的 n 加入到新数组中</p>
<p>当返回 false 的时候，函数内部会过滤掉这次的 n</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>当数组里面有n<span class="token operator">&lt;</span><span class="token number">100</span>的时候，结果为<span class="token boolean">true</span>，这个时候会返回这个值到newNums里面
<span class="token keyword">let</span> newNums <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> n <span class="token operator">&lt;</span> <span class="token number">100</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>2.map</strong></p>
<p>拿到一个数组，map 也需要一个回调函数，返回的值会作为该数组的新的值，相当于对某一个元素进行一次变换</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> new2Nums <span class="token operator">=</span> newNums<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>3.reduce</strong></p>
<p>拿到一个数组，对数组中的所有内容进行汇总，相当于递归的意思</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>new2Nums<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> total <span class="token operator">=</span> new2Nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">preValue<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> preValue <span class="token operator">+</span> n
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// 解析</span>
<span class="token comment">// 第一次 preValue:0  n:20</span>
<span class="token comment">// 第二次 preValue:20 n:40</span>
<span class="token comment">// 第三次 preValue:60 n:80</span>
<span class="token comment">// 第四次 preValue:140 n:100</span>
<span class="token comment">// 最后：240作为返回值</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="组件化-组件的-data-必须是一个函数" tabindex="-1"><a class="header-anchor" href="#组件化-组件的-data-必须是一个函数" aria-hidden="true">#</a> 组件化（组件的 data 必须是一个函数）</h4>
<h5 id="创建步骤" tabindex="-1"><a class="header-anchor" href="#创建步骤" aria-hidden="true">#</a> 创建步骤</h5>
<p>1.创建组件构造器</p>
<p>调用<code>vue.extend()</code>方法</p>
<p>2.注册组件</p>
<p>调用<code>Vue.component()</code>方法注册组件</p>
<p>3.使用组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 示例</span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
      <span class="token comment">// 3.使用组件</span>
      <span class="token operator">&lt;</span>my<span class="token operator">-</span>cpn<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>my<span class="token operator">-</span>cpn<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"../vue.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
    <span class="token operator">&lt;</span>script<span class="token operator">></span>
      <span class="token comment">// 1.创建组件构造器对象</span>
      <span class="token keyword">const</span> cpnC <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        &lt;div>
        &lt;h2>我是标题&lt;/h2>
        &lt;p>我是内容&lt;/p>
        &lt;/div></span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// 2.注册组件(全局组件，意味着可以在多个Vue的实例下使用)</span>
      <span class="token comment">// Vue.component('my-cpn', cpnC)</span>
      <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        el<span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">{</span>
          message<span class="token operator">:</span> <span class="token string">'你好'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 注册组件(局部组件)</span>
        components<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// cpn使用组件时的标签名</span>
          cpn<span class="token operator">:</span> cpnC
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>

  <span class="token comment">// 语法糖格式，省去了调用Vue.extend()的步骤，直接使用一个对象来替代</span>
  <span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>cpn1<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>cpn1<span class="token operator">></span>
      <span class="token operator">&lt;</span>cpn2<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>cpn2<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"../vue.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
    <span class="token operator">&lt;</span>script<span class="token operator">></span>
      <span class="token comment">// 注册全局组件的语法糖</span>
      Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'cpn1'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
          &lt;div>
           &lt;h2>我是标题&lt;/h2>
            &lt;p>我是内容&lt;/p>
          &lt;/div></span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// 2.注册局部组件的语法糖</span>
      <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        el<span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">{</span>
          message<span class="token operator">:</span> <span class="token string">'你好啊'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        components<span class="token operator">:</span> <span class="token punctuation">{</span>
          cpn2<span class="token operator">:</span> <span class="token punctuation">{</span>
            template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
            &lt;div>
              &lt;h2>我是标题1&lt;/h2>
              &lt;p>我是内容&lt;/p>
            &lt;/div></span><span class="token template-punctuation string">`</span></span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div><h5 id="父组件和子组件" tabindex="-1"><a class="header-anchor" href="#父组件和子组件" aria-hidden="true">#</a> 父组件和子组件</h5>
<p>要想使用组件，要么在全局注册，要么局部注册，像只注册了父组件，没有注册子组件，这样的话是无法使用子组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>cpn2<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>cpn2<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"../vue.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
    <span class="token operator">&lt;</span>script<span class="token operator">></span>
      <span class="token comment">// 创建第一个组件(子组件)</span>
      <span class="token keyword">const</span> cpnC1 <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        &lt;div>
          &lt;h2>我是子组件&lt;/h2>
        &lt;/div></span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// 2.创建第二个组件构造器(父组件)</span>
      <span class="token keyword">const</span> cpnC2 <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
          &lt;div>
            &lt;h2>我是父组件&lt;/h2>
            &lt;cpn1>&lt;/cpn1>
          &lt;/div></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        components<span class="token operator">:</span> <span class="token punctuation">{</span>
          cpn1<span class="token operator">:</span> cpnC1
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        el<span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">{</span>
          message<span class="token operator">:</span> <span class="token string">'你好'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        components<span class="token operator">:</span> <span class="token punctuation">{</span>
          cpn2<span class="token operator">:</span> cpnC2
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h5 id="组件之间的通信" tabindex="-1"><a class="header-anchor" href="#组件之间的通信" aria-hidden="true">#</a> 组件之间的通信</h5>
<p>在开发过程中有一些数据需要从上层传递到下层，比如页面开发的时候，请求到数据，需要下面的子组件进行展示，通过让大组件将数据传给小组件。</p>
<p>可以用两种方式进行，一个是通过 props 向子组件传递数据，一个是通过事件向父组件发送消息。</p>
<p><img src="C:\Users\24331\AppData\Roaming\Typora\typora-user-images\image-20210220155803442.png" alt="image-20210220155803442"></p>
<p>props：</p>
<p>值的方式：1.字符串数组，数组中的字符串就是传递时的名称；2.对象，对象可以设置传递时的类型，比如：cmovies:Array,也可以设置默认值和必传值，比如 cmessage：{type:String,default:'aaaa',required:true}；当类型是对象或者数组的时候，默认值必须是一个函数，比如 cmovies:{default(){return [ ]}}</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>body<span class="token operator">></span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
    <span class="token comment">// 通过这种方式获取子组件的cmovies，而cmovies是从父组件movies取得</span>
    <span class="token comment">//  v-bind不支持驼峰命名，要把驼峰变成以-连接</span>
    <span class="token operator">&lt;</span>cpn <span class="token operator">:</span>cmovies<span class="token operator">=</span><span class="token string">"movies"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>cpn<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

  <span class="token comment">// 子组件的模板，如果没有上述的div这个，获取到的其实就是默认值，就是空的，不会动态获取父组件中的数据</span>
  <span class="token operator">&lt;</span>template id<span class="token operator">=</span><span class="token string">"cpn"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>cmovies<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"../vue.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token comment">// 父传子使用props</span>
    <span class="token comment">// 子组件，里面包含一个模板template，被分离出去了</span>
    <span class="token keyword">const</span> cpn <span class="token operator">=</span> <span class="token punctuation">{</span>
      template<span class="token operator">:</span><span class="token string">'#cpn'</span><span class="token punctuation">,</span>
      props<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'cmovies'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 需要有return一个实例</span>
        <span class="token keyword">return</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


	<span class="token comment">// 实例中的数据（父级）</span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      el<span class="token operator">:</span><span class="token string">'#app'</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span><span class="token punctuation">{</span>
        movies<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'海王'</span><span class="token punctuation">,</span><span class="token string">'海贼王'</span><span class="token punctuation">,</span><span class="token string">'海尔兄弟'</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 子组件，只不过把cpn分离出去写</span>
      components<span class="token operator">:</span><span class="token punctuation">{</span>
        cpn
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p><code>$emit:</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 监听子组件发射出去的事件 <span class="token operator">--</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>cpn @item<span class="token operator">-</span>click<span class="token operator">=</span><span class="token string">"cpnClick"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>cpn<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 子组件模板 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>template id<span class="token operator">=</span><span class="token string">"cpn"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>button v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"item in categories"</span> @click<span class="token operator">=</span><span class="token string">"btnClick(item)"</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"../vue.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
    <span class="token operator">&lt;</span>script<span class="token operator">></span>
      <span class="token comment">// 子组件</span>
      <span class="token keyword">const</span> cpn <span class="token operator">=</span> <span class="token punctuation">{</span>
        template<span class="token operator">:</span> <span class="token string">'#cpn'</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            categories<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">'111'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'吃'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">'222'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'喝'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        methods<span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token function">btnClick</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 发射事件</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'item-click'</span><span class="token punctuation">,</span>item<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 父组件</span>
      <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        el<span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">{</span>
          message<span class="token operator">:</span> <span class="token string">'你好'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        components<span class="token operator">:</span> <span class="token punctuation">{</span>
          cpn
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        methods<span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token function">cpnClick</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'cpn'</span><span class="token punctuation">,</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h5 id="父子之间的双向绑定问题" tabindex="-1"><a class="header-anchor" href="#父子之间的双向绑定问题" aria-hidden="true">#</a> 父子之间的双向绑定问题</h5>
<p>先将子组件数据和 input 双向绑定，再通过子组件将 input 数据传给父组件实现 input 和父组件双向绑定</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>cpn
        <span class="token operator">:</span>number1<span class="token operator">=</span><span class="token string">"num1"</span>
        <span class="token operator">:</span>number2<span class="token operator">=</span><span class="token string">"num2"</span>
        @num1change<span class="token operator">=</span><span class="token string">"num1change"</span>
        @num2change<span class="token operator">=</span><span class="token string">"num2change"</span>
      <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>cpn<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>template id<span class="token operator">=</span><span class="token string">"cpn"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>props<span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>number1<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>data<span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>dnumber1<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> <span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">"dnumber1"</span> @input<span class="token operator">=</span><span class="token string">"num1Input"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>props<span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>number2<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>data<span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>dnumber2<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> <span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">"dnumber2"</span> @input<span class="token operator">=</span><span class="token string">"num2Input"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"../vue.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
    <span class="token operator">&lt;</span>script<span class="token operator">></span>
      <span class="token keyword">const</span> cpn <span class="token operator">=</span> <span class="token punctuation">{</span>
        template<span class="token operator">:</span> <span class="token string">'#cpn'</span><span class="token punctuation">,</span>
        props<span class="token operator">:</span> <span class="token punctuation">{</span>
          number1<span class="token operator">:</span> Number<span class="token punctuation">,</span>
          number2<span class="token operator">:</span> Number
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            dnumber1<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>number1<span class="token punctuation">,</span>
            dnumber2<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>number2
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        methods<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token function">num1Input</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>dnumber1 <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'num1change'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dnumber1<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function">num2Input</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>dnumber2 <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'num2change'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dnumber2<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        el<span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">{</span>
          num1<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          num2<span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        components<span class="token operator">:</span> <span class="token punctuation">{</span>
          cpn
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        methods<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token function">num1change</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>num1 <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function">num2change</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>num1 <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><p>逻辑：<img src="C:\Users\24331\AppData\Roaming\Typora\typora-user-images\image-20210221151106930.png" alt="image-20210221151106930"></p>
<p>父组件创建<code>num1</code>和<code>num2</code>，通过<code>props</code>传给子组件的<code>number1</code>和<code>number2</code>，并复制一份到 data 中的 dnumber1 和 dnumber2 中，用来和 input 进行绑定，由于未使用双向绑定，使用方法<code>@input=&quot;num1Input&quot;</code>，进行绑定，并通过$emit 进行向父组件传递方法和数据，从而保证父子数据双向绑定</p>
<h5 id="父子组件的访问方式" tabindex="-1"><a class="header-anchor" href="#父子组件的访问方式" aria-hidden="true">#</a> 父子组件的访问方式</h5>
<p>父组件访问子组件：<code>$children</code>或者<code>$refs</code></p>
<p>​ 1. <code>this.$children</code>是一个数组类型，包含所有子组件对象；不建议使用</p>
<p>​ 通过遍历取出所有子组件的 message 状态</p>
<ol start="2">
<li>为每个子组件添加一个<code>ref=&quot;aaa&quot;</code>（对象类型，默认是空），这样父组件可以通过 ref 获取到子组件的数据。比如<code>this.$refs.aaa</code>获取到 ref 为 aaa 的子组件</li>
</ol>
<p>子组件访问父组件：使用<code>$parent</code>；访问根组件：使用<code>$root</code></p>
<h4 id="编译作用域" tabindex="-1"><a class="header-anchor" href="#编译作用域" aria-hidden="true">#</a> 编译作用域</h4>
<h5 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h5>
<p>保留共性，提出不一样的，供开发者自己选</p>
<p>先在模块中使用 slot 定义插槽，可以添加默认值，如果添加了默认值，当使用该模块的时候，自动填充默认值；如果添加了自定义的东西，会在插槽的位置添加自定义的东西</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>cpn<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>cpn<span class="token operator">></span>
      <span class="token operator">&lt;</span>cpn<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>cpn<span class="token operator">></span>
      <span class="token operator">&lt;</span>cpn<span class="token operator">></span><span class="token operator">&lt;</span>p<span class="token operator">></span>测试<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>cpn<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

    <span class="token operator">&lt;</span>template id<span class="token operator">=</span><span class="token string">"cpn"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>吃饭<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>h3<span class="token operator">></span>睡觉<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 可以给插槽赋予默认值，当cpn未给参数，就把默认值传过去；如果有多个值传入到一个插槽，会全部替换 <span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>slot<span class="token operator">></span><span class="token operator">&lt;</span>button<span class="token operator">></span>按钮<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"../vue.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
    <span class="token operator">&lt;</span>script<span class="token operator">></span>
      <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        el<span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">{</span>
          message<span class="token operator">:</span> <span class="token string">'测试'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        components<span class="token operator">:</span> <span class="token punctuation">{</span>
          cpn<span class="token operator">:</span> <span class="token punctuation">{</span>
            template<span class="token operator">:</span> <span class="token string">'#cpn'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h5 id="具名插槽" tabindex="-1"><a class="header-anchor" href="#具名插槽" aria-hidden="true">#</a> 具名插槽</h5>
<p>需要给插槽 slot 赋予 name，替换的时候需要标上具体使用哪一个具名插槽</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>body<span class="token operator">></span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 选择指定的slot进行替换 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>cpn<span class="token operator">></span><span class="token operator">&lt;</span>button slot<span class="token operator">=</span><span class="token string">"center"</span><span class="token operator">></span>标题<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>cpn<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>template id<span class="token operator">=</span><span class="token string">"cpn"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 赋予默认值和name <span class="token operator">--</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"left"</span><span class="token operator">></span><span class="token operator">&lt;</span>span<span class="token operator">></span>左边<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
      <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"center"</span><span class="token operator">></span><span class="token operator">&lt;</span>span<span class="token operator">></span>中间<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
      <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"right"</span><span class="token operator">></span><span class="token operator">&lt;</span>span<span class="token operator">></span>右边<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"../vue.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">const</span> cpn <span class="token operator">=</span> <span class="token punctuation">{</span>
      template<span class="token operator">:</span><span class="token string">'#cpn'</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      el<span class="token operator">:</span><span class="token string">'#app'</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span><span class="token punctuation">{</span>
        message<span class="token operator">:</span><span class="token string">'你好'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      components<span class="token operator">:</span><span class="token punctuation">{</span>
        cpn
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h5 id="作用域插槽" tabindex="-1"><a class="header-anchor" href="#作用域插槽" aria-hidden="true">#</a> 作用域插槽</h5>
<p>父组件替换插槽的标签，但是内容由子组件来提供，即父组件去替换子组件插槽中的一些标签，用不同的方式展现出子组件中的内容，内容还是由子组件来决定。</p>
<p>逻辑：子组件定义一个默认的模板，数据来源于子组件，模板可使用 slot 包裹作为插槽，使用:data 获取子组件的数据；当父组件使用这个模板，并想个性化改变的时候，先获取插槽和插槽数据 slot.data 进行展示</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>cpn<span class="token operator">></span>
        <span class="token operator">&lt;</span>template slot<span class="token operator">-</span>scope<span class="token operator">=</span><span class="token string">"slot"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token operator">&lt;</span>span v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"item in slot.data"</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">-</span> <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span> <span class="token operator">--</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>slot<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">' - '</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>cpn<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>template id<span class="token operator">=</span><span class="token string">"cpn"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>slot <span class="token operator">:</span>data<span class="token operator">=</span><span class="token string">"pLanguage"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>ul<span class="token operator">></span>
            <span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"item in pLanguage"</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"../vue.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
    <span class="token operator">&lt;</span>script<span class="token operator">></span>
      <span class="token keyword">const</span> cpn <span class="token operator">=</span> <span class="token punctuation">{</span>
        template<span class="token operator">:</span> <span class="token string">'#cpn'</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            pLanguage<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'javascript'</span><span class="token punctuation">,</span> <span class="token string">'c++'</span><span class="token punctuation">,</span> <span class="token string">'c#'</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        el<span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">{</span>
          message<span class="token operator">:</span> <span class="token string">'你好'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        components<span class="token operator">:</span> <span class="token punctuation">{</span>
          cpn
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h4 id="模块化开发" tabindex="-1"><a class="header-anchor" href="#模块化开发" aria-hidden="true">#</a> 模块化开发</h4>
<p>常见的模块化规范：CommonJS，AMD，CMD，ES6 的 Modules</p>
<h5 id="es6-中的模块化开发-模块有自己的作用域" tabindex="-1"><a class="header-anchor" href="#es6-中的模块化开发-模块有自己的作用域" aria-hidden="true">#</a> ES6 中的模块化开发，模块有自己的作用域</h5>
<p>首先先在某一个需要导出的 js 文件中，使用 export 指令导出变量，比如<code>export let name = 'xxx'</code>或者使用另一种写法：<code>let name = 'xxx' export {name}</code>接着在<strong>html</strong>中对导入的 js 进行<code>&lt;script src=&quot;aaa.js&quot; type=&quot;module&quot;&gt;&lt;/script&gt;</code>重点是 type=&quot;module&quot;，可以将 js 文件作为一个模块处理；在其他的<strong>js</strong>中如果想使用这个 js，直接使用 import {xxx} form &quot;js 文件&quot; （如果我们希望导入某个模块的所有信息，通过*可以导入模块中所有的 export 变量，通常情况下需要给心号起一个别名方便后续使用<code>import * as info from 'js 文件'</code>），此时这两个 js 文件都需要导入到 html</p>
<p>某些情况下，想让导入者自己命名，这个时候使用 export default，但是同一个模块只能有一个 export default</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 导出</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">argument</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>argument<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 导入，其中print是自己命名，也就是说默认把导出的default作为print</span>
<span class="token keyword">import</span> print form <span class="token string">"js文件"</span><span class="token punctuation">;</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="webpack-详解" tabindex="-1"><a class="header-anchor" href="#webpack-详解" aria-hidden="true">#</a> webpack 详解</h4>
<p>使用 webpack 打包：只需要打包入口文件，会自动处理相关依赖；</p>
<p><code>webpack ./src/main.js ./dist/bundle.js</code>对应的是入口文件和打包后存放的地方</p>
<p>模块化：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 导出</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">mul</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">*</span> num2
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  add<span class="token punctuation">,</span>
  mul
<span class="token punctuation">}</span>

<span class="token comment">// 导入</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> add<span class="token punctuation">,</span> mul <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./mathUtils'</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">mul</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h5 id="webpack-配置" tabindex="-1"><a class="header-anchor" href="#webpack-配置" aria-hidden="true">#</a> webpack 配置</h5>
<p>1.创建 webpack.config.js 并写入入口和出口</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  entry<span class="token operator">:</span> <span class="token string">'./src/main.js'</span><span class="token punctuation">,</span>
  output<span class="token operator">:</span> <span class="token punctuation">{</span>
    path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    filename<span class="token operator">:</span> <span class="token string">'bundle.js'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>2.npm init -y 初始化 webpack，即可使用 webpack 快捷打包</p>
<p>3.将 webpack 映射到 npm run build(优先执行本地 webpack)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"test"</span><span class="token operator">:</span> <span class="token string">"echo \"Error: no test specified\" &amp;&amp; exit 1"</span><span class="token punctuation">,</span>
    <span class="token string">"build"</span><span class="token operator">:</span> <span class="token string">"webpack"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="加载样式" tabindex="-1"><a class="header-anchor" href="#加载样式" aria-hidden="true">#</a> 加载样式</h5>
<p>loader 使用过程：</p>
<p>步骤一：通过 npm 安装需要使用的 loader</p>
<p>需要 npmloader：css-loader 和 style-loader</p>
<p>css-loader 负责加载 css 文件，不负责将 css 嵌入文档中</p>
<p>style-loader 负责将样式添加到 DOM 中</p>
<p>步骤二：在 webpack.config.js 中的 modules 关键字下进行配置</p>
<p>步骤三：在 main.js 中引用 css 文件</p>
<p><strong>加载图片</strong></p>
<p>对于使用 url 的图片，会存在打包后访问不到的问题，可以去 webpack.config.js 中加上：publicPath:'dist/'，因为打包后的路径相对于之前改变了</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 修改打包后的图片名字</span>
<span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpe?g|gif)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">'file-loader'</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
              name<span class="token operator">:</span> <span class="token string">'img/[name].[hash:8].[ext]'</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>es6=&gt;es5</strong></p>
<p>在 webpack 中，我们直接使用 babel 对应的 loader 就可以了</p>
<p>安装 npm install --save-dev babel-loader@7 babel-core babel-preset-es2015</p>
<p>配置 webpack.config.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(node_modules|bower_components)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">{</span>
          loader<span class="token operator">:</span> <span class="token string">'babel-loader'</span><span class="token punctuation">,</span>
          options<span class="token operator">:</span> <span class="token punctuation">{</span>
            presets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'es2015'</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>配置 Vue</strong></p>
<p>几个问题：</p>
<p>使用 runtime-only 版本的 vue，会报错，修改 wevpack 的配置</p>
<p>el 和 template 模板的关系是什么呢？</p>
<p>el 用于指定 Vue 要管理的 DOM，可以帮助解析其中的指令、事件监听等等。</p>
<p>而如果 Vue 实例中同时指定了 template，那么 template 模板的内容会替换掉挂载的对应 el 的模板。</p>
<p>webpack 打包 vue 的时候会报错，需要安装 vue-loader 和 vue-template-compiler，并且修改 webpack.config.js 文件。并且把 vue-loader 版本改为：&quot;vue-loader&quot;: &quot;^13.0.0&quot;,</p>
<h5 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> plugin</h5>
<p>loader 主要用于转换某些类型的模型，是一个转换器</p>
<p>plugin 是插件，是对 webpack 本身的扩展，是一个扩展器</p>
<h3 id="_02-vue-cli" tabindex="-1"><a class="header-anchor" href="#_02-vue-cli" aria-hidden="true">#</a> 02 Vue CLI</h3>
<p><strong>安装</strong></p>
<p>npm install -g @vue/cli</p>
<p><strong>拉取 vue2 的旧模板</strong></p>
<p>npm install -g @vue/cli-init</p>
<p><strong>vue CLI2 初始化项目</strong></p>
<p>vue init webpack my-project</p>
<p><strong>vue CLI3 初始化项目</strong></p>
<p>vue create my-project</p>
<p><strong>目录结构</strong></p>
<p>build 和 config 都是配置，</p>
<p>assets：当文件大小小于一定范围就会使用 base64 转换</p>
<p>static：原封不动打包</p>
<p>当遇到安装 vue CLI 报错。可以清除这个文件夹 C:\Users\24331\AppData\Roaming\npm-cache</p>
<p>当开启了 ESlint，想要关闭：</p>
<p>config：index.js：use ESlint 改为 false</p>
<p>runtimecompiler 和 runtimeonly 区别：</p>
<p>后者性能更高、代码量更少；后者会创建函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>render：<span class="token keyword">function</span>（createElement）<span class="token punctuation">{</span>
    <span class="token comment">// 1. createElement('标签',{标签的属性},["内容"])</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="vue-config-js" tabindex="-1"><a class="header-anchor" href="#vue-config-js" aria-hidden="true">#</a> vue.config.js</h4>
<p>使用 vuecli3 的时候，如果需要自己配置，使用 vue.config.js</p>
<h4 id="箭头函数中的-this" tabindex="-1"><a class="header-anchor" href="#箭头函数中的-this" aria-hidden="true">#</a> 箭头函数中的 this</h4>
<p>箭头函数的 this 引用的是最近作用域中的 this（也就是说，箭头函数没有 this，会作为变量一直向上级词法作用域找，直到找到为止）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">aaa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// 指向window</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// 指向window，因为会找到最近作用域的this，就是上一层的this：window</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// 指向window（只要是function这种格式就是指向window）</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">//obj；往上一层找，没有this，在网上一层，找到obj的this</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h4 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h4>
<h5 id="前端渲染和后端渲染" tabindex="-1"><a class="header-anchor" href="#前端渲染和后端渲染" aria-hidden="true">#</a> 前端渲染和后端渲染</h5>
<p>后端渲染：jsp/php；早期服务器直接渲染好对应的 html 页面返回给客户端进行展示</p>
<p>这种情况下渲染好的页面不需要单独加载任何 js 和 css，可以直接交给浏览器展示，有利于 seo 优化</p>
<p>前端渲染：浏览器中显示的网页中的大部分内容都是由前端写的 js 代码在浏览器中执行，最终渲染出来的页面</p>
<p>先请求静态资源服务器中的 html css js 代码 再去请求数据</p>
<p>前端路由：将每一个 url 和组件内页面内容进行映射</p>
<p>第三阶段：单页面富应用，整个网页只有一个 html 页面，通过前端路由一一映射</p>
<h4 id="前端路由" tabindex="-1"><a class="header-anchor" href="#前端路由" aria-hidden="true">#</a> 前端路由</h4>
<p>url 的 hash，即锚点（#），本质是改变 window.location 的 href 属性</p>
<p>我们可以通过直接赋值 location.hash 来改变 href，但是页面不刷新</p>
<p>还有一种改变 url 页面不刷新的方法：history.pushState()和 history.back()，这两个相当于栈结构，可以前进和后退</p>
<p>history.replaceState() 本页面刷新 url，不会记录上一个 url</p>
<p>history.go() 前往某一个页面，go(-1)表示后退；</p>
<p>history.forward() 等价于 go(1)前进一个页面；</p>
<h4 id="vue-安装和使用路由" tabindex="-1"><a class="header-anchor" href="#vue-安装和使用路由" aria-hidden="true">#</a> vue 安装和使用路由</h4>
<p>安装：npm install vue-router --save</p>
<p>使用：Vue.use()安装路由功能</p>
<p>第一步：导入路由对象，并且调用 Vue.use(VueRouter)来安装插件</p>
<p>第二步：创建路由实例，传入路由映射配置</p>
<p>第三步：在 Vue 实例中挂载创建的路由实例</p>
<p>使用 vue-router 的步骤</p>
<p>第一步：创建路由组件</p>
<p>第二步：配置路由映射：组件和路径映射关系</p>
<p>第三步：使用路由：通过<code>&lt;router-link&gt;</code>（这个相当于 a 标签，可以通过 tag=&quot;button&quot;更换）和<code>&lt;router-view&gt;</code></p>
<p><strong>重定向</strong></p>
<p>默认把初始页面定义为 home，嵌套路由也可以默认路径</p>
<p><strong>路由里的 linkActiveClass:'active'</strong></p>
<p>可以为选中的路由设置样式</p>
<p><strong>通过代码切换路由</strong></p>
<p>$router 为 VueRouter 实例</p>
<p><code>this.$router.push('/home')</code>可以把路径切换到 home</p>
<p><strong>全局获取当前活跃路由下的内容</strong></p>
<p>$route 为当前 router 跳转对象</p>
<p><code>this.$route.param.userId</code></p>
<p>内容对应的是 path 后的参数</p>
<h4 id="路由懒加载" tabindex="-1"><a class="header-anchor" href="#路由懒加载" aria-hidden="true">#</a> 路由懒加载</h4>
<p>不同的路由对应的组件分割成不同代码块，用到的时候在加载</p>
<p>**路由懒加载写法，打包的时候会分成多个 js 文件，实现分开请求：**const Home = ( ) =&gt; import('../components/Home.vue')</p>
<h4 id="子路由" tabindex="-1"><a class="header-anchor" href="#子路由" aria-hidden="true">#</a> 子路由</h4>
<p>子路由不需要加上斜杠，会自动搜索父级路径并拼接</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
	path<span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> Home<span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">'news'</span><span class="token punctuation">,</span>
      component<span class="token operator">:</span> HomeNews
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">'message'</span><span class="token punctuation">,</span>
      component<span class="token operator">:</span> HomeMessage
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>跨页面传参</strong></p>
<p>方式 1：params</p>
<p>配置路由格式：/router/:id</p>
<p>传递的方式：在 path 后面跟上对应的值</p>
<p>传递后形成的路径：/router/123，/router/abc</p>
<p>方式 2：query</p>
<p>配置路由格式：/router</p>
<p>传递的方式：对象中使用 query 的 key 作为传递方式</p>
<p>传递后形成的路径：/router？id=123</p>
<p><strong>组件使用</strong></p>
<p>约定俗成对单个 vue 文件进行导出后，其他页面需要导入使用时以小写和短线连接的形式</p>
<p>如 HomeNews.vue 文件导出后，其他页面需要导入使用，以
<code>&lt;home-news&gt;</code> <code>&lt;/home-news&gt;</code>的形式</p>
<h4 id="导航守卫" tabindex="-1"><a class="header-anchor" href="#导航守卫" aria-hidden="true">#</a> 导航守卫</h4>
<p>vue-router 提供的导航守卫主要用来监听路由的进入和离开的.</p>
<p>vue-router 提供了 beforeEach（前置守卫）和 afterEach（后置钩子）的钩子函数, 它们会在路由即将改变前和改变后触发.</p>
<p>router 里面的 meta: { title: &quot;档案&quot; }：meta 是源数据，</p>
<p>如果是后置钩子，也就是 afterEach，不需要主动调用 next()函数</p>
<h4 id="keep-alive" tabindex="-1"><a class="header-anchor" href="#keep-alive" aria-hidden="true">#</a> Keep-alive</h4>
<p>Keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token comment">// activated和deactivated只有状态被保持，也就是keep-alive的时候才生效</span>
  <span class="token function">activated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 离开之前记录this.path</span>
  <span class="token function">beforeRouteLeave</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>path <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>path<span class="token punctuation">;</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Keep-alive 有两个参数：include 和 exclude</p>
<p>include - 字符串或正则表达，只有匹配的组件会被缓存</p>
<p>exclude - 字符串或正则表达式，任何匹配的组件都不会被缓存</p>
<h5 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h5>
<p>生命周期钩子的 this 上下文指向调用它的 vue 实例</p>
<p>created：在实例被创建之后执行代码</p>
<p>mounted：</p>
<p>updated：</p>
<p><img src="https://upload-images.jianshu.io/upload_images/11370083-f279314aef6741db.jpg" alt="img"></p>
<p>对于在 app.vue 中的 style 引用样式需要加上@，比如@import...</p>
<p>一般的 tabbar 高度是 49px</p>
</template>
