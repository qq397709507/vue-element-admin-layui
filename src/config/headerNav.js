//头部 导航栏

const headerNav = [{
			id:'1',
			title:'徐老师',
			url:'',
			icon:'&#xe724;',
			children:[]
		},
		{
			id:'2',
			title:'胡老师',
			url:'',
			icon:'&#xe724;',
			children:[{
					id:'1',
					title:'苏老师',
					url:'',
					icon:'&#xe724;',
					children:[{
						'id':'1',
						'title':'曾老师',
						'url':'哈哈哈'
					}]
				},
			]
		},
		{
			id:'3',
			title:'凉凉',
			url:'',
			icon:'&#xe724;',
			children:[]
		},
		{
			id:'4',
			title:'三生三世',
			url:'',
			icon:'&#xe724;',
			children:[]
		},
	]
	export default {
		headerNav
	}