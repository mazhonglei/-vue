<template>
<div id="log">
   <!-- <img src="../assets/images/bodybg.png" alt="">-->
    <div class="login">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="ruleForm.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>

    </div>
</div>
</template>

<script>

  import https  from "../utils/axios.js";
  let  login_url = "";

  export default {
    name: "login",
    data(){
      return {
        ruleForm:{
          userName:"",
          password:""
        },
        rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

            login_url =  `http://119.3.71.137:8081/user/login?userName=${this.ruleForm.userName}&passWord=${this.ruleForm.password}`;
            let login_data = {
              userName:this.ruleForm.userName,
              passWord:this.ruleForm.password
            };
            https.fetchPost(login_url,'').then((res) => {
                  console.log("登录的数据",res,res.code,res.data.message);
                  // 201
                    // Created
                    // 401
                    // Unauthorized
                    // 403
                    // Forbidden
                    // 404
                    // Not Found

                  if ( res.data.code === "200"){
                      localStorage.setItem('username', this.ruleForm.userName);
                      // localStorage.setItem('password',this.ruleForm.password);
                      localStorage.setItem('Token',res.data.content.Token);
                      localStorage.setItem('user',res.data.content.user);
                      this.$router.push({path:'/home',query:{}});
                  }else {

                    this.$message({
                      showClose: true,
                      message: `创建用户发生错误，${res.data.message}`,
                      type: 'error'
                    });
                  }
              }).catch( (err)=> {
                  this.$message({
                        showClose: true,
                        message: `网络出错，请重试，${null ===err.data.message ?"":err.data.message}`,
                        type: 'error'
                     });
                  }
              );

          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.ruleForm.userName ="";
        this.ruleForm.password ="";
      },
    },
    beforeRouteEnter(to,from,next){
      let  usename = localStorage.getItem('username');
      let  password = localStorage.getItem('password');
      let  reg =  usename === undefined ||  usename === null || usename === "" || password === undefined ||  password === null || password === ""
      if ( reg ) {
        next ( vm => {});
      }else {
        next ( vm => {

          vm.ruleForm.userName = usename;
          // vm.ruleForm.password= password;
        })
      }

    },
  };
</script>

<style scoped>
#log{
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../assets/images/bodybg.jpg") no-repeat;
    background-size: cover;
}
    #log img{
        width: 100%;
    }
    .login{
        width: 350px;
        background-color: hsla(0,0%,100%,.8);
        padding: 15px;
        border-radius: 20px;
        position: absolute;
        right: 400px;
        top: 200px;
    }
</style>
