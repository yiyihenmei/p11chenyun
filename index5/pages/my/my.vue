<template>
	<view class="body">
		<view class="bottombox">
		</view>
		<view class="topbox">
			<!-- 登录1 -->
			<view class="leftbox" v-if='flag==false'>
				<image src="../../static/images/meng.jpg" mode=""></image>
				<p class="textLogin" @click="login"> 请登录</p>
			</view>
			<!-- 登录2 -->
			<view class="leftboxx" v-else>
				<image src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" mode=""></image>
				<view class="fp">
					<p class="textLogin1" @click="login2">{{loginsList.userInfo.nickName}}</p>
					<p class='uname'>用户名：{{loginsList.userInfo.username}}</p>
				</view>
			</view>
		    <view class=" jt rightbox"></view>
		</view>
		<view class="box2">
			<view class="boxx1">
				<uni-icons class="textClose" type="email-filled" color='#3f5bbc' size="30"></uni-icons>
				<p class="textdd">我的订单</p>
				<view class="jt jta"></view>
			</view>
			<view class="boxx2">
				<uni-icons class="textClose" type="locked-filled" color='#3f5bbc' size="30"></uni-icons>
				<p class="textdd">我的余额</p>
				<view class="jt jta"></view>
			</view>
			<view class="boxx2">
				<uni-icons class="textClose" type="wallet-filled" color='#3f5bbc' size="30"></uni-icons>
				<p class="textdd">我的学习</p>
				<view class="jt jta"></view>
			</view>
		</view>
		<view class="box3" >
			<view class="boxx1" >
				<uni-icons @click="shezhi" class="textClose" type="gear-filled" color='#3f5bbc' size="30"></uni-icons>
				<p class="textddd" @click="shezhi">设置</p>
				<view class="jt jta"></view>
			</view>
			<view class="boxx2">
				<uni-icons class="textClose" type="sound-filled" color='#3f5bbc' size="30"></uni-icons>
				<p class="textdd"  @click="fk">意见反馈</p>
				<view class="jt jta"></view>
			</view>
		</view>
		<view class="box4" @click="aboutUs">
			<view class="boxx4">
				<uni-icons class="textClose" type="staff-filled" color='#3f5bbc' size="30"></uni-icons>
				<p class="textdd">关于我们</p>
				<view class="jt jta"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import {reactive,toRefs} from 'vue'
	export default{
		setup(){
			const List=reactive({
				loginsList:[],
				flag:0
				
			})
			List.loginsList=JSON.parse(localStorage.getItem('token'))
			JSON.parse(localStorage.getItem('token'))
			console.log(JSON.parse(localStorage.getItem('token')));
			
			if(localStorage.getItem('token')){
				List.flag=true
			}else{
				List.flag=false
			}
			// 设置
			const shezhi=()=>{
				uni.navigateTo({
					url:'./shezhi'
				})
			}
			// 点击登录
			const login=()=>{
				uni.reLaunch({
					url:'./login'
				})
			}
			// 关于我们
			const aboutUs=()=>{
				uni.navigateTo({
					url:'./aboutWe'
				})
			}
			// 意见反馈
			const fk=()=>{
				uni.navigateTo({
					url:'./feedback'
				})
			}
			return {
				login,
				...toRefs(List),
				aboutUs,
				fk,
				shezhi
			}
			
		}
	}
</script>

<style>
	.fp{
		width: 200px;
		float: left;
	}
	.uname{
		color: #ccc;
		padding-left: 10px;
		padding-top: 5px;
		font-size: 14px;
	}
	.leftboxx{
		width: 310px;
	}
	.textLogin1{
		padding-left: 10px;
		padding-top: 35px;
		font-size: 25px;
		font-weight: 600;
	}
	.textClose{
		padding-top: 12px;
		padding-left: 10px;
	}
	.box4{
		height: 124px;
	}
	.box2,.box3,.box4{
		margin-top: 20px;
		background-color: #fff;
	}
	.boxx4{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #ccc;
	}
	.boxx2{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		border-top: 1px solid #ccc;
	}
	.jta{
		margin-top: 20px;
		margin-right: 30px;
	}
	.textdd{
		line-height: 50px;
		margin-left: 20px;
		margin-right: 206px;
	}
	.textddd{
		line-height: 50px;
		margin-left: 20px;
		margin-right: 236px;
	}
	.boxx1{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
	}
	.jt{
		width: 12px;
		height: 12px;
		border-right: 2px solid #ccc;
		border-top: 2px solid #ccc;
		transform: rotate(45deg);
	}
	.rightbox{
		margin-top: 58px;
		margin-right: 30px;
	}
	.leftbox{
		width: 250px;
		display: flex;
	}
	body{
		background-color: #f5f5f5;
		width: 100%;
		height: 100%;
	}
	.textLogin{
		font-size: 25px;
		margin-top: 48px;
		margin-left: 20px;
		font-weight: 600;
	}
	image{
		float: left;
		width: 90px;
		height: 90px;
		margin-top: 20px;
		margin-left: 20px;
		border-radius: 50%;
	}
	.bottombox{
		width: 100%;
		height: 100px;
		background: #3f5bbc;
		
	}
	.topbox{
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		width: 100%;
		height: 130px;
		background-color: #fff;
		border-radius: 25px 25px 0 0 ;
		margin-top: -50px;
		margin-bottom: 10px;
	}
</style>