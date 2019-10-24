import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const mutations = {
  /**
   * 初始化设置tab 一般默认首页,页面加载时调用
   * @method tabOpendListInit
   */
  setOpenedList(state) {
    const local =
      sessionStorage.pageOpendList &&
      JSON.parse(sessionStorage.pageOpendList).length > 0;
    if (local) {
      state.pageOpendList = JSON.parse(sessionStorage.pageOpendList);
    }
  },
  /**
   * 每次打开页面都会经过此方法，用于合并参数
   * @method setPageOpendList
   */
  setPageOpendList(state, res) {
    const { index, query, params, meta, path } = res;
    let opendPage = state.pageOpendList[index];
    if (params) {
      opendPage.params = params;
    }
    if (query) {
      opendPage.query = query;
    }
    if (meta) {
      opendPage.meta = meta;
    }
    if (path) {
      opendPage.path = path;
    }
    state.pageOpendList.splice(index, 1, opendPage);
    sessionStorage.pageOpendList = JSON.stringify(state.pageOpendList);
  },
  increateTag(state, tag) {
    state.pageOpendList.push(tag);
  },
  /**
   * @param {*} state
   * @param {当前页签信息} obj
   * @param { 当前实例 } obj.vm
   * @param { 路由name} obj.name
   */
  closeOpendList(state, obj) {
    // 临时解决方案 后续再完善
    const lists = state.pageOpendList;
    if (obj.name === "dashboard_index") {
      return;
    }
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].name === obj.name) {
        const lastName = state.pageOpendList[i - 1].name;
        state.pageOpendList.splice(i, 1);
        sessionStorage.setItem(
          "pageOpendList",
          JSON.stringify(state.pageOpendList)
        );
        obj.vm.$router.push({
          name: lastName
        });
      }
    }
  }
};

export default new Vuex.Store({
  state: {
    tsStore: "cjx",
    asideCollapse: false,
    showSkinView: false,
    changeSkin:false,
    pageOpendList: [
      {
        path: "/consoleView",
        name: "consoleView",
        component: () => import("@/views/consoleView/consoleView.vue"),
        meta: {
          title: "首页",
          isTabView: false
        }
      }
    ],
    nowActive: null,//当前活动的对象Id
    nowActiveType: null,//当前活动对象类型
    fontSize: 14,
    fontOpacity:1,
    fontColor: 'rgba(0, 0, 0, 1)',
    fontTextAlign: 'left',
    fontRotate:0,
    fontLineHeight:1.6,
    fontBackground:'rgba(0,0,0,0)',
    fontPadding:0,
    fontWeight:'inherit',
    fontTextDecoration: 'none',
    fontStyle: 'normal',
    fontBorderWidth: 0,
    fontBorderStyle: 'none',
    fontBorderRaduis: 0,
    fontBorderColor : 'rgba(0,0,0,1)',
    fontBoxShadowColor: 'none',
    fontBoxShadowLength:0,
    fontBoxShadowRadius:0,
    fontBoxShadowDirec:0,
    fontTop: 0,
    fontLeft: 0,
    fontzIndex: 1,
    content:'',
    imgConfig:{
      width: 0,
      height: 0,
      imgSrc:'',
      imgBackground:'rgba(0,0,0,0)',
      imgPadding: 0,
      imgRotate:0,
      imgOpacity:1,
      imgBorderStyle: 'none',
      imgBorderColor: 'rgba(0,0,0,1)',
      imgBorderWidth: 0,
      imgBorderRaduis: 0,
      imgBoxShadowColor: 'rgba(0,0,0,1)',
      imgBoxShadowLength: 0,
      imgBoxShadowRadius: 0,
      imgBoxShadowDirec: 0,
      imgTop:0,
      imgLeft: 0,
      zIndex: 1
    },
    pageTemplate:[
      {'textArr':[],'imgList':[],'videoList':[],'bgImg':{type:'',src:'#ffffff'},html:{}}
    ],
    pageMusic:{
      musicSrc:'',
      autoplay:false,
      showMusic: true,
      rotateIcon: true
    },
    pageTemplateIndex:0,
    videoConfig:{
      width: 240,
      height: 180,
      left: 0,
      top: 0,
      autoplay: false,
      src: '/static/video.mp4',
      poster: '/static/img/default.jpg',
      type:'video/mp4',
      zIndex: 1
    },
    nowBottomzIndexType: null,
    nowTopzIndexType: null,
    nowTopId: null,
    nowBottomId: null,
    nowzIndex:1
  },
  mutations,
  actions: {},
  modules: {},
  plugins: []
});
