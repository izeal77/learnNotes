## 1.关于ES6和CommonJS模块化

babel是将es6转为es5，实际上babel转换后的代码是遵循commonJS规范的

### 1.1 ES6模块化

- 代表：Vue
- 语法：
  - 导入：import   xxx  from、import {xxx} from
  - 导出：export、export default
- 特点：
  - 1. this指向undefined
  - 1. 编译时输出接口
  - 1. 可以单独加载其中的某个接口（方法）
  - 1. 静态分析，动态引用。输出的是值的引用

### 1.2 CommonJS模块化

- 代表：node.js
- 语法：
  - 导入：require()
  - 导出：module.exports、exports
- 特点：
  - 1. this 指向当前模块
  - 1. 运行时加载。CommonJS脚本代码在require的时候，就会全部执行。一旦出现某个模板被“循环加载”，就只能输出已经执行的部分，还未执行的部分不会输出。
  - 1. 加载的是整个模块，即将所有的接口全部加载进来。
  - 1. 输出的是一个值的拷贝

### 1.3 使用babel.js



## 2. JavaScript面向对象

### 2.1 面向对象编程介绍

#### 2.1.1 两大编程思想

面向过程和面向对象

#### 2.1.2 面向过程编程POP

**面向过程**就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候再一个一个的依次调用就可以了。

优点：性能稍好，适合跟硬件联系紧密

缺点：没有面向对象易维护、易复用、易扩展

#### 2.1.3 面向对象编程OOP

**面向对象**是把事务分解成为一个个对象，然后由对象之间分工与合作。以对象功能来划分问题，而不是步骤。

特性：“封装性”“继承性”“多态性”

优点：易维护、易复用、易扩展

缺点：性能稍低

### 2.2 ES6中的类和对象

#### 2.2.1 对象

在 JavaScript 中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象。对象是由属性和方法组成的：属性：事物的**特征，**在对象中用**属性**来表示（常用名词）；方法：事物的**行为，**在对象中用**方法**来表示（常用动词）

#### 2.2.2 类

类抽象了对象的公共部分，它泛指某一大类（class）

对象特指某一个，通过类实例化一个具体的对象  

#### 2.2.3 创建类

语法：

```js
class name{
	// class body
}

// 创建实例
var xx = new name();
```

#### 2.2.4 类constructor构造函数

constructor() 方法是类的构造函数(默认方法)，用于传递参数,返回实例对象，通过 new 命令生成对象实例时，自动调用该方法。如果没有显示定义, 类内部会自动给我们创建一个constructor()

语法：

```js
class Person {
  constructor(name,age) {   // constructor 构造方法或者构造函数
      this.name = name;
      this.age = age;
    }
}       

// 创建实例
// 执行过程：添加了new，自动调用constructor函数，new的对象传递给构造器的uname
// uname传到this.uname，这个时候ldh就有一个实例的uname叫做“刘德华”
var ldh = new Person('刘德华', 18); 
console.log(ldh.name)    
```

#### 2.2.5 类添加方法

方法之间不能加逗号分隔，同时方法不需要添加 function 关键字

语法：

```js
class Person {
  constructor(name,age) {   // constructor 构造器或者构造函数
      this.name = name;
      this.age = age;
    }
   say() {
      console.log(this.name + '你好');
   }
}    

// 创建实例
var ldh = new Person('刘德华', 18); 
ldh.say()   
```

### 2.3 类的继承

#### 2.3.1 继承

子类可以继承父类的一些属性和方法。

继承中，如果实例化子类输出一个方法，先看子类有没有这个方法，有就先执行子类的方法

如果子类里面没有，就去查找父类有没有，如果有就执行父类的这个方法（就近原则）

```js
class Father{
// 父类
}
class Son extends Father{
// 子类继承父类
}
```

#### 2.3.2 super关键字

用于访问和调用对象父类上的函数。可以调用父类的构造函数，也可以调用父类的普通函数；

