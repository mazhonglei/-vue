<template>
  <div class="list">
    <div class="supplier_title"><b>供应商排名</b></div>
    <div class="content">
      <div class="el-form">
           <el-table
            :data="listData"
            border
            style="width:100%;" align="center"
            :header-cell-style="{fontWeight:'900',color:'#000'}"
            >
             <el-table-column
              type="index"
               label="序号"
               width="96" align="center">
             </el-table-column>
            <el-table-column
              prop="companyName"
              label="企业名称"
              width="360" align="center">
              <template slot-scope="scope">
                <div style="cursor: pointer" @click="clickCurrentChange(scope.row)">
                  {{scope.row.companyName}}
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="companyNum"
              label="数量"
              width="195" align="center">
            </el-table-column>
            <el-table-column
              prop="companyMoney"
              label="金额(美元)"
              width="195" align="center">
            </el-table-column>
            <el-table-column
              prop="companyRanking"
              label="排名"
              width="195" align="center">
            </el-table-column>
          </el-table>
      </div>
      <div class="el-page">
       <!-- <el-pagination
          @current-change="handleCurrentChange"
          background
          layout="prev, pager, next"
          :page-size="num"
          :current-page="size"
          >
        </el-pagination>-->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="num"
          :page-sizes="[10, 20, 30]"
          :page-size="all_num"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listTotal"
          >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"supplierList",
  props:{
    listData:{
      type:Array,
      default:[]
    },
    listTotal:{
      type:Number,
      default:0
    }
  },
  data () {
    return {
        num:1,//页码
        all_num:20//每页显示的条数
    }
  },
  computed: {
    newCompanyName(data){
      return data.replace("\'","");
    },
  },
  methods:{
    //把公司ID传给供应商父组件
    clickCurrentChange(currentRow){
      this.$emit('companyId',currentRow)
    },
    /*改变页码传递给父组件*/
    handleCurrentChange(val){
      this.$emit('currentChange',val);
    },
    handleSizeChange(val){
      this.$emit('sizeChange',val);
    }
  }
}
</script>
<style lang="stylus" scoped>
  .supplier_title{
    width: 100%;
    height: 35px;
    text-align center;
    color: #000
    line-height 35px
  }
  .list .el-table th>.cell{
    font-weight bold!important;
  }

  .list
    width:1100px
    margin:0 auto
    .content
      width 1040px;
      padding: 0 10px 30px 10px;
      .el-form
      .el-page
        padding: 20px 0px;
        TEXT-ALIGN: center;
        font: 11px/16px Arial, Helvetica, sans-serif;
        padding-top: 0px;
</style>
