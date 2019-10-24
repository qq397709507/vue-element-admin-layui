<template>
  <div class='headerBox'>

    <div class='headerToolbar'>

    </div>
  </div>
</template>

<script>
  import config from "../../../config.js";
  export default {
    name: "indexHeader",
    props: {},
    components: {},
    data() {
      return {
        activeIndex: "1",
        logo: config.logo,
        headImg: "/static/img/headImg.png",
        bgColor: config.layui.navBgColor,
        activeTextColor: config.layui.activeTextColor,
        navList: config.headerNav
      };
    },
    mounted() {},
    methods: {
      loginOut() {
        console.log("注销事件,请自行完善");
        this.$router.push({
          path: "/"
        });
      },
      //切换菜单 事件.
      handleSelect(key, keyPath) {
        //console.log(key, keyPath);
      },
      //图片加载错误 事件
      errorImg(type) {
        if (type == 1) this.logo = "/src/assets/logo.png";
        if (type == 2) this.headImg = config.defaultHeadImg;
      }
    }
  };
</script>

<style lang="less" scoped>
  

  .tabBtn /deep/ .el-radio-button__inner {
    padding: 6px 9px;
    background: rgba(255, 255, 255, 0.1) 0 0 no-repeat;
    color: #fff;
  }

  .tabBtn /deep/ .el-radio-button__inner:hover {
    color: aquamarine;
    background: rgba(255, 255, 255, 0.4);
  }

  .userBar {
    float: right;
    margin-right: 50px;
  }

  .headImg {
    height: 80%;
    border-radius: 50%;
    margin: 5px;
  }

  .userName {
    font-size: 18px;
  }

  .tabBtn {
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0 40px;
    color: #fff;
  }

  .el-menu--horizontal {
    border-bottom: solid 1px #404553;
  }

  .headerBox {
    height: 50px;
    background-color: rgb(36, 38, 47);
  }
  .headerToolbar{
    border-bottom: 1px solid #f6f6f6;
    box-sizing: border-box;
    background-color: #fff;
    display: inline-block;
    height: 100%;
    width: calc(100% - 200px);
    vertical-align: text-bottom;
    padding: 0 10px;
  }
</style>
