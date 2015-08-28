> [> 返回目录](../index.html)

# 新浪财经前端开发规范-基础类-HTML

### 书写约定

- 统一使用**英文小写字母**，数字和合法特殊符号书写html标签。

- 保持良好的简洁的树形结构，根据文档层级保持缩进，每级缩进使用**4个空格（而非Tab制表符）**。

    - 实际表现类似行内元素（inline），尽可能在本行闭合。

    - 实际表现类似块级元素（inline-block，block，table，-webkit-box）等，尽可能折行闭合。如：

    ``` html
    <p>
        <span>some text..</span><em>some text..</em>
        <img src="" alt="" title="">
    </p>
    ```

- 根据语义化选择合适的标签，```切忌滥用div、ul、span等```，适当使用dl和table，标签语义化标准可参考[W3C标签语义化规范](http://www.w3schools.com/tags/tag_html.asp)。这里以不同形式的列表含义举例如下：

    | 标签名 | 用法与含义 | 实例 |
    | :-------- | --------: | :--: |
    | ul | 无序列表 | ``` <ul><li>新闻条目a<li><li>新闻条目b<li></ul> ``` |
    | ol | 有序列表 | ``` <ol><li>新闻条目1</li><li>新闻条目2</li></ol> ``` |
    | dl | 自定义列表 | ``` <dl><dt>新闻标题</dt><dd>新闻内容</dd></dl> ``` |

- id与class的正确使用：

    + **慎用id**，仅在JS需要的前提下声明元素的id；CSS等样式需求尽可能使用class等来标识。

    + 如JS需要但不便使用id，可使用.js-*的class来标识元素，并且不要将这些class包含到CSS文件中。

    ``` html
    <div class="tab" id="tab01">
        <div class="tab01-cont js-tab01-cont"></div>
    </div>

    <!-- 在JS内使用id和class -->
    <script>
    (new Tab('tab01')).select('js-tab01-cont');
    </script>

    <!-- CSS中尽可能不写入id和JS标识的class，确保结构、样式、行为各司其职，互不干扰 -->
    <style>
    .tab{}
    .tab01-cont{}
    </style>
    ```

- 注释的书写：当语义化无法体现其正确的内容意义时，应适当添加注释。如：

    ``` html
    <!-- 点击隐藏导航栏 -->
    <span>×</span>
    ```

- 如果一段**注释针对多行HTML**，须确保该注释**成对书写**，可使用start、end标注首尾。如：

    ``` html
    <!-- 焦点图 start -->
    <div class="slider">
        ...焦点图大量代码
    </div>
    <!-- 焦点图 end -->
    ```

- 对于图片等资源文件：
 
    - 命名：统一使用**英文小写字母**，数字和合法特殊符号；不允许以数字开头；不允许使用"\_"下划线以外的其他特殊字符；同类别的资源文件需添加同一前缀，如"bg\_"（用作背景）、"tt\_"（图片文字）等。

    - 引入图片时，img标签应注意至少书写src和alt属性。

    ``` html
    <!--不允许-->
    <img src="images/中文.jpg" title="非英文小写字母,数字和合法特殊符号" alt="" />
    <img src="images/1st.png" title="以数字开头" alt="" />
    <img src="images/tt-nav3.png" title="使用了下划线以外的特殊字符" alt="" />

    <!--推荐-->
    <img src="images/fg_qingxu1.png" title="老邓" alt="老邓" />
    <img src="images/tt_nav3.png" alt="个股点评" />
    ```

### 业务约定

- 普通页面原则上要求兼容**ie8+所有版本，以及Chrome、Firefox、Safari(for mac)的最新版本**。并确保达到**ie6、ie7基本布局正常，不影响正常浏览页面内容**的标准。

- **使用统一的html文档声明**，参考[实用模板 \- HTML空白模板](#tpl1)，注意要点如下：

    - 使用html5标准的简化DOCTYPE```<!DOCTYPE html>```。

    - 必须显式声明页面文档编码charset：一般地，频道页面使用GB2312，产品级开发推荐使用utf-8。

    - **设置viewport为1020**，确保ipad左右保留些许留白。

    - **设置IE=edge**，启用本机最新版本的ie文档模式进行渲染。

- 外部引用资源的约定：

    - 如非特殊需求，**禁止外引新浪域名之外的资源链接**。

    - 确保最终上线页面的外引资源均使用绝对路径。

    - 对于CSS，JS，iframe等外引文件，推荐显式声明编码charset。

    - **外部引用CSS**

        - 使用link引入，并置于**head中**。

        - 外部引入的css原则上不应超过3个。详见CSS规范。

    - **外部引用JavaScript**

        - 使用script引入，并置于**body底部**。

        - 尽量控制外部引入的js数量，理想情况下不应超过3个。详见[JS规范](format_JS.html)。

    - **图片等静态资源**，根据实际场合选择合适的优化策略，包括并不限于：

        - 财经首页、频道首页、正文页等重量级页面采用CSS Spirite。

        - 尽可能确保页面不出现200KB以上大小的图片。

        - 选择合适的图片格式。如选择JPG格式，使用PS控制压缩率为80%。PNG类型则尽可能选择png8格式。

- 一般地，对于普通页面，按照以下顺序书写HTML：```header、主体部分、footer```。其中，页面**主体部分**，按照以下层次书写：
    
    - **主容器（命名：wrap）**
    
    - **横切（命名前缀：part）**
    
    - **版块（命名前缀：blk）**
    
    - **业务内容**，在版块内部书写


### 实用模板

#### <a name="tpl1"></a>[HTML空白模板（PC、pad端）](src/tpl.html)

[snippet for sublimeText：HTML空白模版（快捷键initHtml+TAB）](../resources/src/snippets/sublimeText/HTML_initHtml.sublime-snippet)

``` html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>新浪财经前端模板</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="viewport" content="1020" />
        <link rel="stylesheet" href="css/style.css" />
    </head>
    <body>
        <!-- 内容区域 start -->
        <!-- 内容区域 end -->
        <script src="js/main.js" type="text/javascript"></script>
    </body>
</html>
```

#### <a name="tpl2"></a>[通用页面主体部分html结构示例：](src/grid.html)

``` html
<div class="header">
    header content...
</div>
<div class="wrap">
    <div class="part1">
        <div class="blk1">
            焦点图...
        </div>
        <div class="blk2">
            新闻列表...
        </div>
    </div>
    <div class="part2">
        part2 content...
    </div>
</div>
<div class="footer">
    footer content...
</div>
```

-------

> “Good code is its own best documentation. As you’re about to add a comment, ask yourself, ‘How can I improve the code so that this comment isn’t needed?'”
  – Steve McConnell (author of many software engineering books including “Code Complete”)