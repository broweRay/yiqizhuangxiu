var mineTpl = require('../tpl/mine.string');

SPA.defineView('mine', {
  html: mineTpl
});

//// 引入模板
//var tplMine = require('../tpl/mine.string');
//
//// 定义一个视图
//SPA.defineView('mine', {
//html: tplMine,
//
//// 添加插件
//plugins: ['delegated'],
//
//// 绑定事件
//bindActions: {
//  'mine.index': function () {
//    SPA.open('mine');
//  }
//}
//});
//
//var mineTpl = require('../tpl/mine.string');
//
//SPA.defineView('index', {
//html: mineTpl,
//plugins: ['delegated'],
//bindActions: {
//  'mine': function () {
//    this.hide();
//  }
//}
//});