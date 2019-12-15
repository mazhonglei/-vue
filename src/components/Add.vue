<template>
    <div id="add">
      <span v-if="!power">没有权限</span>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" v-if="power">
        <el-form-item label="用户名称" prop="userName">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="pwd">
          <el-input v-model="ruleForm.pwd"></el-input>
        </el-form-item>
       <span class="userType">用户类别</span>
        <el-radio v-model="radio" label="admin">管理员</el-radio>
        <el-radio v-model="radio" label="user">普通用户</el-radio>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import https from "../utils/axios.js";
    export default {
        name: "Add",
      data(){
          return {
            ruleForm: {
              userName: '',
              pwd:""
            },
            rules: {
              userName: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
              ],
              pwd: [
                { required: true, message: '请输入密码', trigger: 'blur' },
              ],
            },
            power:false,
            radio:"admin"
          }
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              let add_url =  `http://119.3.71.137:8081/user/registered`;
              let add_data  ={
                userName:this.ruleForm.userName,
                passWord:this.ruleForm.pwd,
                role:this.radio
              };
              https.fetchPost(add_url,add_data).then( (res) => {
                // console.log("查看用户",res);
                if (res.data.code==="200") {
                 this.$message("添加成功!!!");
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
                  message: `网络出错，请重！`,
                  type: 'error'
                });
              })
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      },
      created () {
        let user = localStorage.getItem("user");
        if ( user === "admin") {
          this.power = true ;
        }else {
          this.power = false ;
        }
      },
    }
</script>

<style scoped>
  #add{
    padding-top: 50px;
    padding-left: 100px;
  }
.el-input{
  width: 500px;
}
  .el-button{
    margin-top: 20px;
  }
  .userType{
    display: inline-block;
    font-size: 14px;
    padding-left: 30px;
  }
</style>