**子类在构造函数中使用super, 必须放到 this 前面 (必须先调用父类的构造方法,在使用子类构造方法)**

```js
class Person {   // 父类
      constructor(surname){
         this.surname = surname;
     }
} 
class  Student extends Person {       // 子类继承父类
     constructor(surname,firstname){
          super(surname);             // 调用父类的constructor(surname)
	this.firstname = firstname; // 定义子类独有的属性
     }
}       
```

#### 2.3.3 三个注意点

1.在 ES6 中类没有变量提升，所以必须先定义类，才能通过类实例化对象.

2.类里面的共有属性和方法一定要加this使用.

3.类里面的this指向问题. 

4.constructor 里面的this指向实例对象, 方法里面的this 指向这个方法的调用者

### 2.4 面向对象案例

#### 2.4.1 添加功能

利用insertAdjacentHTML(position,text)可以直接把字符串格式元素添加到父元素中。

其中position是相对于元素的位置。并且必须是以下字符串之一：

beforebegin：元素自身的前面

afterbegin：插入元素内部的第一个子节点之前

beforeend：插入元素内部的最后一个字节点之后

afterend：元素自身的后面

#### 2.4.2 删除功能

阻止冒泡：e.stopPropagation()；

#### 2.4.3 修改功能

双击事件：ondblclick

如果双击文字，会默认选定文字，此时需要双击禁止选中文字

window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();

## 3. 构造函数和原型

### 3.1 构造函数和原型

#### 3.1.1 概述

**构造函数**是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与 new 一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。

在 JS 中，使用构造函数时要注意以下两点：

1.构造函数用于创建某一类对象，其首字母要大写

2.构造函数要和 new 一起使用才有意义

**new在执行时会做四件事情：**

①在内存中创建一个新的空对象。

②让 this 指向这个新的对象。

③执行构造函数里面的代码，给这个新对象添加属性和方法。

④返回这个新对象（所以构造函数里面不需要 return ）。

#### 3.1.2 构造函数

JavaScript 的构造函数中可以添加一些成员，可以在构造函数本身上添加，也可以在构造函数内部的 this 上添加。通过这两种方式添加的成员，就分别称为静态成员和实例成员。

静态成员：在构造函数本身上添加的成员称为静态成员，（Star.sex = '男';）只能由构造函数本身来访问

实例成员：在构造函数内部的this创建的对象成员称为实例成员，（ldh.sing();）只能由实例化的对象（构造出来的那个实例）来访问

#### 3.1.3 构造函数原型prototype

构造函数通过原型分配的函数是所有对象所**共享的**。

JavaScript 规定，每一个构造函数都有一个 prototype 属性，指向另一个对象。注意这个 prototype 就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有。如果我们修改了原来的原型对象，给原型对象赋值的是一个对象，必须手动的利用constructor指回原来的构造函数

我们可以把那些不变的方法，直接定义在 prototype 对象上，这样所有对象的实例就可以共享这些方法。

#### 3.1.4 对象原型`__proto__`

对象都会有一个属性`__proto__` 指向构造函数的 prototype 原型对象，之所以我们对象可以使用构造函数 prototype 原型对象的属性和方法，就是因为对象有` __proto__ `原型的存在。

`__proto__`对象原型和原型对象 prototype 是等价的，里面都有个constructor属性，称作构造函数，指向构造函数本身

`__proto__`对象原型的意义就在于为对象的查找机制提供一个方向，或者说一条路线，但是它是一个非标准属性，因此实际开发中，不可以使用这个属性，它只是内部指向原型对象 prototype

![对象原型](docs\.vuepress\public\assets\JS\对象原型.png)

#### 3.1.5 constructor 构造函数

对象原型（`__proto__`）和构造函数（prototype）原型对象里面都有一个属性 constructor 属性 ，constructor 我们称为构造函数，因为它指回构造函数本身。

constructor 主要用于记录该对象引用于哪个构造函数，它可以让原型对象重新指向原来的构造函数。

