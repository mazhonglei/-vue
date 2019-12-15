<template>
    <div id="supplierDetail">
      <top></top>
      <div class="w1100">
        <div class="detail">
          <img src="../assets/images/site_bg.jpg" alt="">
          <div class="detail_title">
            <router-link to="/supplier" tag="a" >供应商分析 > 竞争分析 > </router-link><span style="color: #e8940e;">{{companyName}}</span>
          </div>

        </div>
        <div class="follow">
          <button v-if="isfollow" @click="isfollow=false">添加关注</button>
          <button v-else @click="isfollow=true">取消关注</button>
        </div>
        <div class="detail1">
            <h3 class="supplierName">国家产品平衡表</h3>
          <el-table
            :data="showListData"
            v-show="showListData.length>0"
            style="width: 100%"
            border
            height="250px"
            :header-row-style="{fontWeight:'900'}"
            :header-cell-style="{fontWeight:'bold',color:'#000'}"
            :cell-class-name="cellStyle"
            :header-row-class-name = "cellStyle"

            >
            <el-table-column
              type="index"
              label="序号"
              align="center"
              width="100px"
              fixed
            >
            </el-table-column>
            <el-table-column
              fixed
              prop="country_name"
              label="国家名称"
              align="center"
              width="260px"
              v-if="listData"
            >
              <template slot-scope="scope">
                <div style="cursor: pointer;" @click="handleEdit(scope.row.country_name)" class="country_table">
                  {{scope.row.country_name}}
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="drilling"
              label="电钻"
              align="center"
              width="150px"
              v-if="listData"
              >
            </el-table-column>
            <el-table-column
              prop="jig_saw"
              label="曲线锯"
              align="center"
              width="150px"
              v-if="listData"
              >
            </el-table-column>
            <el-table-column
              prop="drilling"
              label="电锤"
              align="center"
              width="150px"
              v-if="listData"
              >
            </el-table-column>
             <el-table-column
              prop="jenis_alat_kuasa_lain"
              label="其他类电动工具"
              align="center"
              width="150px"
              v-if="listData"
              >
            </el-table-column>
            <el-table-column
              prop="mesin_pemangkasan"
              label="修枝机"
              align="center"
              width="150px"
              v-if="listData"
              >
            </el-table-column>
            <el-table-column
              prop="mower"
              label="打草机"
              align="center"
              width="150px"
              v-if="listData"
              >
            </el-table-column>
            <el-table-column
              prop="pekeliling_elektrik_melihat"
              label="电动圆锯"
              align="center"
              width="150px"
              v-if="listData"
              >
            </el-table-column>
            <el-table-column
              prop="pengisar_sudut_elektrik_sander"
              label="电动角磨、磨光机"
              align="center"
              width="150px"
              v-if="listData"
              >
            </el-table-column>
            <el-table-column
              prop="peninjauan_semula"
              label="往复锯"
              align="center"
              width="150px"
              v-if="listData"
              >
            </el-table-column>
            <el-table-column
              prop="perengkuh_elektrik_pemutar_skru"
              label="电动扳手、螺丝刀"
              align="center"
              width="150px"
              v-if="listData"
              >
            </el-table-column>
            <el-table-column
              prop="pilih_elektrik"
              label="电镐"
              align="center"
              width="150px"
              v-if="listData"
              >
            </el-table-column>
            <el-table-column
              prop="planer_elektrik"
              label="电刨"
              align="center"
              width="150px"
              v-if="listData"
              >
            </el-table-column>
            <el-table-column
              prop="powersaw"
              label="电锯"
              align="center"
              width="150px"
              v-if="listData"
              >
            </el-table-column>
            <el-table-column
              prop="produk_lain"
              label="其他产品"
              align="center"
              width="150px"
              v-if="listData"
              >
            </el-table-column>
            <el-table-column
              prop="rantai_elektrik_melihat"
              label="电动链锯"
              align="center"
              width="150px"
              v-if="listData"
              >
            </el-table-column>
            <el-table-column
              prop="sander"
              label="砂光机"
              align="center"
              width="150px"
              v-if="listData"
              >
            </el-table-column>
            <el-table-column
              prop="total"
              label="总计"
              align="center"
              width="300px"
              v-if="listData"
             >
            </el-table-column>
          </el-table>

        </div>
        <div class="detail1">
          <h3 class="supplierName">原产地产品平衡表</h3>
          <el-table
            :data="tabData2"
            v-show="tabData2.length>0"
            style="width: 100%"
            border
            height="250px" :header-cell-style="{fontWeight:'bold',color:'#000'}" >
            <el-table-column
              prop="varchar_nombor_serial"
              label="序号"
              align="center"
              width="100px"
              fixed
            >
            </el-table-column>
            <el-table-column
              fixed
              prop="asal_produk"
              label="原产地\产品"
              align="center"
              width="260px"
            >
            </el-table-column>
            <el-table-column
              prop="drilling"
              label="电钻"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="elektrik_hammer"
              label="电锤"
              align="center"
              width="160px"
            >
            </el-table-column>
            <el-table-column
              prop="jenis_alat_kuasa_lain"
              label="其他类电动工具"
              align="center"
              width="160px"
            >
            </el-table-column>
            <el-table-column
              prop="jig_saw"
              label="曲线锯"
              align="center"
              width="120px"
            >
            </el-table-column>

            <el-table-column
              prop="mesin_pemangkasan"
              label="修枝机"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="mower"
              label="打草机"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="pekeliling_elektrik_melihat"
              label="电动圆锯"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="pengisar_sudut_elektrik_sander"
              label="电动角磨、磨光机"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="peninjauan_semula"
              label="往复锯"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="perengkuh_elektrik_pemutar_skru"
              label="电动扳手、螺丝刀"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="pilih_elektrik"
              label="电镐"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="planer_elektrik"
              label="电刨"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="powersaw"
              label="电锯"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="produk_lain"
              label="其他产品"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="rantai_elektrik melihat"
              label="电动链锯"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="sander"
              label="砂光机"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="total"
              label="总计"
              align="center"
              width="120px"
            >
            </el-table-column>
          </el-table>

        </div>
        <div class="detail1">
          <h3 class="supplierName">产品月度平衡表</h3>
        <div class="el_item">
         <el-table
            :data="tabData3_2016"
            style="width: 100%"
            v-show = "tabData3_2016.length>0"
            border
            height="250px" :header-cell-style="{fontWeight:'bold',color:'#000'}">
            <el-table-column
            type="index" label="序号" width="60"
            prop= "index"
             fixed align="center" >
            </el-table-column>
            <el-table-column
              fixed
              prop="product_portion"
              label="产品/月份"
              align="center"
              width="260px"
            >
            </el-table-column>
            <el-table-column
              prop="one"
              label="2016年1月"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="two"
              label="2016年2月"
              align="center"
              width="160px"
            >
            </el-table-column>
            <el-table-column
              prop="three"
              label="2016年3月"
              align="center"
              width="160px"
            >
            </el-table-column>
            <el-table-column
              prop="four"
              label="2016年4月"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="five"
              label="2016年5月"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="six"
              label="2016年6月"
               width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="seven"
              label="2016年7月"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="eight"
              label="2016年8月"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="nine"
              label="2016年9月"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="ten"
              label="2016年10月"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="eleven"
              label="2016年11月"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="twelve"
              label="2016年12月"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="total"
              label="总结"
              align="center"
              width="120px"
            >
            </el-table-column>
          </el-table>
          </div>
          <div class="el_item">
          <el-table
            :data="tabData3_2017"
            style="width: 100%"
            v-show = "tabData3_2017.length>0"
            border
            height="250px" :header-cell-style="{fontWeight:'bold',color:'#000'}">
            <el-table-column
            type="index" label="序号" width="60"
            prop= "index"
             fixed align="center" >
            </el-table-column>
            <el-table-column
              fixed
              prop="product_portion"
              label="产品/月份"
              align="center"
              width="260px"
            >
            </el-table-column>
            <el-table-column
              prop="one"
              label="2017年1月"
              align="center"
              width="120px"
            >
              <template slot-scope="scope">
                {{scope.row.one|NumFormat}}
              </template>
            </el-table-column>
            <el-table-column
              prop="two"
              label="2017年2月"
              align="center"
              width="170px"
            >
              <template slot-scope="scope">
                {{scope.row.two|NumFormat}}
              </template>
            </el-table-column>
            <el-table-column
              prop="three"
              label="2017年3月"
              align="center"
              width="170px"
            >
              <template slot-scope="scope">
                {{scope.row.three|NumFormat}}
              </template>
            </el-table-column>
            <el-table-column
              prop="four"
              label="2017年4月"
              align="center"
              width="120px"
            >
              <template slot-scope="scope">
                {{scope.row.four|NumFormat}}
              </template>
            </el-table-column>
            <el-table-column
              prop="five"
              label="2017年5月"
              align="center"
              width="120px"
            >
              <template slot-scope="scope">
                {{scope.row.five|NumFormat}}
              </template>
            </el-table-column>
            <el-table-column
              prop="six"
              label="2017年6月"
               width="120px"
            >
              <template slot-scope="scope">
                {{scope.row.six|NumFormat}}
              </template>
            </el-table-column>
            <el-table-column
              prop="seven"
              label="2017年7月"
              align="center"
              width="120px"
            >
              <template slot-scope="scope">
                {{scope.row.seven|NumFormat}}
              </template>
            </el-table-column>
            <el-table-column
              prop="eight"
              label="2017年8月"
              align="center"
              width="120px"
            >
              <template slot-scope="scope">
                {{scope.row.eight|NumFormat}}
              </template>
            </el-table-column>
            <el-table-column
              prop="nine"
              label="2017年9月"
              align="center"
              width="120px"
            >
              <template slot-scope="scope">
                {{scope.row.nine|NumFormat}}
              </template>
            </el-table-column>
            <el-table-column
              prop="ten"
              label="2017年10月"
              align="center"
              width="120px"
            >
              <template slot-scope="scope">
                {{scope.row.ten|NumFormat}}
              </template>
            </el-table-column>
            <el-table-column
              prop="eleven"
              label="2017年11月"
              align="center"
              width="120px"
            >
              <template slot-scope="scope">
                {{scope.row.eleven|NumFormat}}
              </template>
            </el-table-column>
            <el-table-column
              prop="twelve"
              label="2017年12月"
              align="center"
              width="120px"
            >
              <template slot-scope="scope">
                {{scope.row.twelve|NumFormat}}
              </template>
            </el-table-column>
            <el-table-column
              prop="total"
              label="总结"
              align="center"
              width="120px"
            >
              <template slot-scope="scope">
                {{scope.row.total|NumFormat}}
              </template>
            </el-table-column>
          </el-table>
          </div>
          <div class="el_item">
          <el-table
            :data="tabData3_2018"
            style="width: 100%"
            border
            v-show = "tabData3_2018.length>0"
            height="250px" :header-cell-style="{fontWeight:'bold',color:'#000'}">
            <el-table-column
            type="index" label="序号" width="60"
            prop= "index"
             fixed align="center" >
            </el-table-column>
            <el-table-column
              fixed
              prop="product_portion"
              label="产品/月份"
              align="center"
              width="260px"
            >
            </el-table-column>
            <el-table-column
              prop="one"
              label="2018年1月"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="two"
              label="2018年2月"
              align="center"
              width="180px"
            >
            </el-table-column>
            <el-table-column
              prop="three"
              label="2018年3月"
              align="center"
              width="180px"
            >
            </el-table-column>
            <el-table-column
              prop="four"
              label="2018年4月"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="five"
              label="2018年5月"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="six"
              label="2018年6月"
               width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="seven"
              label="2018年7月"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="eight"
              label="2018年8月"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="nine"
              label="2018年9月"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="ten"
              label="2018年10月"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="eleven"
              label="2018年11月"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="twelve"
              label="2018年12月"
              align="center"
              width="120px"
            >
            </el-table-column>
            <el-table-column
              prop="total"
              label="总结"
              align="center"
              width="120px"
            >
            </el-table-column>
          </el-table>
          </div>
          <div class="el_item">
            <el-table
              :data="tabData3_2019"
              style="width: 100%"
              v-show = "tabData3_2019.length>0"
              border
              height="250px" :header-cell-style="{fontWeight:'bold',color:'#000'}">
              <el-table-column
              type="index" label="序号" width="60"
              prop= "index"
              fixed align="center" >
              </el-table-column>
              <el-table-column
                fixed
                prop="product_portion"
                label="产品/月份"
                align="center"
                width="260px"
              >
              </el-table-column>
              <el-table-column
                prop="one"
                label="2019年1月"
                align="center"
                width="120px"
              >
              </el-table-column>
              <el-table-column
                prop="two"
                label="2019年2月"
                align="center"
                width="190px"
              >
              </el-table-column>
              <el-table-column
                prop="three"
                label="2019年3月"
                align="center"
                width="190px"
              >
              </el-table-column>
              <el-table-column
                prop="four"
                label="2019年4月"
                align="center"
                width="120px"
              >
              </el-table-column>
              <el-table-column
                prop="five"
                label="2019年5月"
                align="center"
                width="120px"
              >
              </el-table-column>
              <el-table-column
                prop="six"
                label="2019年6月"
                width="120px"
              >
              </el-table-column>
              <el-table-column
                prop="seven"
                label="2019年7月"
                align="center"
                width="120px"
              >
              </el-table-column>
              <el-table-column
                prop="eight"
                label="2019年8月"
                align="center"
                width="120px"
              >
              </el-table-column>
              <el-table-column
                prop="nine"
                label="2019年9月"
                align="center"
                width="120px"
              >
              </el-table-column>
              <el-table-column
                prop="ten"
                label="2019年10月"
                align="center"
                width="120px"
              >
              </el-table-column>
              <el-table-column
                prop="eleven"
                label="2019年11月"
                align="center"
                width="120px"
              >
              </el-table-column>
              <el-table-column
                prop="twelve"
                label="2019年12月"
                align="center"
                width="120px"
              >
              </el-table-column>
              <el-table-column
                prop="total"
                label="总结"
                align="center"
                width="120px"
              >
              </el-table-column>
            </el-table>
          </div>

        </div>
      </div>
       <!--//模态框 -->
      <div class="showModel" v-if="modelShow">
        <div class="model">
          <div class="model_title">详细信息</div>
          <el-table
            class="model_table"
            :data="tabData4"
            height="250px"
            border
            style="width: 100%;height:405px!important;" :header-cell-style="{fontWeight:'200',color:'#000'}">
            <el-table-column
              align="center"
              prop="date"
              label="日期"
              width="120"
              v-if="tabData4Show">
            </el-table-column>
            <el-table-column
              align="center"
              prop="destination_country"
              label="目的国"
              width="120">
            </el-table-column>
           <el-table-column
              align="center"
              prop="amount"
              label="金额"
              width="120">
             <template slot-scope="scope">
               {{scope.row.amount|NumFormat}}
             </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="quantity"
              label="数量"
              width="120" >
              <template slot-scope="scope">
                {{scope.row.quantity|Format}}
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="weight"
              label="重量"
              width="120" >
            </el-table-column>
            <el-table-column
              align="center"
              prop="product_name"
              label="产品名称">
            </el-table-column>
            <el-table-column
              align="center"
              prop="product_description"
              label="产品描述">
            </el-table-column>
          </el-table>
          <button @click="modelShow=false">关闭</button>
          <div class="el-page">
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page="page"
              :page-sizes="[10, 20, 30]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import https from '../utils/axios'
  import top from '../components/top';
    export default {
        name: "supplierDetail",
      data(){
          return {
            modelShow:false,
            tabData2:[],
            tabData3:[],
            tabData3_2016:[],
            tabData3_2017:[],
            tabData3_2018:[],
            tabData3_2019:[],

            tabData4:[],
            showListData:[],
            tabData4Show:true,
            listData:true,
            countryName:'',
            id:'',
            page:1,
            pageSize:20,
            total:0,
            companyName:'',
            isfollow:true,
            startTime:"",
            endTime:'',
          }
      },
      components:{
          top
      },
      filters:{
          Format(value){
            if(!value) return '0';
            var intPart = Number(value).toFixed(0); //获取整数部分
            var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
            var floatPart = ""; //预定义小数部分
            var value2Array = value.split(".");
            //=2表示数据有小数位
            if(value2Array.length === 2) {
              floatPart = value2Array[1].toString(); //拿到小数部分
              if(floatPart.length === 1) { //补0,实际上用不着
                return intPartFormat + "." + floatPart + '0'+'台';
              } else {
                return intPartFormat + "." + floatPart+'台';
              }
            } else {
              return intPartFormat + floatPart+'台';
            }
          }
      },
      created() {
          this.startTime = localStorage.getItem('startTime');
          this.endTime =  localStorage.getItem('endTime');
          //获取公司id
          this.id=this.$route.query.companyID.trim();
          this.companyName=this.$route.query.companyName;
          //国家产品平衡表
          let detail1_url=`http://119.3.71.137:8081/company/companyIDMessage`;
          //原产地产品平衡表
          let detail2_url=`http://119.3.71.137:8081/company/getProductBalance`;
          //产品月度平衡标
          let detail3_url=`http://119.3.71.137:8081/company/getMonthlyBalance`;
          let details_data = {
            companyID:this.id,
          };
          //国家产品平衡表
           https.fetchPost(detail1_url,details_data).then( (res) => {
          if (res.data.code==="200") {
            this.showListData = res.data.content.company;
            this.showListData.forEach(item=>{
              if(item.country_name===''||item.drilling===''
                ||item.elektrik_hammer===''||item.jenis_alat_kuasa_lain===''
                ||item.jig_saw===''||item.mesin_pemangkasan===''||item.mower===''||item.pekeliling_elektrik_melihat===''
              ||item.pengisar_sudut_elektrik_sander===''||item.peninjauan_semula===''||item.perengkuh_elektrik_pemutar_skru===''
              ||item.pilih_elektrik===''||item.planer_elektrik===''||item.powersaw===''||item.produk_lain===''||item.rantai_elektrik_melihat===''
                ||item.sander===''||item.total===''||item.varchar_nombor_serial==='' ){
                  this.listData=false;
              }

            })
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
        });
       //原产地产品平衡表
        https.fetchPost(detail2_url,details_data).then( (res) => {
          if (res.data.code==="200") {
            //渲染数据
            this.tabData2 = res.data.content.company;
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
        });
        //置空的操作
        let time_2020true = function(){

          if (  null !== tabData3.time_2020  || undefined !== tabData3.time_2020 ) {
              this.tabData3.time_2020 = [];
          }
        }

        let is_time2020 = false;
         //产品月度平衡标
        https.fetchPost(detail3_url,details_data).then( (res) => {
          if (res.data.code==="200") {
            this.tabData3 = res.data.content;
            //渲染数据

            let startTime = new Date(this.startTime);
            let endTime  = new Date(this.endTime);
            let starTimeYear = startTime.getFullYear();
            let endTimeYear = endTime.getFullYear();
            console.log("时间数据", starTimeYear, endTimeYear);

            switch (starTimeYear) {
                case 2016:
                    switch (endTimeYear){
                      case 2016:
                        this.tabData3.time_2017 = [];
                        this.tabData3.time_2018 = [];
                        this.tabData3.time_2019 = [];
                        break;
                      case 2017:
                        this.tabData3.time_2018 = [];
                        this.tabData3.time_2019 = [];

                        break;
                      case 2018:
                        this.tabData3.time_2019 = [];
                        break;

                    }
                     break;
                case  2017:

                    switch (endTimeYear){
                      case 2017:
                        this.tabData3.time_2016 = [];
                        this.tabData3.time_2018 = [];
                        this.tabData3.time_2019 = [];
                        break;
                      case 2018:
                        this.tabData3.time_2016 = [];
                        this.tabData3.time_2019 = [];
                        break;
                      case 2019:
                        this.tabData3.time_2016 = [];
                        break;
                    }
                     break;
                case  2018:

                    switch (endTimeYear){
                      case 2018:
                        this.tabData3.time_2016 = [];
                        this.tabData3.time_2017 = [];
                        this.tabData3.time_2019 = [];
                        break;
                      case 2019:
                        this.tabData3.time_2016 = [];
                        this.tabData3.time_2017 = [];
                        break;
                    }
                    break;
                case  2019:
                    console.log("处理没....");
                    switch (endTimeYear){
                      case 2019:
                        this.tabData3.time_2016 = [];
                        this.tabData3.time_2017 = [];
                        this.tabData3.time_2018 = [];
                        break;

                    }
                   break;
            }

            this.tabData3_2016 = this.tabData3.time_2016;
            this.tabData3_2017 = this.tabData3.time_2017;
            this.tabData3_2018 = this.tabData3.time_2018;
            this.tabData3_2019 = this.tabData3.time_2019;

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
        });

      },
      methods:{
        cellStyle(){
            return "font-weight:900";
        },
        handleCurrentChange(val){
          this.page=val;
          this.showData();
        },
        handleEdit(country){
          this.countryName = country;
          this.showData();
          //这里要显示模态框,定义boolean值显示
          this.modelShow=true;
        },
        //模态框数据
        showData(){
          //按公司ID和国家查询详细信息(是个弹窗)
          let detail4_url=`http://119.3.71.137:8081/company/getCountryCompanyMessage`;
          //按公司ID和国家查询详细信息参数
          let details_country={
            companyID:this.id,
            country:this.countryName,
            num:this.page
          };
           //按公司ID和国家查询详细信息(是个弹窗)
              https.fetchPost(detail4_url,details_country).then( (res) => {
                if (res.data.code==="200") {
                  //渲染数据
                   this.total=Number(res.data.content.allnum);
                  this.tabData4 = res.data.content.company;

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
              });
        }
      },
      computed: {

      },
    }
</script>

<style scoped>

  .w1100{
    width: 1100px;
    margin: 0 auto;
  }
.detail{
  width: 1100px;
  background: #e0e2e3;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 70px;
  font-size: 14px;
  overflow: hidden;
}
  .detail>img{
    margin-right: 5px;
    float: left;
  }
  .detail_title{
    float: left;
  }
  .follow{
    width: 1170px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    background: #ffffff;
  }
  .follow button{
    background: #e8940e;
    color: #ffffff;
    border: none;
    padding: 5px 6px;
    outline: none;
  }
.detail1{
  width: 1100px;
  background: #ffffff;
  padding: 20px 35px;
}
  .country_table{
   color: #e8940e;
  }
  .country_table:hover{
  color: #000!important;
}
  .detail1 h3{
    text-align: center;
    color: #333;
    font-size: 18px;
    margin-bottom: 20px;
  }
  .detail1 .el_item{
    margin-top:22px;
  }

  .showModel{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.6);
    z-index: 100;
  }
  .model{
    width: 977px;
    height: 500px;
    border: 5px solid rgb(221, 221, 221);
    position: absolute;
    z-index: 10001;
    background: rgb(255, 255, 255);
    left: 50%;
    top: 50%;
    display: block;
    margin-left: -486px;
    margin-top: -250px;
  }
  .model_title{
    width: 100%;
    height: 35px;
    text-align: center;
    font: 12px/35px "宋体";
    color: #000000;
    background: #cccccc;
  }
  .model_table{
    height: 405px!important;
  }
  .model button{
    float: right;
    margin-top: 20px;
    margin-right: 20px;
  }
.el-page{
  text-align: center;
  padding-top: 10px;
}
</style>
