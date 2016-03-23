var marked = require('marked');
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false, // Ignore any HTML that has been input.
    smartLists: true,
    smartypants: false,
    langPrefix: ''
});

var path = require('path');
var fs = require('fs');

function doc(path) {
    var path_doc = path.replace('mds', 'html');
    if (!fs.existsSync(path_doc)) {
        fs.mkdirSync(path_doc, 0777);
    }
    else{
        deleteFolder(path_doc, false);
    }
    walk(path);
    console.log('docs generated at: ' + path_doc);
}

function walk(path) {
    var dirList = fs.readdirSync(path);
    dirList.forEach(function(item) {
        if (fs.statSync(path + '/' + item).isDirectory()) {
            buildDir(path + '/' + item);
            walk(path + '/' + item);
        } else {
            if (item.match(/\.md$/i)) {
                buildHtml(path, item);
            } else {
                copyFile(path + '/' + item, (path + '/' + item).replace('mds', 'html'));
            }
        }
    });
}

function buildHtml(path, item) {
    var htmlPath, htmlName;
    fs.readFile(path + '/' + item, 'utf-8', function(err, data) {
        if (err) {
            console.log(err);
        } else {
            // console.log(data);
            // htmlPath = path.replace(/\/.+$/, '') + '/doc/';
            // htmlName = item.replace(/\.md$/i, '') + '.html';
            // htmlPath = __dirname + '/doc/' + path.replace(__dirname + '/mds', '') + '/';
            htmlPath = path.replace('mds', 'html') + '/';
            htmlName = item.replace(/\.md$/i, '') + '.html';
            fs.writeFile(htmlPath + htmlName, fixedHTML(marked(data), item));
        }
    });
}

function buildDir(path) {
    path = path.replace('mds', 'html');
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, 0777);
    }
}

function fixedHTML(str, title) {
    var preStr = '\
        <!DOCTYPE html>\
            <html>\
                <head>\
                    <meta charset="utf-8">\
                    <link href="http://news.sina.com.cn/268/2014/1203/markfx.css" rel="stylesheet" type="text/css">\
                    <title>' + title + '</title>\
                </head>\
                <body>\
                    <article class="markdown-body">';
    var clzStr = '\
                    </article>\
                    <link rel="stylesheet" href="http://news.sina.com.cn/268/2014/1210/monokai_sublime.css">\
                    <script src="http://news.sina.com.cn/268/2014/1210/highlight.pack.js">\
                    </script><script>hljs.initHighlightingOnLoad();</script>\
                </body>\
            </html>';

    return preStr + str + clzStr;
}

function copyFile(src, dest) {
    fs.writeFileSync(dest, fs.readFileSync(src));
}

function deleteFolder(path, delRoot) {
    var files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function(file, index) {
            var curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) {
                deleteFolder(curPath, true);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        if(delRoot){
            fs.rmdirSync(path);
        }
    }
}

exports.doc = doc;