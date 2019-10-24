<template>
  <div class="tsDragRes" :style="{height:bodyHeight+'px',width:bodyWidth+'px',position: 'fixed',top: 0, left: 0 }">
    <vdr :w="300" :h="200" :parent="true" :min-width="300" :min-height="200" :x="300" :y="100" :handles="['br']" class-name-handle="se-resize-br" :drag-handle="'.drag-handle'"
      class="defaultLayer">
      <div slot="br"><i class="iconfont">&#xe65a;</i></div>
      <div class="drag-handle"><span>标题</span><i class="el-icon-close" @click.stop="closeDialog()"></i></div>
      <div class="layerMain"  @input="inputView">这里是内容</div>
    </vdr>
  </div>
</template>

<script>
  import vdr from 'vue-draggable-resizable-gorkys'
  import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css'
  export default {
    components: {
      vdr
    },
    data: function() {
      return {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        bodyWidth: 0,
        bodyHeight: 0,
        contentHeight:200,
        tsyy:500
      }
    },
    created() {
      this.bodyWidth = document.body.clientWidth
      this.bodyHeight = document.body.clientHeight
    },
    mounted() {
      /* let layerMain = document.getElementsByClassName('layerMain')[0]
      this.contentHeight = layerMain.clientHeight + 50 */
    },
    methods: {
      onResize: function(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
      },
      onDrag: function(x, y) {
        this.x = x
        this.y = y
      },
      closeDialog(e) {
        this.$emit('closeDialog')
      },
      inputView(){
        let layerMain = document.getElementsByClassName('layerMain')[0]
        this.contentHeight = layerMain.clientHeight + 50

      }
    }
  }
</script>
<style lang="less" scoped>
  .se-resize-br i {
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: se-resize;
  }

  .drag-handle {
    position: relative;
    background: #292B34;
    height: 45px;
    color: #FFFFFF;
    cursor: move;
    border-radius: 4px 4px 0 0;
    font-size: 16px;
    line-height: 45px;
    padding: 0 10px;
  }
.layerMain { font-size: 16px; padding: 10px;}
  .defaultLayer {
    border: none;
    border-radius: 4px;
    background: #FFFFFF;
    box-shadow: 0 1px 4px #e1e1e1;
  }

  .drag-handle .el-icon-close {
    position: absolute;
    top: 50%;
    right: 10px;
    font-size: 16px;
    cursor: pointer;
    transform: translateY(-50%);
  }
</style>
