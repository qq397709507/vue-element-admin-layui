<template>
  <div class="indexBody">
    <el-row :gutter="0">
      <el-col :xs="24" :lg="16" :md="16" :sm="16">
        <div class="dataEcharts">
          <div class="dataEchatsTitle">数据概览</div>
          <div id="myChart" class="flowEcharts"></div>
        </div>
      </el-col>
      <el-col :xs="24" :lg="8" :md="16" :sm="16">
        <div class="dataEcharts">
          <div class="dataEchatsTitle">数据概览</div>
          <div id="browserChart" class="browserEcharts"></div>
        </div>
      </el-col>
		</el-row>
  </div>
</template>

<script>
import { jumpRouter } from '@/utils/router/insertDynaminRouter'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      dataCharts: "",
      browserCharts: "",
    };
  },
  mounted() {
    this.drawLine();
    this.browserChart();
    window.onresize = () => {
      console.log(444);
      this.dataCharts.resize();
      this.browserCharts.resize();
      let clientWidth = document.body.clientWidth;
      let clientHeight = document.body.clientHeight;
      this.$store.state.asideCollapse = clientWidth < 1280 ? true : false;
    };
  },
  watch:{
    '$store.state.asideCollapse'(){
      this.dataCharts.resize();
      this.browserCharts.resize();
    }
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      this.dataCharts = myChart;
      // 绘制图表
      myChart.setOption({
        title: {
          text: ""
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        /* legend: {
							data:['直接访问','搜索引擎']
					}, */
        toolbox: {},
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            lineStyle: { normal: { color: "#3FB1E3" } },
            areaStyle: { normal: { color: "#6FDDCE" } },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            lineStyle: { normal: { color: "#6BE6C1" } },
            areaStyle: { normal: { color: "#97EDD3" } },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      });
    },
    browserChart() {
      let browserChart = this.$echarts.init(
        document.getElementById("browserChart")
      );
      this.browserCharts = browserChart;
      browserChart.setOption({
        title: {},
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 1548, name: "搜索引擎" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    }
  }
};
</script>

<style lang="less" scoped>
 .el-row{padding: 10px;}
.indexBody {
  background: #f8f8f8;
  width: 100%;
  .dataEcharts {
    box-shadow: 0 0px 1px #e1e1e1;
    background: #fff;
    vertical-align: middle;
    margin-bottom: 10px;
  }
  .flowEcharts {
    width: 100%;
    height: 400px;
    padding: 15px;
    margin-top: -40px;
  }
  .dataEchatsTitle {
    padding: 10px;
    color: #333;
    font-size: 16px;
    border-bottom: 1px solid #e1e1e1;
  }
  .browserEcharts {
    width: 100%;
    height: 390px;
  }
  .text-item {
    border-bottom: 1px dashed rgb(44, 136, 179);
    cursor: pointer;
  }
}

</style>
