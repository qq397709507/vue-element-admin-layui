<template>
  <div>
    fgfdg
    <img :src="imgTs" alt="">
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      imgTs:''
    };
  },
  mounted() {
    let tsRes = this.tsts2();
    console.log(tsRes)
  },
  methods: {
    async tsts2() {
      let params = {
        userId: 99225,
        nonce: "99225_1cd8d834137440912763b14bc43ef0bc",
        deviceType: 1
      };
      await this.$http.post("http://baidu.com", params).then(res => {
        console.log('promise1',res)
        this.imgTs = res.img
      });
      //console.log("promiseCJX")
    }
  }
};
</script>

<style scoped>
</style>