一般情况下，对象的方法都在构造函数的原型对象中设置。如果有多个对象的方法，我们可以给原型对象采取对象形式赋值，但是这样就会覆盖构造函数原型对象原来的内容，这样修改后的原型对象 constructor 就不再指向当前构造函数了。此时，我们可以在修改后的原型对象中，添加一个 constructor 指向原来的构造函数。

**数组和字符串内置对象不能给原型对象覆盖操作 Array.prototype = {} ，只能是 Array.prototype.xxx = function(){} 的方式。**

#### 3.1.6 原型链

![原型链](docs\.vuepress\public\assets/JS/原型链.png)

#### 3.1.7 JavaScript成员查找机制

①当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性。

②如果没有就查找它的原型（也就是 `__proto__`指向的 prototype 原型对象）。

③如果还没有就查找原型对象的原型（Object的原型对象）。

④依此类推一直找到 Object 为止（null）。

`__proto__`对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线

### 3.2 继承

#### 3.2.1 call()

调用这个函数，并且修改函数运行时的this指向

`fun.call(thisArg, arg1, arg2, ...) `

thisArg ：当前调用函数 this 的指向对象

arg1，arg2：传递的其他参数

#### 3.2.2 借用构造函数继承父类型属性

通过 call() 把父类型的 this 指向子类型的 this ，这样就可以实现子类型继承父类型的属性。  

```js
// 父类
    function Person(name, age, sex) {
      this.name = name;
      this.age = age;
      this.sex = sex;
    }
    // 子类
    function Student(name, age, sex, score) {
      Person.call(this, name, age, sex);  // 此时父类的 this 指向子类的 this，同时调用这个函数
      this.score = score;
    }
    var s1 = new Student('zs', 18, '男', 100);
    console.dir(s1); 
```

#### 3.2.3 借用原型对象继承父类方法

一般情况下，对象的方法都在构造函数的原型对象中设置，通过构造函数无法继承父类方法。 

 核心原理： 

①将子类所共享的方法提取出来，让子类的 prototype 原型对象 = new 父类() 

②本质：子类原型对象等于是实例化父类，因为父类实例化之后另外开辟空间，就不会影响原来父类原型对象

③将子类的 constructor 从新指向子类的构造函数

#### 3.2.4 类的本质

1. class本质还是function.

2. 类的所有方法都定义在类的prototype属性上

3. 类创建的实例,里面也有`__proto__ `指向类的prototype原型对象
4. 所以ES6的类它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
5. 5.所以ES6的类其实就是语法糖.

6. 语法糖:语法糖就是一种便捷写法.  简单理解, 有两种方法可以实现同样的功能, 但是一种写法更加清晰、方便,那么这个方法就是语法糖

### 3.3 ES5中的新增方法

#### 3.3.1 数组方法

迭代(遍历)方法：forEach()、map()、filter()、some()、every()；

**forEach()**

```js
array.forEach(function(currentValue, index, arr))
```

currentValue：数组当前项的值

index：数组当前项的索引

arr：数组对象本身

**filter()**

```js
array.filter(function(currentValue, index, arr))
```

filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素,主要用于筛选数组

注意它直接返回一个新数组

currentValue: 数组当前项的值

index：数组当前项的索引

arr：数组对象本身

**some()**

```js
array.some(function(currentValue, index, arr))
```

some() 方法用于检测数组中的元素是否满足指定条件.  通俗点 查找数组中是否有满足条件的元素 

注意它返回值是布尔值, 如果查找到这个元素, 就返回true ,  如果查找不到就返回false.

如果找到第一个满足条件的元素,则终止循环. 不在继续查找.

currentValue: 数组当前项的值

index：数组当前项的索引

arr：数组对象本身

#### 3.3.2 字符串方法

**trim()**

trim() 方法会从一个字符串的两端删除空白字符。

```js
str.trim()
```

trim() 方法并不影响原字符串本身，它返回的是一个新的字符串

#### 3.3.3 对象方法

