<template>
  <div :class=' navBg ? "headerBox headerBoxIcon" : "headerBox" ' :style="'background:'+navBg">
    <div class="headerBoxLeft">
      <div class='headerToolbar' @click="showAside">
        <i :class=" $store.state.asideCollapse == false ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
      </div>
      <div class='headerToolbar' @click="refresh">
        <i class="el-icon-refresh-right"></i>
      </div>
    </div>
    <div class="headerBoxRight">
      <div class="headerToolbar" @click="changeSkin">
        <svg class="iconSvg" aria-hidden="true">
          <use xlink:href="#icon-huanfu2"></use>
        </svg>
      </div>
      <div class='headerToolbar' @click="openNotepaper">
        <i class="iconfont">&#xe61b;</i>
      </div>
      <div class='headerToolbar' @click="fullScreen">
        <i class="el-icon-full-screen"></i>
      </div>
      <el-menu class="el-menu-user" mode="horizontal" @select="handleSelect">
        <el-submenu index="2">
          <template slot="title"><img :src="headImg" alt="头像" class="headImg"><span>晨将翔</span></template>
          <el-menu-item index="2-1">基本资料1</el-menu-item>
          <el-menu-item index="2-2">修改密码</el-menu-item>
          <el-menu-item index="2-3">退出</el-menu-item>
        </el-submenu>
      </el-menu>
      <!-- <div class='headerToolbar headerUserName'>
        <img :src="headImg" alt="头像" class="headImg">
        <span>晨将翔</span>
        <i class="el-icon-caret-bottom"></i>
      </div> -->
    </div>


  </div>
</template>

<script>
//import config from "@/config.js";
  export default {
    name: 'login',
    props: {},
    components: {},
    data() {
      return {
        headImg: "/static/img/headImg.png",
        fullscreen: false,
        navBg:''
      }
    },
    mounted() {
      let skin = localStorage.getItem('skin')
      skin = JSON.parse(skin)
      this.navBg = skin.header
    },
    watch:{
      '$store.state.changeSkin'(){
        let skin = localStorage.getItem('skin')
        skin = JSON.parse(skin)
        this.navBg = skin.header ? skin.header : ''
      }
    },
    methods: {
      showAside() {
        this.$store.state.asideCollapse = this.$store.state.asideCollapse ? false : true
      },
      refresh() {
        this.$emit("refresh")
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      changeSkin(){
        console.log('用户点击换肤按钮')
        this.$emit("showSkinView")
      },
      openNotepaper(){
        this.$emit('openNotepaper')
      },
      fullScreen(){
        console.log('全屏事件,尚未编写')
        let element = document.documentElement;
        if (this.fullscreen) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        } else {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.msRequestFullscreen) {
                // IE11
                element.msRequestFullscreen();
            }
        }
        this.fullscreen = !this.fullscreen;
      }
    }
  }
</script>

<style scoped>

  .el-menu-user{
    border: none;
    height: 50px;
    line-height: 50px;
    background: none;
  }
  .el-menu-user>>>i{ color: #292B34; font-size: 14px; font-weight: bold;}
  .el-menu-user .el-submenu>>>.el-submenu__title{
    border: none;
    height: 50px;
    line-height: 50px;
    color: #292B34;
  }
  .headerBox {
    height: 50px;
    background-color: #fff;
    margin-bottom: 10px;
    padding: 0 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .headerBoxIcon i{color: #FFFFFF;}
  .headerBoxLeft,.headerBoxRight{display: flex;align-items: center;}
  .headerUserName:hover i{transform: rotate(180deg);}
  .headerToolbar {
    padding: 10px;
    line-height: 1;
    font-size: 20px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
  }
  .headerToolbar .iconfont{font-size: 20px;}
  .headerUserName{font-size: 16px;}
  .headerToolbar i:hover::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    border-radius: 0;
    background-color: #292B34;
    border: none;
    height: 2px;
    background-color: #292B34;
    transform: translateX(-50%);
    animation: tabAnimation 0.2s;
  }

  @keyframes tabAnimation {
    0% {
      width: 0%;
    }

    100% {
      width: 50%;
    }
  }
  .headerToolbarRight{ justify-content: flex-end; }
  .headImg{height: 35px;border-radius: 50%;margin: 0 5px;}
</style>
