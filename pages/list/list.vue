<template>
	<view>
				    <view>
				        <uni-fab
				            :pattern="pattern"
				            :content="content"
				            :horizontal="horizontal"
				            :vertical="vertical"
				            :direction="direction"
				            @trigger="trigger"
				        ></uni-fab>
				    </view>
					
					
							<!-- 🔥编辑卡片抽屉 -->
							<tui-drawer mode="top" :visible="editTable" @close="closeEdit">
								<view class="d-container">
								<block v-if="editingItem==null">
								<tui-tag type="white" shape="circle" >新建任务</tui-tag>
								<input class="uni-input" ref="input1" @input="itemToken" placeholder="任务名" />
								<input class="uni-input" ref="input1" @input="itemName" placeholder="任务内容" />
								 <tui-button @click="newAdd()">新增</tui-button>
								 </block>
								  </view>
							</tui-drawer>
							
							
		<!-- 🔥循环重复 -->
		 <block  v-for="(newdata,index) in rowData" :key="index">
		<!-- 🔥卡片开始 -->
		
		<tui-card :image="card.img" :title="newdata.title" :tag="newdata.tag">
			
				<template v-slot:body>
					<view class="tui-default">
						<!-- 🔥卡片body -->
							<tui-tag type="white" shape="circle" >任务内容</tui-tag>
							<tui-tag type="white" shape="circle" >{{newdata.context}}</tui-tag>
								</view>
							</template>
							<template v-slot:footer>
								<view class="tui-default">
									<!-- 🔥卡片底部 -->
									<tui-tag type="white" shape="circle"></tui-tag>
									<tui-button @click='finish(index+"<|>finish")'>任务完成</tui-button>
									<tui-button @click='finish(index+"<|>gg")' type="warning">做不完了</tui-button>
								</view>
							</template>
						</tui-card>
						<!-- 🔥卡片结束 -->
						</block>
	</view>
</template>

<script>
	let app = getApp()

	export default {

		data() {
			return {
				card: {
					img: {
						url: '/static/logo.png'
					},
					title: {
						text: '大物光学'
					},
					tag: {
						text: '还有4小时结束'
					},
					header: {
						bgcolor: '#F7F7F7',
						line: true
					},
					},
					
				rowData:
					[{
						title: {
							text: '大物光学'
						},
						tag: {
							text: '还有4小时结束'
						},
						context:'大雾光学公式，这波不背下来，直接毁天灭地'
					}],
					/**
								 * 🔥悬浮球
								 */
								            horizontal: 'right',
								            vertical: 'bottom',
								            direction: 'vertical',
								            pattern: {
								                color: '#7A7E83',
								                backgroundColor: '#fff',
								                selectedColor: '#007AFF',
								                buttonColor:"#007AFF"
								            },
								            content: [
								                {
								                    iconPath: '/static/logo.png',
								                    selectedIconPath: '/static/logo.png',
								                    text: '新建任务',
								                    active: true
								                }
								            ],
												editTable:false,
				
			}
			
		},
		methods: {
			finish(e){ 
				var data = e.split("<|>");
				var target = data[0];
				var status = data[1];
				uni.request({
				    url:  getApp().globalData.baseUrl+'/info/getList', 
				    data: {
				        //text: 'uni.request'
				    },
				    header: {
				        //'custom-header': 'hello' //自定义请求头信息
				    },
				    success: (res) => {
				    },
							fail:(e)=>{
					uni.showToast({
						title:'网络错误',
						
					})
						}
				});
			},
			initData(){
				/**
				 * 🔥获取先决数据
				 */
				console.log('初始化数据')
									  uni.request({
									      url:  getApp().globalData.baseUrl+'/info/getList', 
									      data: {
									          //text: 'uni.request'
									      },
									      header: {
									          //'custom-header': 'hello' //自定义请求头信息
									      },
									      success: (res) => {
											 
									         console.log(res.data);
											 this.rowData=res.data.data;
											 /**
											  * 🚀重排序组件顺序
											  */
									      },
										  fail:(e)=>{
											  console.log(e);
										  }
									  });
			},
			trigger(e) {
				this.editTable=true;
			},
						closeEdit(){
						this.editTable=false;
						this.editingItem=null;
						},
			
			
			
		},
		onLoad: function(options) {
			this.initData();
		}
	}
</script>

<style>

</style>