**Object.keys() 用于获取对象自身所有的属性**

```js
Object.keys(obj)
```

效果类似 for…in

返回一个由属性名组成的数组

**Object.defineProperty() 定义新属性或修改原有的属性。**

```js
Object.defineProperty(obj, prop, descriptor)
```

Object.defineProperty()  第三个参数 descriptor 说明： 以对象形式 { } 书写

value: 设置属性的值 默认为undefined

writable: 值是否可以重写。true | false 默认为false

enumerable: 目标属性是否可以被枚举。true | false 默认为 false

configurable: 目标属性是否可以被删除或是否可以再次修改特性 true | false 默认为false

## 4. 函数进阶

### 4.1 函数的定义和调用

#### 4.1.1 函数的定义方式

1.函数声明方式：function关键字（命名函数）

`function fn() { };`

2.函数表达式（匿名函数）

`var fun = function(){ }; `

3.（不常用）利用new Function('参数1'，'参数2'，'函数体');（function是一个构造函数，参数1、参数2和函数体需要用字符串的形式呈现。）

`var f = new Function('函数体');`

`f();`

![image-20201227225536131](docs\.vuepress\public\assets\JS\image-20201227225536131.png)

#### 4.1.2 函数的调用方式

1.普通函数

`function fn() {}`

`fn();`或者`fn.call();`

2.对象的方法

`var o = {`

​      `sayHi: function () {`

​     	   	`console.log('');`

​      `}`

 `}`

`o.sayHi();`

3.构造函数

 `function Star() {};`

 `new Star();`

4.绑定事件函数：触发某一项事件就调用这个函数

5.定时器函数：定时器自动隔一段时间调用一次

6.立即执行函数：自动调用函数

### 4.2 this

#### 4.2.1 this指向问题

当我们调用函数的时候，一般this指向了调用者

![image-20201227225509789](docs\.vuepress\public\assets\JS\image-20201227225509789.png)

#### 4.2.3 改变函数内部的this指向

1.call方法：可以调用函数 可以改变函数内的this指向 还可以实现继承

`function.call(需要指向的对象,实参1,实参2);`

<script>
    function Father(uname, age, sex) {
        this.uname = uname;
        this.age = age;
        this.sex = sex;
    }
    // 继承+改变this指向
    function Son(uname, age, sex) {
        Father.call(this, uname, age, sex);
    }
</script>
2.apply方法：

`fun.apply(需要指向的对象,[传递的值，必须包含在数组里面])`返回值就是函数的返回值，因为它就是调用函数

3.bind方法：不会调用函数，但是能改变函数内部this指向，用的最多

`function.bind(需要指向的对象,实参1,实参2);`返回由指定的this值和初始化参数改造的原函数拷贝

如果有的函数不需要立即调用，又想改变这个函数内部this指向，此时用bind

### 4.3 严格模式

#### 4.3.1 为脚本开启严格模式

在代码前面写上`use strict`

有的script基本是严格模式，有的script脚本是正常模式，不利于文件合并，可以将整个脚本文件放在一个立即执行的匿名函数之中，这样独立创建一个作用域而不影响其他script脚本文件。

```js
<script>
    (function (){
        "use strict";
        var num = 10;
        function fn() { }
    })();
</script>
```

#### 4.3.2 为函数开启严格模式

```js
<script>
    // 只是给fn函数开启严格模式
    function fn() {
      'use strict'
    }
    function fun() {
      // 里面的还是按照普通模式执行
    }
</script>
```

#### 4.3.3 严格模式中的变化

1.变量规定

在正常模式中，如果一个变量没有声明就赋值，默认是全局变量；在严格模式中禁止这种用法，变量都必须先声明再使用。

严禁删除已经声明的变量。

2.this指向问题

调用函数如果没有指定上下文对象，则this指向不会指向window。

严格模式下全局作用域中函数this是undefined

严格模式下，如果构造函数不加new调用，this会报错。

new实例化的构造函数指向实例对象

定时器this还是指向window

