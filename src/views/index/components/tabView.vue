<template>
  <div>
    <!-- <el-tag class="tag-view" v-for="item in tagList" :key="item.id" :class="{ active: item.name === $route.name }"
      @click.native="jump(item)" @close="close(item.name)" :closable="item.name !== 'dashboard_index'">
      {{ item.meta.title }}
    </el-tag> -->
    <div class='tabBox' >
      <template  v-for="(item,index) in tagList">
        <div :class="item.name === $route.name ? 'tabIndex active tabbarActive' : 'tabIndex'" @click="jump(item)" :key="item.id" v-if="index == 0">
          <i class="el-icon-s-home"></i>
        </div>
        <div :class="item.name === $route.name ? 'tabbar active tabbarActive' : 'tabbar'"  @click="jump(item)" :key="item.id" v-else>
          <span>{{item.name}}</span>
          <i class="el-icon-close" @click.stop="close(item.name)"></i>
        </div>
      </template>

    </div>

  </div>
</template>

<script>
  import { delAndResetRouter } from "@/utils/router/delAndResetRouter";
  export default {
    computed: {
      tagList() {
        return this.$store.state.pageOpendList;
      }
    },
    mounted() {
      console.log(this.$store.state.pageOpendList)
    },
    methods: {
      jump(item) {
        const {
          params,
          query
        } = item;
        /**
         * @description
         * 下面四种情况考虑到参数传递的问题，所以单独处理
         */
        if (params) {
          this.$router.push({
            name: item.name,
            params: params
          });
          return;
        }
        if (query) {
          this.$router.push({
            name: item.name,
            query: query
          });
          return;
        }
        if (query && params) {
          this.$router.push({
            name: item.name,
            params: params,
            query: query
          });
          return;
        }
        this.$router.push({
          name: item.name
        });
      },
      close(name) {
        delAndResetRouter(this, name);
      }
    }
  };
</script>

<style lang="less">
  .tag-view-wrap {
    padding: 4px 0;
    border-bottom: 1px solid rgb(230, 230, 230);
  }

  .tag-view {
    cursor: pointer;
    margin: 0 4px;
  }

  .active {
    background-color: #f6f6f6;
    color: #000;
  }

  .el-tag__close {
    color: #fff;
  }

  .tabBox {
    display: flex;
    border-left: 1px solid #e1e1e1;
    border-right: 1px solid #e1e1e1;
    box-sizing: border-box;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    margin-top: -10px;
    color: #666;
    margin-bottom: 10px;
    background: #FFFFFF;
  }
  .tabbar{
    min-width: 0;
    line-height: 44px;
    max-width: 160px;
    text-overflow: ellipsis;
    padding: 0 15px;
    overflow: hidden;
    border-right: 1px solid #f6f6f6;
    vertical-align: top;
    position: relative;
    font-size: 14px;
    padding-right: 40px;
    box-sizing: border-box;
  }
  .tabbar:hover::after , .tabIndex:hover::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    border-radius: 0;
    height: 2px;
    background-color: #292B34;
    animation: tabAnimation 0.3s;
    width: 100%;
  }
  @keyframes tabAnimation{
    0% {width: 0%;}
    100% {width: 100%;}
  }
  .tabIndex{
    min-width: 0;
    line-height: 44px;
    max-width: 160px;
    text-overflow: ellipsis;
    padding: 0 15px;
    overflow: hidden;
    border-right: 1px solid #f6f6f6;
    vertical-align: top;
    position: relative;
    font-size: 20px;
    box-sizing: border-box;
  }
  .tabbar i{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5px;
    font-size: 16px;
  }
  .tabbarActive::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    border-radius: 0;
    background-color: #292B34;
    transition: all .3s;
    width: 100%;
    border: none;
    height: 2px;
    background-color: #292B34;
  }
</style>
