<template>
  <div class="index">
    <div class="content">
      <div class="express">
        <div class="header">
          <span class="left">更新速递</span>
          <div class="right">
            <i class="icon"></i>
            <span class="look">查看全部</span>
          </div>
        </div>
        <div class="list">
          <ul class="listitem">
            <!-- 添加更新的地方 -->
          </ul>
        </div>
      </div>
      <div class="news">
        <h3>新闻公告</h3>
        <div class="telldiv"> 
          <el-table
            :data="newsData"
            border
            style="width:100%">
            <el-table-column
              prop="text"
              label="新闻公告"
              width="620">
            </el-table-column>
            <el-table-column
              prop="time"
              label="日期"
              width="164">
            </el-table-column>
          </el-table>
        </div>
        <div class="footer-el">
          <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          :page-size="params.size"
          :current-page="params.page"
          >
        </el-pagination>
        </div>
        
      </div>
      <div class="xian"></div>
      <div class="floow">
        <h3>我的关注</h3>
        <div class="telldiv"> 
          <el-table
            :data="floowData"
            border
            style="width:100%">
            <el-table-column
              prop="name"
              label="名称"
              width="472">
            </el-table-column>
            <el-table-column
              prop="time"
              label="日期"
              width="156">
            </el-table-column>
            <el-table-column
              prop="dis"
              label="日期"
              width="156">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="xian"></div>
      <!-- 历史查询记录部分 -->
      <div class="history">
        <h3>历史查询记录</h3>
        <div class="telldiv"> 
          <el-table
            :data="historyData"
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
              label="查询时间"
              width="156">
            </el-table-column>
          </el-table>
        </div>
        <div class="footer-el">
          <el-pagination
          background
          layout="prev, pager, next"
          :total="hisroryTotal"
          :page-size="hisroryParams.size"
          :current-page="hisroryParams.page"
          >
        </el-pagination>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      total:50,
      params:{
        page:1,
        size:10,
      },
      newsData:[
        {
          text:"[系统公告] 浏览器允许弹出窗口更改设置公告",
          time:"2017/5/22 13:41:12",
        }
      ],
      // 我的关注数据
      floowData:[
        {
          name:"市场分析-中国-趋势分析",
          time:'2019/11/22 10:52:15',
          dis:"【取消】"
        }
      ],
      // 历史查询记录
      historyData:[
        {
          text:"市场分析",
          time:"2017/5/22 13:41:12",
          ip:"121.231.49.130"
        }
      ],
      hisroryTotal:50,
      hisroryParams:{
        page:1,
        size:10,
      },
    }
  },
}
</script>

<style lang="stylus" scoped>
  .index
    padding: 20px 30px 10px 30px
    .content
      // 
      .express
        // 
        .header
          font: bold 14px/28px Arial, Helvetica, sans-serif;
          padding-bottom: 5px;
          color: #333;
          height:28px
          clear:both
          .left
            font: bold 14px/28px Arial, Helvetica, sans-serif;
            color: #333
            float:left
            text-align:right 
          .right
            float:right
            font-size: 12px
            font-weight: lighter
            .icon 
              // 
            .look 
              color: #0872a4
              text-decoration: underline
              padding-left: 20px
              width: 768px;
        .list
          height: 80px;
          background: #f2f2f2;
          border: 1px solid #dcdcdc;
          padding: 10px;
          min-height: 25px;
          line-height: 25px;
          border: #ccc 1px solid;
          overflow: hidden;
          .listitem
            display:block 
            margin-top: 0px
      .news
        clear:both
        h3
          font: bold 14px/28px Arial, Helvetica, sans-serif;
          padding-bottom: 5px;
          color: #333;
        .telldiv
          PADDING: 20px 0px
          TEXT-ALIGN: center
          font: 11px/16px Arial, Helvetica, sans-serif
          padding-top:0px
        .footer-el
          PADDING: 20px 0px
          TEXT-ALIGN: center
          font: 11px/16px Arial, Helvetica, sans-serif
          padding-top:0px
      .xian
        width: 790px;
        float: left;
        border-bottom: 3px solid #ddd;
        margin-bottom: 25px;
      .floow
        h3 
          font: bold 14px/28px Arial, Helvetica, sans-serif;
          padding-bottom: 5px;
          color: #333;
        .telldiv
          PADDING: 20px 0px
          TEXT-ALIGN: center
          font: 11px/16px Arial, Helvetica, sans-serif
          padding-top:0px
      .xian
        width: 790px;
        float: left;
        border-bottom: 3px solid #ddd;
        margin-bottom: 25px;
      .history
        clear:both
        h3
          font: bold 14px/28px Arial, Helvetica, sans-serif;
          padding-bottom: 5px;
          color: #333;
        .telldiv
          PADDING: 20px 0px
          TEXT-ALIGN: center
          font: 11px/16px Arial, Helvetica, sans-serif
          padding-top:0px
        .footer-el
          PADDING: 20px 0px
          TEXT-ALIGN: center
          font: 11px/16px Arial, Helvetica, sans-serif
          padding-top:0px
</style>
