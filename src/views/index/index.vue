<template>
  <div class="index">
    <!-- 头部导航 -->
    <!-- <index-header></index-header> -->
    <!-- 侧边导航 -->
    <index-aside class="aside"></index-aside>
    <div class="content" :style=" $store.state.asideCollapse ? 'width: calc( 100% - 64px);' : 'width: calc( 100% - 200px);' ">
      <index-nav @refresh="refresh"  @showSkinView="showSkinView" @openNotepaper="dragFlag = true"></index-nav>
      <tab-view></tab-view>
      <keep-alive v-if="refreshFlag">
        <router-view class="contentBg" ></router-view>
      </keep-alive>
    </div>
    <skin-view @hideSkinView="hideSkinView" v-if="indexFlag"></skin-view>
    <index-drag :layerId="dragId" v-if="dragFlag"  @closeDialog="dragFlag = false"></index-drag>
  </div>
</template>

<script>
  import { refreshAddRouter } from '@/utils/router/insertDynaminRouter'
  import indexHeader from "./components/header.vue";
  import indexAside from "./components/aside.vue";
  import indexNav from './components/nav.vue'
  import TabView from './components/tabView.vue'
  import skinView from './components/skinView.vue'
  import indexDrag from '@/views/drag/drag.vue'
  export default {
    name: "",
    props: {},
    components: {
      indexHeader,
      indexAside,
      indexNav,
      TabView,
      skinView,
      indexDrag,
    },
    data() {
      return {
        refreshFlag: true,
        indexFlag: false,
        dragId:0,
        dragFlag:false
      }
    },
    beforeCreate() {
      sessionStorage.removeItem('dynamic')
      refreshAddRouter(this)
      setTimeout(() => {
        this.$store.commit('setOpenedList')
      }, 0)
    },
    mounted() {
      let tsRes = this.tsts2();
    },
    methods: {
      async tsts2() {
        let params = {
          userId: 99225,
          nonce: "99225_1cd8d834137440912763b14bc43ef0bc",
          deviceType: 1
        };
        await this.$http.post("http://baidu.com", params).then(res => {
          //console.log('promise1',res)
        });
      },
      //刷新子模块事件
      refresh(){
        this.refreshFlag = false
        this.$nextTick(()=>{
          this.refreshFlag = true
        })
      },
      //显示换肤组件
      showSkinView(){
        this.indexFlag = true
      },
      //隐藏换肤组件
      hideSkinView(){
        setTimeout(()=>{
          this.indexFlag = false
        },500)
      },
      openNotepaper(){
        this.dragFlag = true
      },
      closeDialog(){
        this.dragFlag = false
        console.log(this.dragFlag)
      }
    }
  };
</script>

<style lang="less" scoped>
  .fade-leave-active{
    transition:transform 50s;
  }
  .fade-leave-to{
    /* transform:translateX(315px); */
  }
  .index {
    height: 100%;
    width: 100%;
  }

  .aside {
    height: 100%;
    display: inline-block;
    vertical-align: top;
  }

  .content {
    display: inline-block;
    height: 100%;
    overflow: auto;
    background: #f8f8f8;
  }
  .contentFull {
    display: inline-block;
    width: calc(100% - 89px);
    height: calc(100% - 85px);
    padding: 10px;
  }
  .contentBg{
    overflow: auto;
    height: calc(100% - 105px );
    font-size: 14px;
  }
  .contentBg /deep/ div{font-size: 14px;}
</style>
