> [> 返回目录](../index.html)

# 新浪财经前端开发规范-基础类-CSS

### 书写约定

- 统一使用**英文小写字母**、数字和合法特殊符号书写CSS规则。

- **关联CSS的命名需严格遵循语义化**，参考[CSS常用命名通用表](#tpl2)，注意要点包括：

    + 命名尽可能简短、通用但要意义明确。

    + 推荐使用"\_"连接式命名id，使用"-"连接式命名class。

    + 综合示例：

    ``` css
    /*不推荐*/
    #navigation{}/*不简短*/
    .atr{}/*不通用且意义不明确*/
    .zzz-110{}/*无意义*/
    /*推荐*/
    #nav{}
    .author{}
    /*id命名推荐使用_连接*/
    #btn_show_tip{}
    /*class命名推荐使用-连接*/
    .nav-w{}
    ```

- 避免书写多余不必要的祖先、标签和属性等选择器，防止规则层级过深，如：
    
    ``` css
    /*不推荐*/
    div.tips{}/*不必要的标签名*/
    .parent1 .parent2 .parent3 .classname{}/*层级过深*/
    /*推荐*/
    .tips{}
    .parent1 .classname{}
    ```

- 尽可能避免一个标签上使用的class超过3个。

- **CSS规则禁止分行书写**；如规则条目多且复杂，则可按**“由外到内”**（即定位部分 + 盒模型部分 + 内部样式部分）的顺序书写。示例：

    ``` css
    /*禁止分行书写CSS规则*/
    .wrap{ position: relative; margin: 0 auto; width: 1000px;}
    /*按“定位、盒模型、内部样式”的顺序书写条目多且复杂的CSS规则*/
    .slider{ /*定位部分*/position: relative; top: -5px; z-index: 1; float: left; display: inline; /*盒模型部分*/margin: 0 20px; padding: 5px; width: 100px; height: 100px; /*内部样式部分*/background: #fff url(images/slider.png) 0 0 no-repeat; line-height: 100px; color: #666; font: italic bold 12px/20px arial,sans-serif;}
    ```

- 适当使用空行：除不同的布局单元之间，不要在CSS代码之间空行。示例：

    ``` css
    .blk15{/*...*/}
    /*幻灯图文*/
    .slider-top01{/*...*/}
    .slider-top01-cont{/*...*/}

    .blk16{/*...*/}
    /*头条*/
    .list-hdline{/*...*/}
    .list-hdline li{/*...*/}
    ```

- 尽量使用简写形式的十六进制值，例如，用 #fff 代替 #ffffff。

- 为选择器中的属性添加双引号，例如，input[type="text"]。只有在某些情况下是可选的，但是，为了代码的一致性，建议都加上双引号。

- 避免为 0 值指定单位，例如，用 margin: 0 代替 margin: 0px。

-------

### 业务约定

- 所有页面都必须使用[前端组CSS初始化代码](#tpl1)进行统一的CSS初始化，开发过程中不可直接更改CSS初始化代码。

- 一般的，尽可能确保每个普通页面最多不超过以下3个独立的CSS片段：
    
    - **公共类CSS**：推荐命名为**pub.CSS**，包括两个部分：CSS初始化和页面通用部分。
    
    - **业务类CSS**：推荐命名为**index.CSS**，具体页面的具体样式，如布局、焦点图等。
    
    - **皮肤类CSS**：推荐命名为**skin.CSS**，如果页面需要换肤功能，则将颜色、背景等抽离出来放在这里。

- 页面内的CSS分外引，内嵌，内联三种，使用规范如下：

    - **外引**：仅允许使用link标签引入，尽可能引入到head标签内；不得使用@import等其他方式外引CSS文件。

    - **内嵌**：形如```<style>img{display:none;}</style>```。除页面首屏优化，或极端迫切地需要模块化封装之外，页面原则上**不允许出现内嵌CSS**。在不可避免的需要内嵌css的环境下，style标签——包括页面原有的和js动态导入——**总数上限为31个**。

    - **内联**：形如```<img style="display:none;" />```。除JS操控Dom元素的原因之外，页面原则上**不允许出现内联CSS**。

-------


### 实用模板

#### <a name="tpl1"></a>[pub.CSS（CSS初始化 + 页面通用部分）](src/pub.CSS)

> snippet for sublimeText：[pub.CSS（快捷键initCSS+TAB）](src/CSS_initCSS.sublime-snippet)

``` css
/* 初始化CSS */
html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img{margin:0;padding:0;}
fieldset,img{border:none;}
address,caption,cite,code,dfn,th,var{font-style:normal; font-weight:normal;}
ul,ol{list-style:none;}
select,input{vertical-align:middle;}
select,input,textarea{font-size:12px;margin:0;}
table{border-collapse:collapse;}
body{background:#fff;color:#333;font:12px/22px 'Microsoft Yahei','微软雅黑','Simsun','宋体','Arial';}
/* 页面通用部分 */
.clearfix:after{content:".";display:block;height:0;visibility:hidden;clear:both;}
.clearfix{zoom:1;}
.clearit{clear:both;height:0;font-size:0;overflow:hidden;}
a{color:#1f3b7b;text-decoration:none;}
a:visited{color:#6079b2;}
a:hover,a:active,a:focus{color:#8d0000;text-decoration:underline;}
```

#### <a name="tpl2"></a>CSS常用命名通用表

##### 布局类

| 命名 | 用法与含义 |
| :-------- | --------: |
| part | 横切 |
| blk | 区块 |
| head, header | 页首 |
| foot, footer | 页尾 |
| sidebar | 侧栏 |
| popup | 弹出层 |
| wrap, -w | 外容器 |
| cont, -c | 内容器 |

##### 业务类

| 命名 | 用法与含义 |
| :-------- | --------: |
| topbar | 顶部通栏 |
| logo | 网站LOGO标志 |
| nav | 导航 |
| subnav | 次级导航 |
| tab | 标签 |
| banner | 广告栏 |
| menu | 菜单 |
| dropmenu | 下拉菜单 |
| msg | 提示信息 |
| btn | 按钮 |
| tip | 引导小贴士 |

-------

> “When debugging, novices insert corrective code; experts remove defective code.”
  – Richard Pattis