3.函数变化

严格模式下不能有重名

函数必须声明在顶层

### 4.4 高阶函数

高阶函数是对其它函数进行操作的函数，它接收函数作为参数或将函数作为返回值输出。

### 4.5 闭包

#### 4.5.1 变量作用域

1.分类：全局变量和局部变量

函数内部可以使用全局变量

函数外部不可以使用局部变量

当函数执行完毕，本作用域内的局部变量会销毁

#### 4.5.2 闭包概念

闭包指有权访问另一个函数作用域中变量的函数，就是一个作用域可以访问另一个函数内部的局部变量

被访问的这个变量所在的函数就称为闭包函数

主要作用：延伸了变量的作用范围

#### 4.5.3 在chrome中调试闭包

1. 打开浏览器，按 F12 键启动 chrome 调试工具。

2. 设置断点。

3. 找到 Scope 选项（Scope 作用域的意思）。

4. 当我们重新刷新页面，会进入断点调试，Scope 里面会有两个参数（global 全局作用域、local 局部作用域）。

5. 当执行到 fn2() 时，Scope 里面会多一个 Closure 参数 ，这就表明产生了闭包。

### 4.6 递归

#### 4.6.1 递归概念

一个函数在内部可以调用其本身，这个函数就是递归函数，其作用效果和循环效果一样；

由于递归很容易发生“栈溢出“错误，所以必须加退出条件return。

#### 4.6.2 利用递归求数学题

#### 4.6.3 浅拷贝和深拷贝

1.浅拷贝只拷贝一层，更深层次对象级别的只拷贝引用；

2.深拷贝拷贝多层，每一级别的数据都会拷贝；遍历每一级别的数据，进行赋值

3.Object.assign(target,...sources)   es6新增方法可以浅拷贝

4.深拷贝示例：先写Array，因为Array也属于Object。

```js
<script>
    var obj = {
        id: 1,
        name: 'andy',
        msg: {
            age: 18,
        },
    }
    var o = {}
    // 封装函数
    function deepCopy(newobj, oldobj) {
        for (var k in oldobj) {
            // 判断我们的属性值属于哪种数据类型
            // 1.获取属性值
            var item = oldobj[k]
            // 2.判断这个值是否是数组
            if (item instanceof Array) {
                // 3.判断这个值是否是对象
                newobj[k] = []
                deepCopy(newobj[k], item)
            } else if (item instanceof Object) {
                newobj[k] = {}
                deepCopy(newobj[k], item)
            } else {
                // 4.属于简单数据类型
                newobj[k] = item
            }
        }
    }
    deepCopy(o, obj)
    console.log(o)
</script>
```

## 5. 正则表达式

### 5.1 正则表达式概述

用于匹配字符串中字符组合的模式。在JS中，也是对象。

通常被用来验证表单、替换敏感词、从字符串中提取特定部分。

### 5.2 正则表达式的特点

1.灵活性、逻辑性和功能性非常强

2.直接复制现有的正则表达式

### 5.3 正则表达式在JavaScript中的运用

#### 5.3.1 通过调用RegExp对象的构造函数创建

```js
<script>	
    // 1.利用RegExp对象来创建正则表达式
    var regexp = new RegExp(/123/);
    // 2.利用字面量创建正则表达式
    var rg = /123/;
</script>
```

#### 5.3.2 测试正则表达式test

test()正则对象方法，用于检测字符串是否符合该规则，该对象会返回true或者false，其参数是测试字符串

`regexObj.test(str)`

1.regexObj：写的是正则表达式

2.str：要测试的文本

3.regexObj.test(str)即检测str文本是否符合我们写的正则表达式规范

### 5.4 正则表达式中的特殊字符

#### 5.4.1 组成（正则表达式里面不需要加上引号）

正则表达式可以由简单的字符构成，比如/abc/，（只要字符串包含了abc返回的都是true）也可以是简单和特殊字符的组合，比如/ab*c/。其中特殊字符也被称为元字符，在正则表达式中是具有特殊意义的专用符号。

