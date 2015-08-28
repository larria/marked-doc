> [> 返回目录](../index.html)

# 新浪财经前端开发规范-基础类-代码管理

### 通用规范

- **所有前端开发源代码必须使用[Subversion（svn）](http://tortoisesvn.net/)管理**。Windows推荐使用TortoiseSVN客户端（[x64安装文件](src/TortoiseSVN-1.7.12.24070-x64.zip)，注意：升级到1.8+将无法使用）；Mac OS推荐使用[Cornerstone](https://www.cornerstone.org.uk/)或直接使用终端命令。

- 保持适度地commit所负责的项目源代码，开发周期内根据实际进度每天commit1-5次

- 重要的commit必须包含清晰的注释，如：

![commit注释实例](src/images/commit.jpg)

- 不允许commit以下内容：

    - 产品原型、PSD设计稿等非开发资源文件
    
    - 报错或关键功能不能正常运行的代码
    
    - 带有console, debugger等调试命令的代码

    - 自己不明白具体含义的代码

    - 自动化工具自动生成的非前端代码（如：grunt生成的node_modules文件夹）

- 多人协同开发时，编辑和commit代码之前必须先执行update更新代码库。

### 内容类（频道业务）源代码管理

- **代码管理路径**：参见文末[业务查询 \- svn地址 \- 内容类](#svnpathpage)

- **根目录命名**：尽可能以业务名称作中文命名，必须以“xx（x月x日）\_”为前缀，以“\_”分隔项目层级，示例：```1208_股票_港股行情页```

- **文件结构**：如下图，可下载文末[内容类前端基本包](#pkg_page)

![内容类前端文件结构](src/images/page.jpg)

### 产品类源代码管理

- **代码管理路径**：参见文末[业务查询 \- svn地址 \- 产品类](#svnpathapps)

- **根目录命名**：以业务名称的英文命名，示例：```dataCenter```

- **文件结构**：如下图，可下载文末[产品类前端基本包](#pkg_app)

![产品类前端文件结构](src/images/product.jpg)

### 业务查询

- svn地址：
    
    - 内容类：```http://svn1.intra.sina.com.cn/finance/frontend/task```<a name="svnpathpage"></a>

    - 产品类：```http://svn1.intra.sina.com.cn/finance/frontend/docs/apps```<a name="svnpathapps"></a>

    - 基础支持类：```http://svn1.intra.sina.com.cn/finance/frontend/docs/widgets```<a name="svnpathbase"></a>

    - 周报：```https://svn1.intra.sina.com.cn/finance/weekreport/staff-report```

> 注：周报不适用部分源代码管理规范

- [内容类前端基本包](src/page.zip)<a name="pkg_page"></a>

- [产品类前端基本包](src/product.zip)<a name="pkg_app"></a>

-------

> “Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.”
  – Martin Golding