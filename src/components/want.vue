<template>
  <div class="want clearfix">
    <div class="content">
      <div class="hd">
        您的客服专线：021-9681099
      </div>
      <div class="el-form">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="联系人" prop="name">
            <el-input  v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="phone">
            <el-input type="tel" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱" prop="email">
            <el-input type="email" v-model="ruleForm.age"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
            <el-button type="primary" @click="close">关闭</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
   data() {
      var validateName = (rule, value, callback) => {
        if (value=="") {
          return callback(new Error('姓名不能为空'));
        }
      };
      var validatePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入联系号码'));
        } 
      };
      var validateEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入邮箱名'));
        } 
      };
      return {
        ruleForm: {
          name: '',
          phone: '',
          email: ''
        },
        rules: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          phone: [
            { validator: validatePhone, trigger: 'blur' }
          ],
          email: [
            { validator: validateEmail, trigger: 'blur' }
          ]
        }
      };
    },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    close(){
      this.$emit("closeWant");
    },
  },
}
</script>
<style lang="stylus">
  .want 
    .content
      width: 650px;
      border: 5px solid rgb(221, 221, 221);
      position: absolute;
      z-index: 999;
      background: rgb(255, 255, 255);
      top: 280px;
      left:50%
      margin-left:-325px
      .hd 
        font: bold 14px/30px Arial;
        padding: 5px 10px;
        border-bottom: 1px solid #eee;
        background: #1489b5;
        color: #fff;
      .el-form
        padding-top:10px
</style>

