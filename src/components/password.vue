<template>
  <div class="password">
    <div class="nopower" v-show="!power">
      没有权限
    </div>
    <div class="content" v-show="power">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :label-position="'left'">
        <!-- 年龄这里 -->
      <el-form-item label="账户名" prop="name">
        <el-input  v-model="ruleForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>
<script>
  import https from '../utils/axios'
export default {
    data() {
      // var checkName = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请输入正确的账户名'));
      //   }
      // };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          name:'',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { required:true, message:"请输入账户名", trigger: 'blur' }
          ]
        },
        power:false,
      };
    },
    created () {
      let user = localStorage.getItem("user");
      if ( user === "admin") {
        this.power = true ;
      }else {
        this.power = false ;
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let update_url =  `http://119.3.71.137:8081/user/update`;
            let update_data = {
              userName:this.ruleForm.name,
              passWord:this.ruleForm.pass,
            };
            /*
            * ruleForm: {
          pass: '',
          checkPass: '',
          name:'',
        },
             */
            https.fetchPost(update_url,update_data).then( (res) => {
              // console.log("查看用户",res);
              if (res.data.code==="200") {
                this.$message("修改成功!!!");
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
}

</script>
<style lang="stylus" scoped>
  .password
    clear:both
    .nopower
      padding: 20px 30px 10px 30px
      color:#000
      font-size:16px
      font-weight:bold
    .content
      padding:120px;
      padding-top:80px
</style>
