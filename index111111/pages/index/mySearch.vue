<template>
	<view class="box">
		<!--搜索 -->
		<view class="mySearch">
			<view class="leftbox" @click="back"></view>
			<input type="text" @blur='keydown1' v-model="searchId" :placeholder="placeholder1">
			<p class="qx">取消</p>
		</view>
		<view class="hotSearch">
			<p class="texthotSearch">热门搜索</p>
			<view class="bottombox">
				<ul>
					<li v-for="(item,index) in reList" :key="index" @click='searchClick(item.name)'>{{item.name}}</li>
				</ul>
			</view>
		</view>
		<view class="history">
			<p class="textHistory">历史记录</p>
			<p class="qk" @click='empty'>清空</p>
		</view>
		<view class="re">
			<ul>
				<li v-for="(item,index) in searchArr" :key="index" @click='searchClick(item.name)'>{{item.name}}</li>
			</ul>
		</view>
	</view>
	
</template>

<script>
	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	export default {
		onLoad() {
			this.placeholder1='搜索你想要的内容'
		uni.getStorage({
		    key: 'key',
		    success:  (res) =>{
				this.searchArr=JSON.parse(res.data)
		    }
		});
		},
		setup() {
			const data = reactive({
				searchId:'',//存储输入框的值
				searchArr:[],//存储输入框的数值
				placeholder1:'请输入要搜索的内容',
				reList: [{
						name: 'java'
					},
					{
						name: 'Pathon'
					},
					{
						name: 'Vue.js'
					},
					{
						name: 'React'
					},
					{
						name: 'SpringBoot'
					},
					{
						name: 'ScriptCloud'
					},
				], //存储下拉后的数据
			})
	
			// 点击热门搜索事件
		const searchClick=(item)=>{
			uni.navigateTo({
				url:`/pages/commodityDetails/commodityDetails?user=${item}`
			})
		}
		// 回车键盘事件
		const keydown1=()=>{
	      if(data.searchId=='' || data.searchId=='undefined' || data.searchId==0){
			  uni.showToast({
				  icon:'error',
			  	title:'请输入内容',
				mask:true
			  })
			}else{
				uni.navigateTo({
					url:`/pages/commodityDetails/commodityDetails?user=${data.searchId}`
				})
				data.searchArr.push({name:data.searchId})
					uni.setStorage({
						key:'key',
						data:data.searchArr
					})
			}
			
			
		}
		//清空事件
	 const	empty=()=>{
		 localStorage.removeItem('key')
		 data.searchArr=[]
	 }
			// 路由返回上一级
			const back=()=>{
				uni.navigateBack({});
			}
			return {
				...toRefs(data),
				back,
				searchClick,
				keydown1,
				empty
			}
		}
	}
</script>

<style>
	.textHistory{
		padding-left: 10px;
	}
	.qk{
		padding-right: 10px;
	}
	.history{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	li{
		font-size: 14px;
		list-style: none;
		border: 1px solid #ccc;
		text-align: center;
		border-radius: 6px;
		padding: 5px;
		margin: 0 5px;
		margin-top: 10px;
		display: inline-block;
	}
	ul{
		padding: 0;
		margin: 0;
		width: 100%;
		margin-left: 20px;
	}
	.bottombox{
		width: 100%
	}
	.texthotSearch{
		padding-left: 20px;
		padding-top: 10px;
	}
	.hotSearch{
		width: 100%;
		height: 150px;
	}
	.qx{
		line-height: 50px;
		margin-right: 10px;
	}
	.leftbox{
		margin-top:20px;
		margin-left: 15px;
		width: 10px;
		height: 10px;
		border-left: 2px solid #ccc;
		border-top: 2px solid #ccc;
		transform: rotate(-45deg);
	}
	input{
		background-color: #f5f5f5;
		border-radius: 20px;
		height: 40px;
		width:75%;
		line-height: 40px;
		margin-top: 5px;
		margin-bottom: 5px;
		padding-left: 20px;
		box-sizing: border-box;
	}
	.mySearch{
		border-bottom: 1px solid #f5f5f5;
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		background-color: #fff;
	}
</style>