import { RouteRecordRaw } from 'vue-router';

/**
 * 建议：路由 path 路径与文件夹名称相同，找文件可浏览器地址找，方便定位文件位置
 *
 * 路由meta对象参数说明
 * meta: {
 *      title:          菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 *      isLink：        是否超链接菜单，开启外链条件，`1、isLink: 链接地址不为空 2、isIframe:false`
 *      isHide：        是否隐藏此路由
 *      isKeepAlive：   是否缓存组件状态
 *      isAffix：       是否固定在 tagsView 栏上
 *      isIframe：      是否内嵌窗口，开启条件，`1、isIframe:true 2、isLink：链接地址不为空`
 *      roles：         当前路由权限标识，取角色管理。控制路由显示、隐藏。超级管理员：admin 普通角色：common
 *      icon：          菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * }
 */

// 扩展 RouteMeta 接口
declare module 'vue-router' {
	interface RouteMeta {
		title?: string;
		isLink?: string;
		isHide?: boolean;
		isKeepAlive?: boolean;
		isAffix?: boolean;
		isIframe?: boolean;
		roles?: string[];
		icon?: string;
	}
}

/**
 * 定义动态路由
 * 前端添加路由，请在顶级节点的 `children 数组` 里添加
 * @description 未开启 isRequestRoutes 为 true 时使用（前端控制路由），开启时第一个顶级 children 的路由将被替换成接口请求回来的路由数据
 * @description 各字段请查看 `/@/views/system/menu/component/addMenu.vue 下的 ruleForm`
 * @returns 返回路由菜单数据
 */
export const dynamicRoutes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: '/',
		component: () => import('/@/layout/index.vue'),
		redirect: '/home',
		meta: {
			isKeepAlive: true,
		},
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('/@/views/home/index.vue'),
				meta: {
					title: '首页',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: true,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-shouye',
				},
			},
			// 碳核算管理
			{
				path: '/carbonCalcManage',
				name: 'carbonCalcManage',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/modelManage/accountingModel',
				meta: {
					title: '碳核算管理',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-caidan',
				},
				children: [
					{
						path: '/carbonCalcManage/taskConfig',
						name: 'taskConfig',
						component: () => import('/@/views/carbonCalcManage/taskConfig/index.vue'),
						meta: {
							title: '任务配置',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-caidan',
						},
					},
					{
						path: '/carbonCalcManage/dataReport',
						name: 'dataReport',
						component: () => import('/@/views/carbonCalcManage/dataReport/index.vue'),
						meta: {
							title: '数据上报',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-caidan',
						},
					},
					{
						path: '/carbonCalcManage/CarbonEmissionLedger',
						name: 'CarbonEmissionLedger',
						component: () => import('/@/views/carbonCalcManage/CarbonEmissionLedger/index.vue'),
						meta: {
							title: '碳排台账',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-caidan',
						},
					},
				],
			},
			// 模型管理
			{
				path: '/modelManage',
				name: 'modelManage',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/modelManage/accountingModel',
				meta: {
					title: '核算模型管理',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-caidan',
				},
				children: [
					{
						path: '/modelManage/accountingModel',
						name: 'accountingModel',
						component: () => import('/@/views/modelManage/accountingModel/index.vue'),
						meta: {
							title: '核算模型',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-caidan',
						},
					},
					{
						path: '/modelManage/factorData',
						name: 'factorData',
						component: () => import('/@/views/modelManage/factorData/index.vue'),
						meta: {
							title: '因子数据管理',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-caidan',
						},
					},
					{
						path: '/modelManage/accountingFactor',
						name: 'accountingFactor',
						component: () => import('/@/views/modelManage/accountingFactor/index.vue'),
						meta: {
							title: '核算因子模板',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-caidan',
						},
					},
				],
			},
			//权限管理
			{
				path: '/limits',
				name: 'limits',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/limits/frontEnd',
				meta: {
					title: '权限管理',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-quanxian',
				},
				children: [
					{
						path: '/limits/frontEnd',
						name: 'limitsFrontEnd',
						component: () => import('/@/layout/routerView/parent.vue'),
						redirect: '/limits/frontEnd/page',
						meta: {
							title: '前端控制',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: '',
						},
						children: [
							{
								path: '/limits/frontEnd/page',
								name: 'limitsFrontEndPage',
								component: () => import('/@/views/limits/frontEnd/page/index.vue'),
								meta: {
									title: '页面控制',
									isLink: '',
									isHide: false,
									isKeepAlive: true,
									isAffix: false,
									isIframe: false,
									roles: ['admin', 'common'],
									icon: '',
								},
							},
							{
								path: '/limits/frontEnd/btn',
								name: 'limitsFrontEndBtn',
								component: () => import('/@/views/limits/frontEnd/btn/index.vue'),
								meta: {
									title: '按钮权限',
									isLink: '',
									isHide: false,
									isKeepAlive: true,
									isAffix: false,
									isIframe: false,
									roles: ['admin', 'common'],
									icon: '',
								},
							},
						],
					},
					{
						path: '/limits/backEnd',
						name: 'limitsBackEnd',
						component: () => import('/@/layout/routerView/parent.vue'),
						meta: {
							title: '后端控制',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: '',
						},
						children: [
							{
								path: '/limits/backEnd/page',
								name: 'limitsBackEndEndPage',
								component: () => import('/@/views/limits/backEnd/page/index.vue'),
								meta: {
									title: '页面权限',
									isLink: '',
									isHide: false,
									isKeepAlive: true,
									isAffix: false,
									isIframe: false,
									roles: ['admin', 'common'],
									icon: '',
								},
							},
						],
					},
				],
			},
			// 工具类集合
			{
				path: '/tools',
				name: 'tools',
				component: () => import('/@/views/tools/index.vue'),
				meta: {
					title: '工具类',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-gongju',
				},
			},
		],
	},
];

/**
 * 定义404、401界面
 * @link 参考：https://next.router.vuejs.org/zh/guide/essentials/history-mode.html#netlify
 */
export const notFoundAndNoPower = [
	{
		path: '/:path(.*)*',
		name: 'notFound',
		component: () => import('/@/views/error/404.vue'),
		meta: {
			title: 'message.staticRoutes.notFound',
			isHide: true,
		},
	},
	{
		path: '/401',
		name: 'noPower',
		component: () => import('/@/views/error/401.vue'),
		meta: {
			title: 'message.staticRoutes.noPower',
			isHide: true,
		},
	},
];

/**
 * 定义静态路由（默认路由）
 * 此路由不要动，前端添加路由的话，请在 `dynamicRoutes 数组` 中添加
 * @description 前端控制直接改 dynamicRoutes 中的路由，后端控制不需要修改，请求接口路由数据时，会覆盖 dynamicRoutes 第一个顶级 children 的内容（全屏，不包含 layout 中的路由出口）
 * @returns 返回路由菜单数据
 */
export const staticRoutes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: 'login',
		component: () => import('/@/views/login/index.vue'),
		meta: {
			title: '登录',
		},
	},
	/**
	 * 提示：写在这里的为全屏界面，不建议写在这里
	 * 请写在 `dynamicRoutes` 路由数组中
	 */
];
