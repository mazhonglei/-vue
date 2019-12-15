<template>
  <div id="delete">
    <span v-if="!power">没有权限</span>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" v-if="power">
      <el-form-item label="用户名称" prop="userName">
        <el-input v-model="ruleForm.userName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">删除</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import https  from '../utils/axios';

  export default {
    name: "delete",
    data(){
      return {
        ruleForm: {
          userName: '',
        },
        rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
        },
        power:false
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let delete_url=`http://119.3.71.137:8081/user/delete?userName=${this.ruleForm.userName}`;
            https.fetchPost(delete_url,).then( (res) => {
              console.log("删除用户",res);
              if (res.data.code==="200") {
                this.$message('删除成功');
              }else {
                this.$message({
                  showClose: true,
                  message: `网络出错，请重试，${null === res.data.message||undefined === err.data.message?"":err.data.message}`,
                  type: 'error'
                });
              }
            }).catch( (err) => {
              this.$message({
                showClose: true,
                message: `网络出错，请重试，${null === err.data.message||undefined === err.data.message?"":err.data.message}`,
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
  #delete{
    padding-top: 50px;
    padding-left: 100px;
  }
  .el-input{
    width: 500px;
  }
</style>
