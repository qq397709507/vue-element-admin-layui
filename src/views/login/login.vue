<template>
  <div class="loginPgae">
    <div class="loginBox">
      <div class="loginTitleBox">
        <div class="butterfly">
          <div class="wing">
            <div class="bit"></div>
            <div class="bit"></div>
          </div>
          <div class="wing">
            <div class="bit"></div>
            <div class="bit"></div>
          </div>
        </div>
        <div class="shadow"></div>
        <div class="loginTitle">
          <div>Welcome</div>
          <div>蓝望后台管理系统</div>
        </div>
      </div>
      <div class="loginInputBox">
        <div class="loginInput">
          <i class="iconfont leftIcon">&#xe601;</i
          ><input type="text" placeholder="请输入用户名" v-model="userName" /><i
            class="el-icon-error delUserIcon"
            v-show="userName"
            @click="delInput(1)"
          ></i>
        </div>
        <div class="loginInput">
          <i class="iconfont leftIcon">&#xe6b9;</i>
          <input
            :type="inputType"
            placeholder="请输入密码"
            v-model="password"
          />
          <i class="iconfont lookIcon" v-show="password" @click="changeType"
            >&#xe618;</i
          >
          <i
            class="el-icon-error delIcon"
            v-show="password"
            @click="delInput(2)"
          ></i>
        </div>
        <div class="loginCodeBox">
          <i class="iconfont leftIcon">&#xe64e;</i>
          <input type="text" placeholder="请输入验证码" />
          <img src="/static/img/code.png" alt="验证码" class="codeImg" />
        </div>
        <div class="loginTool">
          <el-checkbox>记住密码</el-checkbox>
          <router-link to="index" class="forgetPwd">忘记密码?</router-link>
        </div>
        <div>
          <el-button type="primary" class="loginBtn" @click="login"
            >登　录</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {},
  components: {},
  data() {
    return {
      userName: "",
      password: "",
      inputType: "password"
    };
  },
  mounted() {},
  methods: {
    delInput(type) {
      if (type == 1) this.userName = "";
      if (type == 2) this.password = "";
    },
    changeType() {
      this.inputType = this.inputType == "password" ? "text" : "password";
    },
    login() {
      this.$router.push({ path: "/index" });
    }
  }
};
</script>

<style lang="less" scoped>
  .loginPgae div{font-size: 28px;}
