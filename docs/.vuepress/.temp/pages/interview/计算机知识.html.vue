<template><h3 id="计算机知识" tabindex="-1"><a class="header-anchor" href="#计算机知识" aria-hidden="true">#</a> 计算机知识</h3>
<h4 id="进程和线程" tabindex="-1"><a class="header-anchor" href="#进程和线程" aria-hidden="true">#</a> 进程和线程</h4>
<p>对于操作系统来说，一个任务就是一个进程，有些进程不止同时干一件事，即同时运行多个“子任务”，这些子任务就是线程（进程中的一个执行任务，线程之间可以共享数据 ）。</p>
<p>根本区别：进程是操作系统资源分配的基本单位，而线程是处理器任务调度和执行的基本单位</p>
<p>资源开销：每个进程都有独立的代码和数据空间（程序上下文），程序之间的切换会有较大的开销；线程可以看做轻量级的进程，同一类线程共享代码和数据空间，每个线程都有自己独立的运行栈和程序计数器（<code>PC</code>），线程之间切换的开销小。</p>
<p>包含关系：如果一个进程内有多个线程，则执行过程不是一条线的，而是多条线（线程）共同完成的；线程是进程的一部分，所以线程也被称为轻权进程或者轻量级进程。</p>
<p>内存分配：同一进程的线程共享本进程的地址空间和资源，而进程之间的地址空间和资源是相互独立的</p>
<p>影响关系：一个进程崩溃后，在保护模式下不会对其他进程产生影响，但是一个线程崩溃整个进程都死掉。所以多进程要比多线程健壮。</p>
<p>执行过程：每个独立的进程有程序运行的入口、顺序执行序列和程序出口。但是线程不能独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制，两者均可并发执行</p>
<h4 id="http方法" tabindex="-1"><a class="header-anchor" href="#http方法" aria-hidden="true">#</a> HTTP方法</h4>
<p><code>get</code>：请求服务器发送某些资源</p>
<p><code>head</code>：请求资源的头部信息，用来在下载一个大文件之前先获取大小再决定是否要下载</p>
<p><code>options</code>：获取目的资源所支持的通信选项</p>
<p><code>post</code>：发送数据给服务器</p>
<p><code>put</code>：新增资源或者使用请求中的有效负载替换目标资源的表现形式（更新资源）</p>
<p><code>delete</code>：删除资源</p>
<p><code>patch</code>：对资源进行部分修改</p>
<p><code>connect</code>：预留给能够将连接改为管道方式的代理服务器</p>
<p><code>trace</code>：回显服务器收到的请求，用于测试或者诊断</p>
<h4 id="get和post" tabindex="-1"><a class="header-anchor" href="#get和post" aria-hidden="true">#</a> <strong><code>get</code>和<code>post</code></strong></h4>
<p>传输方式：<code>get</code>通过<code>url</code>传输数据，<code>post</code>通过请求体传输。</p>
<p>安全性：<code>post</code>更安全，<code>get</code>的数据在<code>url</code>中，可以通过历史记录和缓存查到，不安全</p>
<p>数据类型：<code>get</code>只允许<code>ASCII</code>字符，<code>post</code>无限制</p>
<p><code>get</code>无害性：浏览器操作<code>get</code>请求是无害的，<code>post</code>可能重复提交表单</p>
<p>特性：<code>get</code>不会引起服务器状态变化（安全）且幂等，<code>post</code>是非安全非幂等</p>
<h4 id="post和put" tabindex="-1"><a class="header-anchor" href="#post和put" aria-hidden="true">#</a> <strong><code>post</code>和<code>put</code></strong>：</h4>
<p><code>put</code>：幂等，连续调用多次效果一样，以最新的一次调用为准，<code>post</code>是非幂等的</p>
<p><code>put</code>指向单一资源，<code>post</code>指向资源集合，用来新增。</p>
<p><strong><code>put</code>和<code>patch</code></strong>：都是更新资源，patch用来对已知资源进行局部更新</p>
<h4 id="状态码" tabindex="-1"><a class="header-anchor" href="#状态码" aria-hidden="true">#</a> 状态码</h4>
<p>200 <code>OK</code>,表示从客户端发来的请求在服务器端被正确的处理</p>
<p>302 <code>found</code>,临时性重定向，表示资源临时被分配了新的url</p>
<p>304 <code>not modified</code>，上次请求之后请求的资源未被修改</p>
<p>400 <code>bad request</code> 请求报文存在语法错误</p>
<p>401 <code>unauthorized</code> 表示发送的请求需要有通过<code>HTTP</code>认证的认证信息</p>
<p>403 <code>forbidden</code> 对请求资源的访问被服务器拒绝（<code>token</code>过期、爬虫没有权限）</p>
<p>404 <code>not found</code> 在服务器上没找到请求的资源</p>
<p>500 <code>internal sever error</code> 服务器端在执行请求的时候发生了错误</p>
<p><strong>307 303 302区别</strong></p>
<p>在<code>HTTP1.1</code>的时候为了细化302 分为了303和307</p>
<p>303明确表示客户端应当采用<code>get</code>方法获取资源，他会把<code>post</code>请求变为<code>get</code>进行重定向，307会遵守标准</p>
<h4 id="http的keep-alive" tabindex="-1"><a class="header-anchor" href="#http的keep-alive" aria-hidden="true">#</a> HTTP的keep-alive</h4>
<p>在<code>HTTP1.0</code>的时候，每次<code>HTTP</code>请求都要创建一个连接，而创建连接的过程需要消耗资源和时间，为了减少资源消耗，缩短响应的时间，就需要重用连接。在<code>HTTP1.1</code>的时候在<code>HTTP</code>请求头中加入了<code>connection：keep-alive</code>来告诉对方这个请求响应完成后不要关闭，以此保持长连接。</p>
<p>优点：较少的cpu和内存的使用；允许请求和应答的HTTP管线化；降低了拥塞控制；减少后续请求的延迟</p>
<h4 id="http如何保证安全" tabindex="-1"><a class="header-anchor" href="#http如何保证安全" aria-hidden="true">#</a> HTTP如何保证安全</h4>
<p>使用<code>HTTPS</code>,<code>HTTPS</code>基于<code>HTTP</code>协议，不过采用了<code>SSL</code>（安全套接层）协议或者<code>TLS</code>（安全层传输协议）对<code>HTTP</code>协议传输的数据进行加密，还提供了一种校验机制，信息一旦被篡改，通信双方就会立刻发现。</p>
<p>对称加密：双方使用同一把密钥对信息进行加密和解密；</p>
<p>优缺点：简单，性能好，但是容易被拦截密钥从而导致信息泄露</p>
<p>非对称加密：密钥对：私钥+公钥</p>
<p>通信双方都有自己的密钥对，可以把公钥公布出去，任何想和自己通信的，通过公钥加密，自己便可以通过私钥解密获取信息。</p>
<p>优缺点：安全性高，性能较弱。</p>
<p>对称加密和非对称加密结合的方式：将对称加密的密钥使用非对称加密的公钥进行加密，然后发送出去，接收方使用私钥进行解密，之后就可以通过对称加密进行沟通。</p>
<p>优缺点：我们没有办法确定我们得到的公钥就⼀定是安全的公钥。可能存在⼀个中间人，截取了对方发给我们的公钥，然后将他自己的公钥发送给我们，当我们使用他的公钥加密后发送的信息，就可以被他用自己的私钥解密。然后他伪装成我们以同样的方法向对方发送信息，这样我们的信息就被窃取了，然而我们自己还不知道。</p>
<p>数字证书：用来证明身份，防止被中间人攻击。证书中包括签发者，证书用途，使用者公钥，使用者私钥，使用者的hash算法，证书到期时间等。</p>
<p>数字签名：我们使用hash算法对公钥和一些信息进行加密，生成信息摘要，然后CA用私钥对摘要进行加密形成签名。接着将原始信息（即公钥和一些信息）和签名合在一起作为数字证书发送，接收方收到数字证书后对原始信息使用一样的hash算法生成摘要，使用公证处的公钥解密数字证书中的签名得到摘要，对比两个摘要就能判断是不是被修改</p>
<h4 id="http1-0和http1-1的区别" tabindex="-1"><a class="header-anchor" href="#http1-0和http1-1的区别" aria-hidden="true">#</a> <code>HTTP1.0</code>和<code>HTTP1.1</code>的区别</h4>
<p><code>HTTP1.1</code>默认支持长连接。<code>HTTP1.0</code>需要使用<code>keep-alive</code>参数告知服务器端要建立一个长连接</p>
<p>节约带宽：<code>HTTP1.1</code>支持只发送<code>header</code>信息，如果服务器认为客户端有权限请求服务器，就返回100，否则返回401，接收到100的时候才开始把请求<code>body</code>发送到服务器，当为401就不发送请求<code>body</code>，节约带宽。另外<code>HTTP</code>还支持传送内容的一部分，这是断点续传的基础。这是1.1的</p>
<p>HOST域：<code>web server</code>上的多个虚拟站点可以共享同一个ip和端口（在<code>HTTP1.1</code>中实现）</p>
<h4 id="http2相比http1-x有什么优势和特点" tabindex="-1"><a class="header-anchor" href="#http2相比http1-x有什么优势和特点" aria-hidden="true">#</a> HTTP2相比HTTP1.X有什么优势和特点</h4>
<p><strong>头部压缩（只发送差异数据）</strong></p>
<p><code>HTTP1</code>会在请求和响应的时候重复的携带不常改变的、冗长的头部数据，给网络带来额外负担。<code>HTTP2</code>会在客户端和服务器端使用”首部表“跟踪和存储发送的键值对，对于相同的数据，不在通过每次请求和响应发送。</p>
<p>首部表在<code>HTTP2</code>的连接存续期内始终存在，由客户端和服务器共同渐进地更新。</p>
<p>每个新首部键值对要么被追加到当前表的末尾，要么替换表中之前的值。</p>
<p><strong>服务器推送</strong></p>
<p>服务端可以主动推送其他资源给客户端，比如<code>js</code>文件和<code>css</code>文件，不需要等到解析到<code>html</code>的时候在发送这些资源。当然客户端也有权利选择是否接收，如果服务端推送的资源已经被浏览器缓存过，浏览器可以通过发送<code>RST_STREAM</code>帧来拒收，主动推送遵守同源策略，服务器不会随便推送第三方资源给客户端。</p>
<p><strong>多路复用</strong></p>
<p><code>HTTP1</code>想并发多个请求，必须使用多个<code>TCP</code>连接，同时会受到最大数量请求限制；</p>
<p>在<code>HTTP2</code>中，同域名下所有通信都在单个连接上完成；单个连接可以承载任意数量的双向数据流；数据流以消息的形式发送，而消息又由一个或者多个帧组成，多个帧可以乱序发送，因为根据帧首部的流标识可以重新组装。</p>
<h4 id="http3-0" tabindex="-1"><a class="header-anchor" href="#http3-0" aria-hidden="true">#</a> HTTP3.0</h4>
<p>因为 <code>HTTP/2 </code>使用了多路复用，一般来说同一域名下只需要使用一个<code>TCP</code>连接。 由于多个数据流使用同⼀个 <code>TCP</code> 连接，遵守同⼀个流量状态控制和拥塞控制。 只要一个数据流遭遇到拥塞，剩下的数据流就没法发出去，这样就导致了后面的所有数据都会被阻塞。<code>HTTP2</code> 出现的这个问题是由于其使用<code>TCP</code>协议的问题， 与它本身的实现其实并没有多大关系。</p>
<p>由于 <code>TCP</code> 本身存在的⼀些限制，Google 就开发了⼀个基于 UDP 协议的 QUIC 协议，并且使用在了 <code>HTTP3 </code>上。 QUIC 协议在 <code>UDP</code>协议上实现了多路复用、有序交付、重传等等功能</p>
<h4 id="队首阻塞" tabindex="-1"><a class="header-anchor" href="#队首阻塞" aria-hidden="true">#</a> 队首阻塞</h4>
<p>队首阻塞：就是需要排队，队首的事情没有处理完的时候，后面的人都要等着。</p>
<ol>
<li><code>HTTP1.0</code>的队首阻塞</li>
</ol>
<p>对于同一个<code>TCP</code>连接，所有的<code>HTTP1.0</code>请求放入队列中，只有前⼀个请求的响应收到了，然后才能发送下一个请求。可见，<code>HTTP1.0</code>的队首组塞发生在客户端。</p>
<ol>
<li><code>HTTP1.1</code>的队首阻塞</li>
</ol>
<p>对于同一个<code>TCP</code>连接，<code>HTTP1.1</code>允许一次发送多个<code>HTTP1.1</code>请求，也就是说，不必等前一个响应收到，就可以发送下⼀个请求，这样就解决了<code>HTTP1.0</code>的客户端的队首阻塞。但是，<code>HTTP1.1</code>规定，服务器端的响应的发送要根据请求被接收的顺序排队，也就是说，先接收到的请求的响应也要先发送。这样造成的问题是，如果最先收到的请求的处理时间长的话，响应生成也慢，就会阻塞已经生成了的响应的发送。也会造成队首阻塞。可见，<code>HTTP1.1</code>的队首阻塞发生在服务器端。</p>
<ol>
<li>HTTP2是怎样解决队首阻塞的</li>
</ol>
<p>HTTP2无论在客户端还是在服务器端都不需要排队，在同⼀个<code>TCP</code>连接上，有多个stream，由各</p>
<p>个stream发送和接收HTTP请求，各个steam相互独立，互不阻塞。</p>
<p>只要<code>TCP</code>没有人在用那么就可以发送已经⽣成的request或者response的数据，在两端都不⽤等，</p>
<p>从而彻底解决了HTTP协议层⾯的队首阻塞问题（但是<code>TCP</code>层仍存在问题）。</p>
<h4 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手" aria-hidden="true">#</a> 三次握手</h4>
<p>syn是同步报文，seq是序列号，这是为了连接以后传送数据用的，ack是对收到的数据包的确认，值是等待接收的数据包的序列号。</p>
<p>在第一次消息发送中，A随机选取一个序列号作为自己的初始序号（seq）发送给B，发送完毕后，客户端进入syn_send状态；第二次消息B使用ack对A的数据包进行确认，因为已经收到了序列号为x的数据包，准备接收序列号为x+1的包，所以ack=x+1，同时B告诉A自己的初始序列号，就是seq=y；SYN = 1,ACK = 1(确认包)；发送完毕后，服务器端进入syn_revd状态；第三条消息A告诉B收到了B的确认消息并准备建立连接，A自己此条消息的序列号是x+1，所以seq=x+1，而ack=y+1是表示A正准备接收B序列号为y+1的数据包。</p>
<p>seq是数据包本身的序列号；ack是期望对方继续发送的那个数据包的序列号。SYN是同步序列编号。</p>
<p><img src="HTTPs://sx54pm1tcw.feishu.cn/space/api/box/stream/download/asynccode/?code=OTYyYzA2ZGE2MDlhMDg0M2I0YTA3ZDVkNjc1NWIzODFfUFNGMDZNTktRY3FOWXhnYUNUV0JwR2N6QVVxQWF0dEVfVG9rZW46Ym94Y25xeU1Ra25RdlZPWjZxazVDNUQ4Rm5oXzE2MzE2OTc5NTI6MTYzMTcwMTU1Ml9WNA" alt="img"></p>
<h4 id="四次挥手" tabindex="-1"><a class="header-anchor" href="#四次挥手" aria-hidden="true">#</a> 四次挥手</h4>
<p>客户端或者服务器均可以主动发起挥手动作。</p>
<p>第一次挥手（FIN = 1；seq = x）</p>
<p>客户端发送一个FIN标志位置为1 的包，表示自己已经没有数据可以发送了，但是仍然可以接受数据。发送完毕后客户端进入fin_wait_1状态；</p>
<p>第二次挥手（ACK=1，ACKnum = x+1）</p>
<p>服务器端确认客户端的fin包，发送一个确认包表明自己接收到了客户端关闭连接的请求，但是还没准备好关闭连接。</p>
<p>发送完毕后，服务器端进入close_wait状态，客户端接收到这个确认包之后，进入fin_wait_2状态等待服务器端关闭连接</p>
<p>第三次挥手（FIN=1,seq=y）</p>
<p>服务器端准备好关闭连接时，向客户端发送结束连接请求，FIN值为1</p>
<p>发送完毕后，服务器端进⼊ LAST_ACK 状态，等待来⾃客户端的最后⼀个ACK。</p>
<p>第四次挥⼿(ACK=1，ACKnum=y+1)</p>
<p>客户端接收到来⾃服务器端的关闭请求，发送⼀个确认包，并进⼊ TIME_WAIT 状态，等待可能出现的要求重传的</p>
<p>ACK 包。</p>
<p>服务器端接收到这个确认包之后，关闭连接，进⼊ CLOSED 状态。</p>
<p>客户端等待了某个固定时间（两个最⼤段⽣命周期，2MSL，2 Maximum Segment Lifetime）之后，没有收到服务</p>
<p>器端的 ACK ，认为服务器端已经正常关闭连接，于是⾃⼰也关闭连接，进⼊ CLOSED 状态。</p>
<h4 id="osi7层模型" tabindex="-1"><a class="header-anchor" href="#osi7层模型" aria-hidden="true">#</a> OSI7层模型</h4>
<p>应用层(HTTP）、表示层(数据格式化)、会话层（建立解除会话）、传输层（提供端对端的接口）、网络层、数据链路层、物理层</p>
<p><img src="HTTPs://sx54pm1tcw.feishu.cn/space/api/box/stream/download/asynccode/?code=MjIxN2FmYWY5NTEwNjViYzlhYTJmZTliMWYyZDczZTVfYU1LMk9nR1hyUVp2VWM0TjZqRncwTEF6MGxSQ2Vud2ZfVG9rZW46Ym94Y25wTlo3WVZNT01pdVk3WU0ybzNmTFVkXzE2MzE2OTc5NTI6MTYzMTcwMTU1Ml9WNA" alt="img"></p>
<p><img src="HTTPs://sx54pm1tcw.feishu.cn/space/api/box/stream/download/asynccode/?code=NmMyMjE1MjBmMTU4MGE2ZGIzMmVmY2FiN2EzYTJmOWJfSDBkSXBTaTkzZG0wTFlVTTdqNEhoNURCUEpYNk9mOE5fVG9rZW46Ym94Y250cWZsTE1BWTRlUXJFZnhGODM3d1BoXzE2MzE2OTc5NTI6MTYzMTcwMTU1Ml9WNA" alt="img"></p>
<h4 id="前端优化" tabindex="-1"><a class="header-anchor" href="#前端优化" aria-hidden="true">#</a> 前端优化</h4>
<h5 id="content方面" tabindex="-1"><a class="header-anchor" href="#content方面" aria-hidden="true">#</a> <strong>content方面：</strong></h5>
<p>减少HTTP请求：通过webpack等打包工具对资源进行打包合并去重压缩。使用精灵图合并小图片、inline Image;</p>
<p>减少DNS查询：DNS缓存、将资源分布到恰当数量的主机上</p>
<p>（拓展：在地址栏输入网址的时候，互联网应用提供商执行DNS查询（实现根据域名得到ip并访问）。所以在访问网站的时候需要先进行DNS查询，故查询后可以缓存下来，下次就不需要再1次查询。浏览器对同一个域名的并发连接数量有限制，并发数达到上限的时候就会造成阻塞，将资源分布到恰当数量的主机上，可以提高并发数量。）</p>
<p>Css  减少DOM元素的数量，从而减少构建dom树需要的时间</p>
<h5 id="server方面" tabindex="-1"><a class="header-anchor" href="#server方面" aria-hidden="true">#</a> <strong>Server方面：</strong></h5>
<p>使用CDN：内容分发网络，可以缩短时延。用户和内容之间的物理距离缩短了，等待时间就减少了。cdn系统能够实时根据网络流量和各节点连接负载以及到用户的距离和响应时间等，将用户的请求重新导向离用户最近的服务节点上，保证资源的加载速度和稳定性。</p>
<p>配置ETag:如果服务器中的内容未修改，那么使用本地缓存，省的再次加载</p>
<p>对组件使用Gzip压缩</p>
<p>首屏直出，可由服务端渲染，保证首屏加载速度。不可见部分异步加载。</p>
<p>接口合并：代理服务器实现请求合并，后台的接口只需要保证健壮和分布式。</p>
<h5 id="cookie方面" tabindex="-1"><a class="header-anchor" href="#cookie方面" aria-hidden="true">#</a> <strong>Cookie方面：</strong></h5>
<p>减少cookie大小：去除不必要的cookie</p>
<h5 id="css方面" tabindex="-1"><a class="header-anchor" href="#css方面" aria-hidden="true">#</a> <strong>CSS方面：</strong></h5>
<p>将样式放在页面顶部：把样式表放到&lt; head /&gt;内会使页面有步骤的加载显示。</p>
<p>不使用css表达式：它的计算频率要比我们想象的多</p>
<p>不使用@import</p>
<h5 id="js方面" tabindex="-1"><a class="header-anchor" href="#js方面" aria-hidden="true">#</a> <strong>JS方面</strong></h5>
<p>将脚本放在页面底部：脚本会阻止页面的平行下载</p>
<p>从外部引入js和css：因为JavaScript和CSS文件都能在浏览器中产生缓存。内置在HTML文档中的JavaScript 和CSS则会在每次请求中随HTML文档重新下载。</p>
<p>压缩js和css</p>
<p>删除不需要的脚本</p>
<p>减少dom访问：缓存已经访问过的有关元素，避免使用js修改页面布局</p>
<h5 id="图片方面" tabindex="-1"><a class="header-anchor" href="#图片方面" aria-hidden="true">#</a> <strong>图片方面</strong></h5>
<p>优化图片：根据实际颜色需要选择色深、压缩</p>
<p>不在html中拉伸图片</p>
<h4 id="页面渲染性能优化" tabindex="-1"><a class="header-anchor" href="#页面渲染性能优化" aria-hidden="true">#</a> <a href="HTTPs://www.jianshu.com/p/d9c20eafa67e">页面渲染性能优化</a></h4>
<p>1.防止阻塞渲染</p>
<p>css放在首部提前加载，js文件放在底部，防止阻塞解析</p>
<p>不改变dom和css的js使用defer和async属性告诉浏览器可以异步加载，不阻塞解析</p>
<p>2.减少重绘和回流</p>
<p>js尽量减少访问dom节点和css属性</p>
<p>尽可能为产生动画的html元素使用fixed或者absolute的position，这样修改css不会引起回流</p>
<p>img设置宽高，减少重绘重排</p>
<p>尽量使用transform做形变和位移不会造成回流。</p>
<p>3.提高代码的质量</p>
<p>减少dom层级，meta标签需要定义文档的编码，便于浏览器解析。</p>
<p>减少css嵌套层级，选择合适的选择器</p>
<p>减少通过js代码修改元素样式，尽量使用修改class名方式操作样式或者动画</p>
<h4 id="从浏览器地址栏输入url到显示页面的步骤" tabindex="-1"><a class="header-anchor" href="#从浏览器地址栏输入url到显示页面的步骤" aria-hidden="true">#</a> 从浏览器地址栏输入url到显示页面的步骤</h4>
<p>1.浏览器根据请求的url（统一资源定位符）交给DNS域名解析，找到真实的IP，发送请求。这个过程会先找缓存，依次查找浏览器DNS缓存、操作系统DNS缓存、本地域名服务器，本地域名服务器采用递归查询、未找到向上级域名服务器进行迭代查询，先向根域名服务器发起请求，拿到顶级域名服务器地址，向顶级域名服务器发起请求拿到权限域名服务器地址，向权限域名服务器发起请求拿到ip地址返回给操作系统，并且缓存下域名和ip的映射关系，获取到IP后，构造HTTP请求。</p>
<p>浏览器会先查看缓存，如果请求资源在缓存中并且未过期，获取缓存资源，否则与服务器进行验证。</p>
<p>如果资源未缓存，发送新的请求。</p>
<p>检测是否过期通常由两个HTTP头进行控制：expires和cache—control；</p>
<p>expires是<code>HTTP1.0</code>提供的，值为一个绝对时间，表示缓存新鲜日期</p>
<p>cache-control是<code>HTTP1.1</code>增加的，值是以秒为单位的最大新鲜时间</p>
<p>2.打开一个socket与目标IP地址、端口建立<code>TCP</code>连接，进行三次握手。依次通过传输层、网络层、数据链路层、物理层到达服务器。</p>
<p>3.建立了<code>TCP</code>连接后发送HTTP请求。</p>
<p>4.服务器接受请求并且解析，将请求转发到服务程序。</p>
<p>5.服务器检查请求头是否包含了缓存验证信息，如果验证缓存新鲜的话，返回304等对应状态码。</p>
<p>6.处理程序读取完整请求并准备HTTP响应，可能需要查询数据库等操作。</p>
<p>7.服务器将响应报文通过<code>TCP</code>连接发送回浏览器。</p>
<p>8.根据情况选择关闭<code>TCP</code>连接或者是保留重用，涉及到四次挥手。</p>
<p>9.浏览器检查响应状态码，并且如果资源可以缓存的话，进行缓存。</p>
<h4 id="url的组成" tabindex="-1"><a class="header-anchor" href="#url的组成" aria-hidden="true">#</a> URL的组成</h4>
<p><img src="HTTPs://sx54pm1tcw.feishu.cn/space/api/box/stream/download/asynccode/?code=N2I1YzczZGYzNWViZjljYjhjMTUxZDNjNmJhYjAwMGFfYUVMaURNa0F6NUxWNFJGY1BvNTNYMHc4YmZiWHZmek5fVG9rZW46Ym94Y24zMG0zZFdJTW44N09ranNVWVJEandiXzE2MzE2OTc5NTI6MTYzMTcwMTU1Ml9WNA" alt="img"></p>
<h4 id="相当于浏览器解析渲染页面" tabindex="-1"><a class="header-anchor" href="#相当于浏览器解析渲染页面" aria-hidden="true">#</a> （相当于浏览器解析渲染页面）</h4>
<p>10.解析HTML文档，构建DOM数，下载资源，构造CSSOM树，执行js脚本。</p>
<p><strong>构建DOM树。（增量构建）</strong></p>
<p>Tokenizing：根据HTML规范将字符流解析为标记</p>
<p>Lexing：词法分析将标记转换为对象并定义属性和规则</p>
<p>DOM construction：根据HTML标记关系将对象组成DOM树</p>
<p>这个过程是深度优先遍历，先构建当前节点的所有子节点，在构建下一个兄弟节点；遇到script标签会先执行完再继续构建</p>
<p>解析过程遇到图片、样式表、js文件启动下载。（会导致堵塞，这也是为什么建议js代码放在html后面）</p>
<p>DOM树描述了文档的内容，<code>&lt;html&gt;</code>元素是第一个标签也是文档树的根节点。树反映了不同标记之间的关系和层次结构，dom节点数量越多，构建dom树需要的时间就越长。</p>
<p><strong>根据外部样式、内部样式和内联样式构建CSSOM树：（渲染阻塞）</strong></p>
<p>浏览器将CSS规则转换为可以理解和使用的样式映射。浏览器遍历CSS中的每个规则集，根据CSS选择器创建具有父、子和兄弟关系的节点树。</p>
<p>tokenizing：字符流转换为标记流；</p>
<p>Node：根据标记创建节点</p>
<p>CSSOM：将节点创建为CSSOM树</p>
<p>这个时候js执行会暂停直到cssom树就绪</p>
<p><strong>根据DOM树和CSSOM树构建渲染树</strong></p>
<p>从DOM树的根节点遍历所有可见节点，不可见节点包括script，meta这类本身不可见的标签和被CSS隐藏的节点</p>
<p>对所有可见节点找到恰当的CSSOM规则并且应用；</p>
<p>发布可视节点的内容和计算样式</p>
<p><strong>根据渲染树计算节点信息</strong></p>
<p>布局是第一次确定呈现树中所有节点的宽度、高度和位置，以及确定页面上每个对象的大小和位置的过程。</p>
<p>回流：布局完成后发现了某个部分发生变化影响了布局，需要重新计算和渲染（[重绘和重排](js尽量少访问dom节点和css 属性</p>
<p>尽可能的为产⽣动画的 HTML 元素使⽤ fixed 或 absolute 的 position ，那么修改他们的 CSS 是不会 Reflow 的。</p>
<p>img标签要设置⾼宽，以减少重绘重排</p>
<p>把DOM离线后修改，如将⼀个dom脱离⽂档流，⽐如display：none ，再修改属性，这⾥只发⽣⼀次回流。</p>
<p>尽量⽤ transform 来做形变和位移，不会造成回流)）。</p>
<p><strong>绘制页面</strong></p>
<p>只有受影响的屏幕区域会被重绘，浏览器被优化为只重绘需要绘制的最小区域。</p>
<p><strong>合成</strong></p>
<p>当文档的各个部分以不同的层绘制，相互重叠时，必须进行合成，以确保它们以正确的顺序绘制到屏幕上，并正确显示内容。</p>
<h4 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> <RouterLink to="/interview/HTTP:/verymuch.site/2018/10/09/web-browser-cache-strategy/">缓存</RouterLink></h4>
<p>浏览器对于所请求资源的缓存处理有一套完整的机制，主要包含以下三个策略：<strong>存储策略、过期策略、协商策略</strong>。</p>
<p>其中，<strong>存储策略发生在收到请求响应后，用于决定是否缓存相应资源；过期策略发生在请求前，用于判断缓存是否过期；协商策略发生在请求中，用于判断缓存资源是否更新。</strong></p>
<p>浏览器在应用缓存策略时，具体的判断流程如下：</p>
<p><img src="HTTPs://sx54pm1tcw.feishu.cn/space/api/box/stream/download/asynccode/?code=NDVhZTY5MDViZGE5ZmExNWNkZGZmZThmZmM1OWUyMGJfZTN6V2ZzQTJnd0ZQMDk4WGE3aTMyTjgzTFdua2F2UjZfVG9rZW46Ym94Y24ySHJrN09vSFpnV3dmUmdSU01Bb1FnXzE2MzE2OTc5NTI6MTYzMTcwMTU1Ml9WNA" alt="img"></p>
<p>从上面各类缓存的优缺点可以看出，每一种缓存都不是完美的。所以<strong>建议像下面这样做</strong>：</p>
<p>问：<RouterLink to="/interview/HTTPs:/www.cnblogs.com/SallyShan/p/13603221.html">资源更新了，但是时间没过期咋办</RouterLink></p>
<p>对于开发者：ctrl+F5，或者 控制台 network disable cache</p>
<ol>
<li>不要缓存HTML，避免缓存后用户无法及时获取到更新内容。</li>
<li>使用<code>Cache-Control</code>和<code>ETag</code>来控制HTML中所使用的静态资源的缓存。一般是将<code>Cache-Control</code>的<code>max-age</code>设成一个比较大的值，同时一些资源使用catch-control的no cache，然后用<code>ETag</code>进行验证。</li>
<li>使用签名或者版本来区分静态资源。这样静态资源会生成不同的资源访问链接，不会产生修改之后无法感知的情况。</li>
</ol>
<h4 id="get请求缓存问题" tabindex="-1"><a class="header-anchor" href="#get请求缓存问题" aria-hidden="true">#</a> <code>get</code>请求缓存问题</h4>
<p>1.服务端处理，在response的 header 中添加<code>@{@&quot;Cache-Control&quot;: @&quot;no-cache, must-reva lidate&quot;}</code>;</p>
<p>2.客户端在header中添加<code>@{@&quot;If-Modified-Since&quot;: @&quot;0&quot;}</code></p>
<p>3.客户端在header中添加<code>@{@&quot;Cache-Control&quot;: @&quot;no-cache&quot;}</code>，</p>
<p>4.客户端在<code>get</code>请求的url中添加参数<code>@{@&quot;timestamp&quot;: @([[NSDate date] timeIntervalSince1970]}</code></p>
<p>6.用POSET替换<code>get</code>请求</p>
<h4 id="http缓存-强缓存-协商缓存的流程" tabindex="-1"><a class="header-anchor" href="#http缓存-强缓存-协商缓存的流程" aria-hidden="true">#</a> HTTP缓存，强缓存，协商缓存的流程</h4>
<p>浏览器缓存分为强缓存和协商缓存，当用户第一次请求资源的时候，会通过响应头决定缓存策略，当决定缓存资源的时候，将资源缓存在本地，在第二次请求资源的时候，根据HTTP 请求头header判断是否命中强缓存，如果命中，从本地获取缓存，不会发送请求给服务器。</p>
<p>如果强缓存没有命中，客户端会发送请求给服务器， 服务器通过request 响应头header验证这个资源是否命中协商缓存，称为HTTP再验证。如果命中，服务器将请求返回，返回304状态码，不返回资源，告诉客户端可以从本地获取，客户端收到返回后从缓存中读取资源。</p>
<p>共同点：如果命中了缓存 都不会返回资源，区别是强缓存不发请求，协商缓存会发送请求</p>
<p>当协商缓存也没有命中的话服务器就会返回资源</p>
<p><strong>强缓存</strong>：expires：值是一个绝对时间格式的字符串，代表资源的过期时间，必须保证服务端时间和客户端时间严格一致；cache-control：max-age：判断缓存资源的最大生命周期，单位是秒，表示该资源多少时间后过期，解决了客户端和服务器时间必须同步的问题，因为是与客户端时间进行比较，优先级高。</p>
<p>cache-Control：public表示可以被所有用户缓存，包括终端和CDN等中间代理服务器</p>
<p>cache-control：private只能被终端浏览器缓存，不允许中继缓存服务器进行缓存；</p>
<p>cache-control：no-cache，跳过强缓存，强制进入协商策略。</p>
<p>cache-control：no-store，不会产生任何缓存</p>
<p><strong>协商缓存</strong>：last-modified：资源最后更新时间，随服务器response返回</p>
<p>if-modified-since:客户端在发送请求的时候，将服务器返回的修改时间放在请求头if-modified-since发送给服务器，服务器再跟服务器上对应资源进行比较，来判断资源在两次请求期间是否有过修改，如果没有修改就命中协商缓存</p>
<p>ETag:资源内容的唯一标识（校验码），随服务器response返回，资源变化会导致etag变化</p>
<p>if-none-match:服务器通过比较这个和etag是否一致来判断资源是否被修改过，如果没有就命中协商缓存</p>
<p>Last-modified有一些缺陷：时间精确到秒一级，所以有些频繁改动无法确认，无法准确标注修改时间</p>
<p>有些固定周期的生成，内容不一定有变化，导致文件无法使用缓存。会优先使用etag</p>
<p><strong>区别：获取资源的时候是否会发送请求</strong></p>
<h4 id="缓存重新加载" tabindex="-1"><a class="header-anchor" href="#缓存重新加载" aria-hidden="true">#</a> 缓存重新加载</h4>
<p>ctrl+F5 <strong>硬性重新加载</strong>，所有的资源（静态资源、ajax请求）都会从服务器重新再次请求，不会被浏览器所缓存。CTRL+F5触发的HTTP请求的请求头中没有上面的那两个头，却有Pragma: no-cache 或 Cache-Control: no-cache 字段，或者两者兼有。</p>
<p>F5 <strong>正常重新加载</strong>，也就是说浏览器会缓存在内存或者磁盘当中。F5触发的HTTP请求的请求头中通常包含了If-Modified-Since 或 If-None-Match字段,或者两者兼有。</p>
<p><img src="HTTPs://sx54pm1tcw.feishu.cn/space/api/box/stream/download/asynccode/?code=YzkxN2E0YWVhZGIwNDI2ZDk5MzhkOTcwNDg0YTljNDlfZ3VyamxFQ0xtVk5FRWxkSU9oNWNxd0ZpUjJjZk1wVHJfVG9rZW46Ym94Y25uQWRkcE1oN2lCa0RWM0x1MkZ1RFFlXzE2MzE2OTc5NTI6MTYzMTcwMTU1Ml9WNA" alt="img"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>F5刷新的js`和`img`后面的`size`字段和之前的不一样了，变成了`from memory cache
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="size-选项的-4-种情况" tabindex="-1"><a class="header-anchor" href="#size-选项的-4-种情况" aria-hidden="true">#</a> size 选项的 4 种情况</h5>
<p>1.资源的大小</p>
<p>2.<code>from disk cache</code></p>
<p>3.<code>from memory cache</code></p>
<p>4.<code>from ServiceWorker</code></p>
<h6 id="from-disk-cache" tabindex="-1"><a class="header-anchor" href="#from-disk-cache" aria-hidden="true">#</a> from disk cache</h6>
<p>表示此资源是取自<code>磁盘</code>，不会请求服务器。已经在之前的某个时间加载过该资源，但是此资源不会随着该页面的关闭而释放掉，因为是存在硬盘当中的，下次打开仍会 <code>from disk cache</code>。</p>
<h6 id="from-memory-cache" tabindex="-1"><a class="header-anchor" href="#from-memory-cache" aria-hidden="true">#</a> from memory cache</h6>
<p>表示此资源是取自<code>内存</code>，不会请求服务器。已经加载过该资源且缓存在内存当中；关闭该页面此资源就被内存释放掉了，再次打开相同页面时不会出现 <code>from memory cache</code> 的情况。</p>
<h6 id="资源本身大小数值" tabindex="-1"><a class="header-anchor" href="#资源本身大小数值" aria-hidden="true">#</a> 资源本身大小数值</h6>
<p>当 HTTP 状态为 200 是实实在在从浏览器获取的资源，当 HTTP 状态为 304 时该数字是与服务端通信报文的大小，并不是该资源本身的大小，该资源是从本地获取的。</p>
<h4 id="cookie和session" tabindex="-1"><a class="header-anchor" href="#cookie和session" aria-hidden="true">#</a> <a href="HTTPs://blog.csdn.net/a754895/article/details/82632747">cookie和session</a></h4>
<h4 id="cookie-sessionstorage-localstorage区别" tabindex="-1"><a class="header-anchor" href="#cookie-sessionstorage-localstorage区别" aria-hidden="true">#</a> cookie sessionStorage，localStorage区别</h4>
<p>都可以用了来在浏览器端缓存数据，都是字符串类型的键值对，区别在于前两者属于WebStorage，创建他们的目的是便于客户端存储数据。</p>
<p>区别：</p>
<p>cookie数据始终在同源的HTTP请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递（可能会浪费带宽）。而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。</p>
<p>cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。</p>
<p>存储大小限制也不同，cookie数据不能超过4k，同时因为每次HTTP请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。</p>
<p>数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；localStorage：始终有效，窗口或浏览器关闭也⼀直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前⼀直有效，即使窗口或浏览器关闭。</p>
<p>作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同⼀个页面；</p>
<p>localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。</p>
<p>Web Storage 支持事件通知机制，可以将数据更新的通知发送给监听者。</p>
<p>Web Storage 的 api 接口使用更方便。</p>
<h4 id="cdn是什么-为什么会快-如果没有要请求的文件会怎么做" tabindex="-1"><a class="header-anchor" href="#cdn是什么-为什么会快-如果没有要请求的文件会怎么做" aria-hidden="true">#</a> cdn是什么，为什么会快，如果没有要请求的文件会怎么做</h4>
<p>cdn是内容分发网络，简单来说就是将内容缓存在用户附近的服务器上。通过更多的缓存服务点（cdn边缘节点）放在用户访问相对集中的地区或网络中，利用全局负载技术，将用户的访问指向距离最近的缓存服务器上，由缓存服务器响应用户的内容。</p>
<p>过程：</p>
<p><img src="HTTPs://sx54pm1tcw.feishu.cn/space/api/box/stream/download/asynccode/?code=OWE5OWQ2M2RiYTQzZWJjODk1YjA3YWRlNDE1NjI4NTlfem13NFp4V3h0d0hERkRMSzJuRW54V0w0WEtKV2NKaGpfVG9rZW46Ym94Y25RYVBrSkFvaGdIdlVPQWliTTdYTUtnXzE2MzE2OTc5NTI6MTYzMTcwMTU1Ml9WNA" alt="img"></p>
<p>用户请求资源，isp根据url去查找本地dns系统寻求IP地址解析。本地dns系统会将解析权交给cdn专用的dns服务器。</p>
<p>cdn的专用dns服务器，将cdn的全局负载均衡设备ip地址返回给用户</p>
<p>用户访问全局负载均衡设备发请求，全局负载均衡设备根据ip选择一台用户所属区域的缓存服务器。并返回给用户这个服务器的ip地址，用户继续发送请求。缓存服务器响应请求，将用户所需的内容传到用户终端。</p>
<p>如果缓存服务器上没有用户想要的内容，这台缓存服务器就要到网站的源服务器请求内容。</p>
<p>源服务器返回内容给缓存服务器，缓存服务器发给用户，根据用户自定义的缓存策略，判断要不要把内容缓存到缓存服务器上。</p>
<h4 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h4>
<p>同源策略：一个域下的js脚本未经允许不能访问另一个域的内容。协议域名端口都需要相同，否则不是一个域。</p>
<p>主要限制三个方面：js脚本不能够访问其他域下的cookie localStorage indexDB</p>
<p>当前域下的js脚本不能操作访问其他域下的DOM</p>
<p>ajax无法发送跨域请求。</p>
<p>同源政策目的：保证信息安全，只会限制js脚本。</p>
<p>解决跨域：</p>
<p><strong>使⽤ jsonp</strong> 来实现跨域请求，它的主要原理是通过动态构建 script 标签来实现跨域请求，因为<strong>浏览器对 script 标签的引⼊没有跨域的访问限制</strong> 。通过在请求的 url 后指定⼀个回调函数，然后服务器在返回数据的时候，构建⼀个 json 数据的包装，这个包装就是回调函数，然后返回给前端，前端接收到数据后，因为请求的是脚本⽂件，所以会直接执⾏，这样我们先前定义好的回调函数就可以被调⽤，从⽽实现了跨域请求的处理。这种⽅式只能⽤于 <strong><code>get</code></strong> 请求。</p>
<p><strong>使⽤ CORS</strong> 的⽅式，CORS 是⼀个 W3C 标准，全称是&quot;跨域资源共享&quot;。CORS 需要浏览器和服务器同时⽀持。⽬前，所有浏览器都⽀持该功能，因此我们只需要在服务器端配置就⾏。浏览器将 CORS 请求分成两类：简单请求和⾮简单请求。对于简单请求，浏览器直接发出 CORS 请求。具体来说，就是会在头信息之中，增加⼀个 Origin 字段。Origin 字段⽤来说明本次请求来⾃哪个源。服务器根据这个值，决定是否同意这次请求。对于如果 Origin 指定的源，不在许可范围内，服务器会返回⼀个正常的 HTTP 回应。浏览器发现，这个回应的头信息没有包含Access-Control-Allow-Origin 字段，就知道出错了，从而抛出⼀个错误，ajax 不会收到响应信息</p>
<p><strong>使用Nginx</strong>的方式，代理服务器，轻量级、启动快、高并发。所有客户端请求都必须先经过nginx处理，再将请求转发给node或者java，规避同源策略。</p>
<p><strong>使用websocket</strong></p>
<h4 id="http和tcp的区别和联系" tabindex="-1"><a class="header-anchor" href="#http和tcp的区别和联系" aria-hidden="true">#</a> HTTP和<code>TCP</code>的区别和联系</h4>
<p><code>TCP</code>是在传输层的协议，定义的是数据传输和连接方式的规范，HTTP是应用层协议，定义的是传输数据的内容和规范，HTTP协议中的数据是利用<code>TCP</code>传输的，支持HTTP就一定支持<code>TCP</code>。</p>
<h4 id="tcp和udp" tabindex="-1"><a class="header-anchor" href="#tcp和udp" aria-hidden="true">#</a> <code>TCP</code>和UDP</h4>
<p><code>TCP</code>使用校验和、确认和重传机制来保证可靠传输，使用滑动窗口机制实现流量控制，通过动态改变窗口的大小实现拥塞控制。</p>
<p><code>TCP</code>是面向连接的，因为有重传机制，所以可靠；因为通过SYN排序，所以有序，具有拥塞控制，但是传输速度慢；</p>
<p>UDP面向无连接，丢包后数据会丢失所以不可靠；传输的数据是无序的，没有拥塞控制，传输速度较快</p>
<h4 id="前端安全问题" tabindex="-1"><a class="header-anchor" href="#前端安全问题" aria-hidden="true">#</a> 前端安全问题</h4>
<h5 id="跨站脚本攻击xss-https-tech-meituan-com-2018-09-27-fe-security-html-text-xss-攻击的介绍-在开始本文之前-我们先提出一个问题-请判断以下两个说法是否正确-xss-防范是后端-rd-研发人员-的责任-后端-rd-应该在所有用户提交数据的接口-对敏感字符进行转义-才能进行下一步操作。-所有要插入到页面上的数据-都要通过一个敏感字符过滤函数的转义-过滤掉通用的敏感字符后-就可以插入到页面中。-如果你还不能确定答案-那么可以带着这些问题向下看-我们将逐步拆解问题。-被动攻击模式" tabindex="-1"><a class="header-anchor" href="#跨站脚本攻击xss-https-tech-meituan-com-2018-09-27-fe-security-html-text-xss-攻击的介绍-在开始本文之前-我们先提出一个问题-请判断以下两个说法是否正确-xss-防范是后端-rd-研发人员-的责任-后端-rd-应该在所有用户提交数据的接口-对敏感字符进行转义-才能进行下一步操作。-所有要插入到页面上的数据-都要通过一个敏感字符过滤函数的转义-过滤掉通用的敏感字符后-就可以插入到页面中。-如果你还不能确定答案-那么可以带着这些问题向下看-我们将逐步拆解问题。-被动攻击模式" aria-hidden="true">#</a> [跨站脚本攻击XSS](HTTPs://tech.meituan.com/2018/09/27/fe-security.html#:~:text=XSS 攻击的介绍. 在开始本文之前，我们先提出一个问题，请判断以下两个说法是否正确：. XSS 防范是后端,RD（研发人员）的责任，后端 RD 应该在所有用户提交数据的接口，对敏感字符进行转义，才能进行下一步操作。. 所有要插入到页面上的数据，都要通过一个敏感字符过滤函数的转义，过滤掉通用的敏感字符后，就可以插入到页面中。. 如果你还不能确定答案，那么可以带着这些问题向下看，我们将逐步拆解问题。.)（被动攻击模式）</h5>
<p>跨站脚本攻击（Cross-site scripting，XSS）是一种安全漏洞，攻击者可以利用这种漏洞在网站上注入恶意的客户端代码。当被攻击者登陆网站时就会自动运行这些恶意代码，从而，攻击者可以突破网站的访问权限，冒充受害者。</p>
<p>如果 Web 应用程序没有部署足够的安全验证，那么，这些攻击很容易成功。浏览器无法探测到这些恶意脚本是不可信的，所以，这些脚本可以任意读取 cookie，session tokens，或者其它敏感的网站信息，或者让恶意脚本重写<a href="HTTPs://developer.mozilla.org/zh-CN/docs/Glossary/HTML">HTML</a>内容。</p>
<p><strong>影响：</strong></p>
<p>1.利用虚假输入表单骗取用户个人信息</p>
<p>2.利用脚本窃取Cookie值，被害者在不知情的情况下帮助攻击者发送恶意的请求</p>
<p>3.显示伪造的文章和图片</p>
<p>**可分为：**存储型（持久型）、反射型（非持久型）、DOM 型</p>
<ul>
<li>存储型：常见于带有用户保存数据的网站功能</li>
<li>反射性：存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里，常见于通过 URL 传递参数的功能，如网站搜索、跳转等。需要用户主动打开恶意的 URL 才能生效</li>
<li>DOM型：取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。</li>
</ul>
<p><strong>解决方案：</strong></p>
<p>预防存储型和反射型</p>
<ul>
<li>改成纯前端渲染，把代码和数据分隔开。</li>
</ul>
<p>纯前端渲染还需注意避免 DOM 型 XSS 漏洞</p>
<ul>
<li>对 HTML 做充分转义。</li>
</ul>
<p>对 HTML 模板各处插入点进行充分的转义</p>
<p>预防DOM型XSS攻击</p>
<p>在使用 <code>.innerHTML</code>、<code>.outerHTML</code>、<code>document.write()</code> 时要特别小心，不要把不可信的数据作为 HTML 插到页面上，而应尽量使用 <code>.textContent</code>、<code>.setAttribute()</code> 等。</p>
<h5 id="跨站请求伪造csrf" tabindex="-1"><a class="header-anchor" href="#跨站请求伪造csrf" aria-hidden="true">#</a> <RouterLink to="/interview/HTTPs:/tech.meituan.com/2018/10/11/fe-security-csrf.html">跨站请求伪造CSRF</RouterLink></h5>
<p>攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。</p>
<p><strong>常见的攻击类型</strong></p>
<p><code>get</code> <code>post</code> 链接类型</p>
<p><strong>特点</strong></p>
<ul>
<li>
<p>攻击一般发起在第三方网站，而不是被攻击的网站。被攻击的网站无法防止攻击发生。</p>
</li>
<li>
<p>攻击利用受害者在被攻击网站的登录凭证，冒充受害者提交操作；而不是直接窃取数据。</p>
</li>
<li>
<p>整个过程攻击者并不能获取到受害者的登录凭证，仅仅是“冒用”。</p>
</li>
<li>
<p>跨站请求可以用各种方式：图片URL、超链接、CORS、Form提交等等。部分请求方式可以直接嵌入在第三方论坛、文章中，难以进行追踪。</p>
</li>
</ul>
<p><strong>防护策略</strong></p>
<ul>
<li>阻止不明外域的访问
<ul>
<li>同源检测</li>
</ul>
</li>
</ul>
<p>在HTTP协议中，每一个异步请求都会携带两个Header，用于标记来源域名：</p>
<ul>
<li>
<p>Origin Header</p>
</li>
<li>
<p>Referer Header</p>
</li>
</ul>
<p>这两个Header在浏览器发起请求时，大多数情况会自动带上，并且不能由前端自定义内容。 服务器可以通过解析这两个Header中的域名，确定请求的来源域。</p>
<ul>
<li>提交时要求附加本域才能获取的信息
<ul>
<li>CSRF Token</li>
</ul>
</li>
</ul>
<p>\1. 将CSRF Token输出到页面中</p>
<p>\2. 页面提交的请求携带这个Token</p>
<p>\3. 服务器验证Token是否正确</p>
<ul>
<li>双重Cookie验证</li>
</ul>
<p>要求Ajax和表单请求携带一个Cookie中的值。</p>
<p>在用户访问网站页面时，向请求域名注入一个Cookie，内容为随机字符串（例如<code>csrfcookie=v8g9e4ksfhw</code>）。</p>
<p>在前端向后端发起请求时，取出Cookie，并添加到URL的参数中（接上例``post<code> HTTPs://www.a.com/comment?csrfcookie=v8g9e4ksfhw</code>）。</p>
<p>后端接口验证Cookie中的字段与URL参数中的字段是否一致，不一致则拒绝。</p>
<p>为了从源头上解决这个问题，Google起草了一份草案来改进HTTP协议，那就是为Set-Cookie响应头新增Samesite属性，它用来标明这个 Cookie是个“同站 Cookie”，同站Cookie只能作为第一方Cookie，不能作为第三方Cookie，Samesite 有两个属性值，分别是 Strict 和 Lax</p>
<p>Samesite=Strict</p>
<p>这种称为严格模式，表明这个 Cookie 在任何情况下都不可能作为第三方 Cookie</p>
<p>Samesite=Lax</p>
<p>这种称为宽松模式，比 Strict 放宽了点限制：假如这个请求是这种请求（改变了当前页面或者打开了新页面）且同时是个<code>get</code>请求，则这个Cookie可以作为第三方Cookie。</p>
<h4 id="性能优化比较新的内容-实践方向" tabindex="-1"><a class="header-anchor" href="#性能优化比较新的内容-实践方向" aria-hidden="true">#</a> <a href="HTTPs://sx54pm1tcw.feishu.cn/docs/doccnvBCsHDEpJTXbBkl9AZ24Ff#oxYdrn">性能优化比较新的内容（实践方向）</a></h4>
<h4 id="浏览器测试" tabindex="-1"><a class="header-anchor" href="#浏览器测试" aria-hidden="true">#</a> 浏览器测试</h4>
</template>
