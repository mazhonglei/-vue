<template>
  <div class="query">
    <div class="topdiv">
      <span class="bt">操作时间：</span>
      <div class="elform">
        <el-date-picker
        v-model="value2"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions">
        </el-date-picker>
        <el-button type="primary">查询</el-button>
      </div>
    </div>
    <div class="elfrom">
      <el-table
          :data="queryData"
          border
          style="width:100%">
          <el-table-column
            prop="text"
            label="历史查询记录"
            width="472">
          </el-table-column>
          <el-table-column
            prop="ip"
            label="登入IP"
            width="156">
          </el-table-column>
          <el-table-column
            prop="time"
            label="查询日期"
            width="156">
          </el-table-column>
        </el-table>
    </div>
    <div class="elpage">
      <el-pagination
          background
          layout="prev, pager, next"
          :total="queryTotal"
          :page-size="queryParams.size"
          :current-page="queryParams.page"
          >
        </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value1: '',
      value2: '',
      // 分页需要数据
      queryData:[
        {
          text:"市场分析",
          time:"2017/5/22 13:41:12",
          ip:"121.231.49.130"
        }
      ],
      queryTotal:50,
      queryParams:{
        page:1,
        size:10,
      },
    };
  },
}
</script>
<style lang="stylus" scoped>
  .query
    padding: 20px 30px 10px 30px
    .topdiv
      display:flex
      border: 1px solid #ddd;
      background: #f2f2f2;
      margin-bottom: 20px;
      font: 12px/27px Arial, Helvetica, sans-serif;
      padding: 10px;
      .bt
        width:60px
        color:#000
        line-height:40px 
        font-weight:bold
        
      .elform
        flex:1
    .elfrom
      border-collapse: collapse;
      border: 1px solid #dcdcdc;
      margin-bottom: 20px;
    .elpage
      PADDING: 20px 0px;
      TEXT-ALIGN: center;
      font: 11px/16px Arial, Helvetica, sans-serif;
</style>
