<template><h2 id="_1-自我介绍" tabindex="-1"><a class="header-anchor" href="#_1-自我介绍" aria-hidden="true">#</a> 1.自我介绍</h2>
<p>尊敬的面试官您好，我叫XX，来自福建南平，是个性格耐心稳定的技术宅。热爱互联网前端开发，从事过1年的项目开发，（具备软件工程师实习经验）；在负责两个项目的前端开发工作过程中，也会涉及到负责人的角色，与甲方以及对应的后端开发人员协同工作。在项目中我采用的是vue框架，因此有较为深入地学习前端开发的基础知识和vue的一些设计原理。比如：项目是使用element-ui构建页面，对于不满足需求的控件会自己动手修改</p>
<p>面试官好，我叫周佳颖，来自浙江绍兴。本科期间获得过多项国家级省级奖项。之后被保送到华中科技大学，课题组研究方向是企业信息化。在课题组内的工作主要有：多次主持项目探讨会议以及负责两个采用管理系统的前端开发，框架采用的vue。我的性格开朗平和，喜欢前端页面优美的设计与性能优化方面优雅，平时会关注前端相关的前沿技术。</p>
<h2 id="_2-项目重难点" tabindex="-1"><a class="header-anchor" href="#_2-项目重难点" aria-hidden="true">#</a> 2 项目重难点</h2>
<h3 id="_2-1-百度地图拦截问题" tabindex="-1"><a class="header-anchor" href="#_2-1-百度地图拦截问题" aria-hidden="true">#</a> 2.1 百度地图拦截问题</h3>
<p>智能精准烘烤系统的网站首页是一个百度地图，在百度地图上会绘制图层和标记点。标记点是根据后端传的经纬度进行标记。在上线后进行测试没异常。但是老师反馈说使用360浏览器打开网站，首页无法呈现出地图，同时使用谷歌浏览器是正常显示。于是我从几个方面思考：1.浏览器兼容问题；2.请求出现问题；在360浏览器中进行测试，发现会将请求百度地图标记点的接口进行拦截。通过打开相关接口，进行比较发现，被拦截的接口请求参数携带有adname的键名。怀疑是因为这个引起。</p>
<p>先是了解了插件拦截广告的几种方式，发现正好有通过ad等关键字进行拦截的。于是就着手处理如何避免请求被拦截。</p>
<p>先是通过判断是否是自己在请求参数里命名写到了adname，发现不是，通过查看百度地图官方的api文档，发现是有一个镂空面绘制这么一个功能，会去查询需要绘制镂空面的时候的地理名称，携带的属性为adname。接着通过打断点的形式找了好久，发现没有直接的相关代码；前往官网的demo查看，发现同样有相关问题，导致和360拦截插件冲突。解决方案是反馈给百度地图相关人员，考虑到具体项目只需要使用到为省内地图添加图层、添加标记点以及编辑点点击呈现弹出框等功能，为了优化体验使用echarts的地图相关功能，避免加载地图js造成的等待和卡顿等问题。或者使用高德地图</p>
<h3 id="_2-2-百度地图加载慢问题" tabindex="-1"><a class="header-anchor" href="#_2-2-百度地图加载慢问题" aria-hidden="true">#</a> 2.2 百度地图加载慢问题</h3>
<p>网站首页是一个百度地图，有时候进去会有短暂的白屏现象，怀疑是资源文件体积是否过大、加载脚本的时候渲染内容堵塞了。同时拖动的时候会有<a href="https://blog.csdn.net/jjh0901/article/details/90608257" target="_blank" rel="noopener noreferrer">卡顿<OutboundLink/></a>，考虑是百度地图标注点过多：</p>
<p>1.为地图设置最小和最大缩放级别；</p>
<p>2.获取大量点数据，生成point及marker，存储起来</p>
<p>3.根据区域经纬度，初始加载100个标注点（可忍受卡顿时间的临界值）</p>
<p>4.监听地图拖动或缩放结束时，再次加载当前可视区域内的50个点，如果地图不断缩小，利用<a href="https://www.cnblogs.com/anyuan9/p/6232137.html" target="_blank" rel="noopener noreferrer">点聚合<OutboundLink/></a>替代展现所有点：</p>
<blockquote>
<p>点聚合怎么实现的：是基于方格和距离的聚合算法，即开始的时候地图上没有任何已知的聚合点，然后遍历所有的点，去计算点的外包正方形（由gridSize指定），若此点的外包正方形与现有的聚合点的外包正方形不相交，则新建聚合点，若相交就把该点加到该聚合点；先排除所有不在可视范围的点，然后通过比较marker点和聚合点的距离，拿到距离最近的聚合点，判断marker点是否在聚合点的外包正方形内；</p>
</blockquote>
<p>4、地图层级放大到最大时，去掉限制，获取当前可视区域内所有点（因为可视区域经纬度很小了，因此不会出现大量数据点堆积导致卡顿）</p>
<p>总结一句话：按照可视区域按需加载标注点，放大到最大显示当前可视区域的所有点</p>
<h3 id="_2-3-导入导出模板的文件解析、文件、图片以什么形式传输储存" tabindex="-1"><a class="header-anchor" href="#_2-3-导入导出模板的文件解析、文件、图片以什么形式传输储存" aria-hidden="true">#</a> 2.3 <a href="https://segmentfault.com/a/1190000038473753" target="_blank" rel="noopener noreferrer">导入导出模板的文件解析、文件、图片以什么形式传输储存<OutboundLink/></a></h3>
<p><a href="https://www.it610.com/article/1293441248127950848.htm" target="_blank" rel="noopener noreferrer">elementUI upload 参数说明<OutboundLink/></a></p>
<p><strong>图片</strong>：按照本来的我正常的逻辑都是这样的：用upload组件，选择图片的时候就会立刻上传到指定的地址，最多也就配置一下header，再大不了就手写限制一下文件的大小。实际需求：elementUI upload 上传的时候用的是文件流，就是直接把文件流赋值给参数，然后回显的时候后端会返回一个图片的id，我通过拼接地址的方式去显示图片。(需要将 <strong>auto-upload</strong> 设置为false，这样就不会在选取文件后立即上传，你会发现你之前使用的钩子很多都没有用，唯独有一个钩子会触发的，可以让你获取到文件的，那就是 <strong>on-change</strong> 事件。（ <strong>on-change</strong> 事件有两个参数，file是最新选择的文件，fileList是已经选择过的文件，包含第一个file，也就是当前file）需求是是上传的时候把文件流赋值给参数（file是有属性的，有文件名、大小、raw，append(上传)的时候不要直接把值传进去，而是传raw属性，这个才是文件）。回显的时候就相对简单了，就是直接按照官网的格式放进去数组就完事了)</p>
<p><img src="docs.vuepress\public\assets\aboutMe\element-upload.png" alt="element-upload"></p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Streams_API#concepts_and_usage" target="_blank" rel="noopener noreferrer">文件流（包含流接口）<OutboundLink/></a>： 一个FileStream类的实例实际上代表一个文件流，使用FileStream类可以对文件系统上是文件进行读取、写入、打开和关闭操作。</p>
<p><strong>excel文档导入</strong></p>
<p><a href="https://blog.csdn.net/weixin_33768153/article/details/84066964" target="_blank" rel="noopener noreferrer">JS处理文件流导出Excel<OutboundLink/></a>（点链接）</p>
<ul>
<li>我的思路如下：通过fetch请求拿到数据流、将下载的代码封装为一个函数、将下载拿到的文件流直接传入该函数、函数内部处理下载，然后删除该链接</li>
</ul>
<p><strong>①如何上传多张图片</strong>：multiple：这个属性支持多文件上传,如果你是上传单文件这个属性随便设不设置，如果是多文件，就要设置，所以建议不动,因为它默认开启。</p>
<p><strong>②不上传服务器直接回显</strong></p>
<p><strong><code>FileReader</code></strong> 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/File" target="_blank" rel="noopener noreferrer">File<OutboundLink/></a>或 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Blob" target="_blank" rel="noopener noreferrer">Blob<OutboundLink/></a> 对象指定要读取的文件或数据。</p>
<p>文件（<strong><code>File</code></strong>）接口提供有关文件的信息，并允许网页中的 JavaScript 访问其内容。</p>
<p><code>Blob</code> 对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换成 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Blob" target="_blank" rel="noopener noreferrer">ReadableStream<OutboundLink/></a> 来用于数据操作。</p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/onload" target="_blank" rel="noopener noreferrer">FileReader.readAsArrayBuffer()<OutboundLink/></a>：开始读取指定的 <code>Blob</code>中的内容, 一旦完成, result 属性中保存的将是被读取文件的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" target="_blank" rel="noopener noreferrer">ArrayBuffer<OutboundLink/></a> 数据对象.<code>**ArrayBuffer**</code> 对象用来表示通用的、固定长度的原始二进制数据缓冲区。</p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/onload" target="_blank" rel="noopener noreferrer">FileReader.onload<OutboundLink/></a>：处理 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event" target="_blank" rel="noopener noreferrer">load (en-US)<OutboundLink/></a> 事件。该事件在读取操作完成时触发。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;body>
    &lt;input id="load" type="file" οnchange="upload(this)" multiple/>
    &lt;div id="huixian">&lt;/div>
    &lt;script type="text/javascript">
        function upload(obj){ 
            var f = obj.files;
            var str = "";
            for(var i=0;i&lt;f.length;i++){
                var reader = new FileReader();
                reader.readAsDataURL(f[i]);
 // e是监听到时间回调返回的event对象，event.target 是事件属性，可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口
                reader.onload = function(e){
                   str+='&lt;img src="'+e.target.result+'"/>';
                   document.getElementById("huixian").innerHTML = str;
                }
            }
        }
    &lt;/script>
 &lt;/body>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>③element upload可以断点续传吗（http-request 覆盖默认的上传行为，可以自定义上传的实现）</p>
