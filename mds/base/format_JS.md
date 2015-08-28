> [> 返回目录](../index.html)

# 新浪财经前端开发规范-基础类-JavaScript

### 书写约定

- 除function、for、if、switch、try、while外，JS语句必须以分号“;”结束。

- 根据语法逻辑严格保持缩进，每级缩进使用**4个空格（而非Tab制表符）**。

- 推荐使用驼峰式命名变量和函数，使用连接式和大写英文字母命名常量，如：

    ``` javascript
    // 变量和函数命名
    var tabCont;
    function tabSlide(){}
    // 常量命名
    var TXT_LOADING, URL_GET_USERS;
    TXT_LOADING = '正在加载';
    ```

- 允许根据具体逻辑块的隔离插入1个空行，如：

    ``` javascript
    // 数据处理
    tabIdStr = 'tab' + tabIdx;
    // code..

    // 视图更新
    document.getElementById(tabIdStr).style.display = 'none';
    // code..
    ```

- 每个页面原则上只允许声明一个global全局变量：

    ``` javascript
    // 不允许在global上下文直接声明零散变量和函数
    var index = 1;
    window.index = 1;
    function init(){}

    // 推荐示例之一
    (function(w){
        var index = 1;
        function init(){}
        // expose
        w.expose = {
            index : index,
            init : init
        };
    })(window);

    // 推荐示例之二
    window.expose = (function(){
        var index = 1;
        function init(){}
        return {
            index : index,
            init : init
        }
    })()
    ```

- 统一在当前上下文**顶部声明变量**，**底部声明函数**：

    ``` javascript
    (function(){
        // 在当前上下文顶部集中声明变量
        var tabPrefix, tabStr;

        // 上下文具体逻辑
        tabPrefix = 'tab_';
        tabStr = tabPrefix + '01';
        alertTab('选择的是' + b);

        // 底部集中声明函数
        function alertTab(msg){
            alert(msg);
        }
    })()
    ```

- 避免集中实现较复杂的逻辑。如果一段代码内部实现超过200行，则考虑将逻辑拆分到不同的函数。如：

    ``` javascript
    function slideTo(idx){
        // 内部实现较复杂，可拆分为两个子函数
        if(supportCss3){
            _slideToCss3(idx);
        } else {
            _slideToJSAni(idx);
        }
    }
    ```

- 适当书写必要的注释。包括：

    + 业务类JS文件头部，需注释该文件具体功能和依赖。

    + 组件类与功能性函数的注释，应注明其功能描述、参数、返回值。必要时注释版本号。

    + 代码内部较复杂的实现过程，适当地穿插必要的注释。

    ``` javascript
    // 功能性函数的内外部注释实例
    /**
     - 手动切换指定页签
     - @param  {Num} idx 指定页签的索引值
     - @param  {Function} onEnd 切换完成后执行的回调
     - @return {Object}       页签对象实例
     */
    function selectTab(idx, onEnd) {
        // 暂停自动切换
        // ...
        if(idx === curIdx){
            // 当前既是指定页签，则直接执行回调
            // ...
        } else {
            // 否则，切换页签
            // ...
        }
    }
    ```


### 业务约定

- 普通页面的JS代码可按照其功能划分为3种类型，理想情形下应按此将上线JS代码整合为仅3个：
    
    - **utils**：页面业务逻辑开发所需要的lib，如：jQuery、Klass、SeaJS、iScroll等。
    
    - **widgets**：功能组件，按页面具体业务需求封装，但不直接参与页面业务逻辑，可以依赖utils。如选项卡、轮播图、动态分页、jQuery的各种插件等。
    
    - **app**：页面的具体业务交互逻辑。可按视图或功能的维度划分为模块，可使用utils和借助实例化widgets的方式实现。如实例化选项卡组件、两个选项卡实例之间交互、选项卡实例和轮播图实例的交互等。

- 复杂度达到产品级别的页面开发，必须具备JS Build整合机制（推荐使用grunt插件watch、concat实现，详见[代码管理规范](sourceCodeManage.html)）：

    ``` html
    <!-- 理想情形下，上线JS代码应整合为以下三个 -->
    <script src="utils.js"></script>
    <script src="widgets.js"></script>
    <script src="app.js"></script>
    ```

- 不允许发布报错和未经格式化处理的JS代码。

-------

> “Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”
  – Martin Fowler (author and speaker on software development)
