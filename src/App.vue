<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "../static/css/react.css";
  #app {
    width:100%;
    height:100%;
  }
  .el-icon-loading{
    color: #e8940e!important;
    width: 40px!important;
    display: inline-block;
  }
  .load_loading{
    color: #e8940e!important;
  }
</style>
