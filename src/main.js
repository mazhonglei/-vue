// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'//引入store
import VueCookies from 'vue-cookies'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import utils from "./utils/urlGet" //获取url参数


Vue.use(ElementUI);
Vue.use(VueCookies)
// Vue.use(axios);

Vue.config.productionTip = false
Vue.prototype.$utils = utils; //注册全局方法
Vue.filter('NumFormat', function(value) {
  if(!value) return '0';
  var intPart = Number(value).toFixed(0); //获取整数部分
  var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
  var floatPart = ""; //预定义小数部分
  var value2Array = value.split(".");
  //=2表示数据有小数位
  if(value2Array.length === 2) {
    floatPart = value2Array[1].toString(); //拿到小数部分
    if(floatPart.length === 1) { //补0,实际上用不着
      return intPartFormat + "." + floatPart + '0';
    } else {
      return intPartFormat + "." + floatPart;
    }
  } else {
    return intPartFormat + floatPart;
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
