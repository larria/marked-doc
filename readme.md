# marked-doc

> 文档自由书写方案，基于Node.js、[marked](https://github.com/chjj/marked)，目前仅支持windows os

[![NPM version](https://badge.fury.io/js/marked-doc.png)][badge]

--------

## Install

下载到本地，在根目录执行：

```bash
npm install
```

或者，也可通过npm全局安装：

```bash
npm install marked-doc -g
```

--------

## Usage

### 本地使用

在mds文件夹置入所有md文件，支持子目录嵌套

```bash
$ node doc 
```

### 全局使用

在当前目录下的mds文件夹置入所有md文件，支持子目录嵌套

```bash
$ mddoc
```

将在doc文件夹（如没有将自动创建）下将自动生成文档和对应资源

[生成文档效果](http://lali.sinaapp.com/docs/)

--------

## Todo

1. 加入Commander全局命令

1. 兼容linux与mac os

2. 自定义输出路径等常用配置

3. 前端模板更换与定制


[badge]: https://www.npmjs.com/package/marked-doc