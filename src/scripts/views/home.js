var homeTpl = require('../tpl/home.string');
//var sw = require('../lib/swiper.animate1.0.2.min.js');
//var swiperAnimate = sw.a;

SPA.defineView('home', {
  html: homeTpl,

  plugins: ['delegated'
//, {
//  name: 'avalon',
//  options: function(vm) {
//    vm.livelist = [];
//  }
//}
  ]

//bindEvents: {
//  'show': function () {
//    var vm = this.getVM();
//    $.ajax({
//      url: '/api/getlivelist.php',
//      success: function (res) {
//        var data = res.data;
//        var tempArr = [];
//        for (var i = 0; i < Math.ceil(data.length/2); i++) {
//          tempArr[i] = [];
//          tempArr[i][0] = data[2*i];
//          tempArr[i][1] = data[2*i+1];
//        }
//        vm.livelist = tempArr;
//        // console.log(tempArr);
//      }
//    });
//  }
//}
});


window.onload = function  () {
	
	 var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay : 500,
    autoplayDisableOnInteraction : false,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    
  })     
	
}