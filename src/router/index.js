import Vue from 'vue'
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// home的子路由
import HomeIndex from "@/components/homeIndex.vue"
import Password from "@/components/password.vue"
import myaccout from "@/components/myaccout.vue"
import query from "@/components/query.vue"
import subaccout from "@/components/subaccout.vue"
import lookuser from "@/components/lookuser.vue"
import Add from "@/components/Add.vue"
import Delete from "@/components/delete.vue"
//其他
import Login from "../views/login.vue";
import Supplier from "../views/Supplier";
import SupplierDetail from "../views/supplierDetail";


Vue.use(VueRouter)

const routes = [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/home",
      name: "home",
      redirect: '/home/index',
      component: Home,
      children: [
        {
          path: 'index',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'HomeIndex',
          component: HomeIndex
        },
        {
          path: 'password',
          name: 'password',
          component: Password
        },
        {
          path: 'accout',
          name: 'myaccout',
          component: myaccout
        },
        {
          path: 'query',
          name: 'query',
          component: query
        },
        {
          path: 'subaccout',
          name: 'subaccout',
          component: subaccout
        },
        {
          path: 'lookuser',
          name: 'lookuser',
          component: lookuser
        },
        {
          path: 'add',
          name: 'add',
          component: Add
        },
        {
          path: 'delete',
          name: 'delete',
          component: Delete
        },
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    //供应商
    {
      path: "/supplier",
      name: "supplier",
      component: Supplier
    },
  //供应商详情页
  {
    path: "/supplierDetail",
    name: "supplierDetail",
    component: SupplierDetail
  },
];

const router = new VueRouter({
  /*mode: "history",*/
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to,form,next)=>{
  if(to.path==='/login'){
    next()
  }
  let token=localStorage.getItem('Token');
  if(!token){
     next('/login');
  }else{
    next();
  }
});
export default router;
