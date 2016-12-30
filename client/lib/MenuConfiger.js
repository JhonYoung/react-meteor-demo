// 菜单
import Homepage from "../layout/Homepage.jsx";
import HistoryOrders from "../component/orders/HistoryOrders.jsx";
import CurrentOrders from "../component/orders/CurrentOrders.jsx";
import ClothesList from "../component/clothes/ClothesList.jsx";
import BarcodeQuery from "../component/clothes/BarcodeQuery.jsx";

let config = {
	MenuConfig: [
		{
			name: "常用导航",
			group: "main",
			roles: "main",
			children: [
				{
					name: "首页", //名字
					roles: "home", //权限
					path: "home", // 路由
					url: "./layout", //相对于main.jsx的路径
					componentName: "Homepage", //组件名称,
					component: Homepage,
					group: "main", //分组
					orders: 1 //排序号
				}
			]

		},
		{
			name: "订单管理",
			group: "orders",
			roles: "main",
			children: [
				{
					name: "当前订单",
					roles: "orders_current",
					url: "./component/orders/",
					component: CurrentOrders,
					componentName: "CurrentOrders",
					orders: 2
				},
				{
					name: "历史订单",
					roles: "orders_history",
					url: "./component/orders/", 
					componentName: "HistoryOrders",
					component: HistoryOrders,
					orders: 3
				}
			]
		},
		{
			name: "库存管理",
			group: "clothes",
			roles: "main",
			children: [
				{
					name: "款式列表",
					roles: "clothes_list",
					url: "./component/clothes/",
					componentName: "ClothesList",
					component: ClothesList,
					orders: 4
				},
				{
					name: "条码查询",
					roles: "barcode_query",
					url: "./component/clothes/",
					componentName: "BarcodeQuery",
					component: BarcodeQuery,
					orders: 5
				}
			]

		}
	]
}

export default config;