<p>断点续传：一部分是断点，一部分是续传。实质是能记录上一次已下载完成的位置。</p>
<p>做法 客户端浏览器传给Web服务器的时候要多加一条信息——从哪里开始（HTTP请求变量）。要实现HTTP断点续传，Web服务器必须支持<strong>HTTP/1.1</strong>（相对于HTTP/1.0老版本）。</p>
<p>里面有个<strong>Range属性</strong>是定义下载区域的，它接收的值是一个区间范围，比如：Range:bytes=0-10000。这样我们就可以按照一定的规则，将一个大文件拆分为若干很小的部分，然后分批次的下载，每个小块下载完成之后，再合并到文件中；这样即使下载中断了，重新下载时，也可以通过文件的字节长度来判断下载的起始点，然后重启断点续传的过程，直到最后完成下载过程。</p>
<p>Content-Range字段：服务端加上的告诉客户端现在传的范围，返回的状态码是206</p>
<p>终端在发起续传请求时应该在HTTP头中申明对应etag的If-Match 或者对应的last-modified的If-Modified-Since 字段，帮助服务端判别文件变化。</p>
<p>一部分是断点，一部分是续传。实质是能记录上一次已下载完成的位置。</p>
<p>④js断点续传文件如何分片 依据什么进行分割</p>
<p>⑤内容如何上传到服务器，ajax的send()参数写满后，放在body还是哪里</p>
<h3 id="_2-4-项目如何定义全局组件-怎么写组件" tabindex="-1"><a class="header-anchor" href="#_2-4-项目如何定义全局组件-怎么写组件" aria-hidden="true">#</a> 2.4 <a href="https://m.html.cn/qa/vue-js/14995.html" target="_blank" rel="noopener noreferrer">项目如何定义全局组件，怎么写组件<OutboundLink/></a></h3>
<h3 id="_2-5-项目如何定义全局变量和函数" tabindex="-1"><a class="header-anchor" href="#_2-5-项目如何定义全局变量和函数" aria-hidden="true">#</a> 2.5 <a href="https://blog.csdn.net/qq_30669833/article/details/81706217" target="_blank" rel="noopener noreferrer">项目如何定义全局变量和函数<OutboundLink/></a></h3>
<h3 id="_2-6-项目登录部分怎么实现的-获取token在哪获取、token放在哪、-jwt" tabindex="-1"><a class="header-anchor" href="#_2-6-项目登录部分怎么实现的-获取token在哪获取、token放在哪、-jwt" aria-hidden="true">#</a> 2.6 <a href="https://www.cnblogs.com/web-record/p/9876916.html" target="_blank" rel="noopener noreferrer">项目登录部分怎么实现的<OutboundLink/></a>，获取<a href="https://blog.csdn.net/qq_34825875/article/details/79569579" target="_blank" rel="noopener noreferrer">token<OutboundLink/></a>在哪获取、<a href="https://juejin.cn/post/6922782392390746125" target="_blank" rel="noopener noreferrer">token放在哪<OutboundLink/></a>、<a href="https://vue3js.cn/interview/NodeJS/jwt.html#%E4%B8%89%E3%80%81%E4%BC%98%E7%BC%BA%E7%82%B9" target="_blank" rel="noopener noreferrer">（jwt）<OutboundLink/></a></h3>
<p>必须携带token去访问信息吗：对于公共信息，可以不携带token，分权限查看的必须携带token；</p>
<h3 id="_2-7-package-json干嘛的" tabindex="-1"><a class="header-anchor" href="#_2-7-package-json干嘛的" aria-hidden="true">#</a> 2.7 <a href="https://www.jianshu.com/p/cee645aa16a3" target="_blank" rel="noopener noreferrer">package.json干嘛的<OutboundLink/></a></h3>
<h3 id="_2-8-fetch-js-如何把promise请求到的东西返回给app-js-关键点是返回this" tabindex="-1"><a class="header-anchor" href="#_2-8-fetch-js-如何把promise请求到的东西返回给app-js-关键点是返回this" aria-hidden="true">#</a> 2.8 fetch.js，如何把promise请求到的东西返回给app.js，关键点是返回this</h3>
<p><a href="https://blog.csdn.net/caseywei/article/details/85274069?utm_medium=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-2.no_search_link&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-2.no_search_link" target="_blank" rel="noopener noreferrer">ajax和axios、fetch的区别<OutboundLink/></a></p>
<p>全局 fetch 函数是 web 请求和处理响应的简单方式，不使用 XMLHttpRequest。fetch()函数是一个基于Promise的机制，用于在浏览器中编程地制作Web请求。</p>
<h3 id="_2-9-项目里面难点-说了上线404-问了hash路由和history-怎么不用vuerouter实现spa单页面跳转-比如怎么从a跳转到b-原生的方式" tabindex="-1"><a class="header-anchor" href="#_2-9-项目里面难点-说了上线404-问了hash路由和history-怎么不用vuerouter实现spa单页面跳转-比如怎么从a跳转到b-原生的方式" aria-hidden="true">#</a> 2.9 项目里面难点，说了上线404，问了hash路由和history，怎么不用vuerouter实现spa单页面跳转，比如怎么从a跳转到b，原生的方式</h3>
<p><a href="https://blog.csdn.net/qi_dabin/article/details/82454588?utm_source=blogxgwz9" target="_blank" rel="noopener noreferrer">点击父组件的li元素跳转到子组件中，并携带参数，便于子组件获取数据<OutboundLink/></a></p>
<p><a href="https://www.cnblogs.com/shuijingcao/p/13269203.html" target="_blank" rel="noopener noreferrer">vue-router 实现跳转的方式<OutboundLink/></a></p>
<h3 id="_2-10-百度地图api怎么拾取经纬度进行标记-写的东西要知道-百度地图内容-如何实现在拖拽后避免重复操作-防抖节流" tabindex="-1"><a class="header-anchor" href="#_2-10-百度地图api怎么拾取经纬度进行标记-写的东西要知道-百度地图内容-如何实现在拖拽后避免重复操作-防抖节流" aria-hidden="true">#</a> 2.10 <a href="https://sx54pm1tcw.feishu.cn/docs/doccnvBCsHDEpJTXbBkl9AZ24Ff#FBqiXa" target="_blank" rel="noopener noreferrer">百度地图api怎么拾取经纬度进行标记 写的东西要知道，百度地图内容 如何实现在拖拽后避免重复操作，防抖节流<OutboundLink/></a></h3>
<h3 id="_2-11-axios使用遇到的问题" tabindex="-1"><a class="header-anchor" href="#_2-11-axios使用遇到的问题" aria-hidden="true">#</a> 2.11 axios使用遇到的问题</h3>
<p>①<a href="https://blog.csdn.net/weixin_33739646/article/details/88916665" target="_blank" rel="noopener noreferrer">在使用 axios 发送 post 请求的时候<OutboundLink/></a>，发现 axios 发送数据默认使用 json 格式，通过查阅资料，实际上的因为post 的传参需要序列化，不然服务端不会正确接收数据，URLSearchParams 接口定义了一些实用的方法来处理 URL 的查询字符串。解决方法一：使用JSON.stringify()；解决方法二：使用qs库</p>
<p>②报错说是<a href="https://www.cnblogs.com/huzhuhua/p/10769644.html" target="_blank" rel="noopener noreferrer">跨域问题<OutboundLink/></a>，设置了下请求头可以用了，但是提交的form data格式 明明是JSON格式却转成了字符串格式 ，后来发现必须要转换。用new URLSearchParams()来代替，用了URLSearchParams之后 貌似直接 不用设置请求头也能可以了。</p>
<h3 id="_2-12-使用cordova事件监听手机物理键等" tabindex="-1"><a class="header-anchor" href="#_2-12-使用cordova事件监听手机物理键等" aria-hidden="true">#</a> 2.12 <a href="https://www.cnblogs.com/zuoan-oopp/p/8029587.html" target="_blank" rel="noopener noreferrer">使用Cordova事件监听手机物理键等<OutboundLink/></a></h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>export default {
    data() {
    return {
      f7params: {
        name: "烟叶精准烘烤监控APP", // App name
        theme: "auto", // Automatic theme detection
        //监听手机物理返回键
        view:{
            pushState: true,
            pushStateSeparator: '#',
            pushStateOnLoad: false
          } 
      },
    };
},
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_2-13-使用framework7-loginscreen组件登录屏幕事件" tabindex="-1"><a class="header-anchor" href="#_2-13-使用framework7-loginscreen组件登录屏幕事件" aria-hidden="true">#</a> 2.13 使用Framework7 loginscreen组件登录屏幕事件</h3>
<p>有两种方法可以在Framework7中打开和关闭登录屏幕：</p>
<p>1、<a href="https://iowiki.com/framework7/login_screen_from_javascript.html" target="_blank" rel="noopener noreferrer">使用JavaScript<OutboundLink/></a>（使用<em>loginScreen()<em>和</em>closeModal(loginScreen) app方法打开和关闭登录屏幕）</em></p>
<p>*2、**<a href="https://iowiki.com/framework7/login_screen_from_html.html" target="_blank" rel="noopener noreferrer">来自HTML<OutboundLink/></a>*<em>使用open-login-screen和close-login-screen Framework7类打开和关闭登录屏幕。</em></p>
<h2 id="_3-为什么选择前端工程师" tabindex="-1"><a class="header-anchor" href="#_3-为什么选择前端工程师" aria-hidden="true">#</a> 3 为什么选择前端工程师</h2>
<p><strong>用户体验</strong></p>
<p>前端是接近用户的工程师。流畅友好的交互，精致的外观才能打动用户，为用户带来一次舒适的浏览体验。</p>
<p><strong>富有挑战</strong></p>
<p>既要注重用户体验，又要注重代码结构和性能，同时前端的发展日新月异。</p>
<p><strong>有趣</strong></p>
<p>每一段代码都能展现出不一样的界面，开发出精美的界面会有很大的成就感。</p>
<p><strong>大前端</strong></p>
<p>将为了提升用户体验的技术归为一类。要求：更广的知识面、紧跟新的技术</p>
<h2 id="_4-学习路线" tabindex="-1"><a class="header-anchor" href="#_4-学习路线" aria-hidden="true">#</a> 4. 学习路线</h2>
<p>在课题组内会有不定期的开发培训课程；跟随网上的案例和教学视频；遇到问题去stack overflow、github、思否、MDN等查知识；看书籍体系化和官方文档，保持输入和总结归纳输出的习惯，将学到的内容转换为文字输出。SVN、约定逻辑数据库字段类型、postman、公共技术文档、和数据库字段说明excel</p>
<p>学习 <strong>产品</strong> 和 <strong>设计</strong> 。学习产品思维，会帮助你从用户的角度审查你开发的产品，找出用户体验不优、交互不好的地方；而学习设计，则帮助你分析不优的地方的原因，并找出解决方案。</p>
<h2 id="_5-职业规划" tabindex="-1"><a class="header-anchor" href="#_5-职业规划" aria-hidden="true">#</a> 5. 职业规划</h2>
<p>在选择前端作为自己的方向的时候，有考虑过自己的职业规划的。我期望能在未来三到五年，逐步深入，成为技术专家。所以在学习之初，就尽可能比较系统的学习，学习资料也尽可能在权威的技术文档网站比如MDN、相关技术官网上以及比较经典的书籍《你不知道的JavaScript》中获取，避免知识不全面和不深入。</p>
<p>在项目组的分工和工作上，尽可能协调出比较统一的开发方式，比如技术文档的撰写、代码规范，以此让自己养成良好的习惯。</p>
<p>并且我认为，日后大前端应该是发展的一个趋势，将所有为了提升用户体验的技术归为一类，这就要求前端工程师拥有更广的知识面。我希望在最近几年的工作中，技术广度和深度相结合，一方面让自己更好更快的成长，一方面让自己更好的适应团队，适应业务。在做业务的过程中，不断学习和反思，控制自己的代码规范，逐步深入学习相关技术，让技术为业务赋能。同时也希望能在工作的过程中学习产品和设计，从用户角度审查开发的产品，找出用户体验不优的地方，学习设计，分析出问题出现的原因，并找出解决方案，以期望最后成为技术专家。</p>
<h2 id="_6-项目" tabindex="-1"><a class="header-anchor" href="#_6-项目" aria-hidden="true">#</a> 6. 项目</h2>
<h3 id="基于物联网的智能精准烘烤系统" tabindex="-1"><a class="header-anchor" href="#基于物联网的智能精准烘烤系统" aria-hidden="true">#</a> 基于物联网的智能精准烘烤系统</h3>
<h4 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h4>
<p>烟叶烘烤是将田间生长达到一定程度的鲜烟叶，放置在烘烤设备内，施以必要的温湿度条件，保持一定的时间，将烟叶的全部优良形状充分显露发挥出来的过程。烘烤调制是决定烟叶最终质量和可用性的一个重要环节。具有一定潜在质量的鲜烟叶也必须经过烘烤过程的转化，其优良品质才能表现出来，才具有使用价值和经济效益。</p>
<p>目前烟叶烘烤过程变黄与干燥状态依旧是以人的眼和手等感官为基础进行主观判断并控制烤房内的密集烘烤设备，烘烤进程中的操作仍具有较强的主观性，由于不同素质烟叶在烘烤过程中变黄与干燥的形态差异较大，加之技术人员之间的主观判断标准不一致，导致密集烘烤设备只是在技术人员的主观判断下进行温湿度控制，而烘烤工艺执行中存在严重的超前或滞后现象。随着物联网等信息智能技术的发展，利用计算机视觉代替人类感官系统，实现密集烘烤过程烟叶变黄与干燥状态的精确判断，对于指导烘烤操作具有实际意义。</p>
<p>本项目通过运用图像识别、物联网、大数据/云平台，人工智能等技术，实现烘烤工艺“烤前数字化精准制定”、“烤中精准调控”、“烤后科学优化”、“远程实时管理”的智能精准化，提高烘烤管理水平和烟叶烘烤质量，降低烘烤环节损失。</p>
<p>通过研发采控一体自控仪，实时采集烤房内烘烤信息，包括烤房内温度、湿度、烟叶重量、烟叶图像等数据上传到云平台；研发烟叶智能化烘烤云平台，开发手机APP，具体功能包括烟叶烘烤状态实时查询、烘烤工艺参数调控、关键指标偏差预警，鲜烟信息、烤后烟叶质量及问题录入等功能，并将APP根据权限设计界面，供烟农、烘烤指导人员、管理人员分权限使用。</p>
<p>WEB端依据烘烤相关层级可分为省市区、网格（名称、编号、地理位置）、烤房（名称、编号、状态、地理位置、所属网格）、控制器（名称、编号、工作时间、工作状态）、批次（批次曲线、批次数据和图像）等，批次分为实时烘烤批次信息和历史批次信息；依据权限层级可分为省市区超级管理员、省市区管理员和技术员以及烟农，各自拥有的权限不同，可看到的菜单、对应烤房以及批次信息也有所区别。比如武汉市相关人员无法访问到宜昌市对应数据。</p>
<h4 id="问题-前端路由和后端路由" tabindex="-1"><a class="header-anchor" href="#问题-前端路由和后端路由" aria-hidden="true">#</a> 问题：前端路由和后端路由：</h4>
<p>后端路由又可称之为服务器端路由，通过url找到对应的映射函数，进行相应的数据处理，根据读取的数据对页面进行渲染，在返回渲染完毕的页面。好处是安全性好，缺点是服务器压力较大，用户体验稍低。</p>
<p>前端路由：路由的映射函数通常是进行dom的显示和隐藏。所以访问不同的路径的时候会显示不同的页面组件，这个过程可以不向后台发送请求而实现页面变化，减少服务器的压力。</p>
<p>因为是基于Vue开发的web端，开发的时候是前后端分离的方式</p>
<p>优点：用户体验好，减少了服务器压力</p>
<p>实现：<strong>基于hash</strong>和history API的形式</p>
<p>在url中的#后面添加相应的内容对应不同的页面，选择这个的原因：兼容性好，不需要对服务器进行相应的改动，也比较直观</p>
<p>缺陷：不那么美观</p>
<p>Vue相关：Vue生命周期</p>
<p>实例对象从创建到销毁的过程。在生命周期的不同阶段调用对应的钩子函数实现组件数据管理和DOM渲染</p>
<h3 id="变电站关键设备工程质量管控系统开发" tabindex="-1"><a class="header-anchor" href="#变电站关键设备工程质量管控系统开发" aria-hidden="true">#</a> 变电站关键设备工程质量管控系统开发</h3>
<h4 id="背景-1" tabindex="-1"><a class="header-anchor" href="#背景-1" aria-hidden="true">#</a> 背景</h4>
<p>​      本项目是和电力科学研究院合作的科研项目。电力设备由于其特殊性，一旦出现问题所影响的范围较大，所以是否能够正常运行受到格外的关注。电力设备的安装质量是设备正常运行的关键。每年都有大量的未严格按规范要求安装所造成的设备运行故障问题。安装环节存在的问题主要有：安装人员素质参差不齐，个别人员无证上岗；安装过程未严格执行相关安装规范；安装所用材料和设备不达标；安装环境控制不合理。</p>
<p>​       同时，在电力设备安装质量监管方面，缺乏有效的方法和手段，比如：大部分工程采用纸质文档等人工方式记录，效率低下，资料不易保存；对一些关键工序无法做到监管和追溯；对一些工艺质量好坏缺乏量化指标等。考虑到以上问题，我们借助信息化手段，力图有效加强电力设备安装质量监管，以减少电力设备故障问题。</p>
<p>本项目对电力设备安装的人员，材料，机械，方法和环境几个环节进行全方位监管，建立电力设备安装质量监管平台。项目主要分为项目管理模块，设备资源模块，其他基础管理模块。项目管理模块主要为：甲方通过该系统发布施工项目，指定施工方和监管方，在平台上上传项目类型、项目步骤要求、项目评价规则等项目信息，施工方通过app可同步查看到操作步骤和操作注意事项，施工过程需要上传施工照片作为备案。同时由监管摄像头全程录像，web可实时查看施工过程，也可追溯已完成项目的视频信息。通过数据+照片+视频的方式，实现施工监管和流程追溯。施工完成后，由甲方、施工方和监管方对该施工项目进行评分，形成针对该项目的评价，可为后期排名、数据挖掘提供数据基础。</p>
<p>从用户权限角度划分的话，可分为甲方、施工方和设备制造商，施工过程的监管人员可由除了施工方的其他角色担任。这使得系统的权限划分上较为清晰。不同人员进入该系统可看到的页面和数据不一样。甲方可以查看到所有发布的项目、各施工队施工评价排名、施工过程信息等，施工方、设备制造商只能看到自己负责的项目信息以及对应的人员管理，最大限度避免了非必要信息的共享。</p>
</template>
