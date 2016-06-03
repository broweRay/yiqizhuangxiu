// 引入模板
var tplGuide = require('../tpl/guide.string');

// 定义一个视图
SPA.defineView('guide', {
  html: tplGuide,

  // 添加插件
  plugins: ['delegated'],

  // 给元素绑定事件
  bindActions: {
    'goto.index': function () {
      SPA.open('index');
      SPA.util.storage('isVisited', true);
    }
  },

  // 给视图绑定事件
  bindEvents: {
    'beforeShow': function () {
      var guideSwiper = new Swiper('#guide-swiper', {
        loop: false
      });
    }
  }
});
