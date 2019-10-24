//加载侧边菜单
import asideArr from './config/aside.js'
const aside = asideArr.aside

//加载顶部导航菜单
import headerNavArr from './config/headerNav.js'
const headerNav = headerNavArr.headerNav

//logo图片路径
const logo = "/static/img/logo.png"

import skin from './config/skin.js'

export default {
  logo,
  defaultHeadImg: '/static/img/headImg.png', //默认头像
  layui: {
    navBgColor: '#24262F',
    activeTextColor: '#5FB878'
  },
  element: {
    navBgColor: '#545c64',
    activeTextColor: '#ffd04b',
  },
  aside,
  headerNav,
  skin
}
