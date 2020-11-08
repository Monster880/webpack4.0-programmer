// Tree shaking摇树 只支持ES模块引入

// import "@babel/polyfill";
// babel window.Promise
console.log(_.join(["a","d","c"],'***'));
// 此处省略10万行业务逻辑
console.log(_.join(["a","b","c"],'***'));

// 如果用户重新访问我们的页面，又要重新加载页面