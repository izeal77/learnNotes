## 1. HTML 概念

概念：最基础的网页开发语言。是一种超文本标记语言：超文本（用超链接的方法，将各种不同空间的文字信息组织在一起的网状文本）；标记语言（由标签构成的语言。<标签名称> 如 `html`，`xml`；标记语言不是编程语言，没有逻辑性）

## 2. 快速入门

**标签是成对出现的，分为围堵标签和自闭和标签；标签可以嵌套；开始标签内可以定义属性，属性由键值对构成，值需要引号引起来；`html` 不区分大小写，但是一般用小写；`head`标签一般用来嵌套 `meta` `title` `style`**

生成标签：直接输入标签名，按 `tab` 键

生成多个相同标签：加上\*；比如 `div*3`

有父子级关系的标签，用>；比如 `ul>li`

有兄弟关系的标签，用+；比如 `div+p`

生成带类或者 id 名字的，直接写`.demo` 或者`#two`，再按 `tab`

生成 `div` 类名有顺序，用自增符号$

生成的标签内部写内容可以用{}表示

按住 `shift+alt` 下拉可以选中这一列内容批量处理

## 3. 语法

### 3.1 标签

**文件标签**：构成 `html` 最基础的标签

 `html`：文档的根标签

 `head`：头标签，用于指定 html 文档的一些属性；引入外部的资源

 `title`：标题标签

 `body`：体标签

 `<!DOCTYPE html>`：定义文档类型是 html

**文本标签**：和文本有关的标签

 注释：`<!-- 注释内容 -->`

 `<h1>to<h6>`：标题标签，比如`<h1>内容</h1>`

 `<p>`：段落标签。

 `<br/>`：换行

 `<strong>`：加粗

 `<em>`：倾斜

 `<del>`：删除线

 `<hr/>`：显示一条水平线：

 属性：`color` 颜色；

 `width` 长度；

 `size` 高度；

 `align` 对齐方式（`midden left right`）

 `<b>`：字体加粗

 `<i>`：字体倾斜

 `<font>`：字体标签，可以使用 `size color face`（字体类型）

 `<center>`：文本居中

 属性：`color`（推荐使用#FFFFFF 这样的）；

 `width`：数值：`width='20'`(单位默认是像素 px)；百分比：相对于父类的百分比占比

**图片标签**：

 `<img src="image.jpg" align="middle" alt="日落" title="日落"/>`

 `alt`：当图片加载失败出现 alt 中的内容

 `title`：在图像可见的时候对图像的描述

**列表标签**：

 有序列表`<ol><li></li></ol>`

 无序列表`<ul><li></li></ul>`

 描述列表：一般是一个 `dt` 对应多个 `dd` `<dl><dt><dd></dd></dt></dl>`

**链接标签**：定义一个超链接：`<a>`

 属性：`href`：访问资源的`url`(统一资源定义符)；当`href="javascript:void(0);"`不跳转

 指向文件：把`href`指向文件路径

 `target`：指定打开资源的方式；（`_self`：当前页面打开；`_blank`：在新页面打开）

 `<a href="https://www.baidu.com/" target="_self">click</a>`

 `mailto`：邮箱地址，自动打开邮箱软件并填写地址

### 3.2 HTTP 结合 CSS

`div`和`span`：每个 `div` 占一整行，分行显示，块级标签，相当于一个容器；`span` 是将文本信息在一行展示，行内标签（内联标签），没有语义，为了设置单独的样式

`section`：定义一个区段

`aside`：定义一个区段侧边栏区域

