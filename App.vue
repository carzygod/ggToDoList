<script>
	import utils from './utils/util.js'
	import apis from './utils/api.js'
	
	export default {

		onLaunch: function() {
			this.autoLogin() 
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		
		/**
		 * 🔥预启动逻辑
		 */
		
		methods: {
				// utils export function
				httpRequest(opts) {
					return utils.httpRequest(opts)
				},
				apis() {
					return apis
				},

		
		
				// action function
				autoLogin() {
					let app = this
					// #ifdef MP-WEIXIN
					uni.login({
						success(res) {
							let code = res.code
							uni.request({
								url: apis.wechatLogin,
								method: "POST",
								data: {
									code
								},
								success(res) {
									console.log('autoLogin:', res)
									if (res.data.code == 400) {
										let regInfo = {
											openid: res.data.msg.openid,
											session_key: res.data.msg.session_key
										}
										app.globalData.haslogin = false
										uni.setStorageSync("regInfo", regInfo);
									} else if (res.data.code == 200) {
										app.globalData.haslogin = true
										app.globalData = Object.assign(app.globalData, res.data.data)
										console.log('globaldata:', app.globalData)
										app.getAuthData()
										uni.showToast({
											duration: 1000,
											title: '登录成功',
											icon: 'success'
										})
									} else {
										console.log("自动登录模块出错")
									}
								}
							})
						}
					})
					// #endif
				},
		
		
				
			},
		
			globalData: {
				firstLaunch: true,
				nickname: "未登录",
				token: '',
				debug: false,
				mid: 1,	
				// 触发请求的狗子
				hooks: {
					collection: false,
					address:false,
					order:false,
					history:false
				},
				baseUrl : "http://ddl.sidcloud.cn:10000/api"
			}
		
	}
</script>

<style>

</style>
