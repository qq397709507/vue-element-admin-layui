<template>
  <div class="skinView" @click="hideSkinView">
    <transition name="fade">
      <div class="skinBox" @click.stop v-if="ShowFlag">
        <div class="skinBoxTitle">配色方案</div>
        <div class="skinPanle">
          <ul>
            <li class="skinItem" v-for="(item,index) in skinList" @click="selectSkin(item)">
              <div class="skinPanleTop" :style=" item.header ? 'background:'+item.header : ''"></div>
              <div class="skinPanleSide">
                <div class="skinPanleLogo" :style="'background:'+item.logo"></div>
                <div class="skinPanleSideBody" :style="'background:'+item.main"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import skin from '@/config/skin.js'
export default {
  name: '',
  props: {},
  components: {},
  data() {
    return {
      ShowFlag:true,
      skinList:[]
    }
  },
  mounted() {
    this.skinList = skin
  },
  methods: {
    hideSkinView(){
      this.ShowFlag = false
      this.$emit("hideSkinView")
    },
    selectSkin(item){
      localStorage.setItem('skin',JSON.stringify( item ))
      this.$store.state.changeSkin = this.$store.state.changeSkin ? false : true
    }
  }
}
</script>

<style scoped>
  .skinView .fade-leave-active{
    transition:transform 0.5s;
  }
  .skinView .fade-leave-to{
    transform:translateX(315px);
  }
  .skinView{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
    position: fixed;
    top: 0;
    right: 0;
  }
  .skinBox{
    width: 315px;
    height: 100%;
    position: absolute;
    top: 50px;
    right: -315px;
    background: #ffffff;
    box-shadow: 1px 1px 50px rgba(0,0,0,.3);
    animation: ts 0.5s;
    right: 0;
  }
  @keyframes ts{
    0% {right: -315px;}
    100% {right: 0;}
  }
  .skinBoxHide{
    width: 315px;
    height: 100%;
    position: absolute;
    top: 50px;
    right: 0;
    background: #ffffff;
    box-shadow: 1px 1px 50px rgba(0,0,0,.3);
    animation: skinBoxHide 0.5s;
    right: -315px;
  }
  @keyframes skinBoxHide{
    0% {right: 0;}
    100% {right: -315px;}
  }

  .skinBoxTitle{
    font-size: 18px;
    padding: 10px 20px;
    border-bottom: 1px solid #e1e1e1;
    box-sizing: border-box;
  }
  .skinPanle{
    padding: 15px;
  }
  .skinItem{
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 80px;
    height: 50px;
    margin: 0 15px 15px 0;
    background-color: #f2f2f2;
    cursor: pointer;
    font-size: 12px;
    color: #666;
    box-sizing: border-box;
  }
  .skinItem:hover{
    border: 1px solid #42B983;
  }
  .skinPanleTop{
    position: relative;
    z-index: 10;
    height: 10px;
    border-top: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
    background-color: #fff;
    box-sizing: border-box;
  }
  .skinPanleSide{
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 100%;
    z-index: 11;
    box-shadow: 1px 0 2px 0 rgba(0,0,0,.05);
    /* background-color: #20222A; */
    box-sizing: border-box;
  }
  .skinPanleLogo{
    height: 10px;
    box-sizing: border-box;
  }
  .skinPanleSideBody{
    height: 40px;
    box-sizing: border-box;
  }
</style>
