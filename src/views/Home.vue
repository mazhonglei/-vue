<template>
  <div class="home">
    <v-top></v-top>
    <div class="welcome" v-show="showWelcome">
          {{welcome}}
    </div>
    <div class="content">
      <div class="left">
        <div class="people">
          <img src="../assets/images/user.jpg" class="img">
          <ul class="uldiv">
            <li class="item">
              <span class="itemleft">用户级别：</span>
              <span class="itemright">
                <b></b>
              </span>
            </li>
            <li class="item">
              <span class="itemleft">服务时间：</span>
              <div class="tworight">
                <p></p>
                <p></p>
                <p class="click" @click="showWant">
                  <b>
                    [ 我要续约 ]
                  </b>

                </p>
              </div>
            </li>
            <li class="item">
              <span class="itemleft">客服：</span>
              <span class="itemright"></span>
            </li>
            <li class="item">
              <span class="itemleft">电话：</span>
              <span class="itemright"></span>
            </li>
            <li class="item">
              <span class="itemleft">手机：</span>
              <span class="itemright"></span>
            </li>
            <li class="item">
              <span class="itemleft">邮箱：</span>
              <span class="itemright"></span>
            </li>
          </ul>
        </div>
        <div class="operation">
          <h3>账户信息</h3>
          <ul class="ul">
            <li class="item">
              <router-link to="/home/lookuser"  class="text">- 查看用户</router-link>
            </li>
            <li class="item">
              <router-link to="/home/add"  class="text">- 添加用户</router-link>
            </li>
             <li class="item">
              <router-link to="/home/password" class="text">- 修改密码</router-link>
            </li>
            <li class="item">
              <router-link to="/home/delete"  class="text">- 删除用户</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
    <v-want v-show="isshowWant"  @closeWant="closeWant"></v-want>
    <div class="blur" @click="closeWant" v-show="isshowWant"></div>
  </div>
</template>

<script>

import top from "@/components/top"
import want from "@/components/want.vue"

export default {
  name: "home",
  components:{
    "v-top":top,
    'v-want':want,
  },
  data(){
    return {
      showWelcome:true,
      isshowWant:false,
      nowRoue:"HomeIndex",
    }
  },
  computed: {
    welcome(){
      let text = localStorage.getItem('username');
      if ( text === null || text === undefined) {
        text= "";
      }
      return `欢迎您，${text}!`
    },
    isuser(){
      let text = localStorage.getItem('user');
      if (  text === "admin") {
        return true;
      }else {
        return falsse;
      }
    },
  },
  created () {
    // console.log("当前路由名",this.$route.name);
    this.nowRoue = this.$route.name;
    if ( this.nowRoue === "HomeIndex") {
      this.showWelcome = true;
    }else {
      this.showWelcome = false;
    }
  },
  methods: {
    showWant(){
      this.isshowWant = true;
    },
    closeWant(){
      this.isshowWant = false;
    },
  },
  beforeRouteEnter (to, from, next) {

    next( vm =>{

    })
  }
};
</script>
<style  lang="stylus" rel="stylesheet/stylus"  scoped>
  .home
    width:100%
    .welcome
      font: 24px/48px "微软雅黑";
      padding: 20px 0px;
      text-align: center;
      color: #666;
      margin:0 auto
    .blur
      position:fixed
      top:0
      left:0
      width:100%
      height:100%
      background:#111
      opacity:0.7
      z-index:100
    .content
      width:1100px;
      margin:0 auto
      margin-top:8px;
      display:flex
      background: #fff url("../assets/images/left_bg.jpg") left top repeat-y;
      .left
        width:250px
        .people
          background: #d3e3eb
          padding:20px
          .img
            font: 12px/24px Arial, Helvetica, sans-serif
            color: #666
            text-align: center
            padding: 30px 10px 10px 10px
          .uldiv
            font: 12px/24px "微软雅黑"
            .item
              font: 12px/24px "微软雅黑"
              display:flex
              .itemleft
                font: 12px/24px "微软雅黑"
                height:24px
                line-height:16px
                width:62px
              .itemright
                color: #888
                flex:1
                b
                  color: #319ed7
              .tworight
                font: 12px/24px "微软雅黑"
                flex:1
                p
                  color: #888
                  b
                    color: #319ed7
        .operation
          padding: 20px
          h3
            font: bold 14px/30px "微软雅黑"
            padding: 2px 0px
          .ul
            font: 12px/30px "微软雅黑"
            padding: 2px 0px
            .item
              display: block;
              height: 30px;
              width: 190px;
              color: #333;
              padding-left: 20px;
              color: #0875a6;
              .text
                width:100%
                text-align:left
                color: #0875a6
      .right
        flex:1
</style>
