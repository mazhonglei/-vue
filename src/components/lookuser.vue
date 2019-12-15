<template>
    <div class="user">
      <div class="content clearfix">
          <div class="el-form">
            <el-table
              :data="userList"
              border
              style="width:790">
              <el-table-column
                prop="id"
                label="id"
                width="262">
              </el-table-column>
              <el-table-column
                prop="role"
                label="角色"
                width="262">
              </el-table-column>
              <el-table-column
                prop="username"
                label="用户名"
                width="262">
              </el-table-column>
            </el-table>
        </div>
      </div>
    </div>
</template>
<script>
import https from "../utils/axios.js"

let user_url = 'http://119.3.71.137:8081/user/getAll';
export default {

  // http://119.3.71.137:8081/user/getAll
  data () {
    return {
      userList:[],
    }
  },
  created(){
    https.fetchPost(user_url,).then( (res) => {
      // console.log("查看用户",res);
      if (res.data.code==="200") {
        this.userList = res.data.content.userList;
      }else {
        this.$message({
        showClose: true,
        message: `出错了，稍后再试`,
        type: 'error'
      });
      }
    }).catch( (err) => {
      this.$message({
        showClose: true,
        message: `网络出错，请重试！`,
        type: 'error'
      });
    })
  },
}
</script>
<style lang="stylus" scoped>
  .user
    width:850px
    .content

      .el-form
        margin: 20px 30px 10px 30px
</style>