#### 5.4.2 边界符

用来提示字符所处的位置，主要有两个字符。如果^和$在一起，表示必须精确匹配

![image-20210104211305254](docs\.vuepress\public\assets\JS\image-20210104211305254.png)

#### 5.4.3 字符类

表示有一系列字符可供选择，只要匹配其中一个就可以了。所有可供选择的字符都放在方括号内。

1.方括号[]

`/[abc]/.test('andy')  //true`

后面的字符串只要包含abc中任意一个字符，都返回true

2.[-]方括号内部 范围符-

`/^[a-z]$/.test('c')  //true`

方括号内部加上-表示范围，这里表示a-z26个英文字母都可以，但是只能是这26个字母

3.[^]方括号内部 取反符^

`/[^abc]/.test('andy') //false`

方括号内部加上^表示取反，只要包含方括号内的字符都返回false

注意和边界符^区别，边界符号写到方括号外面

4.字符组合

`/[a-z1-9]/.test('andy')  //true`

 方括号内可以使用字符组合，这里表示包含a-z的26个英文字母和1-9的数字

5.或者

正则里面的 或者 符号只有一根竖线，即"|"

#### 5.4.4 量词符

用来设定某个模式出现的次数

![image-20210104212906476](docs\.vuepress\public\assets\JS\image-20210104212906476.png)

```js
<script>
	var reg = /^a*$/;
    console.log(reg.test(''));     //true
    console.log(reg.test('a'));    //true
    console.log(reg.test('aaaa')); //true
</script>
```

```js
<script>
    var reg = /^[a-zA-Z0-9_-]$/;  //这个模式只能输入一个属于表达式内的字母或者数字
    var reg = /^[a-zA-Z0-9_-]{6,16}$/; //{6,16}中间不能有空格，否则不起作用
```

#### 5.4.5 括号总结

1.大括号 量词符 里面表示重复次数

```js
var reg = /^abc{3}$/;  //表示c需要重复三次，即只有abccc才是返回true
```

2.中括号 字符集合 匹配方括号中的任意字符

```js
var reg = /^[abc]$/;   //表示abc任意一个字母
```

3.小括号 表示优先级

```js
var reg = /^(abc){3}$/;  //表示abcabcabc才是返回true
```

#### 5.4.6 预定义类

![image-20210104224436406](docs\.vuepress\public\assets\JS\image-20210104224436406.png)

```js
<script>
    // 座机号码验证： 全国座机号码 两种格式：010-12345678或者0530-1234567
    var reg = /^\d{3}-\d{8}|\d{4}-\d{7}$/;
    // 换种简单写法
    var reg = /^\d{3,4}-\d{7,8}$/;
</script>
```

### 5.5 正则表达式中的替换

#### 5.5.1 replace替换

replace() 方法可以实现替换字符串操作，用来替换的参数可以是一个字符串或是一个正则表达式。

```js
stringObject.replace(regexp/substr,replacement)
```

1.第一个参数:  被替换的字符串 或者 正则表达式

2.第二个参数:  替换为的字符串

3.返回值是一个替换完毕的新字符串

#### 5.5.2 正则表达式参数

/表达式/[switch]

switch也称为修饰符，按照什么样的模式来匹配，有三种值：

g：全局匹配

i：忽略大小写

gi：全局匹配+忽略大小写

## 6. ES6

### 6.1 ES6新增语法

#### 6.1.1 let

新增的用于声明变量的关键字

let声明的变量只在所处于的块级有效（就是大括号里面才能访问），防止内层变量覆盖外层变量；var关键字不具有这个特点；

**特点：**

1. 防止循环变量变成全局变量（正常情况应该是循环变量不应该被其它地方读取）

2. 不存在变量提升（先声明再使用）

3. 暂时性死区（在大括号内有用let定义了一个变量，那么就算大括号外有新的变量也无法被使用，下面示例中的var定义的num无法被读取）

   ```js
   <script>
   var num = 10;
   	if(true){
   		console.log(num);
   		let num = 20;
   }
   </script>
   ```

