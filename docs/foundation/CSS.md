## 1. CSS概念

层叠样式表，多个样式可以作用在同一个`html`元素上，同时生效

降低耦合度、分工协作更容易、提高开发效率

## 2 快速入门

### 2.1 引入CSS

CSS优先级：（就近原则）1>2>3（前提（实际开发也是这样）：嵌入式`css`样式位置在外部式后面）

**1.内联模式**

在标签内使用style属性指定`css`代码

如：`<div style="color: red;">hello css</div>`

不推荐

**2.内部样式**

在`head`便签内，定义`style`标签，`style`标签的标签体内容就是`css`代码

```html
<style type="text/css">
	div{color: blue;}
</style>
<div>
	hello css
</div>
```

**3.外部样式**

1.定义`css`资源文件(创建一个`css`文件)

```css
div {
	color: gold;
}
```

2.在head标签内定义link标签引入外部资源

如：`<link rel="stylesheet" type="text/css" href="a.css"/>`**一般位于文档头部**

`rel="stylesheet" type="text/css" `是固定的写法 不可以修改

1，2，3中作用范围越来越大;1方式不常用，2，3比较常用

第三种格式可以改写为
```html
<style>
    @import "css/a.css";
</style>
```

### 2.2 CSS选择器

选择器｛

​	属性名1：属性值1；

​	属性名2：属性值2；

｝

选择器：筛选具有相似特征的元素

**每一对属性需要用；隔开，最后一对可以不需要**

**选择器** 

基础选择器（优先级：内联选择器>id选择器>类选择器>标签选择器>通配符选择器）

​		**id选择器**：选择具体的id属性值的元素，建议在一个html页面中id值唯一。在一个文档中只能用一次

​		语法:#id属性值｛｝

​		**元素选择器**:选择具有相同标签名称的元素

​		语法:标签名称｛｝

​		**注意：id选择器优先级高于元素选择器，比如定义了div颜色又定义了id选择器，会优先按照id选择器设定的内容更改**

​		**类选择器**:选择具有相同class属性值的元素

​		语法:.class属性值｛｝

​		**注意:类选择器优先级高于元素选择器 id选择器优先级大于类选择器**

扩展选择器

​		**选择所有元素**

​		语法：*{}

​		**并集选择器**

​		选择器1，选择器2｛｝

​		**子选择器**（筛选选择器1下的选择器2进行操作）

​		语法：选择器1 选择器2｛｝

​		**父选择器**（筛选选择器2的父元素选择器1，就是只作用于选择器2的父选择器1，即使选择器1有同名的）

​		语法：选择器1>选择器2    

​		**属性选择器**：选择属性名称，属性名=属性值的元素(一般用于input标签 )

​		语法：元素名称[属性名=“属性值”]｛｝

​		**伪类选择器**：选择一些元素具有的状态

​		语法：元素：状态｛｝

​		如：`<a>（链接）`

​		状态：

​			`link`：初始化的状态

​			`visited`：被访问过的状态

​			`active`：正在访问状态

​			`hover`：鼠标悬浮状态

### 2.3 CSS属性

**1.字体 文本**

​		`font-size`：字体大小

​		`color`：文本颜色

​		`text-align`：对齐方式 center，left，right

​		`line-height`：行高，用em代表一个字体的大小

​		`font-family`：字体

​		`font-weight`：字体粗细；bold：粗；400等同于normal；700等同于bold；数字后面不跟单位

​		`font-style`：字体样式；normal：默认正常；italic：设置本身字体就有倾斜的样式时，让字体变为斜体；`oblique`：强制把所有字体倾斜

​		`text-decoration`：设置添加到文本的修饰

​			underline overline line-through

​		`text-indent`：段前空格

当需要设置多项属性，可以使用缩写。但是至少要保证字体大小行间距和中英文字体样式（缩写严格按照以下语法顺序：

`body{font：font-style font-weight font-size/line-height font-family}`

长度单位的一个特殊情况：

给font-size设置单位为em的时候，计算标准以p的父元素的font-size为基础。

**2.背景**

`background`：复合属性

**3.边框**

`border`：设置边框，复合属性，即上下左右边框都可以设置

可以单独只为一个边设置边框：`border-bottom；border-top；border-right；border-left；`

`border-style：dashed(虚线)，dotted（点线），solid（实线）`

`border-radius`：圆角，数值有四个 依次为左上右上右下左下

**4.尺寸**

`width`：宽度

`height`：高度

**5.中文字间隔和字母间隔**

`letter-spacing`：字母与字母之间的间隔

`word-spacing`：单词间距间隔

**6.布局模型**

flow layer float

flow：流动模型：所有块状元素自上而下排列（每一个块状元素默认是占着一行）块状元素中的内联元素是从左到右排列

float：浮动模型：

**7.层模型**

定位=定位模式+边偏移

绝对定位：`position:absolute `

​		没有父元素或者父元素没有定位，就用浏览器作为父元素；会脱标

相对定位：`position:relative`

​		（不脱标，就是还保留着原来位置）相对于以前的自己的位置的移动，偏移前的位置保留不动。即div元素产生偏移但是以前的位置还保留着 所以后面的span元素显示在了div元素以前的位置

**子绝父相：**

​		子级是绝对定位的话，父级要用相对定位

