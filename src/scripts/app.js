require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');
require('./views/find.js');
require('./views/news.js');
require('./views/mine.js');
require('./views/guide.js');
require('./views/owner.js');
require('./views/home.js');
require('./views/index.js');
// 配置视图的信息
var indexView = SPA.util.storage('isVisited') ? 'index' : 'guide';
SPA.config({
  indexView: indexView
});



