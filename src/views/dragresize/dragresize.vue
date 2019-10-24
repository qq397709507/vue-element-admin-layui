<template>
  <div class="canvasBg tsDragRes" style="height: 667px; width: 375px; box-sizing: border-box; border: 1px solid red; position: relative;margin: 40px auto;" >
    <vdr :w="100" :h="100" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
      <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
      X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>
    </vdr>
    <vdr
      :w="200"
      :h="200"
      :parent="true"
      :debug="false"
      :min-width="200"
      :min-height="200"
      :isConflictCheck="true"
      :snap="true"
      :snapTolerance="20"
    >
    <div contenteditable></div>
    </vdr>
  </div>
</template>

<script>
import vdr from 'vue-draggable-resizable-gorkys'
import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css'
export default {
  components: {vdr},
  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    }
  }
}
</script>
<style scoped>
  .canvasBg{
    background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px;
  }
  div.tsDragRes, .tsDragRes div{font-size: 14px;}
</style>
