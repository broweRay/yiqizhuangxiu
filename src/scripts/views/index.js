var indexTpl = require('../tpl/index.string');

SPA.defineView('index', {
  html: indexTpl,

  plugins: ['delegated'],

  // 子视图的嵌套定义
  modules: [{
    name: 'content',
    container: '.m-index-container',
    views: ['home', 'find', 'mine','news','owner'],
    defaultTag: 'home'
  }],
  

  bindActions: {
    'switch.view': function (e) {
      // 视图切换方法
      this.modules.content.launch(e.data.tag);
      this.setActive($(e.el));
    },

    'exit': function () {
      this.hide();
    }
  },

});