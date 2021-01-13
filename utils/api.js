const baseUrl = "https://iot.sidcloud.cn:10000"; 
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
};

export default apis