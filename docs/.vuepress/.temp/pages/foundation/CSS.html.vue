<template><h2 id="_1-css概念" tabindex="-1"><a class="header-anchor" href="#_1-css概念" aria-hidden="true">#</a> 1. CSS概念</h2>
<p>层叠样式表，多个样式可以作用在同一个<code>html</code>元素上，同时生效</p>
<p>降低耦合度、分工协作更容易、提高开发效率</p>
<h2 id="_2-快速入门" tabindex="-1"><a class="header-anchor" href="#_2-快速入门" aria-hidden="true">#</a> 2 快速入门</h2>
<h3 id="_2-1-引入css" tabindex="-1"><a class="header-anchor" href="#_2-1-引入css" aria-hidden="true">#</a> 2.1 引入CSS</h3>
<p>CSS优先级：（就近原则）1&gt;2&gt;3（前提（实际开发也是这样）：嵌入式<code>css</code>样式位置在外部式后面）</p>
<p><strong>1.内联模式</strong></p>
<p>在标签内使用style属性指定<code>css</code>代码</p>
<p>如：<code>&lt;div style=&quot;color: red;&quot;&gt;hello css&lt;/div&gt;</code></p>
<p>不推荐</p>
<p><strong>2.内部样式</strong></p>
<p>在<code>head</code>便签内，定义<code>style</code>标签，<code>style</code>标签的标签体内容就是<code>css</code>代码</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
	<span class="token selector">div</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
	hello css
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>3.外部样式</strong></p>
<p>1.定义<code>css</code>资源文件(创建一个<code>css</code>文件)</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>2.在head标签内定义link标签引入外部资源</p>
<p>如：<code>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;a.css&quot;/&gt;</code><strong>一般位于文档头部</strong></p>
<p><code>rel=&quot;stylesheet&quot; type=&quot;text/css&quot; </code>是固定的写法 不可以修改</p>
<p>1，2，3中作用范围越来越大;1方式不常用，2，3比较常用</p>
<p>第三种格式可以改写为</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token atrule"><span class="token rule">@import</span> <span class="token string">"css/a.css"</span><span class="token punctuation">;</span></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-2-css选择器" tabindex="-1"><a class="header-anchor" href="#_2-2-css选择器" aria-hidden="true">#</a> 2.2 CSS选择器</h3>
<p>选择器｛</p>
<p>​	属性名1：属性值1；</p>
<p>​	属性名2：属性值2；</p>
<p>｝</p>
<p>选择器：筛选具有相似特征的元素</p>
<p><strong>每一对属性需要用；隔开，最后一对可以不需要</strong></p>
<p><strong>选择器</strong></p>
<p>基础选择器（优先级：内联选择器&gt;id选择器&gt;类选择器&gt;标签选择器&gt;通配符选择器）</p>
<p>​		<strong>id选择器</strong>：选择具体的id属性值的元素，建议在一个html页面中id值唯一。在一个文档中只能用一次</p>
<p>​		语法:#id属性值｛｝</p>
<p>​		<strong>元素选择器</strong>:选择具有相同标签名称的元素</p>
<p>​		语法:标签名称｛｝</p>
<p>​		<strong>注意：id选择器优先级高于元素选择器，比如定义了div颜色又定义了id选择器，会优先按照id选择器设定的内容更改</strong></p>
<p>​		<strong>类选择器</strong>:选择具有相同class属性值的元素</p>
<p>​		语法:.class属性值｛｝</p>
<p>​		<strong>注意:类选择器优先级高于元素选择器 id选择器优先级大于类选择器</strong></p>
<p>扩展选择器</p>
<p>​		<strong>选择所有元素</strong></p>
<p>​		语法：*{}</p>
<p>​		<strong>并集选择器</strong></p>
<p>​		选择器1，选择器2｛｝</p>
<p>​		<strong>子选择器</strong>（筛选选择器1下的选择器2进行操作）</p>
<p>​		语法：选择器1 选择器2｛｝</p>
<p>​		<strong>父选择器</strong>（筛选选择器2的父元素选择器1，就是只作用于选择器2的父选择器1，即使选择器1有同名的）</p>
<p>​		语法：选择器1&gt;选择器2</p>
<p>​		<strong>属性选择器</strong>：选择属性名称，属性名=属性值的元素(一般用于input标签 )</p>
<p>​		语法：元素名称[属性名=“属性值”]｛｝</p>
<p>​		<strong>伪类选择器</strong>：选择一些元素具有的状态</p>
<p>​		语法：元素：状态｛｝</p>
<p>​		如：<code>&lt;a&gt;（链接）</code></p>
<p>​		状态：</p>
<p>​			<code>link</code>：初始化的状态</p>
<p>​			<code>visited</code>：被访问过的状态</p>
<p>​			<code>active</code>：正在访问状态</p>
<p>​			<code>hover</code>：鼠标悬浮状态</p>
<h3 id="_2-3-css属性" tabindex="-1"><a class="header-anchor" href="#_2-3-css属性" aria-hidden="true">#</a> 2.3 CSS属性</h3>
<p><strong>1.字体 文本</strong></p>
<p>​		<code>font-size</code>：字体大小</p>
<p>​		<code>color</code>：文本颜色</p>
<p>​		<code>text-align</code>：对齐方式 center，left，right</p>
<p>​		<code>line-height</code>：行高，用em代表一个字体的大小</p>
<p>​		<code>font-family</code>：字体</p>
<p>​		<code>font-weight</code>：字体粗细；bold：粗；400等同于normal；700等同于bold；数字后面不跟单位</p>
<p>​		<code>font-style</code>：字体样式；normal：默认正常；italic：设置本身字体就有倾斜的样式时，让字体变为斜体；<code>oblique</code>：强制把所有字体倾斜</p>
<p>​		<code>text-decoration</code>：设置添加到文本的修饰</p>
<p>​			underline overline line-through</p>
<p>​		<code>text-indent</code>：段前空格</p>
<p>当需要设置多项属性，可以使用缩写。但是至少要保证字体大小行间距和中英文字体样式（缩写严格按照以下语法顺序：</p>
<p><code>body{font：font-style font-weight font-size/line-height font-family}</code></p>
<p>长度单位的一个特殊情况：</p>
<p>给font-size设置单位为em的时候，计算标准以p的父元素的font-size为基础。</p>
<p><strong>2.背景</strong></p>
<p><code>background</code>：复合属性</p>
<p><strong>3.边框</strong></p>
<p><code>border</code>：设置边框，复合属性，即上下左右边框都可以设置</p>
<p>可以单独只为一个边设置边框：<code>border-bottom；border-top；border-right；border-left；</code></p>
<p><code>border-style：dashed(虚线)，dotted（点线），solid（实线）</code></p>
<p><code>border-radius</code>：圆角，数值有四个 依次为左上右上右下左下</p>
<p><strong>4.尺寸</strong></p>
<p><code>width</code>：宽度</p>
<p><code>height</code>：高度</p>
<p><strong>5.中文字间隔和字母间隔</strong></p>
<p><code>letter-spacing</code>：字母与字母之间的间隔</p>
<p><code>word-spacing</code>：单词间距间隔</p>
<p><strong>6.布局模型</strong></p>
<p>flow layer float</p>
<p>flow：流动模型：所有块状元素自上而下排列（每一个块状元素默认是占着一行）块状元素中的内联元素是从左到右排列</p>
<p>float：浮动模型：</p>
<p><strong>7.层模型</strong></p>
<p>定位=定位模式+边偏移</p>
<p>绝对定位：<code>position:absolute </code></p>
<p>​		没有父元素或者父元素没有定位，就用浏览器作为父元素；会脱标</p>
<p>相对定位：<code>position:relative</code></p>
<p>​		（不脱标，就是还保留着原来位置）相对于以前的自己的位置的移动，偏移前的位置保留不动。即div元素产生偏移但是以前的位置还保留着 所以后面的span元素显示在了div元素以前的位置</p>
<p><strong>子绝父相：</strong></p>
<p>​		子级是绝对定位的话，父级要用相对定位</p>
<p>​		子级绝对定位不会占有位置，可以放在父盒子任一个地方</p>
<p>​		父盒子需要加定位限制子盒子在父盒子内</p>
<p>​		父盒子布局时需要占有位置，因此只能相对定位</p>
<p>固定定位：<code>position:fixed</code></p>
<p>​		（会脱标）即将这个块状元素始终固定在页面的某一个位置，不随着浏览器流动的影响，比如网页的小广告</p>
<p>​		固定在版心右侧位置：</p>
<p>​		让固定定位的盒子left：50% 走到浏览器可视区的一半位置</p>
<p>​		让固定定位的盒子margin-left：版心宽度的一半距离，多走版心宽度的一半位置</p>
<p>粘性定位：</p>
<p>​		选择器{ position: sticky; top: 10px；}）</p>
<p>​		特点：</p>
<p>​		以浏览器的可视窗口为参照点移动元素（固定定位特点）</p>
<p>​		粘性定位占有原先的位置</p>
<p>​		必须添加top left right bottom的一个才有效</p>
<p>relative和absolute相结合，实现以relative为定位基准,</p>
<p>​		参照定位的元素必须是相对定位元素的前辈元素</p>
<p>​		<code>&lt;div id=&quot;box1&quot;&gt;&lt;div id=&quot;box2&quot;&gt;&lt;/div&gt;&lt;/div&gt;</code></p>
<p>​		同时参照定位元素必须加入<code>position：relative；</code></p>
<p>​		此外定位元素加入<code>position：absolute</code> 就可以进行偏移定位</p>
<p>定位叠放次序z-index</p>
<p>​		使用z-index来控制盒子的前后次序（z轴）盒子越大越靠上，如果没有指定就按照后来者居上</p>
<p>​		语法：</p>
<p>​		选择器 {z-index： 1；}没有单位，只有定位的盒子才有z-index属性</p>
<p>绝对定位的盒子水平居中</p>
<p>​		先移动left：50% 父容器宽度的一半</p>
<p>​		再向左移动自身的一半像素</p>
<p>定位的特殊特性</p>
<p>​		绝对定位和固定定位同浮动类似</p>
<p>​			行内元素添加绝对或者固定定位，可以直接设置高度和宽度</p>
<p>​			块级元素添加绝对或者固定定位 如果不给宽度或者高度，默认大小是内容的大小（相当于背景色）</p>
<p>​			脱标的盒子不会触发外边距塌陷</p>
<p>​			浮动元素、绝对定位元素都不会触发外边距合并的问题</p>
<p>​		绝对定位（固定定位）会完全压住盒子</p>
<p>​			浮动元素不同，只会压住它下面标准流的盒子，但是不会压住下面标准流盒子里面的文字（图片）</p>
<p>​			但是绝对定位就会</p>
<p>​		如果一个盒子既有left属性也有right属性 默认执行left属性</p>
<p><strong>8. 元素的显示与隐藏</strong></p>
<p>1.<code>display</code>：用于设置一个元素如何显示</p>
<p><code>display:none</code>；隐藏元素（不占有位置）用的多</p>
<p><code>display:block</code>；转化为块元素，同时显示元素</p>
<p>2.<code>visibility:visible</code>看见</p>
<p><code>visibility:hidden</code>(占有位置)</p>
<p>3.<code>overflow</code>:溢出</p>
<p><code>visible auto</code>（自动判断要不要） <code>hidden scroll</code>（滚动条）</p>
<p><strong>9. 弹性盒模型</strong></p>
<p>flex模型实现将块元素在一行显示</p>
<p>1.在父元素上设置<code>display：flex</code>属性把块级元素在一排显示</p>
<p>2.子元素排列默认从左到右，与父元素左边没有间隙</p>
<p>对flex模型内的元素横轴排列方式设置<code>justify-content</code></p>
<p><code>flex-start</code>:起点对齐</p>
<p><code>flex-end</code>:右对齐</p>
<p><code>center</code>:居中对齐</p>
<p><code>space-around</code>:项目两侧间隔相等</p>
<p>对flex模型内的元素竖轴排列方式设置<code>align-items</code></p>
<p><code>flex-start</code>：默认左对齐（左上）</p>
<p><code>flex-end</code>：交叉轴的终点对齐（左下）</p>
<p><code>center</code>：交叉轴的中点对齐（左中）</p>
<p><code>baseline</code>：项目的第一行文字基线对齐：和文字大小有关系</p>
<p><code>stretch</code>：默认值，占满容器整个容器高度</p>
<p>对flex模型的子元素设置占比</p>
<p>flex：设置子元素相对于父元素的占比，只能是正整数表示占比多少，设置后宽度属性会失效</p>
<p><strong>10.水平居中设置</strong></p>
<p>行内元素：被设置元素是文本/图片等行内元素时，水平居中是通过给父元素设置<code>text-align:center</code>实现的</p>
<p>定宽块状元素：即块状元素的宽度固定</p>
<p>通过设置左右<code>margin</code>值为<code>auto</code>实现</p>
<p>已知宽高实现盒子水平垂直居中</p>
<p>先使用父类和子类的相对绝对关系实现第一步，接着把子类设置为top：50%；left：50；此时满足子类左上角位于中心。接着使用margin把子类中心移到父类中心：<code>margin：-高/2 0 0 -宽/2</code>；</p>
<p>宽高不定实现盒子水平垂直居中</p>
<p>利用父元素设置相对定位子元素设置绝对定位</p>
<p>子元素设置上和左偏移50%</p>
<p>使用css3的属性translate位移给上和左都位移-50%</p>
<p>!important:设置最高权值，!important需要在分号前面。</p>
<p><code>p{color:red !important;}</code></p>
<p><strong>11. 元素分类</strong></p>
<p>1.块级元素</p>
<p>特点：每个块级元素都从新的一行开始，并且其后的元素也另起一行</p>
<p>元素的高度 宽度 行高以及顶和底边距都可设置</p>
<p>元素宽度在不设置的时候是本身父容器的100%，除非设定一个宽度</p>
<p>2.内联元素</p>
<p>特点：和其他元素在同一行，但是内联元素之间会有一定的间隔</p>
<p>元素的高度 宽度及顶部和底部边距不可设置</p>
<p>元素的宽度就是它包含的文字或者图片的宽度，不可改变</p>
<p>3.内联块状元素</p>
<p>特点：和其他元素都在一行上</p>
<p>元素的高度 宽度 行高以及顶和底边距都可设置</p>
<p><strong>CSS书写顺序</strong></p>
<p>1.实际开发中不会直接用链接a而是用li包含链接（li+a）的做法</p>
<p>建议遵循以下顺序：</p>
<p>1.布局定位属性：<code>display / position / float / clear / visibility / overflow</code></p>
<p>2.自身属性：<code>width / height / margin / padding / border / background</code></p>
<p>3.文本属性：<code>color / font / text-decoration / text-align / vertical-align / white-space / break-word</code></p>
<p>4.其他属性：<code>content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient</code></p>
</template>