​		子级绝对定位不会占有位置，可以放在父盒子任一个地方

​		父盒子需要加定位限制子盒子在父盒子内

​		父盒子布局时需要占有位置，因此只能相对定位

固定定位：`position:fixed`

​		（会脱标）即将这个块状元素始终固定在页面的某一个位置，不随着浏览器流动的影响，比如网页的小广告

​		固定在版心右侧位置：

​		让固定定位的盒子left：50% 走到浏览器可视区的一半位置

​		让固定定位的盒子margin-left：版心宽度的一半距离，多走版心宽度的一半位置

粘性定位：

​		选择器{ position: sticky; top: 10px；}）

​		特点：

​		以浏览器的可视窗口为参照点移动元素（固定定位特点）

​		粘性定位占有原先的位置

​		必须添加top left right bottom的一个才有效 

relative和absolute相结合，实现以relative为定位基准,

​		参照定位的元素必须是相对定位元素的前辈元素

​		`<div id="box1"><div id="box2"></div></div>`

​		同时参照定位元素必须加入`position：relative；`

​		此外定位元素加入`position：absolute` 就可以进行偏移定位

定位叠放次序z-index

​		使用z-index来控制盒子的前后次序（z轴）盒子越大越靠上，如果没有指定就按照后来者居上

​		语法：

​		选择器 {z-index： 1；}没有单位，只有定位的盒子才有z-index属性

绝对定位的盒子水平居中

​		先移动left：50% 父容器宽度的一半

​		再向左移动自身的一半像素

定位的特殊特性

​		绝对定位和固定定位同浮动类似

​			行内元素添加绝对或者固定定位，可以直接设置高度和宽度

​			块级元素添加绝对或者固定定位 如果不给宽度或者高度，默认大小是内容的大小（相当于背景色）

​			脱标的盒子不会触发外边距塌陷

​			浮动元素、绝对定位元素都不会触发外边距合并的问题

​		绝对定位（固定定位）会完全压住盒子

​			浮动元素不同，只会压住它下面标准流的盒子，但是不会压住下面标准流盒子里面的文字（图片）

​			但是绝对定位就会

​		如果一个盒子既有left属性也有right属性 默认执行left属性

**8. 元素的显示与隐藏**

1.`display`：用于设置一个元素如何显示

`display:none`；隐藏元素（不占有位置）用的多

`display:block`；转化为块元素，同时显示元素

2.`visibility:visible`看见

`visibility:hidden`(占有位置)

3.`overflow`:溢出

`visible auto`（自动判断要不要） `hidden scroll`（滚动条）

**9. 弹性盒模型**

flex模型实现将块元素在一行显示

1.在父元素上设置`display：flex`属性把块级元素在一排显示

2.子元素排列默认从左到右，与父元素左边没有间隙

对flex模型内的元素横轴排列方式设置`justify-content`

`flex-start`:起点对齐

`flex-end`:右对齐

`center`:居中对齐

`space-around`:项目两侧间隔相等

对flex模型内的元素竖轴排列方式设置`align-items`

`flex-start`：默认左对齐（左上）

`flex-end`：交叉轴的终点对齐（左下）

`center`：交叉轴的中点对齐（左中）

`baseline`：项目的第一行文字基线对齐：和文字大小有关系

`stretch`：默认值，占满容器整个容器高度 

对flex模型的子元素设置占比

flex：设置子元素相对于父元素的占比，只能是正整数表示占比多少，设置后宽度属性会失效

**10.水平居中设置**

行内元素：被设置元素是文本/图片等行内元素时，水平居中是通过给父元素设置`text-align:center`实现的

定宽块状元素：即块状元素的宽度固定

通过设置左右`margin`值为`auto`实现

已知宽高实现盒子水平垂直居中

先使用父类和子类的相对绝对关系实现第一步，接着把子类设置为top：50%；left：50；此时满足子类左上角位于中心。接着使用margin把子类中心移到父类中心：`margin：-高/2 0 0 -宽/2`；

宽高不定实现盒子水平垂直居中

利用父元素设置相对定位子元素设置绝对定位

子元素设置上和左偏移50%

使用css3的属性translate位移给上和左都位移-50%

 !important:设置最高权值，!important需要在分号前面。

`p{color:red !important;}`

**11. 元素分类**

1.块级元素

特点：每个块级元素都从新的一行开始，并且其后的元素也另起一行

元素的高度 宽度 行高以及顶和底边距都可设置

元素宽度在不设置的时候是本身父容器的100%，除非设定一个宽度

2.内联元素

特点：和其他元素在同一行，但是内联元素之间会有一定的间隔

元素的高度 宽度及顶部和底部边距不可设置

元素的宽度就是它包含的文字或者图片的宽度，不可改变

3.内联块状元素

特点：和其他元素都在一行上

元素的高度 宽度 行高以及顶和底边距都可设置

**CSS书写顺序**

1.实际开发中不会直接用链接a而是用li包含链接（li+a）的做法

 建议遵循以下顺序：

1.布局定位属性：`display / position / float / clear / visibility / overflow`

2.自身属性：`width / height / margin / padding / border / background`

3.文本属性：`color / font / text-decoration / text-align / vertical-align / white-space / break-word`

4.其他属性：`content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient` 