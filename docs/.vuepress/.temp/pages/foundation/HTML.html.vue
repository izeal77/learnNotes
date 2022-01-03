<template><h2 id="_1-html-概念" tabindex="-1"><a class="header-anchor" href="#_1-html-概念" aria-hidden="true">#</a> 1. HTML 概念</h2>
<p>概念：最基础的网页开发语言。是一种超文本标记语言：超文本（用超链接的方法，将各种不同空间的文字信息组织在一起的网状文本）；标记语言（由标签构成的语言。&lt;标签名称&gt; 如 <code>html</code>，<code>xml</code>；标记语言不是编程语言，没有逻辑性）</p>
<h2 id="_2-快速入门" tabindex="-1"><a class="header-anchor" href="#_2-快速入门" aria-hidden="true">#</a> 2. 快速入门</h2>
<p><strong>标签是成对出现的，分为围堵标签和自闭和标签；标签可以嵌套；开始标签内可以定义属性，属性由键值对构成，值需要引号引起来；<code>html</code> 不区分大小写，但是一般用小写；<code>head</code>标签一般用来嵌套 <code>meta</code> <code>title</code> <code>style</code></strong></p>
<p>生成标签：直接输入标签名，按 <code>tab</code> 键</p>
<p>生成多个相同标签：加上*；比如 <code>div*3</code></p>
<p>有父子级关系的标签，用&gt;；比如 <code>ul&gt;li</code></p>
<p>有兄弟关系的标签，用+；比如 <code>div+p</code></p>
<p>生成带类或者 id 名字的，直接写<code>.demo</code> 或者<code>#two</code>，再按 <code>tab</code></p>
<p>生成 <code>div</code> 类名有顺序，用自增符号$</p>
<p>生成的标签内部写内容可以用{}表示</p>
<p>按住 <code>shift+alt</code> 下拉可以选中这一列内容批量处理</p>
<h2 id="_3-语法" tabindex="-1"><a class="header-anchor" href="#_3-语法" aria-hidden="true">#</a> 3. 语法</h2>
<h3 id="_3-1-标签" tabindex="-1"><a class="header-anchor" href="#_3-1-标签" aria-hidden="true">#</a> 3.1 标签</h3>
<p><strong>文件标签</strong>：构成 <code>html</code> 最基础的标签</p>
<p><code>html</code>：文档的根标签</p>
<p><code>head</code>：头标签，用于指定 html 文档的一些属性；引入外部的资源</p>
<p><code>title</code>：标题标签</p>
<p><code>body</code>：体标签</p>
<p><code>&lt;!DOCTYPE html&gt;</code>：定义文档类型是 html</p>
<p><strong>文本标签</strong>：和文本有关的标签</p>
<p>注释：<code>&lt;!-- 注释内容 --&gt;</code></p>
<p><code>&lt;h1&gt;to&lt;h6&gt;</code>：标题标签，比如<code>&lt;h1&gt;内容&lt;/h1&gt;</code></p>
<p><code>&lt;p&gt;</code>：段落标签。</p>
<p><code>&lt;br/&gt;</code>：换行</p>
<p><code>&lt;strong&gt;</code>：加粗</p>
<p><code>&lt;em&gt;</code>：倾斜</p>
<p><code>&lt;del&gt;</code>：删除线</p>
<p><code>&lt;hr/&gt;</code>：显示一条水平线：</p>
<p>属性：<code>color</code> 颜色；</p>
<p><code>width</code> 长度；</p>
<p><code>size</code> 高度；</p>
<p><code>align</code> 对齐方式（<code>midden left right</code>）</p>
<p><code>&lt;b&gt;</code>：字体加粗</p>
<p><code>&lt;i&gt;</code>：字体倾斜</p>
<p><code>&lt;font&gt;</code>：字体标签，可以使用 <code>size color face</code>（字体类型）</p>
<p><code>&lt;center&gt;</code>：文本居中</p>
<p>属性：<code>color</code>（推荐使用#FFFFFF 这样的）；</p>
<p><code>width</code>：数值：<code>width='20'</code>(单位默认是像素 px)；百分比：相对于父类的百分比占比</p>
<p><strong>图片标签</strong>：</p>
<p><code>&lt;img src=&quot;image.jpg&quot; align=&quot;middle&quot; alt=&quot;日落&quot; title=&quot;日落&quot;/&gt;</code></p>
<p><code>alt</code>：当图片加载失败出现 alt 中的内容</p>
<p><code>title</code>：在图像可见的时候对图像的描述</p>
<p><strong>列表标签</strong>：</p>
<p>有序列表<code>&lt;ol&gt;&lt;li&gt;&lt;/li&gt;&lt;/ol&gt;</code></p>
<p>无序列表<code>&lt;ul&gt;&lt;li&gt;&lt;/li&gt;&lt;/ul&gt;</code></p>
<p>描述列表：一般是一个 <code>dt</code> 对应多个 <code>dd</code> <code>&lt;dl&gt;&lt;dt&gt;&lt;dd&gt;&lt;/dd&gt;&lt;/dt&gt;&lt;/dl&gt;</code></p>
<p><strong>链接标签</strong>：定义一个超链接：<code>&lt;a&gt;</code></p>
<p>属性：<code>href</code>：访问资源的<code>url</code>(统一资源定义符)；当<code>href=&quot;javascript:void(0);&quot;</code>不跳转</p>
<p>指向文件：把<code>href</code>指向文件路径</p>
<p><code>target</code>：指定打开资源的方式；（<code>_self</code>：当前页面打开；<code>_blank</code>：在新页面打开）</p>
<p><code>&lt;a href=&quot;https://www.baidu.com/&quot; target=&quot;_self&quot;&gt;click&lt;/a&gt;</code></p>
<p><code>mailto</code>：邮箱地址，自动打开邮箱软件并填写地址</p>
<h3 id="_3-2-http-结合-css" tabindex="-1"><a class="header-anchor" href="#_3-2-http-结合-css" aria-hidden="true">#</a> 3.2 HTTP 结合 CSS</h3>
<p><code>div</code>和<code>span</code>：每个 <code>div</code> 占一整行，分行显示，块级标签，相当于一个容器；<code>span</code> 是将文本信息在一行展示，行内标签（内联标签），没有语义，为了设置单独的样式</p>
<p><code>section</code>：定义一个区段</p>
<p><code>aside</code>：定义一个区段侧边栏区域</p>
<p><strong>表格标签：</strong></p>
<p><code>table</code>定义表格</p>
<p>属性：<code>border</code> 边框粗细</p>
<p><code>width</code> 表格占了界面的多少百分比</p>
<p><code>cellspacing=&quot;1&quot;</code> 表格边框之间的距离，0 表示单元格边框合为一体</p>
<p><code>cellpadding=&quot;20&quot;</code> 表格内文字和表格边框距离</p>
<p><code>backgroundcolor=&quot;aliceblue&quot;</code> 背景颜色</p>
<p><code>align=&quot;center&quot;</code> 对齐方式</p>
<p><code>tr</code>定义行</p>
<p>属性：<code>bgcolor=&quot;aliceblue&quot;</code> 背景颜色</p>
<p><code>align=&quot;center&quot;</code>对齐方式（文本对齐方式）</p>
<p><code>td</code>定义单元格</p>
<p><code>colspan</code>：合并列</p>
<p><code>rowspan</code>：合并行</p>
<p><code>th</code>定义首行</p>
<p><code>&lt;caption&gt;</code> 定义表格标题（定义了之后在头部分的改动对体部分不影响）</p>
<p><code>&lt;thead&gt;</code>：表格的头部分</p>
<p><code>&lt;tbody&gt;</code>：表示表格的体部分</p>
<p><code>&lt;tfoot&gt;</code>：表示表格脚部分</p>
<p>可以把表格分块展示，如果不加这些东西，需要等待表格加载完才显示，可以支持独立于表格标题和页脚的表格正文进行滚动，当长的表格被打印的时候表格的表头和页脚可以被打印在每张页面上</p>
<p>使用行和列的标题：<code>scope</code> 可以添加在<code>&lt;th&gt;</code>中，比如<code>&lt;th scope=&quot;col&quot;&gt;内容&lt;/th&gt;</code>或者<code>&lt;th scope=&quot;row&quot;&gt;内容&lt;/th&gt;</code></p>
<p><strong>表单标签</strong>：用来采集用户输入的数据，用于和服务器进行交互。</p>
<p><code>&lt;form method=&quot;传送方式&quot; action=&quot;服务器文件&quot;&gt;</code></p>
<p>使用标签：<code>from</code>：可以定义一个范围，范围代表采集用户数据的范围</p>
<p>属性：<code>action</code>：指定提交数据的 <code>URL</code></p>
<p><code>method</code>：指定提交方式</p>
<p>分类：7 种，常用的 2 种：<strong>表单项中的数据要想被提交：必须指定 name 属性</strong></p>
<p><code>get</code>：</p>
<p>1.请求参数会在地址栏显示，会封装在请求行中；</p>
<p>2.请求参数大小有限制；</p>
<p>3.不太安全（地址栏会显示相关信息）</p>
<p><code>post</code>：</p>
<p>1.请求参数不会在地址栏显示，会封装在请求体中（<code>HTTP</code> 协议后讲解）；</p>
<p>2.请求参数大小没有限制；</p>
<p>3.相对安全（地址栏不会显示相关信息）</p>
<p><strong>表单项标签</strong></p>
<p><code>input</code>：可以通过 <code>type</code> 改变元素展示的方式</p>
<p><code>type</code>：</p>
<p><code>text</code>：文本输入框，默认；也有 <code>value</code>；提示语用 <code>placeholder</code>：指定输入框的提示信息，当输入框内容发生变化，会自动清空</p>
<p><code>passport</code>：密码输入，会隐藏输入；也有 <code>value</code></p>
<p><code>number</code>：只能输入数字</p>
<p><code>url</code>：网址</p>
<p><code>email</code>：邮箱</p>
<p><code>radio</code>：单选框，注意：要想实现单选，<code>name</code> 值要一样；一般会给每一个单选框提供 <code>value</code> 的属性，给服务器判断；默认选中可以使用 <code>checked</code></p>
<p><code>checkbox</code>：复选框，也需要指定 <code>value</code>；默认选中可以使用 <code>checked</code>，即默认值</p>
<p><code>file</code>：文件选择框</p>
<p><code>hidden</code>：隐藏域，用于提交一些信息</p>
<p>按钮：</p>
<p><code>submit</code>：提交按钮，提交表单</p>
<p><code>button</code>：普通按钮</p>
<p><code>image</code>：图片提交按钮</p>
<p><code>scr</code>属性指定图片路径，也可以提交表单</p>
<p><code>label</code>：指定输入项的文字描述信息</p>
<p><code>label</code>的 <code>for</code> 属性一般会和 <code>input</code> 的 <code>id</code> 属性值对应，对应了，则点击 <code>label</code> 区域，会让 <code>input</code> 聚焦到输入框</p>
<p><code>select</code>：下拉列表 ；子元素：<code>option</code> 用来指定列表项；默认的话加入 <code>selected</code> 即可</p>
<p>例：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>省份:
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>province<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>--请选择--<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>北京<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>西安<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>上海<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>textarea</code>：文本域</p>
<p><code>&lt;textarea rows=&quot;行数&quot; cols=&quot;列数&quot;&gt;文本&lt;/textarea&gt;</code></p>
<p><code>cols</code>：指定列数，每一行多少个字符</p>
<p><code>rows</code>：默认多少行，不够自动扩容</p>
<h2 id="_4-dhtml" tabindex="-1"><a class="header-anchor" href="#_4-dhtml" aria-hidden="true">#</a> 4. DHTML</h2>
<p>动态 <code>HTML</code>，指的是使用客户端脚本语言将静态的 <code>HTML</code> 内容变成动态的技术的总称。动态 <code>HTML</code> 技术是通过调用客户端脚本语言 <code>js</code>，利用 <code>DOM</code> 可指定欲发生动态变化的 <code>HTML</code> 元素。</p>
<p>一些概念：</p>
<p><strong>HTML</strong>：超文本标记语言</p>
<p><strong>CSS</strong>：层叠样式表</p>
<p><strong>DOM</strong>：文档对象模型</p>
<p><strong>CGI</strong>：通用网关接口</p>
<p><strong>XML</strong>：可扩展标记语言，可自定义扩展标签</p>
<p><strong>JSON</strong>：是一种以 JS 的对象表示法为基础的轻量级数据标记语言。能够处理 <code>false</code> <code>null</code> <code>true</code> 对象 数组 数字 字符串七种类型。其键值对都需要双引号。</p>
</template>