#### 6.1.2 const

声明常量，也具有块级作用域；必须赋予初始值；常量赋值后，值不能更改（简单数据类型不能更改，复杂数据类型比如说数组，可以改数据，但是不能更改整个数组）。

```js
const ary = [100;200];
ary[0] = 123; //这是可以更改的，可以更改值
ary = [1,2] //这个更改会报错，因为这个相当于更改了地址
console.log(ary);
```

**let、const、var的区别**

1. 使用 var 声明的变量，其作用域为该语句所在的函数内，且存在变量提升现象。
2. 使用 let 声明的变量，其作用域为该语句所在的代码块内，不存在变量提升。

3. 使用 const 声明的是常量，在后面出现的代码中不能再修改该常量的值。

#### 6.1.3 解构赋值

ES6中允许从数组中提取值，按照对应位置，对变量赋值。对象也可以实现解构。

**数据解构**

```js
 let [a, b, c] = [1, 2, 3];
 console.log(a)
 console.log(b)
 console.log(c) 

// 解构不成功
 let [foo] = [];
 let [bar, foo] = [1];
```

**对象解构**

```js
 let person = { name: 'zhangsan', age: 20 }; 
 let { name, age } = person;
 console.log(name); // 'zhangsan' 
 console.log(age); // 20

 // 重新命名
 let {name: myName, age: myAge} = person; // myName myAge 属于别名
 console.log(myName); // 'zhangsan' 
 console.log(myAge); // 20
```

#### 6.1.4 箭头函数

用来简化函数定义语法

```js
// ()里面为形参，{}里面为函数体
const fn = () => {
	console.log(123)
}
```

如果函数体中只有一句代码，并且代码执行的结果就是函数的返回值，函数体大括号可以省略

```js
 function sum(num1, num2) { 
     return num1 + num2; 
 }
 const sum = (num1, num2) => num1 + num2; 
```

如果形参只有一个，可以省略小括号

```js
 function fn (v) {
     return v;
 } 
 const fn = v => v;
```

**箭头函数指向this**

箭头函数定义在哪，this就指向哪，即指向的是函数定义位置的上下文this。

```js
 const obj = { name: '张三'} 
 function fn () { 
     console.log(this);
     return () => { 
         console.log(this)
     } 
 } 
 const resFn = fn.call(obj); 
 resFn(); // 指向了obj对象
```

```js
var age = 100;
var obj = {
	age: 20,
	say: () => {
		alert(this.age)
	}
}
obj.say(); 
// 这里其实因为say的是一个匿名函数，this是指向上下文的this，而obj其实是一个全局作用域下的，所以this是指向window，所以运行结果是100
```

#### 6.1.5 剩余参数

剩余参数语法允许我们将一个不定数量的参数表示为一个数组。

```js
// ...必不可少 
function sum (first, ...args) {
     console.log(first); // 10
     console.log(args); // [20, 30] 
 }
 sum(10, 20, 30)
```

**剩余参数和解构配合**

```js
 let students = ['wangwu', 'zhangsan', 'lisi'];
 let [s1, ...s2] = students; 
 console.log(s1);  // 'wangwu' 
 console.log(s2);  // ['zhangsan', 'lisi']
```

#### 6.1.6 Array的扩展方法

**扩展运算符（展开语法）**

扩展运算符可以将数组或者对象转为用逗号分隔的参数序列，参数序列的逗号被log当作分隔符，不会打印出来

```js
let ary = [1, 2, 3];
 ...ary  // 1, 2, 3
 console.log(...ary);    // 1 2 3
 console.log(1, 2, 3)
```

扩展运算符可以应用于合并数组。因为...ary2相当于把所有元素提取出来

```js
// 方法一 
 let ary1 = [1, 2, 3]; let ary2 = [3, 4, 5];
 let ary3 = [...ary1, ...ary2];
 // 方法二 
 ary1.push(...ary2);
```

