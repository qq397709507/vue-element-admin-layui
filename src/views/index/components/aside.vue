<template>
  <!-- 侧边栏 -->
  <div>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="$store.state.asideCollapse"
      :background-color="bgColor"
      text-color="#fff"
      :active-text-color="activeTextColor"
    >
    <div :class=" $store.state.asideCollapse == false ? 'logo' : 'logo miniLogo'" :style="'background-color:'+logoBgColor">
      <img :src="logo" alt="logo" class="logoImg" @error="errorImg(1)" v-if="!$store.state.asideCollapse" />
      <img src="/static/img/logo2.png" alt="logo" v-else >
    </div>
     <!-- <el-menu-item index="consoleView" @click="jump('consoleView','\"@/views/consoleView/consoleView.vue\"','首页')"><i class="iconfont">&#xe724;</i><span>控制台</span></el-menu-item> -->
      <template v-for="(item, index) in list">
        <el-menu-item
          :index="item.name"
          v-if="item.children.length == 0"
          :key="index" @click="jump(item.name,item.url,item.title)" class="firstMenu"
        >
          <i class="iconfont" v-html="item.icon" v-if="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
        <el-submenu
          :index="item.id"
          v-if="item.children.length != 0"
          :key="index"
          class="el-menu-submenu"
        >
          <template slot="title">
            <i class="iconfont" v-html="item.icon" v-if="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </template>
          <template v-for="(item2, index2) in item.children">
            <el-menu-item-group
              v-if="item2.children.length == 0"
              :key="index2"
              class="defined-menu-item-group"
            >
              <el-menu-item index="1-1">{{ item2.title }}</el-menu-item>
            </el-menu-item-group>
            <el-submenu
              index="1-4"
              v-if="item2.children.length != 0"
              :key="index2"
            >
              <span slot="title">{{ item2.title }}</span>
              <el-menu-item
                index="1-4-1"
                v-for="(item3, index3) in item2.children"
                :key="index3"
                >{{ item3.title }}</el-menu-item
              >
            </el-submenu>
          </template>
        </el-submenu>
      </template>
      <div class="asideAbout">
        <div class="asideAboutTitle">相关链接</div>
        <div class="asideAboutItem">
          <svg class="iconSvg" aria-hidden="true">
            <use xlink:href="#icon-kefu"></use>
          </svg>
          联系我们
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { jumpRouter } from '@/utils/router/insertDynaminRouter'
import config from "@/config.js";
export default {
  name: "indexAside",
  props: {},
  components: {},
  data() {
    return {
      isCollapse: this.$store.state.asideCollapse,
      list: config.aside,
      bgColor: config.layui.navBgColor,
      activeTextColor: config.layui.activeTextColor,
      logo: config.logo,
      logoBgColor:config.layui.navBgColor,
      defaultActive: 'consoleView'
    };
  },
  mounted() {
    let skin = localStorage.getItem('skin')
    skin = JSON.parse(skin)
    this.bgColor = skin.main
    this.logoBgColor = skin.logo
    this.activeTextColor = skin.selected
  },
  watch:{
    '$store.state.changeSkin'(){
      let skin = localStorage.getItem('skin')
      skin = JSON.parse(skin)
      this.bgColor = skin.main
      this.logoBgColor = skin.logo
      this.activeTextColor = skin.selected
    }
  },
  methods: {
    //菜单打开事件
    handleOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    //菜单关闭事件
    handleClose(key, keyPath) {
      //console.log(key, keyPath);
    },
    jump (index,url,title) {
      /**
       * @param { 当前实例 } vm
       * @param { 当前动态路由模板名字 } component
       * @param { 临时缓存组件地址 } com
       * @param { 路由name } name 具体看业务是传订单号，还是name+时间戳 要求是不重复
       * @param { 具体传参数 } params
       * @param { 查询参数 } query
       */
      var obj = {
        vm: this,
        component: index,
        com: url,
        name: index,
        params: {
          id: ''
        },
        query: {}
      }
      jumpRouter(obj)
    }
  }
};
</script>

<style lang="less" scoped>
  div.asideAbout, .asideAbout div{font-size: 14px; color:#FFFFFF;}
  .asideAboutTitle{padding: 10px 20px;background: rgba(0,0,0,0.3)}
  .asideAboutItem{padding: 10px 20px;}
  .firstMenu,.el-menu /deep/ .el-menu-submenu>div{
    position: relative;
  }

  .firstMenu:hover:after,.el-menu /deep/ .el-menu-submenu>div:hover:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 4px;
    background: #42B983;
  }
  .logo {
    height: 50px;
    line-height: 1;
    width: 200px;
    text-align: center;
    background-color: #24262f;
    box-sizing: border-box;
    border-bottom: 1px solid #20222A;
  }
  .miniLogo{
    width: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logoImg {
    height: 100%;
  }
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-vertical-demo {
  height: 100%;
}
.el-menu {
  border: none;
}
.defined-menu-item-group /deep/ .el-menu-item-group__title {
  display: none;
}
</style>