**表格标签：**

 `table`定义表格

 属性：`border` 边框粗细

 `width` 表格占了界面的多少百分比

 `cellspacing="1"` 表格边框之间的距离，0 表示单元格边框合为一体

 `cellpadding="20"` 表格内文字和表格边框距离

 `backgroundcolor="aliceblue"` 背景颜色

 `align="center"` 对齐方式

 `tr`定义行

 属性：`bgcolor="aliceblue"` 背景颜色

 `align="center"`对齐方式（文本对齐方式）

 `td`定义单元格

 `colspan`：合并列

 `rowspan`：合并行

 `th`定义首行

 `<caption>` 定义表格标题（定义了之后在头部分的改动对体部分不影响）

 `<thead>`：表格的头部分

 `<tbody>`：表示表格的体部分

 `<tfoot>`：表示表格脚部分

可以把表格分块展示，如果不加这些东西，需要等待表格加载完才显示，可以支持独立于表格标题和页脚的表格正文进行滚动，当长的表格被打印的时候表格的表头和页脚可以被打印在每张页面上

使用行和列的标题：`scope` 可以添加在`<th>`中，比如`<th scope="col">内容</th>`或者`<th scope="row">内容</th>`

**表单标签**：用来采集用户输入的数据，用于和服务器进行交互。

 `<form method="传送方式" action="服务器文件">`

 使用标签：`from`：可以定义一个范围，范围代表采集用户数据的范围

 属性：`action`：指定提交数据的 `URL`

 `method`：指定提交方式

 分类：7 种，常用的 2 种：**表单项中的数据要想被提交：必须指定 name 属性**

 `get`：

 1.请求参数会在地址栏显示，会封装在请求行中；

 2.请求参数大小有限制；

 3.不太安全（地址栏会显示相关信息）

 `post`：

 1.请求参数不会在地址栏显示，会封装在请求体中（`HTTP` 协议后讲解）；

 2.请求参数大小没有限制；

 3.相对安全（地址栏不会显示相关信息）

**表单项标签**

`input`：可以通过 `type` 改变元素展示的方式

 `type`：

 `text`：文本输入框，默认；也有 `value`；提示语用 `placeholder`：指定输入框的提示信息，当输入框内容发生变化，会自动清空

 `passport`：密码输入，会隐藏输入；也有 `value`

 `number`：只能输入数字

 `url`：网址

 `email`：邮箱

 `radio`：单选框，注意：要想实现单选，`name` 值要一样；一般会给每一个单选框提供 `value` 的属性，给服务器判断；默认选中可以使用 `checked`

 `checkbox`：复选框，也需要指定 `value`；默认选中可以使用 `checked`，即默认值

 `file`：文件选择框

 `hidden`：隐藏域，用于提交一些信息

 按钮：

 `submit`：提交按钮，提交表单

 `button`：普通按钮

 `image`：图片提交按钮

 `scr`属性指定图片路径，也可以提交表单

 `label`：指定输入项的文字描述信息

 `label`的 `for` 属性一般会和 `input` 的 `id` 属性值对应，对应了，则点击 `label` 区域，会让 `input` 聚焦到输入框

`select`：下拉列表 ；子元素：`option` 用来指定列表项；默认的话加入 `selected` 即可

例：

```html
省份:
<select name="province">
  <option value="">--请选择--</option>
  <option value="1">北京</option>
  <option value="2">西安</option>
  <option value="3">上海</option>
</select>
```

`textarea`：文本域

 `<textarea rows="行数" cols="列数">文本</textarea>`

 `cols`：指定列数，每一行多少个字符

 `rows`：默认多少行，不够自动扩容

## 4. DHTML

动态 `HTML`，指的是使用客户端脚本语言将静态的 `HTML` 内容变成动态的技术的总称。动态 `HTML` 技术是通过调用客户端脚本语言 `js`，利用 `DOM` 可指定欲发生动态变化的 `HTML` 元素。

一些概念：

**HTML**：超文本标记语言

**CSS**：层叠样式表

**DOM**：文档对象模型

**CGI**：通用网关接口

**XML**：可扩展标记语言，可自定义扩展标签

**JSON**：是一种以 JS 的对象表示法为基础的轻量级数据标记语言。能够处理 `false` `null` `true` 对象 数组 数字 字符串七种类型。其键值对都需要双引号。

