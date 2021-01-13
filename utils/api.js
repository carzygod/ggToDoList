const baseUrl = "https://ddl.sidcloud.cn:10000/api"; 
// const baseUrl = "http://shop.sidcloud.cn:30080/api";
const apis = {
	
	// auth
	unCheckReg:baseUrl+"/auth/unCheckReg",	
	unCheckLogin:baseUrl+"/auth/unCheckLogin",
	
	// user
	userInfo:baseUrl+"/consumer/user/info", //用户信息获取
	// wechat
	wechatInfo:baseUrl+"/wechat/info",
	wechatLogin:baseUrl+"/wechat/login",
	
	//数据接口
	getPhone:baseUrl+"/info/getPhone",
	getList:baseUrl+"{{baseUrl}}/info/getList",
	
};

export default apis