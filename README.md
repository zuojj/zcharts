### JavaScript 缩放
> dbclick, mousewheel
该示例使用两个按钮和鼠标滚轮啦放大和缩小测试图像：当前比例 SVG 缩放。
尽管通过注释很好地记录了此示例，但仍需注意以下几点：
用于调整测试图大小（或缩放级别）的技术是 svg 元素的 currentScale 特性。
mousewheel 事件已与 window 元素挂接（与 svg 或 body 元素相对），这样一来，无论缩放级别如何，鼠标滚轮在整个网页上都是活动的。
需要 svg 元素的 viewBox 属性以避免与缩放有关的呈现问题（在没有 viewBox 属性的情况下进行尝试即可观察该问题）。
### JavaScript 平移
> mousemove

在放大某个特定 SVG 图后，能够移动（平移）图形以查看各种放大功能会很有用。以下示例使用箭头键来平移一个简单的 SVG 图像（蓝色圆圈）：SVG 平移。
在此示例中，平移（和下一个示例中的缩放）是通过操作 svg 元素的 viewBox 特性的值来实现的。viewBox 属性的值（一个包含四个数字的字符串）在用户空间中指定了一个矩形，该矩形将映射到视区边界（由svg 元素建立）。通过使用有助于教学的非标准词汇，可按如下方式描述 viewBox 语法：
viewBox="ULCx ULCy UUwidth UUheight"
注意 ULCx 和 ULCy 分别表示“左上角 x”和“左上角 y”。UUwidth 和UUheight 分别表示“用户单位宽度”和“用户单位高度”。


## 参考链接
* [Transforms on SVG Elements](https://css-tricks.com/transforms-on-svg-elements/)
* [SVG 图像](http://javascript.ruanyifeng.com/htmlapi/svg.html#)
* [SVG (basic support)浏览器兼容一览表](http://caniuse.mojijs.com/Home/Html/item/key/svg/index.html)
* [一些SVG向下兼容优雅降级技术](http://www.zhangxinxu.com/wordpress/2013/09/svg-fallbacks/)