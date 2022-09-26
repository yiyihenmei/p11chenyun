<template>
	<view class="box">
		<!--搜索 -->
		<view class="mySearch">
			<view class="leftbox" @click="back"></view>
			<input type="text" placeholder="搜索你想要的内容">
			<p class="qx">取消</p>
		</view>
		<view class="hotSearch">
			<p class="texthotSearch">热门搜索</p>
			<view class="bottombox">
				<ul>
					<li>Java</li>
					<li>Python</li>
					<li>Vue.js</li>
					<li>React</li>
					<li>SpringBoot</li>
					<li>SpringCloud</li>
				</ul>
			</view>
		</view>
		<view class="history">
			<p class="textHistory">历史记录</p>
			<p class="qk">清空</p>
		</view>
	</view>
	
</template>

<script>
	export default{
		setup(){
			const back=()=>{
				uni.navigateBack({
					delta:1
				})
			}
			return {
				back
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