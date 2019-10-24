var Mock = require('mockjs')
var Random = Mock.Random

Mock.mock("http://baidu.com",{
  img:'@dataImage',
  natural:'@natural',
  Color:'@Color',
  'Text|30':"@word",
  Name:'@Name',
  'Web':'@url',
  Address:'@region',
  "paragraph":"@paragraph",
  "cparagraph|2":"@cparagraph"
})

Mock.mock("http://google.com",{
  'img':'@dataImage',
  natural:'@natural',
  Color:'@Color',
  'Text|30':"@word",
  Name:'@Name',
  'Web':'@url',
  Address:'@region',
  "paragraph":"@paragraph",
  "cparagraph|2":"@cparagraph"
})

//侧边导航数据模拟

Mock.mock('http://baidu.com/api/aside',{
  'id|1-100': '',
  'title|4':'@Name',
  url: '@url',

})
Mock.mock('http://img.com',{
  'data|10-100':[{
    'img':'@dataImage'
  }]

})