.loginPgae {
  background: url(/static/img/loginBg.jpg) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.loginBox {
  width: 700px;
  height: 400px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  margin: 0 auto;
  transform: translateY(50%);
  display: flex;
}
.loginTitleBox {
  color: #fff;
  font-size: 28px;
  background: lightskyblue;
  border-radius: 10px 0 0 10px;
  width: 45%;
  padding: 20px;
  position: relative;
  background: linear-gradient(to bottom right, #75cfe9, #348bdb);
}
.loginTitle {
  position: absolute;
  bottom: 35%;
}
.loginInput,
.loginCodeBox {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 25px;
}
.lookIcon {
  margin-left: -50px;
  color: #808080;
  cursor: pointer;
}
.delUserIcon {
  margin-left: -20px;
  color: #808080;
  cursor: pointer;
}
.delIcon {
  margin-left: 15px;
  color: #808080;
  cursor: pointer;
}
.loginInput .leftIcon,
.loginCodeBox .leftIcon {
  color: #808080;
  font-size: 18px;
  margin-right: -18px;
  width: 18px;
  height: 40px;
  line-height: 40px;
}
.loginInput input {
  color: #808080;
  background: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 1px solid #d8d8d8;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
  padding-left: 25px;
  width: 90%;
}
.loginInputBox {
  width: 55%;
  background: #fff;
  border-radius: 0 10px 10px 0;
  padding: 40px 20px;
}
.loginCodeBox input {
  background: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 1px solid #d8d8d8;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
  padding-left: 25px;
  width: 50%;
}
.codeImg {
  width: 50%;
  height: 40px;
}
input:focus {
  border-bottom: 1px solid #409eff;
}
.loginTool {
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
}
.forgetPwd {
  font-size: 14px;
  color: #606266;
}
.loginBtn {
  width: 100%;
}

.butterfly {
  -webkit-animation: hover 2500ms cubic-bezier(0.48, 0.01, 0.54, 1) infinite;
  animation: hover 2500ms cubic-bezier(0.48, 0.01, 0.54, 1) infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
  -webkit-animation-fill-mode: reverse;
  animation-fill-mode: reverse;
  position: relative;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: rotateX(50deg) rotateY(20deg) rotateZ(-50deg)
    translateY(0px);
  transform: rotateX(50deg) rotateY(20deg) rotateZ(-50deg) translateY(0px);
  width: 30px;
  top: 10%;
  left: 30%;
}
.butterfly::before {
  background: #362c13;
  border-radius: 50%;
  content: "";
  display: block;
  height: 110px;
  left: 50%;
  margin-left: -10px;
  outline: 1px solid transparent;
  position: absolute;
  top: -15px;
  -webkit-transform: rotatey(100deg);
  transform: rotatey(100deg);
  width: 20px;
  z-index: 2;
}

.shadow {
  -webkit-animation: shadow 250ms cubic-bezier(0.48, 0.01, 0.54, 1) infinite;
  animation: shadow 250ms cubic-bezier(0.48, 0.01, 0.54, 1) infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
  -webkit-animation-fill-mode: reverse;
  animation-fill-mode: reverse;
  background: #000;
  border-radius: 50%;
  display: block;
  height: 10px;
  opacity: 0.1;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-transform: translateX(-40px) translateY(100px);
  transform: translateX(-40px) translateY(100px);
  width: 100px;
  position: absolute;
  top: 18%;
  left: 45%;
}

.wing {
  background: #888;
  display: block;
  opacity: 0.7;
  outline: 1px solid transparent;
  position: absolute;
  top: 0;
}
.wing:first-child {
  -webkit-animation: leftflap 1000ms cubic-bezier(0.48, 0.01, 0.54, 1) infinite;
  animation: leftflap 1000ms cubic-bezier(0.48, 0.01, 0.54, 1) infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
  -webkit-animation-fill-mode: reverse;
  animation-fill-mode: reverse;
  height: 1px;
  left: 0;
  -webkit-transform: rotateY(-20deg);
  transform: rotateY(-20deg);
  -webkit-transform-origin: 700% 50%;
  transform-origin: 700% 50%;
  width: 1px;
  z-index: 3;
}
.wing:last-child {
  -webkit-animation: rightflap 1000ms cubic-bezier(0.48, 0.01, 0.54, 1) infinite;
  animation: rightflap 1000ms cubic-bezier(0.48, 0.01, 0.54, 1) infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
  -webkit-animation-fill-mode: reverse;
  animation-fill-mode: reverse;
  right: 0;
  -webkit-transform: rotateY(200deg);
  transform: rotateY(200deg);
  z-index: 1;
}
.wing .bit {
  background: dodgerblue;
}
.wing .bit::after {
  background: #51a9ff;
}
.wing .bit,
.wing .bit::after {
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-transform-origin: 100% 50%;
  transform-origin: 100% 50%;
}
.wing .bit:first-child {
  height: 70px;
  text-align: center;
  top: 15px;
  -webkit-transform: rotateZ(40deg);
  transform: rotateZ(40deg);
  width: 130px;
}
.wing .bit:first-child::after {
  content: "";
  display: inline-block;
  height: 60px;
  left: -30px;
  top: 5px;
  width: 100px;
}
.wing .bit:last-child {
  height: 55px;
  -webkit-transform: rotateZ(-40deg);
  transform: rotateZ(-40deg);
  width: 100px;
}
.wing .bit:last-child::after {
  content: "";
  display: inline-block;
  height: 45px;
  left: -24px;
  top: 5px;
  width: 60px;
  z-index: 1;
}

@-webkit-keyframes hover {
  0% {
    -webkit-transform: rotateX(50deg) rotateY(20deg) rotateZ(-50deg)
      translateZ(0px);
    transform: rotateX(50deg) rotateY(20deg) rotateZ(-50deg) translateZ(0px);
  }
  100% {
    -webkit-transform: rotateX(50deg) rotateY(20deg) rotateZ(-50deg)
      translateZ(-3px);
    transform: rotateX(50deg) rotateY(20deg) rotateZ(-50deg) translateZ(-3px);
  }
}

@keyframes hover {
  0% {
    -webkit-transform: rotateX(50deg) rotateY(20deg) rotateZ(-50deg)
      translateZ(0px);
    transform: rotateX(50deg) rotateY(20deg) rotateZ(-50deg) translateZ(0px);
  }
  100% {
    -webkit-transform: rotateX(50deg) rotateY(20deg) rotateZ(-50deg)
      translateZ(-3px);
    transform: rotateX(50deg) rotateY(20deg) rotateZ(-50deg) translateZ(-3px);
  }
}
@-webkit-keyframes shadow {
  0% {
    -webkit-transform: translateX(-40px) translateY(100px) scale(1, 1);
    transform: translateX(-40px) translateY(100px) scale(1, 1);
  }
  100% {
    -webkit-transform: translateX(-40px) translateY(100px) scale(1.1, 1.1);
    transform: translateX(-40px) translateY(100px) scale(1.1, 1.1);
  }
}
@keyframes shadow {
  0% {
    -webkit-transform: translateX(-40px) translateY(100px) scale(1, 1);
    transform: translateX(-40px) translateY(100px) scale(1, 1);
  }
  100% {
    -webkit-transform: translateX(-40px) translateY(100px) scale(1.1, 1.1);
    transform: translateX(-40px) translateY(100px) scale(1.1, 1.1);
  }
}
@-webkit-keyframes leftflap {
  0% {
    -webkit-transform: rotateY(-20deg);
    transform: rotateY(-20deg);
  }
  100% {
    -webkit-transform: rotateY(90deg);
    transform: rotateY(90deg);
  }
}
@keyframes leftflap {
  0% {
    -webkit-transform: rotateY(-20deg);
    transform: rotateY(-20deg);
  }
  100% {
    -webkit-transform: rotateY(90deg);
    transform: rotateY(90deg);
  }
}
@-webkit-keyframes rightflap {
  0% {
    -webkit-transform: rotateY(200deg);
    transform: rotateY(200deg);
  }
  100% {
    -webkit-transform: rotateY(90deg);
    transform: rotateY(90deg);
  }
}
@keyframes rightflap {
  0% {
    -webkit-transform: rotateY(200deg);
    transform: rotateY(200deg);
  }
  100% {
    -webkit-transform: rotateY(90deg);
    transform: rotateY(90deg);
  }
}
.twitter {
  background: #4099ff;
  border-radius: 5px;
  bottom: 5px;
  color: #fff;
  font-family: sans-serif;
  font-size: 13px;
  padding: 5px 10px;
  position: absolute;
  right: 5px;
  text-decoration: none;
}
.twitter:hover {
  background: #4fa1ff;
}
</style>
