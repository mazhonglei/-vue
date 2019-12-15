<template>
  <div class="myaccout">
    <div class="content">
      <div class="topdiv">
        <div class="name">
          用户名：
          <span class="text">{{welcome}}</span>
        </div>
        <div class="infor">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="Email：">
              <el-input v-model="formInline.email" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="昵称">
              <el-input v-model="formInline.name" placeholder=""></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
          </el-form>  
        </div>
      </div>
      <!-- 所在模块权限 -->
      <div class="Jurisdiction">
        <h3 class="hd">您所有的模块权限</h3>
        <div class="copy">
            <ul class="country1 clearfix">
              <li><input checked="checked" disabled="disabled" id="model1" name="model1" type="checkbox" value="true"><input name="model1" type="hidden" value="false"> 市场分析</li>
            <li><input checked="checked" disabled="disabled" id="model2" name="model2" type="checkbox" value="true"><input name="model2" type="hidden" value="false"> 买家深度分析</li>
                
                <li><input checked="checked" disabled="disabled" id="model3" name="model3" type="checkbox" value="true"><input name="model3" type="hidden" value="false"> 供应商分析</li>
                
                <li><input checked="checked" disabled="disabled" id="model4" name="model4" type="checkbox" value="true"><input name="model4" type="hidden" value="false"> 采购产品分析</li>
          </ul>
        </div>
      </div>
      <!--  所有国家权限-->
      <div class="Country">
        <h3  class="hd">您所有的国家权限</h3>
        <div class="copy">
            <ul class="country1 clearfix"><li><input type="checkbox" checked="" disabled="disabled">其它</li><li><input type="checkbox" checked="" disabled="disabled">其它</li><li><input type="checkbox" checked="" disabled="disabled">阿富汗</li><li><input type="checkbox" checked="" disabled="disabled">阿尔巴尼亚</li><li><input type="checkbox" checked="" disabled="disabled">阿尔及利亚</li><li><input type="checkbox" checked="" disabled="disabled">安道尔共和国</li><li><input type="checkbox" checked="" disabled="disabled">安哥拉</li><li><input type="checkbox" checked="" disabled="disabled">南极洲</li><li><input type="checkbox" checked="" disabled="disabled">阿根廷</li><li><input type="checkbox" checked="" disabled="disabled">亚美尼亚</li><li><input type="checkbox" checked="" disabled="disabled">阿鲁巴</li><li><input type="checkbox" checked="" disabled="disabled">澳大利亚</li><li><input type="checkbox" checked="" disabled="disabled">奥地利</li><li><input type="checkbox" checked="" disabled="disabled">阿塞拜疆</li><li><input type="checkbox" checked="" disabled="disabled">巴哈马</li><li><input type="checkbox" checked="" disabled="disabled">巴林</li><li><input type="checkbox" checked="" disabled="disabled">孟加拉</li><li><input type="checkbox" checked="" disabled="disabled">巴巴多斯</li><li><input type="checkbox" checked="" disabled="disabled">比利时</li><li><input type="checkbox" checked="" disabled="disabled">伯利兹</li><li><input type="checkbox" checked="" disabled="disabled">贝宁</li><li><input type="checkbox" checked="" disabled="disabled">百慕大</li><li><input type="checkbox" checked="" disabled="disabled">不丹</li><li><input type="checkbox" checked="" disabled="disabled">玻利维亚</li><li><input type="checkbox" checked="" disabled="disabled">波黑</li><li><input type="checkbox" checked="" disabled="disabled">博茨瓦纳</li><li><input type="checkbox" checked="" disabled="disabled">巴西</li><li><input type="checkbox" checked="" disabled="disabled">英属印度洋领地</li><li><input type="checkbox" checked="" disabled="disabled">文莱</li><li><input type="checkbox" checked="" disabled="disabled">保加利亚</li><li><input type="checkbox" checked="" disabled="disabled">缅甸</li><li><input type="checkbox" checked="" disabled="disabled">布隆迪</li><li><input type="checkbox" checked="" disabled="disabled">白俄罗斯</li><li><input type="checkbox" checked="" disabled="disabled">柬埔寨</li><li><input type="checkbox" checked="" disabled="disabled">喀麦隆</li><li><input type="checkbox" checked="" disabled="disabled">加拿大</li><li><input type="checkbox" checked="" disabled="disabled">佛得角群岛</li><li><input type="checkbox" checked="" disabled="disabled">开曼群岛</li><li><input type="checkbox" checked="" disabled="disabled">中非共和国</li><li><input type="checkbox" checked="" disabled="disabled">乍得</li><li><input type="checkbox" checked="" disabled="disabled">智利</li><li><input type="checkbox" checked="" disabled="disabled">中国</li><li><input type="checkbox" checked="" disabled="disabled">圣诞岛</li><li><input type="checkbox" checked="" disabled="disabled">可可岛</li><li><input type="checkbox" checked="" disabled="disabled">哥伦比亚</li><li><input type="checkbox" checked="" disabled="disabled">科摩罗</li><li><input type="checkbox" checked="" disabled="disabled">刚果（金）</li><li><input type="checkbox" checked="" disabled="disabled">库克群岛</li><li><input type="checkbox" checked="" disabled="disabled">哥斯达黎加</li><li><input type="checkbox" checked="" disabled="disabled">克罗地亚</li><li><input type="checkbox" checked="" disabled="disabled">古巴</li><li><input type="checkbox" checked="" disabled="disabled">塞浦路斯</li><li><input type="checkbox" checked="" disabled="disabled">捷克共和国</li><li><input type="checkbox" checked="" disabled="disabled">北朝鲜</li><li><input type="checkbox" checked="" disabled="disabled">丹麦</li><li><input type="checkbox" checked="" disabled="disabled">吉布提</li><li><input type="checkbox" checked="" disabled="disabled">多米尼加</li><li><input type="checkbox" checked="" disabled="disabled">东帝汶</li><li><input type="checkbox" checked="" disabled="disabled">厄瓜多尔</li><li><input type="checkbox" checked="" disabled="disabled">埃及</li><li><input type="checkbox" checked="" disabled="disabled">萨尔瓦多</li><li><input type="checkbox" checked="" disabled="disabled">赤道几内亚</li><li><input type="checkbox" checked="" disabled="disabled">爱沙尼亚</li><li><input type="checkbox" checked="" disabled="disabled">埃塞俄比亚</li><li><input type="checkbox" checked="" disabled="disabled">斐济</li><li><input type="checkbox" checked="" disabled="disabled">芬兰</li><li><input type="checkbox" checked="" disabled="disabled">法国</li><li><input type="checkbox" checked="" disabled="disabled">法属圭亚那</li><li><input type="checkbox" checked="" disabled="disabled">法属南部领地 </li><li><input type="checkbox" checked="" disabled="disabled">加蓬</li><li><input type="checkbox" checked="" disabled="disabled">冈比亚</li><li><input type="checkbox" checked="" disabled="disabled">格鲁吉亚</li><li><input type="checkbox" checked="" disabled="disabled">德国</li><li><input type="checkbox" checked="" disabled="disabled">加纳</li><li><input type="checkbox" checked="" disabled="disabled">直布罗陀</li><li><input type="checkbox" checked="" disabled="disabled">希腊</li><li><input type="checkbox" checked="" disabled="disabled">格陵兰</li><li><input type="checkbox" checked="" disabled="disabled">格林纳达</li><li><input type="checkbox" checked="" disabled="disabled">瓜德罗普</li><li><input type="checkbox" checked="" disabled="disabled">关岛</li><li><input type="checkbox" checked="" disabled="disabled">危地马拉</li><li><input type="checkbox" checked="" disabled="disabled">几内亚</li><li><input type="checkbox" checked="" disabled="disabled">圭亚那</li><li><input type="checkbox" checked="" disabled="disabled">海地</li><li><input type="checkbox" checked="" disabled="disabled">洪都拉斯</li><li><input type="checkbox" checked="" disabled="disabled">中国香港</li><li><input type="checkbox" checked="" disabled="disabled">匈牙利</li><li><input type="checkbox" checked="" disabled="disabled">冰岛</li><li><input type="checkbox" checked="" disabled="disabled">印度</li><li><input type="checkbox" checked="" disabled="disabled">印度尼西亚</li><li><input type="checkbox" checked="" disabled="disabled">伊朗</li><li><input type="checkbox" checked="" disabled="disabled">伊拉克</li><li><input type="checkbox" checked="" disabled="disabled">爱尔兰</li><li><input type="checkbox" checked="" disabled="disabled">以色列</li><li><input type="checkbox" checked="" disabled="disabled">意大利</li><li><input type="checkbox" checked="" disabled="disabled">牙买加</li><li><input type="checkbox" checked="" disabled="disabled">日本</li><li><input type="checkbox" checked="" disabled="disabled">约旦</li><li><input type="checkbox" checked="" disabled="disabled">韩国</li><li><input type="checkbox" checked="" disabled="disabled">哈萨克斯坦</li><li><input type="checkbox" checked="" disabled="disabled">肯尼亚</li><li><input type="checkbox" checked="" disabled="disabled">基里巴斯</li><li><input type="checkbox" checked="" disabled="disabled">科威特</li><li><input type="checkbox" checked="" disabled="disabled">吉尔吉斯斯坦</li><li><input type="checkbox" checked="" disabled="disabled">老挝</li><li><input type="checkbox" checked="" disabled="disabled">拉脱维亚</li><li><input type="checkbox" checked="" disabled="disabled">黎巴嫩</li><li><input type="checkbox" checked="" disabled="disabled">莱索托</li><li><input type="checkbox" checked="" disabled="disabled">利比里亚</li><li><input type="checkbox" checked="" disabled="disabled">利比亚</li><li><input type="checkbox" checked="" disabled="disabled">列支敦士登</li><li><input type="checkbox" checked="" disabled="disabled">立陶宛</li><li><input type="checkbox" checked="" disabled="disabled">卢森堡</li><li><input type="checkbox" checked="" disabled="disabled">澳门</li><li><input type="checkbox" checked="" disabled="disabled">马达加斯加</li><li><input type="checkbox" checked="" disabled="disabled">马拉维</li><li><input type="checkbox" checked="" disabled="disabled">马来西亚</li><li><input type="checkbox" checked="" disabled="disabled">马尔代夫</li><li><input type="checkbox" checked="" disabled="disabled">马里</li><li><input type="checkbox" checked="" disabled="disabled">马耳他</li><li><input type="checkbox" checked="" disabled="disabled">马绍尔群岛</li><li><input type="checkbox" checked="" disabled="disabled">毛里塔尼亚</li><li><input type="checkbox" checked="" disabled="disabled">毛里求斯</li><li><input type="checkbox" checked="" disabled="disabled">墨西哥</li><li><input type="checkbox" checked="" disabled="disabled">密克罗尼西亚</li><li><input type="checkbox" checked="" disabled="disabled">中东</li><li><input type="checkbox" checked="" disabled="disabled">摩尔多瓦</li><li><input type="checkbox" checked="" disabled="disabled">摩纳哥</li><li><input type="checkbox" checked="" disabled="disabled">蒙古</li><li><input type="checkbox" checked="" disabled="disabled">蒙特塞拉特</li><li><input type="checkbox" checked="" disabled="disabled">摩洛哥</li><li><input type="checkbox" checked="" disabled="disabled">莫桑比克</li><li><input type="checkbox" checked="" disabled="disabled">纳米比亚</li><li><input type="checkbox" checked="" disabled="disabled">瑙鲁</li><li><input type="checkbox" checked="" disabled="disabled">尼泊尔</li><li><input type="checkbox" checked="" disabled="disabled">荷兰</li><li><input type="checkbox" checked="" disabled="disabled">新喀里多尼亚</li><li><input type="checkbox" checked="" disabled="disabled">新西兰</li><li><input type="checkbox" checked="" disabled="disabled">尼加拉瓜</li><li><input type="checkbox" checked="" disabled="disabled">尼日尔</li><li><input type="checkbox" checked="" disabled="disabled">尼日利亚</li><li><input type="checkbox" checked="" disabled="disabled">纽埃</li><li><input type="checkbox" checked="" disabled="disabled">挪威</li><li><input type="checkbox" checked="" disabled="disabled">安提瓜和巴布达</li><li><input type="checkbox" checked="" disabled="disabled">阿曼</li><li><input type="checkbox" checked="" disabled="disabled">巴基斯坦</li><li><input type="checkbox" checked="" disabled="disabled">帕劳</li><li><input type="checkbox" checked="" disabled="disabled">巴勒斯坦</li><li><input type="checkbox" checked="" disabled="disabled">巴拿马</li><li><input type="checkbox" checked="" disabled="disabled">巴布亚新几内亚</li><li><input type="checkbox" checked="" disabled="disabled">巴拉圭</li><li><input type="checkbox" checked="" disabled="disabled">秘鲁</li><li><input type="checkbox" checked="" disabled="disabled">菲律宾</li><li><input type="checkbox" checked="" disabled="disabled">波兰</li><li><input type="checkbox" checked="" disabled="disabled">葡萄牙</li><li><input type="checkbox" checked="" disabled="disabled">波多黎各</li><li><input type="checkbox" checked="" disabled="disabled">卡塔尔</li><li><input type="checkbox" checked="" disabled="disabled">罗马尼亚</li><li><input type="checkbox" checked="" disabled="disabled">俄罗斯</li><li><input type="checkbox" checked="" disabled="disabled">卢旺达</li><li><input type="checkbox" checked="" disabled="disabled">圣马力诺</li><li><input type="checkbox" checked="" disabled="disabled">沙特阿拉伯</li><li><input type="checkbox" checked="" disabled="disabled">塞内加尔</li><li><input type="checkbox" checked="" disabled="disabled">塞舌尔</li><li><input type="checkbox" checked="" disabled="disabled">塞拉利昂</li><li><input type="checkbox" checked="" disabled="disabled">新加坡</li><li><input type="checkbox" checked="" disabled="disabled">斯洛伐克</li><li><input type="checkbox" checked="" disabled="disabled">斯洛文尼亚</li><li><input type="checkbox" checked="" disabled="disabled">所罗门群岛</li><li><input type="checkbox" checked="" disabled="disabled">索马里</li><li><input type="checkbox" checked="" disabled="disabled">南非</li><li><input type="checkbox" checked="" disabled="disabled">西班牙</li><li><input type="checkbox" checked="" disabled="disabled">斯里兰卡</li><li><input type="checkbox" checked="" disabled="disabled">苏丹</li><li><input type="checkbox" checked="" disabled="disabled">苏里南</li><li><input type="checkbox" checked="" disabled="disabled">斯威士兰</li><li><input type="checkbox" checked="" disabled="disabled">瑞典</li><li><input type="checkbox" checked="" disabled="disabled">瑞士</li><li><input type="checkbox" checked="" disabled="disabled">叙利亚</li><li><input type="checkbox" checked="" disabled="disabled">塔吉克斯坦</li><li><input type="checkbox" checked="" disabled="disabled">中国台湾</li><li><input type="checkbox" checked="" disabled="disabled">坦桑尼亚</li><li><input type="checkbox" checked="" disabled="disabled">泰国</li><li><input type="checkbox" checked="" disabled="disabled">多哥</li><li><input type="checkbox" checked="" disabled="disabled">托克劳群岛</li><li><input type="checkbox" checked="" disabled="disabled">汤加</li><li><input type="checkbox" checked="" disabled="disabled">特立尼达和多巴哥</li><li><input type="checkbox" checked="" disabled="disabled">突尼斯</li><li><input type="checkbox" checked="" disabled="disabled">土耳其</li><li><input type="checkbox" checked="" disabled="disabled">土库曼斯坦</li><li><input type="checkbox" checked="" disabled="disabled">图瓦卢</li><li><input type="checkbox" checked="" disabled="disabled">乌干达</li><li><input type="checkbox" checked="" disabled="disabled">乌克兰</li><li><input type="checkbox" checked="" disabled="disabled">阿联酋</li><li><input type="checkbox" checked="" disabled="disabled">英国</li><li><input type="checkbox" checked="" disabled="disabled">美国</li><li><input type="checkbox" checked="" disabled="disabled">乌拉圭</li><li><input type="checkbox" checked="" disabled="disabled">前苏联</li><li><input type="checkbox" checked="" disabled="disabled">乌兹别克斯坦</li><li><input type="checkbox" checked="" disabled="disabled">梵蒂冈</li><li><input type="checkbox" checked="" disabled="disabled">委内瑞拉</li><li><input type="checkbox" checked="" disabled="disabled">越南</li><li><input type="checkbox" checked="" disabled="disabled">不列颠岛(美)</li><li><input type="checkbox" checked="" disabled="disabled">英属维尔京群岛</li><li><input type="checkbox" checked="" disabled="disabled">西撒哈拉</li><li><input type="checkbox" checked="" disabled="disabled">也门</li><li><input type="checkbox" checked="" disabled="disabled">南斯拉夫</li><li><input type="checkbox" checked="" disabled="disabled">扎伊尔</li><li><input type="checkbox" checked="" disabled="disabled">赞比亚</li><li><input type="checkbox" checked="" disabled="disabled">津巴布韦</li><li><input type="checkbox" checked="" disabled="disabled">皮特凯恩群岛</li><li><input type="checkbox" checked="" disabled="disabled">塞尔维亚</li><li><input type="checkbox" checked="" disabled="disabled">东萨摩亚/美属萨摩亚</li><li><input type="checkbox" checked="" disabled="disabled">马约特岛</li><li><input type="checkbox" checked="" disabled="disabled">瓦努阿图</li><li><input type="checkbox" checked="" disabled="disabled">美属维尔京群岛</li><li><input type="checkbox" checked="" disabled="disabled">北马里亚纳群岛</li><li><input type="checkbox" checked="" disabled="disabled">布维岛</li><li><input type="checkbox" checked="" disabled="disabled">马提尼克岛</li><li><input type="checkbox" checked="" disabled="disabled">留尼汪岛</li><li><input type="checkbox" checked="" disabled="disabled">厄立特里亚</li><li><input type="checkbox" checked="" disabled="disabled">法罗群岛</li><li><input type="checkbox" checked="" disabled="disabled">瓦利斯和富图纳群岛</li><li><input type="checkbox" checked="" disabled="disabled">福克兰群岛</li><li><input type="checkbox" checked="" disabled="disabled">布基纳法索</li><li><input type="checkbox" checked="" disabled="disabled">科索沃</li><li><input type="checkbox" checked="" disabled="disabled">圣基茨和尼维斯</li><li><input type="checkbox" checked="" disabled="disabled">圣卢西亚</li><li><input type="checkbox" checked="" disabled="disabled">特克斯和凯科斯群岛</li><li><input type="checkbox" checked="" disabled="disabled">马其顿</li><li><input type="checkbox" checked="" disabled="disabled">科特迪瓦</li><li><input type="checkbox" checked="" disabled="disabled">诺福克岛</li><li><input type="checkbox" checked="" disabled="disabled">南乔治亚和南桑德威奇群岛</li><li><input type="checkbox" checked="" disabled="disabled">圣多美和普林西比</li><li><input type="checkbox" checked="" disabled="disabled">安圭拉</li><li><input type="checkbox" checked="" disabled="disabled">塞黑</li><li><input type="checkbox" checked="" disabled="disabled">黑山共和国</li><li><input type="checkbox" checked="" disabled="disabled">圣文森特和格林纳丁斯</li><li><input type="checkbox" checked="" disabled="disabled">斯瓦尔巴特群岛</li><li><input type="checkbox" checked="" disabled="disabled">刚果（布）</li><li><input type="checkbox" checked="" disabled="disabled">圣赫勒拿</li><li><input type="checkbox" checked="" disabled="disabled">圣皮埃尔和密克隆</li><li><input type="checkbox" checked="" disabled="disabled">荷属安的列斯群岛</li><li><input type="checkbox" checked="" disabled="disabled">格恩西岛/根西岛</li><li><input type="checkbox" checked="" disabled="disabled">多米尼克</li><li><input type="checkbox" checked="" disabled="disabled">圣赫勒拿和阿森松</li><li><input type="checkbox" checked="" disabled="disabled">未知国家</li></ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        email: '',
        name: ''
      },
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  },
  computed: {
    welcome(){
      let text = localStorage.getItem('username');
      if ( text === null || text === undefined ) {
          text = "";
      }
      return text;
    },
  },
}
</script>
<style lang="stylus" scoped>
  .myaccout
    padding: 20px 30px 10px 30px
    .content
      // 
      .topdiv
          display:flex;
          border: 1px solid #ddd;
          background: #f2f2f2;
          margin-bottom: 20px;
          font: 12px/27px Arial, Helvetica, sans-serif;
          padding: 10px;
          box-sizing:border-box
          height:60px
        .name
          width:150px
          line-height:38px
          .text
            color:#000
        .infor
          flex:1
    .Jurisdiction
      // 
      .hd
        font: bold 14px/28px Arial, Helvetica, sans-serif
        padding-bottom: 5px
        color: #333
      .copy
        width:100%
        
        ul
          display:block
          background: #f2f2f2
          border: 1px solid #ddd
          padding: 10px
          margin-bottom: 15px
          li 
            display:inline-block
            width: 128px;
            float: left;
            font: 12px/24px "宋体";
            color: #666;
            padding: 2px 0px;
    .Country
      .hd
        font: bold 14px/28px Arial, Helvetica, sans-serif;
        padding-bottom: 5px;
        color: #333;
      .copy
        .country1
          border: 1px solid #ddd;
          background: #f2f2f2;
          padding: 10px;
          margin-bottom: 15px;
          li 
            width: 128px;
            float: left;
            font: 12px/24px "宋体";
            color: #666;
            padding: 2px 0px;

</style>