将类数组或可遍历对象转换为真正的数组

```js
// ...oDivs是一个伪数组，但是加上[]就是一个真正的数组
let oDivs = document.getElementsByTagName('div'); 
oDivs = [...oDivs];
```

**构造函数方法：Array.from()**

将类数组或可遍历对象转换为真正的数组

```js
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
}; 
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```

方法还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。

```js
let arrayLike = { 
     "0": 1,
     "1": 2,
     "length": 2
 }
 let newAry = Array.from(aryLike, item => item *2)
```

**实例方法：find()**

用于找出第一个符合条件的数组成员，如果没有找到返回undefined

```js
let ary = [{
     id: 1,
     name: '张三‘
 }, { 
     id: 2,
     name: '李四‘
 }]; 
 let target = ary.find(item => item.id == 2);
```

**实例方法：findIndex()**

用于找出**第一个**符合条件的数组成员的位置，如果没有找到返回-1

```js
let ary = [1, 5, 10, 15];
let index = ary.findIndex(value => value > 9); 
console.log(index); // 2
```

**实例方法：includes()**

表示某个数组是否包含给定的值，返回布尔值

```js
[1, 2, 3].includes(2) // true 
[1, 2, 3].includes(4) // false
```

#### 6.1.7 String的扩展方法

**模板字符串**

ES6新增的创建字符串的方式，使用反引号定义。

```js
let name = `zhangsan`;
```

模板字符串中可以解析变量。

```js
 let name = '张三'; 
 let sayHello = `hello,my name is ${name}`; // hello, my name is zhangsan
```

模板字符串中可以换行

```js
 let result = { 
     name: 'zhangsan', 
     age: 20, 
	 sex: '男' 
 } 
 let js = ` <div>
     <span>${result.name}</span>
     <span>${result.age}</span>
     <span>${result.sex}</span>
 </div> `;
```

在模板字符串中可以调用函数。

```js
const sayHello = function () { 
    return '哈哈哈哈 追不到我吧 我就是这么强大';
 }; 
 let greet = `${sayHello()} 哈哈哈哈`; 
 console.log(greet); // 哈哈哈哈 追不到我吧 我就是这么强大 哈哈哈哈
```

**实例方法：startsWith()和endsWith()**

startsWith()：表示参数字符串是否在原字符串的头部，返回布尔值

endsWith()：表示参数字符串是否在原字符串的尾部，返回布尔值

```js
 let str = 'Hello world!';
 str.startsWith('Hello') // true 
 str.endsWith('!')       // true
```

**实例方法：repeat()**

repeat方法表示将原字符串重复n次，返回一个新字符串

```js
'x'.repeat(3)      // "xxx" 
'hello'.repeat(2)  // "hellohello"
```

#### 6.1.8 Set数据结构

新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

Set本身是一个构造函数，用来生成 Set 数据结构。

```js
const s = new Set();
console.log(s.size);
```

Set函数可以接受一个数组作为参数，用来初始化

```js
const set = new Set([1, 2, 3, 4, 4]);
```

利用set数据结构转换为数组

```js
const s3 = new Set(["a","a","b","b"]);
console.log(s3.size)
const ary = [...s3];
console.log(ary) //["a","b"]
```

**实例方法**

add(value)：添加某个值，返回 Set 结构本身

delete(value)：删除某个值，返回一个布尔值，表示删除是否成功

has(value)：返回一个布尔值，表示该值是否为 Set 的成员

clear()：清除所有成员，没有返回值

```js
 const s = new Set();
 s.add(1).add(2).add(3); // 向 set 结构中添加值 
 s.delete(2)             // 删除 set 结构中的2值 
 s.has(1)                // 表示 set 结构中是否有1这个值 返回布尔值 
 s.clear()               // 清除 set 结构中的所有值
```

**遍历**

Set 结构的实例与数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有返回值。

```js
s.forEach(value => console.log(value))
```

