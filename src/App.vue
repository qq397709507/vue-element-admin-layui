<template>
  <div id="app">
    <keep-alive>
     <router-view />
    </keep-alive>
  </div>
</template>

<script>
import "./assets/iconfont.js"
import config from './config.js'
export default {
  name: "App",
  data () {
    return {}
  },
  created() {
    let skin = localStorage.getItem('skin')
    if(skin) return
    skin = {
      "main": config.layui.navBgColor,
      "logo": config.layui.navBgColor,
      "selected": config.activeTextColor
    }
    localStorage.setItem('skin',JSON.stringify( skin ))
  }
};
</script>

<style lang="less">
@import "./assets/reset.css"; //格式化样式
@import "./assets/iconfont.css"; //全局引入iconfont
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  color: #2c3e50;
}
.iconSvg {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
